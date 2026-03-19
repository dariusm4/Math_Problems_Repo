# Solution — Task 7: k-Permutations

## 1. First three places among 12 runners

Order matters (1st, 2nd, 3rd are different), no repetition:

$$P(12, 3) = \frac{12!}{(12-3)!} = \frac{12!}{9!} = 12 \cdot 11 \cdot 10 = 1\,320$$

## 2. 4-digit numbers with distinct digits from 1–9

Choose 4 digits from 9, order matters, no repetition:

$$P(9, 4) = \frac{9!}{5!} = 9 \cdot 8 \cdot 7 \cdot 6 = 3\,024$$

## 3. Divisible by 5

From digits $\{1, 2, \ldots, 9\}$, divisibility by 5 requires the last digit to be **5** (the only multiple of 5 available).

- Last digit: 5 (1 way)
- Remaining 3 positions: choose from the other 8 digits, order matters, no repetition

$$P(8, 3) = 8 \cdot 7 \cdot 6 = 336$$
