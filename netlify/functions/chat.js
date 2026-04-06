require('dotenv').config();

const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1分钟
const MAX_REQUESTS = 3; // 每分钟最多3次

// ===================== 【新增】敏感词游戏规则配置 =====================
const wordConfig = {
  // A组：触发 诶+嘲讽（8、父、爷 谐音，超50字）
  triggerWords: [
    // 8 系谐音（bā, bá, bǎ, bà）
    '8','八','捌','巴','吧','把','爸','拔','霸','叭','芭','靶','耙','跋','魃','岜','鲅','疤','笆','粑','茇','菝','鲌','灞',
    // 补全 8 系
    '丷','仈','哵','夿','峇','扒','朳','釟','羓','蚆','豝','犮','坺','妭','胈','炦','癹','秡','胉','鼥','叐','弝','垻','坝','罢','欛','䃻','䎱',
    // 父 系谐音（fū, fú, fǔ, fù）
    '父','夫','福','副','服','付','府','复','辅','附','富','肤','扶','斧','俯','孵','蝠','抚','氟','俘','孚','驸','绂','罘','芙','郛','涪','绋','茯','苻','桴','祓','蝮',
    // 补全父系
    '麸','趺','跗','鈇','衧','呋','玞','枎','邞','敷','稃','怤','筟','幅','辐','弗','佛','拂','伏','符','匐','怫','艴','泭','芾','茀','韨','脯','腑','腐','甫','釜','拊','簠','黼','俌','鬴','㕮','郙','腹','覆','负','妇','阜','赴','讣','傅','缚','赙','鲋','馥','鳆','蝜',
    // 爷 系谐音（yē, yé, yě, yè）
    '爷','也','夜','叶','野','耶','冶','椰','页','掖','腋','晔','烨','邺','靥','曳','谒','琊',
    // 补全爷系
    '噎','吔','蠮','㖿','铘','捓','埜','壄','嘢','液','业','咽','饁','㙪','擫','鎑','鄴',
    // 牛逼的英文
    'bug','BUG','Bug','bUg','buG','bUG','bus','BUS','Bus','bUs','buS','bUS','but','BUT','But','bUt','buT','bUT'
  ],

  // B组：末尾豁免（孙、二、er、r 谐音，超20种）
  safeEndWords: [
    // 数字/汉字
    '2','二','贰','儿','尔','耳','而','饵','迩','洱','鸸','鲕','孞','孙','荪','狲','损','笋','隼',
    // 字母强制拦截
    'r','R','er','Er','ER'
  ]
};

// 嘲讽文案库
const tauntList = [
  '诶！'
];

// 敏感词检测主函数
function checkGameTaunt(inputText) {
  if (!inputText) return null;
  const text = inputText.trim();

  // 判断是否以安全字结尾
  const isSafeEnd = wordConfig.safeEndWords.some(word => text.endsWith(word));
  // 判断是否包含禁词
  const hasTrigger = wordConfig.triggerWords.some(word => text.includes(word));

  // 规则：包含禁词 + 不是安全结尾 → 直接嘲讽
  if (hasTrigger && !isSafeEnd) {
    const randomOne = tauntList[Math.floor(Math.random() * tauntList.length)];
    return randomOne;
  }

  // 不触发
  return null;
}

// ===================== 原有逻辑优化：游戏不扣限流次数 =====================
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { question, context } = JSON.parse(event.body);

    // ===================== 【优先】敏感词检测：触发直接返回，不扣次数 =====================
    const tauntResult = checkGameTaunt(question);
    if (tauntResult) {
      return {
        statusCode: 200,
        body: JSON.stringify({ answer: tauntResult })
      };
    }
    // ==================================================================================

    // ===================== 【仅AI请求】执行限流计数 =====================
    const clientIp = event.headers['x-nf-client-connection-ip'] || 'unknown';
    const now = Date.now();
    const userData = rateLimit.get(clientIp) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

    if (now > userData.resetTime) {
      userData.count = 1;
      userData.resetTime = now + RATE_LIMIT_WINDOW;
    } else {
      userData.count += 1;
    }
    rateLimit.set(clientIp, userData);

    if (userData.count > MAX_REQUESTS) {
      return {
        statusCode: 429,
        body: JSON.stringify({ error: '请求过于频繁，请1分钟后再试' })
      };
    }
    // ==================================================================

    // 正常调用AI接口逻辑
    const apiKey = process.env.DEEPSEEK_API_KEY;

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        stream: false,
        messages: [
          {
            role: "system",
            content: `你是博客AI助手，只根据上下文回答：\n${context}`
          },
          { role: "user", content: question }
        ]
      })
    });

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || '无法回答';

    return {
      statusCode: 200,
      body: JSON.stringify({ answer })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};