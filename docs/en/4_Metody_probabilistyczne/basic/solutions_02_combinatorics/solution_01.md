<<<<<<< HEAD
=======
# Solution — Task 1: Recognizing Counting Models

## Problem

For each situation, determine the appropriate combinatorial model.

## Solutions

**1. Arranging 7 students in a line.**

- All 7 objects used, order matters, no repetition → **Permutation**
- Answer model: $P_7 = 7!$

**2. Choosing 4 members of a committee from 12 people.**

- Only some objects chosen ($k = 4$ from $n = 12$), order does NOT matter → **Combination**
- Answer model: $\binom{12}{4}$

**3. Assigning gold, silver, and bronze medals among 15 athletes.**

- Only some chosen ($k = 3$ from $n = 15$), order MATTERS (gold ≠ silver ≠ bronze) → **k-Permutation (ordered selection without repetition)**
- Answer model: $P(15, 3) = \frac{15!}{12!}$

**4. Forming a 6-digit PIN code.**

- Order matters, repetition allowed, each position independently chosen from $\{0, 1, \ldots, 9\}$ → **Sequence with repetition**
- Answer model: $10^6$

**5. Arranging the letters of the word BANANA.**

- All 6 letters used, but some are identical (B×1, A×3, N×2) → **Permutation with repeated elements**
- Answer model: $\frac{6!}{1! \cdot 3! \cdot 2!}$

**6. Seating 6 people around a round table.**

- All objects used, arranged in a circle → **Circular permutation**
- Answer model: $(6-1)! = 5!$
>>>>>>> 1c3928e (Add combinatorics solutions and update mkdocs nav)
