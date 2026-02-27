# Task 9 — At Least One First-Quality Item

## Given

3 plants with probabilities of first-quality: $p_1 = 0.97$, $p_2 = 0.90$, $p_3 = 0.86$.

One item from each plant. Find $P(\text{at least one is first quality})$.

## Solution

Use the complement: $P(\text{at least one good}) = 1 - P(\text{all bad})$

$$P(\text{all bad}) = (1-0.97)(1-0.90)(1-0.86) = 0.03 \cdot 0.10 \cdot 0.14$$

$$= 0.03 \cdot 0.014 = 0.00042$$

$$\boxed{P(\text{at least one first quality}) = 1 - 0.00042 = 0.99958}$$
