<<<<<<< HEAD
=======
# Solution — Task 11: Modeling Outcomes

## Part 1 — Distinguishable vs Indistinguishable Objects

Box: 4 red, 4 blue, 3 green → 11 balls total.

### 1. Balls of the same color are indistinguishable

This is a **permutation with repeated elements**:

$$\frac{11!}{4! \cdot 4! \cdot 3!} = \frac{39\,916\,800}{24 \cdot 24 \cdot 6} = \frac{39\,916\,800}{3\,456} = 11\,550$$

### 2. Every ball is individually labeled

All 11 objects are distinct → standard permutation:

$$11! = 39\,916\,800$$

### 3. Why are the answers different?

When balls are **distinguishable**, swapping two red balls (e.g., $R_1$ and $R_2$) creates a new arrangement. When they are **indistinguishable**, such swaps produce the same arrangement, so many permutations are identified as identical, reducing the count by a factor of $4! \cdot 4! \cdot 3!$.

---

## Part 2 — Recording Order vs Ignoring Order

Three balls drawn without replacement from 11 individually distinct balls.

### 1. Only the set of colors is recorded (order ignored)

This is a **combination**:

$$\binom{11}{3} = \frac{11 \cdot 10 \cdot 9}{6} = 165$$

### 2. The sequence of colors is recorded (order matters)

This is a **k-permutation**:

$$P(11, 3) = 11 \cdot 10 \cdot 9 = 990$$

### 3. Why does recording order change the count?

When order is recorded, the outcome $(R_1, B_2, G_1)$ is different from $(B_2, R_1, G_1)$. Each unordered selection of 3 balls corresponds to $3! = 6$ ordered sequences:

$$990 = 165 \cdot 6$$

---

## Part 3 — PIN Code vs Number

### 1. 4-digit PIN codes (repetition allowed)

Each of 4 positions can be any digit $0$–$9$:

$$10^4 = 10\,000$$

### 2. 4-digit numbers (first digit ≠ 0)

First digit: 9 choices ($1$–$9$). Remaining 3 digits: 10 choices each:

$$9 \cdot 10^3 = 9\,000$$

### 3. Why are the rules different?

A PIN code is a **sequence of symbols** — the digit 0 is valid in any position, including the first. A number like $0523$ is not a valid 4-digit number because it starts with zero. The constraint $d_1 \neq 0$ reduces the sample space.

### 4. Why are 1234 and 4321 different outcomes?

PIN codes are **ordered sequences**. The order defines the code, just like the order defines a password. Rearranging the same digits produces a different code with a different meaning.
>>>>>>> 1c3928e (Add combinatorics solutions and update mkdocs nav)
