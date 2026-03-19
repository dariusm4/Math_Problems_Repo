# Solution — Task 11: Modeling Outcomes

## Part 1 — Distinguishable vs Indistinguishable Objects

Box: 4 red, 4 blue, 3 green → 11 balls total.

### 1. Balls of the same color are indistinguishable

Permutation with repeated elements:

$$\frac{11!}{4! \cdot 4! \cdot 3!} = \frac{39\,916\,800}{(4 \cdot 3 \cdot 2 \cdot 1) \cdot (4 \cdot 3 \cdot 2 \cdot 1) \cdot (3 \cdot 2 \cdot 1)} = \frac{39\,916\,800}{24 \cdot 24 \cdot 6} = \frac{39\,916\,800}{3\,456} = 11\,550$$

### 2. Every ball is individually labeled

All 11 objects are distinct → standard permutation:

$$11! = 11 \cdot 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 39\,916\,800$$

### 3. Why are the answers different?

When balls are **distinguishable**, swapping $R_1$ and $R_2$ creates a new arrangement. When **indistinguishable**, such swaps produce the same arrangement, reducing the count by $4! \cdot 4! \cdot 3! = 3\,456$.

---

## Part 2 — Recording Order vs Ignoring Order

Three balls drawn without replacement from 11 distinct balls.

### 1. Only the set is recorded (order ignored)

$$\binom{11}{3} = \frac{11!}{3! \cdot 8!} = \frac{11 \cdot 10 \cdot 9 \cdot \cancel{8!}}{\cancel{8!} \cdot 3!} = \frac{11 \cdot 10 \cdot 9}{3 \cdot 2 \cdot 1} = \frac{990}{6} = 165$$

### 2. The sequence is recorded (order matters)

$$P(11, 3) = \frac{11!}{8!} = \frac{11 \cdot 10 \cdot 9 \cdot \cancel{8!}}{\cancel{8!}} = 11 \cdot 10 \cdot 9 = 990$$

### 3. Why does recording order change the count?

Each unordered set of 3 balls corresponds to $3! = 6$ ordered sequences:

$$990 = 165 \cdot 6$$

---

## Part 3 — PIN Code vs Number

### 1. 4-digit PIN codes (repetition allowed)

$$10^4 = 10 \cdot 10 \cdot 10 \cdot 10 = 10\,000$$

### 2. 4-digit numbers (first digit ≠ 0)

$$9 \cdot 10^3 = 9 \cdot 10 \cdot 10 \cdot 10 = 9\,000$$

### 3. Why different rules?

A PIN code allows 0 in any position. A 4-digit number cannot start with 0 (e.g., 0523 is not a valid 4-digit number), so the first digit has 9 choices instead of 10.

### 4. Why are 1234 and 4321 different?

PIN codes are **ordered sequences**. Rearranging the same digits produces a different code.