# Task 5 — CDF from Arctan

## Given

$F(x) = A + B\arctan x$ for all $x \in \mathbb{R}$

## Conditions for a CDF

1. $\lim_{x \to -\infty} F(x) = 0$: $A + B(-\pi/2) = 0$
2. $\lim_{x \to +\infty} F(x) = 1$: $A + B(\pi/2) = 1$

From (1): $A = B\pi/2$  
Substitute into (2): $B\pi/2 + B\pi/2 = 1 \Rightarrow B\pi = 1$

$$\boxed{B = \frac{1}{\pi}, \quad A = \frac{1}{2}}$$

So $F(x) = \frac{1}{2} + \frac{1}{\pi}\arctan x$.

## Density

$$f(x) = F'(x) = \frac{1}{\pi} \cdot \frac{1}{1+x^2}$$

$$\boxed{f(x) = \frac{1}{\pi(1+x^2)}}$$

This is the **Cauchy distribution** (standard form).
