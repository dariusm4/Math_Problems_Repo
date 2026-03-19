# Solution — Task 7: k-Permutations

## 1. First three places among 12 runners

Order matters (1st ≠ 2nd ≠ 3rd), no repetition:

$$P(12, 3) = \frac{12!}{(12-3)!} = \frac{12!}{9!}$$

Cancel $9!$:

$$= \frac{12 \cdot 11 \cdot 10 \cdot \cancel{9!}}{\cancel{9!}} = 12 \cdot 11 \cdot 10 = 1\,320$$

## 2. 4-digit numbers with distinct digits from 1–9

Choose 4 digits from 9, order matters, no repetition:

$$P(9, 4) = \frac{9!}{(9-4)!} = \frac{9!}{5!}$$

Cancel $5!$:

$$= \frac{9 \cdot 8 \cdot 7 \cdot 6 \cdot \cancel{5!}}{\cancel{5!}} = 9 \cdot 8 \cdot 7 \cdot 6 = 3\,024$$

## 3. Divisible by 5

From $\{1, \ldots, 9\}$, divisibility by 5 requires last digit = **5** (only option).

- Last digit: 5 → **1 way**
- Remaining 3 positions from 8 digits, ordered:

$$P(8, 3) = \frac{8!}{(8-3)!} = \frac{8!}{5!} = \frac{8 \cdot 7 \cdot 6 \cdot \cancel{5!}}{\cancel{5!}} = 8 \cdot 7 \cdot 6 = 336$$
