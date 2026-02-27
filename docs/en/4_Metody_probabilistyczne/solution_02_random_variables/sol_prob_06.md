# Task 6 — Joint Distribution of Gear Assembly

## Given

- $(X,Y)$: zero-one variables for gear deviations (+ or -)
- $P(X=0,Y=0) = P(X=1,Y=1) = 1/4$ (bad assembly)
- $P(X=0,Y=1) = P(X=1,Y=0) = 1/4$ (good assembly)

## Joint Distribution Table

| $Y \backslash X$ | 0 | 1 | $P(Y=y)$ |
|---|---|---|---|
| **0** | 1/4 | 1/4 | 1/2 |
| **1** | 1/4 | 1/4 | 1/2 |
| $P(X=x)$ | 1/2 | 1/2 | 1 |

## Probability of Correct Assembly

Correct assembly means one "+" and one "-", i.e., $X \neq Y$:

$$P(\text{correct}) = P(X=0,Y=1) + P(X=1,Y=0) = \frac{1}{4} + \frac{1}{4}$$

$$\boxed{P(\text{correct assembly}) = \frac{1}{2}}$$
