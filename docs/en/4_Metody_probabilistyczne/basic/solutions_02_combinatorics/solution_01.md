# Solution — Task 1: Recognizing Counting Models

## Problem

For each situation, determine the appropriate combinatorial model.

## Solutions

**1. Arranging 7 students in a line.**

- All 7 objects used, order matters, no repetition → **Permutation**
- Answer: $P_7 = 7! = 5\,040$

**2. Choosing 4 members of a committee from 12 people.**

- Only some objects chosen ($k = 4$ from $n = 12$), order does NOT matter → **Combination**
- Answer: $\binom{12}{4} = \frac{12!}{4! \cdot 8!} = \frac{12 \cdot 11 \cdot 10 \cdot 9}{4 \cdot 3 \cdot 2 \cdot 1} = 495$

**3. Assigning gold, silver, and bronze medals among 15 athletes.**

- Only some chosen ($k = 3$ from $n = 15$), order MATTERS (gold ≠ silver ≠ bronze) → **k-Permutation (ordered selection without repetition)**
- Answer: $P(15, 3) = \frac{15!}{12!} = 15 \cdot 14 \cdot 13 = 2\,730$

**4. Forming a 6-digit PIN code.**

- Order matters, repetition allowed, each position independently chosen from $\{0, 1, \ldots, 9\}$ → **Sequence with repetition**
- Answer: $10^6 = 1\,000\,000$

**5. Arranging the letters of the word BANANA.**

- All 6 letters used, but some are identical (B×1, A×3, N×2) → **Permutation with repeated elements**
- Answer: $\frac{6!}{1! \cdot 3! \cdot 2!} = \frac{720}{1 \cdot 6 \cdot 2} = 60$

**6. Seating 6 people around a round table.**

- All objects used, arranged in a circle → **Circular permutation**
- Answer: $(6-1)! = 5! = 120$