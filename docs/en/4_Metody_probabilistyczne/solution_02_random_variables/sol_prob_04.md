# Task 4 — Exponential Distribution

## Given

$$f(x) = \begin{cases}\frac{1}{\lambda}e^{-x/\lambda} & x > 0\\ 0 & \text{otherwise}\end{cases}, \quad \lambda = 10$$

## 1. $P(5 \le X \le 10)$

$$P(5 \le X \le 10) = \int_5^{10} \frac{1}{10}e^{-x/10}\,dx = \left[-e^{-x/10}\right]_5^{10}$$

$$= -e^{-1} + e^{-0.5} = e^{-0.5} - e^{-1}$$

$$= 0.6065 - 0.3679$$

$$\boxed{P(5 \le X \le 10) \approx 0.2387}$$

## 2. CDF

$$F(x) = P(X \le x) = \int_0^x \frac{1}{10}e^{-t/10}\,dt = 1 - e^{-x/10}$$

$$\boxed{F(x) = \begin{cases}0 & x \le 0\\ 1 - e^{-x/10} & x > 0\end{cases}}$$
