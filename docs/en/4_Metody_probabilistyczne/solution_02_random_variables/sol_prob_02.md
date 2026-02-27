# Task 2 — PMF, CDF, and Probability Calculation

## Given

Ratio of grades 5:4:3:2 is $1:3:4:2$, total = 10 parts.

## 1. Probability Mass Function (PMF)

| $x$ | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| $P(X=x)$ | $2/10=0.2$ | $4/10=0.4$ | $3/10=0.3$ | $1/10=0.1$ |

## 2. Cumulative Distribution Function (CDF)

$$F(x) = P(X \le x) = \begin{cases}0 & x < 2\\ 0.2 & 2 \le x < 3\\ 0.6 & 3 \le x < 4\\ 0.9 & 4 \le x < 5\\ 1.0 & x \ge 5\end{cases}$$

(Step function with jumps at $x = 2, 3, 4, 5$.)

## 3. Probability $P(X < 3.5)$

$$P(X < 3.5) = P(X=2) + P(X=3) = 0.2 + 0.4$$

$$\boxed{P(X < 3.5) = 0.6}$$
