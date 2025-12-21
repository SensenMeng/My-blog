---
title: 线性代数第六章报告
author: 孟祥杭
description: "对第六章知识点的回顾整理，概念的拓展，以及一些应用"
image:
    url: https://www.bing.com/images/search?view=detailV2&ccid=FHtgZLRL&id=7133DFA62728D1234B16340F6F51AA9910593F20&thid=OIP.FHtgZLRLIwa8DJgBf9LzfwHaJ7&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.147b6064b44b2306bc0c98017fd2f37f%3frik%3dID9ZEJmqUW8PNA%26riu%3dhttp%253a%252f%252fabook.hep.com.cn%252fICourseFiles%252fMaterialsLibCovers%252fb8f2b110f3a94364a702d9189328a9b0.f4b4e4bb6d0547fa90ec6cfa8abc3123.cms%252f58ef3217c4404d6898e95357dd66e0b6.jpg%26ehk%3dJxc2p94Jqiie3fpxaJb4jtzB4L7Gxs6bcC96LA3%252f5Us%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1500&expw=1118&q=%e7%ba%bf%e6%80%a7%e4%bb%a3%e6%95%b0%e4%b8%8e%e8%a7%a3%e6%9e%90%e5%87%a0%e4%bd%95&FORM=IRPRST&ck=841CB9E92BC259D0B03276AC8B8799C0&selectedIndex=2&itb=0
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2025-12-19
tags: ["线性代数", "特征值与特征向量", "实践与应用"]
---

# 线性代数第六章——特征值与特征向量
##### 人智2502 孟祥杭

---

## 前言

与线性变换鏖战许久，你是否曾想过，有没有这么一种变换，不改变向量的方向，但可能会改变向量的大小。这时，你不由自主地写下 $A\mathbf{x} = \lambda \mathbf{x}$。恭喜你，你打开了线性代数第六章的潘多拉魔盒——特征值与特征向量。

---

## 知识点梳理

> 写下 $A\mathbf{x} = \lambda \mathbf{x}$ 这一公式后，不妨给里面的东西起些名字嘞

**定义6.1.1（特征值与特征向量）** 设 $A=(a_{ij})_{n \times n}$ 是一个 $n$ 阶矩阵，如果有一个复数 $\lambda$ 及一个 $n$ 维非零列向量 $\boldsymbol{x}=(x_1,\cdots,x_n)^{\mathrm{T}} \in \mathbb{C}^n$，使得

$$
A\boldsymbol{x} = \lambda \boldsymbol{x} \tag{6.1.1}
$$

或

$$
(\lambda I - A)\boldsymbol{x} = \boldsymbol{0}, \tag{6.1.2}
$$

则称 $\lambda$ 为矩阵 $A$ 的一个**特征值**，称非零列向量 $\boldsymbol{x}$ 为 $A$ 的对应于(或属于)特征值 $\lambda$ 的**特征向量**。

> 啊，那问题来了，我想算这个 $\lambda$ 和 $\boldsymbol{x}$ 怎么办呢？

不难看出，式(6.1.2)对计算这两个东西更便利些。还记得吗，我们齐次线性方程组的非零解问题？没错，只要让 $\lambda I - A$ 的行列式值为零，就可以求出来 $\lambda$，从而进一步求解 $\boldsymbol{x}$。

> 要是有重复解咋办...？

**特征值的相关性质**
1. $A$ 的特征值是其特征方程的根；
2. 由代数基本定理，$n$ 阶矩阵 $A$ 在复数范围内有 $n$ 个特征值（重根按重数计算）；
3. 若 $\lambda_i$ 是特征方程的 $k$ 重根，则称 $\lambda_i$ 为 $A$ 的 $k$ 重特征值（$k=1$ 时称为**单特征值**），$k$ 称为 $\lambda_i$ 的**代数重数**。

> 解出来的 $\boldsymbol{x}$ 有互相有什么关系呢？

**定义 6.1.2 (特征方程、特征多项式与特征空间)**
- 称关于 $\lambda$ 的一元 $n$ 次代数方程（6.1.3）或（6.1.4）为矩阵 $A$ 的**特征方程**；
- 称一元 $n$ 次多项式 $f(\lambda) = \det(\lambda I - A)$ 为 $A$ 的**特征多项式**；
- 若 $\lambda$ 为 $A$ 的特征值，则称齐次线性方程组（6.1.2）的解空间为 $\lambda$ 的**特征空间**，记为 $V_\lambda$。

**特征向量与特征空间的关系**
- $A$ 对应于 $\lambda_i$ 的特征向量是齐次线性方程组

$$
(\lambda_i I - A)\boldsymbol{x} = \boldsymbol{0} \tag{6.1.5}
$$

的非零解；

- 求对应于 $\lambda_i$ 的全部特征向量，需先求方程组（6.1.5）的基础解系（即 $V_{\lambda_i}$ 的基），再从通解中除去零向量；
- 称 $V_{\lambda_i}$ 的维数（即方程组（6.1.5）基础解系的向量个数）为 $\lambda_i$ 的**几何重数**，它是对应于 $\lambda_i$ 的线性无关特征向量的最大个数。

> 代数重数和几何重数有什么关系吗？

这里先卖个关子，后面再说。

综上可知,求 $n$ 阶矩阵 $A$ 的特征值与特征向量的**一般步骤**是:

1. 求出特征方程 $\det(\lambda I - A) = 0$ 的全部根 $\lambda_1, \lambda_2, \cdots, \lambda_n$，则 $\lambda_1, \lambda_2, \cdots, \lambda_n$ 就是 $A$ 的全部特征值。

2. 对于 $A$ 的特征值 $\lambda_i$，求出齐次线性方程组的基础解系

$$
\boldsymbol{\xi}_{i1}, \boldsymbol{\xi}_{i2}, \cdots, \boldsymbol{\xi}_{ik_i}
$$

则 $A$ 的属于特征值 $\lambda_i$ 的全部特征向量为

$$
\boldsymbol{x} = c_1 \boldsymbol{\xi}_{i1} + c_2 \boldsymbol{\xi}_{i2} + \cdots + c_{k_i} \boldsymbol{\xi}_{ik_i}
$$

（其中, $c_1, c_2, \cdots, c_{k_i}$ 是不全为零的任意常数。）

> 同一特征值下的特征向量唯一吗？

矩阵 $A$ 的属于特征值 $\lambda_i$ 的特征向量是齐次线性方程组的**非零解**（应特别注意特征向量是非零列向量）。利用齐次线性方程组解的性质可知：

- 如果 $\boldsymbol{x}_1, \boldsymbol{x}_2$ 都是属于 $\lambda_i$ 的特征向量，则当 $\boldsymbol{x}_1 + \boldsymbol{x}_2 \neq \boldsymbol{0}$ 时，$\boldsymbol{x}_1 + \boldsymbol{x}_2$ 也是属于 $\lambda_i$ 的特征向量；
- 当 $k\boldsymbol{x}_1 \neq \boldsymbol{0}$ 时（$k$ 为常数），$k\boldsymbol{x}_1$ 也是属于 $\lambda_i$ 的特征向量。

一般地，如果 $\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_m$ 都是属于特征值 $\lambda_i$ 的特征向量，$c_1, c_2, \cdots, c_m$ 为任意常数，则当 $c_1\boldsymbol{x}_1 + c_2\boldsymbol{x}_2 + \cdots + c_m\boldsymbol{x}_m \neq \boldsymbol{0}$ 时，$c_1\boldsymbol{x}_1 + c_2\boldsymbol{x}_2 + \cdots + c_m\boldsymbol{x}_m$ 也仍是属于 $\lambda_i$ 的特征向量。**可见，属于同一特征值 $\lambda_i$ 的特征向量不是唯一的。**

> 学完了概念，求解方法，那么接下来该什么了呢？

没错！是性质！

**性质 6.1.1** 设 $n$ 阶矩阵 $\boldsymbol{A} = (a_{ij})_{n \times n}$ 的全部特征值为 $\lambda_1, \lambda_2, \cdots, \lambda_n$，则有

1. $\lambda_1 \lambda_2 \cdots \lambda_n = \det(\boldsymbol{A})$
2. $\lambda_1 + \lambda_2 + \cdots + \lambda_n = a_{11} + a_{22} + \cdots + a_{nn}$.

> 这个性质神奇且诡异

**性质 6.1.2** 设 $\lambda$ 为矩阵 $\boldsymbol{A}$ 的一个特征值且 $\boldsymbol{x}$ 为对应的一个特征向量，则

1. 对任何正整数 $m$，$\lambda^m$ 为矩阵 $\boldsymbol{A}^m$ 的一个特征值且 $\boldsymbol{x}$ 为对应的一个特征向量；
2. 对任何多项式 $f(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_1 x + a_0$，$f(\lambda)$ 为矩阵 $f(\boldsymbol{A}) = a_m \boldsymbol{A}^m + a_{m-1} \boldsymbol{A}^{m-1} + \cdots + a_1 \boldsymbol{A} + a_0 \boldsymbol{I}$ 的一个特征值且 $\boldsymbol{x}$ 为对应的一个特征向量.

**性质 6.1.3** 设 $\lambda$ 为 $n$ 阶可逆矩阵 $\boldsymbol{A}$ 的一个特征值，则 $\lambda \neq 0$，且 $\frac{1}{\lambda}$ 为 $\boldsymbol{A}^{-1}$ 的一个特征值，$\frac{\det(\boldsymbol{A})}{\lambda}$ 为 $\boldsymbol{A}$ 的伴随矩阵 $\boldsymbol{A}^*$ 的一个特征值.

> 与我们前面学的可逆矩阵产生联系了喔！

**性质 6.1.4** 设 $\lambda_1, \lambda_2, \cdots, \lambda_m$ 为矩阵 $\boldsymbol{A}$ 的互不相同的特征值，$\boldsymbol{x}_i$ 为 $\boldsymbol{A}$ 的属于特征值 $\lambda_i$ 的特征向量 $(i = 1, 2, \cdots, m)$，则 $\boldsymbol{x}_1, \boldsymbol{x}_2, \cdots, \boldsymbol{x}_m$ 线性无关，即属于互不相同特征值的特征向量线性无关.

**性质 6.1.4'** 设 $\lambda_1, \lambda_2, \cdots, \lambda_m$ 是矩阵 $\boldsymbol{A}$ 的互不相同的特征值，$\boldsymbol{\alpha}_{i1}, \boldsymbol{\alpha}_{i2}, \cdots, \boldsymbol{\alpha}_{ik_i}$ 为属于 $\lambda_i$ 的一组线性无关特征向量 $(i = 1, 2, \cdots, m)$，则向量组

$$
\boldsymbol{\alpha}_{11}, \boldsymbol{\alpha}_{12}, \cdots, \boldsymbol{\alpha}_{1k_1}; \boldsymbol{\alpha}_{21}, \boldsymbol{\alpha}_{22}, \cdots, \boldsymbol{\alpha}_{2k_2}; \cdots; \boldsymbol{\alpha}_{m1}, \boldsymbol{\alpha}_{m2}, \cdots, \boldsymbol{\alpha}_{mk_m} \tag{6.1.14}
$$

线性无关.

> 这个性质在高数求微分方程中说明，不同特征值下的解函数是线性无关的，可以直接当做基使用

**性质 6.1.5**
矩阵 $\boldsymbol{A}$ 的任何特征值的几何重数不大于其代数重数.

> 这个性质最短，但是最震撼，至于为什么，依旧留作悬念，后面再说

哎？你还记得本书最后一个定理吗？就是你刚刚学的那个！

**定理8.2.5** 设 $T \in L(V)$，$B = \{\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n\}$ 和 $B' = \{\boldsymbol{\beta}_1, \dots, \boldsymbol{\beta}_n\}$ 是 $V$ 的两个不同基，$T$ 在 $B, B'$ 下的矩阵分别为 $A$ 和 $D$，且知 $B$ 到 $B'$ 的过渡矩阵为 $C$，则

$$
C^{-1}AC = D
$$

即线性算子 $T$ 在不同基下的矩阵是相似的。

当时的你一定疑惑过：

> 啥是矩阵相似啊？

现在他来了！

**定义6.2.1（相似矩阵）** 设 $A,B$ 都是 $n$ 阶矩阵，如果存在一个 $n$ 阶可逆矩阵 $P$，使得

$$
P^{-1}AP = B
$$

则称 $A$ 相似于 $B$，或 $A$ 与 $B$ 相似，记作 $A \sim B$。并称由 $A$ 到 $B=P^{-1}AP$ 的变换为一个相似变换。如果 $A$ 与一个对角矩阵相似，则称 $A$ 可相似对角化，简称为 $A$ 可对角化。

根据定义，矩阵相似是矩阵之间的一种关系，这种关系显然具有下列简单性质：
1. **自反性**：$A \sim A$；
2. **对称性**：若 $A \sim B$，则 $B \sim A$；
3. **传递性**：若 $A \sim B, B \sim C$，则 $A \sim C$。

> 和我们学过的平行，矩阵等价有相似之处！

由此可知，$n$ 阶矩阵按照"相似"可以进行分类，彼此相似的一些矩阵构成一个"等价类"。那么，每个等价类中的矩阵都有哪些共同性质？或者说，**相似变换中保留了矩阵的哪些量不变**？我们有

**定理6.2.1** 设 $n$ 阶矩阵 $A$ 与 $B$ 相似，则

1. $\det(A) = \det(B)$；
2. $r(A) = r(B)$。特别当 $A$ 与 $B$ 都可逆时，$A^{-1}$ 与 $B^{-1}$ 也相似；
3. $A$ 与 $B$ 有相同的特征多项式（从而有相同的特征值）。

> 就像矩阵的秩一样，他们在保持默默的永恒！

> 所有矩阵都可对角化吗？

所有矩阵都有特征值和特征向量，这是对的，因为你的 $n$ 次方程肯定有 $n$ 个解（无论是不是实数解）。

但是到可对角化这边，就有点尴尬了，他并没有那么公平...

**定理6.2.2（矩阵可对角化的充要条件）** $n$ 阶矩阵 $A$ 可对角化的充要条件是 $A$ 有 $n$ 个线性无关的特征向量。

**证 必要性** 设有可逆矩阵 $P$，使

$$
P^{-1}AP = \begin{bmatrix}
\lambda_1 &&& \\
&\lambda_2 && \\
&&\ddots& \\
&&&\lambda_n
\end{bmatrix} \stackrel{\text{记为}}{=} D, \tag{6.2.1}
$$

设 $P$ 按列分块为

$$
P = \begin{bmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n \end{bmatrix}, \tag{6.2.2}
$$

则 $\boldsymbol{x}_1, \boldsymbol{x}_2, \dots, \boldsymbol{x}_n$ 线性无关，且由 (6.2.1) 式得 $AP = PD$，即

$$
A\begin{bmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n \end{bmatrix} = \begin{bmatrix} \boldsymbol{x}_1 & \boldsymbol{x}_2 & \cdots & \boldsymbol{x}_n \end{bmatrix}\begin{bmatrix}
\lambda_1 &&& \\
&\lambda_2 && \\
&&\ddots& \\
&&&\lambda_n
\end{bmatrix}, \tag{6.2.3}
$$

亦即

$$
\begin{bmatrix} A\boldsymbol{x}_1 & A\boldsymbol{x}_2 & \cdots & A\boldsymbol{x}_n \end{bmatrix} = \begin{bmatrix} \lambda_1\boldsymbol{x}_1 & \lambda_2\boldsymbol{x}_2 & \cdots & \lambda_n\boldsymbol{x}_n \end{bmatrix}
$$

或

$$
A\boldsymbol{x}_i = \lambda_i \boldsymbol{x}_i, \quad i = 1,2,\dots,n. \tag{6.2.4}
$$

因 $\boldsymbol{x}_i \neq \boldsymbol{0}$，故 $\lambda_i$ 为 $A$ 的特征值，$\boldsymbol{x}_i$ 为对应于 $\lambda_i$ 的特征向量 $(i=1,2,\dots,n)$。所以 $A$ 有 $n$ 个线性无关的特征向量 $\boldsymbol{x}_1, \boldsymbol{x}_2, \dots, \boldsymbol{x}_n$。

将以上证明倒推上去，就是充分性的证明。■

从定理6.2.2的证明中我们看到，当矩阵 $A$ 与对角矩阵 $D$ 相似时，使得 $P^{-1}AP=D$ 的**可逆矩阵 $P$ 的第 $j$ 列 $\boldsymbol{x}_j$ 就是 $A$ 的对应于特征值 $\lambda_j$ 的特征向量** $(j=1,\dots,n)$。因此，当 $A$ 可对角化时，欲求使得 (6.2.1) 式成立的对角矩阵 $D$ 及可逆矩阵 $P$，也就是求 $A$ 的全部特征值及 $A$ 的 $n$ 个线性无关的特征向量。

> 哎？一个特征值下的特征向量不是可以随便由他的无关特征向量组合吗？无论怎么组合都满足这个结论吗？还是说有什么标准？

没什么标准，无论怎么组合都符合这个结论，不信你可以自己试试哦~

**推论6.2.1（矩阵可对角化的一个充分条件）**
若 $n$ 阶矩阵 $A$ 的 $n$ 个特征值互不相同（即 $A$ 的特征值都是单特征值），则 $A$ 必与对角矩阵相似。

**推论6.2.2（矩阵可对角化的充要条件）**
$n$ 阶矩阵 $A$ 可对角化的充要条件是 $A$ 的每个特征值的几何重数都等于它的代数重数。

> 毫无疑问，这个推论才是最本质，最重量级的

有这么一个矩阵，他很特殊，关于主对角线对称，还都是实数——实对称矩阵。

**性质6.2.1** 实对称矩阵的特征值都是实数。

**性质6.2.2** 设 $\lambda_1, \lambda_2$ 是实对称矩阵 $A$ 的相异特征值，$\boldsymbol{x}_1$ 和 $\boldsymbol{x}_2$ 分别是与 $\lambda_1$ 和 $\lambda_2$ 对应的特征向量，则 $\boldsymbol{x}_1$ 与 $\boldsymbol{x}_2$ 正交。

> 注意，是两个特征值对应的特征向量正交，至于一个特征向量，不一定

**定理6.2.3** 设 $A$ 为 $n$ 阶实对称矩阵，则必存在 $n$ 阶正交矩阵 $P$，使得

$$
P^{-1}AP = P^{\mathrm{T}}AP = \mathrm{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)
$$

为对角矩阵。

> 这是真大佬了，不仅一定能对角化，$P$ 还特别硬！

**推论6.2.3** 对于实对称矩阵 $A$ 的每个特征值 $\lambda$，$\lambda$ 的几何重数正好等于它的代数重数。

> 这一点倒是不难理解，每个实对称矩阵都可对角化嘛~

**实对称矩阵正交相似对角化的计算步骤** 
综合以上对实对称矩阵 $A_{n \times n}$ 的讨论，求正交矩阵 $P$ 使得 $P^{-1}AP = P^{\mathrm{T}}AP$ 为对角矩阵的步骤如下：

1. **求特征值**：求出 $A$ 的全部特征值 $\lambda_1, \lambda_2, \dots, \lambda_n$；
2. **求基础解系**：对 $A$ 的每个特征值 $\lambda_i$，求出方程组 $(\lambda_i I - A)\boldsymbol{x} = \boldsymbol{0}$ 的一个基础解系（即特征空间 $V_{\lambda_i}$ 的一个基）；
3. **标准正交化**：对每个特征值 $\lambda_i$，利用Gram-Schmidt正交化方法将 $V_{\lambda_i}$ 的基先正交化、再单位化（若 $\lambda_i$ 是单特征值或基已是正交向量组，只需单位化），得到 $V_{\lambda_i}$ 的标准正交基；将所有特征空间的标准正交基合并，得到 $A$ 的 $n$ 个标准正交的特征向量 $\boldsymbol{e}_1, \boldsymbol{e}_2, \dots, \boldsymbol{e}_n$；
4. **构造正交矩阵**：令矩阵 $P = \begin{bmatrix} \boldsymbol{e}_1 & \boldsymbol{e}_2 & \cdots & \boldsymbol{e}_n \end{bmatrix}$，则 $P$ 为正交矩阵，且有

$$
P^{-1}AP = P^{\mathrm{T}}AP = \mathrm{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)
$$

其中 $P$ 的第 $j$ 列 $\boldsymbol{e}_j$ 是属于特征值 $\lambda_j$ 的特征向量 $(j=1,2,\dots,n)$。

以上过程称为 $n$ 阶实对称矩阵 $A$ 的**正交相似对角化过程**，关键在于求出 $A$ 的 $n$ 个标准正交的特征向量。

- 恭喜你，看完了这一章所有的知识点，接下来让我们干点有意思的！

---

## 导引性问题

**第六章-问题1：特征值和特征向量反应了矩阵的什么"特征"？解释了矩阵的哪些本质特性？**

我们常说一个人很有特点，一个事物很有特点，是想说这个人，这个东西有一些**独一无二**的地方。对于矩阵也一样，我们既然要用"特征"二字，定是因为特征值和特征向量能说明矩阵的一些独有的东西。你肯定还记得矩阵的秩，这能在某种程度上反应矩阵的特征，但远远不够具体。

还记得我们前言里对特征值和特征向量的初印象吗？没错，就是"**有没有这么一种变换，不改变向量的方向，但可能会改变向量的大小**"

好巧不巧，这恰恰就是矩阵的"特征"！

它揭示了：

1. 对应线性变换的"**核心作用方向**"和"**强度**"
   - 不改变方向，只改变大小，本身就能反应矩阵变换的方向与强度

2. 矩阵的"**可对角化**"与**简化计算**
   - 如果一个 $n \times n$ 矩阵 $A$ 有 $n$ 个线性无关的特征向量，那么它可以被对角化（定理6.2.2）
   - 被对角化意味着能大大简化计算，尤其是当对角矩阵幂次较高的时候（习题6.2（A）T11）

3. 矩阵的"**稳定性**"和"**长期行为**"
   - 在动力系统、马尔可夫链等领域，特征值决定了系统的长期演化行为。
     - **最大特征值（主特征值）** 通常决定了系统的长期趋势。对应的特征向量代表了系统的稳态或最终分布。
     - **所有特征值的模（绝对值）** 决定了系统是否稳定。
     - 如果**所有** $|\lambda| < 1$，系统是稳定的（最终会趋于平静）。
     - 如果**任何一个** $|\lambda| > 1$，系统是不稳定的（某些分量会无限增长）。

4. 矩阵的"**奇异性**"和"**可逆性**"
   - 一个矩阵是**奇异**（不可逆）的，当且仅当它**至少有一个特征值为 $0$**。（性质6.1.1）
   - 因为特征值 $0$ 意味着存在**一个特征向量被压缩到了零向量**，这正好是奇异的定义。

5. 矩阵的"**迹**"和"**行列式**"
   - 特征值将矩阵的两个全局标量（迹和行列式）与自身的局部性质联系了起来：
     - **矩阵的迹（主对角线元素之和） = 所有特征值之和**。（性质6.1.1）
     - **矩阵的行列式 = 所有特征值之积**。（性质6.1.1）
   - 这说明了行列式代表变换的"体积缩放比"，因为这个缩放比正是所有主轴方向缩放倍数（即特征值）的乘积。

**第六章-问题2：深度学习中的"特征"与线性代数中的"特征值和特征向量"有何联系与区别？**

**核心区别：定义与角色**

| 方面 | 深度学习特征 | 线性代数特征值/向量 |
|------|--------------|---------------------|
| **定义** | 数据学习到的抽象表示 | 满足 $Ax = \lambda x$ 的向量和标量 |
| **本质** | 数据的编码表达 | 矩阵的固有属性 |
| **意义** | 层次化抽象、任务驱动 | 揭示变换本质、矩阵分析 |
| **计算** | 非线性变换学习 | 求解线性方程 |
| **依赖** | 依赖数据和模型 | 只依赖矩阵本身 |

- 从上面表格对比中不难发现，虽然都有"特征"二字，但两者有很大的区别！

而至于这两者有什么联系，那就得抽象到哲学层面上了，即
- 它们共享"从复杂系统中**提取核心、不变成分**"的哲学思想

谈到这里，我惊然发现，其实线代的学习历程，就是一条**寻找本质的道路**：我们从学会解方程组出发，发现了一个方程组的本质——矩阵，再发现矩阵的本质——秩，然后我们又学习了线性变换，接着又是线性变换的本质——特征值与特征向量。

或许这就是为什么，法国数学硕士毕业证书上印的是哲学系而不是数学系的原因吧！

**第六章-问题3：相似矩阵为什么共享特征值？为什么想把一个矩阵相似对角化？为什么实对称矩阵一定可以正交相似对角化？**

还记得上面提到的"本书最后一个定理"吗，相似矩阵代表同一个线性变换在不同基下的坐标表示。**流水的坐标，铁打的特征值**。坐标是表面的，特征值是本质的。特征值是矩阵变换固有的、不依赖于坐标选择的属性。

至于为什么要把一个矩阵相似对角化，上面已经提到过了，就是**简化运算**，尤其是在幂次比较高的时候。好好做课后习题的同学们一定深有体会！

实对称矩阵一定可以正交相似对角化，这个大家也是心知肚明。但是，这么强的性质，究竟源自什么呢？

你还记得定理6.2.1和定理6.2.2吗，没错，就源自于这两个性质——**特征值都是实数，不同特征值的特征向量正交**。

由于这俩性质，对于一个实对称矩阵，即使有重根，我们也总是能通过**施密特正交化**过程，为每个特征值挑选出一组标准正交的特征向量基。

**不得不说这个课本的编者相当有水平哦！**

**第六章-问题4：为什么把特征值和特征向量与相似矩阵放在同一章？尝试讨论两者之间的联系？**

答案很简单：为了**寻找本质**。

《线性代数与解析几何》的学习过程，就是一个不断**寻找本质**的过程。把这俩放在一起，也是为了让我们更好的发现本质。

相似矩阵，变的是坐标，不变的是共享的特征值（问题3）。

更深一点的思考是，寻找本质的过程也是一个**简化**的过程。我们想简化矩阵（相似对角化），然后发现特征值和特征向量**揭示了变换内核**，而且它们在相似变换下**保持某种不变性**，最后我们通过构造基变换矩阵 $P$，使用特征值来构造最简对角矩阵 $D$，从而完美地实现了矩阵的对角化！

这是：**提出问题 -> 发现工具 -> 解决问题** 的一条完美逻辑链~

**第六章-问题5：为什么代数重数一定大于等于几何重数？**

哦！妈呀，终于到这个问题了，我期待已久，相信你也期待已久！

你应该还记得初中物理计算机械效率的题，机械效率的公式是

$$
\eta = \frac{W_{\text{有用}}}{W_{\text{总}}} \times 100\%
$$

你的初中物理老师告诉你，这个数字目前是达不到 $100\%$ 的，因为不可避免有一点点能量损失。

这背后反映的是，**理论与现实的残酷差距**。

在这里，**代数重数是理论，几何重数便是现实**。

代数重数告诉你，理论上我们能张成一个 $n$ 维空间，但到几何重数这里，可能就到不了 $n$ 维，可能会 $n-1$，甚至更少的维度。

从哲学的角度思考数学，总能有意想不到的收获。

---

## 研究专题用例

**第6章 - 专题1：图像处理：降维与特征提取**

**目标**： 使用主成分分析(PCA)对图像数据进行降维与特征提取，评估不同主成分数量对图像重建质量的影响。 

**关键问题**： 
1. 特征值分析：协方差矩阵的特征值分布如何反映图像信息的集中程度？ 
2. 重建误差：保留前 $k$ 个主成分时，重建图像的均方误差（MSE）与视觉效果有何变化？

**1. 项目概述**

PCA（主成分分析）是一种无监督的线性降维方法，通过正交变换将原始特征转换为一组线性不相关的主成分，这些主成分按方差大小排列。在图像处理中，PCA常用于：
- 图像压缩
- 特征提取
- 人脸识别（特征脸方法）
- 去噪

**2. 完整实现代码**

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_olivetti_faces
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import cv2
from skimage import data
import warnings
warnings.filterwarnings('ignore')

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

class ImagePCA:
    def __init__(self, n_components=None):
        """
        初始化图像PCA处理器
        
        参数:
        n_components: 保留的主成分数量
        """
        self.n_components = n_components
        self.pca = PCA(n_components=n_components)
        self.scaler = StandardScaler()
        self.mean_ = None
        self.components_ = None
        self.explained_variance_ = None
        self.explained_variance_ratio_ = None
        
    def load_sample_image(self):
        """加载示例图像"""
        # 使用skimage的camera图像
        image = data.camera()
        return image
    
    def load_face_dataset(self):
        """加载人脸数据集"""
        faces = fetch_olivetti_faces(shuffle=True, random_state=42)
        return faces.data, faces.images, faces.target
    
    def analyze_eigenvalues(self, X):
        """
        分析特征值分布
        
        参数:
        X: 图像数据矩阵，形状为(n_samples, n_features)
        """
        # 标准化数据
        X_std = self.scaler.fit_transform(X)
        
        # 计算协方差矩阵
        cov_matrix = np.cov(X_std.T)
        
        # 计算特征值和特征向量
        eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)
        
        # 按降序排列特征值
        idx = eigenvalues.argsort()[::-1]
        eigenvalues = eigenvalues[idx]
        eigenvectors = eigenvectors[:, idx]
        
        # 计算累积解释方差比
        total_variance = np.sum(eigenvalues)
        explained_variance_ratio = eigenvalues / total_variance
        cumulative_variance_ratio = np.cumsum(explained_variance_ratio)
        
        return eigenvalues, eigenvectors, explained_variance_ratio, cumulative_variance_ratio
    
    def fit_transform(self, X):
        """拟合PCA模型并转换数据"""
        # 标准化数据
        X_std = self.scaler.fit_transform(X)
        
        # 保存均值用于重建
        self.mean_ = self.scaler.mean_
        
        # 拟合PCA
        X_pca = self.pca.fit_transform(X_std)
        
        # 保存重要属性
        self.components_ = self.pca.components_
        self.explained_variance_ = self.pca.explained_variance_
        self.explained_variance_ratio_ = self.pca.explained_variance_ratio_
        
        return X_pca
    
    def inverse_transform(self, X_pca):
        """将降维后的数据重建回原始空间"""
        X_reconstructed = self.pca.inverse_transform(X_pca)
        X_reconstructed = self.scaler.inverse_transform(X_reconstructed)
        return X_reconstructed
    
    def calculate_mse(self, original, reconstructed):
        """计算均方误差(MSE)"""
        mse = np.mean((original - reconstructed) ** 2)
        return mse
    
    def calculate_psnr(self, original, reconstructed):
        """计算峰值信噪比(PSNR)"""
        mse = self.calculate_mse(original, reconstructed)
        if mse == 0:
            return float('inf')
        max_pixel = 255.0
        psnr = 20 * np.log10(max_pixel / np.sqrt(mse))
        return psnr
    
    def visualize_eigenvalue_distribution(self, eigenvalues, explained_variance_ratio, cumulative_variance_ratio):
        """可视化特征值分布"""
        fig, axes = plt.subplots(1, 3, figsize=(15, 4))
        
        # 1. 特征值大小分布
        axes[0].plot(eigenvalues[:50], 'b-', linewidth=2, marker='o', markersize=4)
        axes[0].set_xlabel('主成分序号')
        axes[0].set_ylabel('特征值大小')
        axes[0].set_title('前50个特征值分布')
        axes[0].grid(True, alpha=0.3)
        
        # 2. 解释方差比
        axes[1].plot(explained_variance_ratio[:50], 'g-', linewidth=2, marker='s', markersize=4)
        axes[1].set_xlabel('主成分序号')
        axes[1].set_ylabel('解释方差比例')
        axes[1].set_title('各主成分解释方差比例')
        axes[1].grid(True, alpha=0.3)
        
        # 3. 累积解释方差比
        axes[2].plot(cumulative_variance_ratio, 'r-', linewidth=2)
        axes[2].axhline(y=0.95, color='k', linestyle='--', alpha=0.5, label='95%方差线')
        axes[2].axhline(y=0.99, color='b', linestyle='--', alpha=0.5, label='99%方差线')
        axes[2].set_xlabel('主成分数量')
        axes[2].set_ylabel('累积解释方差比例')
        axes[2].set_title('累积解释方差比例曲线')
        axes[2].legend()
        axes[2].grid(True, alpha=0.3)
        
        plt.tight_layout()
        plt.show()
        
        # 打印关键信息
        print("=" * 60)
        print("特征值分析结果:")
        print("=" * 60)
        print(f"总特征值数量: {len(eigenvalues)}")
        print(f"最大特征值: {eigenvalues[0]:.2f}")
        print(f"最小特征值: {eigenvalues[-1]:.2f}")
        print(f"特征值总和: {np.sum(eigenvalues):.2f}")
        print(f"前5个特征值占总方差比例: {np.sum(explained_variance_ratio[:5])*100:.2f}%")
        
        # 找到达到95%和99%方差所需的主成分数
        n_95 = np.argmax(cumulative_variance_ratio >= 0.95) + 1
        n_99 = np.argmax(cumulative_variance_ratio >= 0.99) + 1
        print(f"达到95%方差所需主成分数: {n_95}")
        print(f"达到99%方差所需主成分数: {n_99}")
        print("=" * 60)
    
    def visualize_components(self, components, image_shape, n_components=16):
        """可视化主成分（特征脸）"""
        fig, axes = plt.subplots(4, 4, figsize=(10, 10))
        axes = axes.ravel()
        
        for i in range(min(n_components, len(components))):
            component = components[i].reshape(image_shape)
            axes[i].imshow(component, cmap='gray')
            axes[i].set_title(f'PC {i+1}')
            axes[i].axis('off')
        
        plt.suptitle('前16个主成分（特征脸）', fontsize=16)
        plt.tight_layout()
        plt.show()
    
    def evaluate_reconstruction(self, original_images, n_components_list):
        """评估不同主成分数量下的重建质量"""
        n_samples = min(5, len(