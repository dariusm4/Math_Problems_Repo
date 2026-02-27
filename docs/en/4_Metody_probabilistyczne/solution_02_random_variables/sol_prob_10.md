# Task 10 — Marginal Densities and Independence

## Given

$f(x,y) = xy$ for $0 \le x \le 2$, $0 \le y \le 1$ (from Task 9 with $c=1$).

## Marginal Density $f_1(x)$

$$f_1(x) = \int_0^1 xy\,dy = x \cdot \frac{y^2}{2}\bigg|_0^1 = \frac{x}{2}$$

$$\boxed{f_1(x) = \begin{cases}x/2 & 0 \le x \le 2\\ 0 & \text{otherwise}\end{cases}}$$

## Marginal Density $f_2(y)$

$$f_2(y) = \int_0^2 xy\,dx = y \cdot \frac{x^2}{2}\bigg|_0^2 = 2y$$

$$\boxed{f_2(y) = \begin{cases}2y & 0 \le y \le 1\\ 0 & \text{otherwise}\end{cases}}$$

## Independence Check

$$f_1(x) \cdot f_2(y) = \frac{x}{2} \cdot 2y = xy = f(x,y) \;\checkmark$$

$$\boxed{X \text{ and } Y \text{ are independent}}$$
