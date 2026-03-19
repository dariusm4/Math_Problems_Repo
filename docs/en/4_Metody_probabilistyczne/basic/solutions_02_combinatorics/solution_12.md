# Solution — Task 12: Mixed Counting Problem

## 1. Student ID Codes

Format: 2 letters from $\{A, B, C, D, E\}$ + 3 digits from $\{0, \ldots, 9\}$.

### (a) Letters and digits may repeat

Sequence with repetition (product rule):

$$5 \cdot 5 \cdot 10 \cdot 10 \cdot 10 = 5^2 \cdot 10^3 = 25 \cdot 1\,000 = 25\,000$$

### (b) Letters may not repeat, digits may repeat

Letters — k-permutation:

$$P(5, 2) = \frac{5!}{3!} = \frac{5 \cdot 4 \cdot \cancel{3!}}{\cancel{3!}} = 5 \cdot 4 = 20$$

Digits — sequence with repetition:

$$10^3 = 1\,000$$

Total:

$$20 \cdot 1\,000 = 20\,000$$

### (c) Neither letters nor digits may repeat

Letters:

$$P(5, 2) = \frac{5!}{3!} = \frac{5 \cdot 4 \cdot \cancel{3!}}{\cancel{3!}} = 20$$

Digits:

$$P(10, 3) = \frac{10!}{7!} = \frac{10 \cdot 9 \cdot 8 \cdot \cancel{7!}}{\cancel{7!}} = 10 \cdot 9 \cdot 8 = 720$$

Total:

$$20 \cdot 720 = 14\,400$$

---

## 2. Medal Assignment (12 runners)

### (a) Ways to assign gold, silver, bronze

k-permutation:

$$P(12, 3) = \frac{12!}{9!} = \frac{12 \cdot 11 \cdot 10 \cdot \cancel{9!}}{\cancel{9!}} = 12 \cdot 11 \cdot 10 = 1\,320$$

### (b) Two particular runners must both receive medals

Choose which 2 of 3 medals go to them (order matters):

$$P(3, 2) = \frac{3!}{1!} = 3 \cdot 2 = 6$$

Remaining medal → one of the other 10 runners:

$$10$$

Total:

$$6 \cdot 10 = 60$$

---

## 3. Committee Selection (10 students: 6 men, 4 women)

### (a) Total committees of 4

$$\binom{10}{4} = \frac{10!}{4! \cdot 6!} = \frac{10 \cdot 9 \cdot 8 \cdot 7 \cdot \cancel{6!}}{\cancel{6!} \cdot 4!} = \frac{10 \cdot 9 \cdot 8 \cdot 7}{4 \cdot 3 \cdot 2 \cdot 1} = \frac{5\,040}{24} = 210$$

### (b) Exactly 2 women

Choose 2 women from 4:

$$\binom{4}{2} = \frac{4!}{2! \cdot 2!} = \frac{4 \cdot 3 \cdot \cancel{2!}}{\cancel{2!} \cdot 2!} = \frac{4 \cdot 3}{2 \cdot 1} = \frac{12}{2} = 6$$

Choose 2 men from 6:

$$\binom{6}{2} = \frac{6!}{2! \cdot 4!} = \frac{6 \cdot 5 \cdot \cancel{4!}}{\cancel{4!} \cdot 2!} = \frac{6 \cdot 5}{2 \cdot 1} = \frac{30}{2} = 15$$

Multiply:

$$6 \cdot 15 = 90$$

### (c) At least one woman

Total minus all-men:

$$\binom{6}{4} = \frac{6!}{4! \cdot 2!} = \frac{6 \cdot 5 \cdot \cancel{4!}}{\cancel{4!} \cdot 2!} = \frac{6 \cdot 5}{2 \cdot 1} = \frac{30}{2} = 15$$

$$210 - 15 = 195$$

---

## 4. Circular Seating (7 people)

### (a) Total circular arrangements

$$(7-1)! = 6! = 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 720$$

### (b) Two particular people sit next to each other

Block → 6 objects in a circle, block has 2 internal arrangements:

$$(6-1)! \cdot 2 = 5! \cdot 2 = 120 \cdot 2 = 240$$

---

## 5. Passwords (5 characters from 36 symbols)

36 symbols = 10 digits + 26 letters.

### (a) Repetition allowed

Sequence with repetition:

$$36^5 = 36 \cdot 36 \cdot 36 \cdot 36 \cdot 36 = 60\,466\,176$$

### (b) No character may repeat

k-permutation:

$$P(36, 5) = \frac{36!}{31!} = \frac{36 \cdot 35 \cdot 34 \cdot 33 \cdot 32 \cdot \cancel{31!}}{\cancel{31!}} = 36 \cdot 35 \cdot 34 \cdot 33 \cdot 32 = 45\,239\,040$$

### (c) Models used

- Part (a): **Sequence with repetition** — each position chosen independently, repetition allowed.
- Part (b): **k-permutation** — ordered selection without repetition.
