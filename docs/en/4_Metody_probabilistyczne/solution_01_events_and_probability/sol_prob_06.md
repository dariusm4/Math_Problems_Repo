# Task 6 — Total Probability & Bayes' Theorem

## Given

- Production ratio machine 1 : machine 2 = 3 : 2, so $P(M_1) = 3/5 = 0.6$, $P(M_2) = 2/5 = 0.4$
- $P(\text{first grade} | M_1) = 0.65$
- $P(\text{first grade} | M_2) = 0.85$

## 1. Total Probability

$$P(G) = P(G|M_1)P(M_1) + P(G|M_2)P(M_2)$$

$$= 0.65 \cdot 0.6 + 0.85 \cdot 0.4 = 0.39 + 0.34$$

$$\boxed{P(G) = 0.73}$$

## 2. Bayes' Theorem

$$P(M_1|G) = \frac{P(G|M_1) \cdot P(M_1)}{P(G)} = \frac{0.65 \cdot 0.6}{0.73} = \frac{0.39}{0.73}$$

$$\boxed{P(M_1|G) \approx 0.534}$$
