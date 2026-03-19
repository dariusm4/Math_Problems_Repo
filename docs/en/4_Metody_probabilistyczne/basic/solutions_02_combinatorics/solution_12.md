# Solution — Task 12: Mixed Counting Problem

## 1. Student ID Codes

Format: 2 letters from $\{A, B, C, D, E\}$ + 3 digits from $\{0, \ldots, 9\}$.

### (a) Letters and digits may repeat

**Model:** Sequence with repetition (product rule).

$$5^2 \cdot 10^3 = 25 \cdot 1\,000 = 25\,000$$

### (b) Letters may not repeat, digits may repeat

Letters: k-permutation of 2 from 5. Digits: sequence with repetition.

$$P(5, 2) \cdot 10^3 = (5 \cdot 4) \cdot 1\,000 = 20\,000$$

### (c) Neither letters nor digits may repeat

Letters: $P(5, 2) = 20$. Digits: $P(10, 3) = 720$.

$$20 \cdot 720 = 14\,400$$

---

## 2. Medal Assignment (12 runners)

### (a) Ways to assign gold, silver, bronze

**Model:** k-permutation (ordered selection of 3 from 12).

$$P(12, 3) = 12 \cdot 11 \cdot 10 = 1\,320$$

### (b) Two particular runners must both receive medals

Fix 2 runners among the 3 medalists. Choose which 2 of the 3 medal positions go to them: $P(3, 2) = 6$ ways (since order matters — gold vs silver matters).

The remaining medal goes to one of the other $10$ runners: $10$ choices.

$$6 \cdot 10 = 60$$

*Alternative:* Choose which medals the 2 specific runners get: $3 \cdot 2 = 6$ ways. Choose who gets the remaining medal: $10$.

$$6 \cdot 10 = 60$$

---

## 3. Committee Selection (10 students: 6 men, 4 women)

### (a) Total committees of 4

**Model:** Combination.

$$\binom{10}{4} = \frac{10 \cdot 9 \cdot 8 \cdot 7}{4!} = 210$$

### (b) Exactly 2 women

$$\binom{4}{2} \cdot \binom{6}{2} = 6 \cdot 15 = 90$$

### (c) At least one woman

Total minus all-men committees:

$$\binom{10}{4} - \binom{6}{4} = 210 - 15 = 195$$

---

## 4. Circular Seating (7 people)

### (a) Total circular arrangements

**Model:** Circular permutation.

$$(7-1)! = 6! = 720$$

### (b) Two particular people sit next to each other

Treat them as a block → 6 objects in a circle:

$$(6-1)! \cdot 2! = 5! \cdot 2 = 120 \cdot 2 = 240$$

---

## 5. Passwords (5 characters from 36 symbols: digits 0–9 + letters A–Z)

### (a) Repetition allowed

**Model:** Sequence with repetition.

$$36^5 = 60\,466\,176$$

### (b) No character may repeat

**Model:** k-permutation.

$$P(36, 5) = 36 \cdot 35 \cdot 34 \cdot 33 \cdot 32 = 45\,239\,040$$

### (c) Counting models used

- Part (a): **Sequence with repetition** — each of 5 positions chosen independently from 36 symbols.
- Part (b): **k-permutation** — ordered selection of 5 from 36 without repetition.
