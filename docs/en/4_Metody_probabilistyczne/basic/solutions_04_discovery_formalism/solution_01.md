# Solution — Problem 1: Coin × Coin

## Part A — Marking Events

---

### 1. Exactly one head

> **Question:** Mark all outcomes for which the statement is true: *exactly one head*

```
      H   T
H     .   X
T     X   .
```

$A = \{(H,T),\ (T,H)\}$, $|A| = 2$. The anti-diagonal — outcomes where only one toss is H.

---

### 2. Both tosses are the same

> **Question:** Mark all outcomes for which the statement is true: *both tosses are the same*

```
      H   T
H     X   .
T     .   X
```

$B = \{(H,H),\ (T,T)\}$, $|B| = 2$. The main diagonal — first toss = second toss. This is $A^c$.

---

### 3. At least one head

> **Question:** Mark all outcomes for which the statement is true: *at least one head*

```
      H   T
H     X   X
T     X   .
```

$C = \{(H,H),\ (H,T),\ (T,H)\}$, $|C| = 3$. Everything except $(T,T)$.

---

### 4. The first toss is tails

> **Question:** Mark all outcomes for which the statement is true: *the first toss is tails*

```
      H   T
H     .   .
T     X   X
```

$D = \{(T,H),\ (T,T)\}$, $|D| = 2$. The entire bottom row — condition on first toss selects a whole row.

---

### 5. The second toss is heads

> **Question:** Mark all outcomes for which the statement is true: *the second toss is heads*

```
      H   T
H     X   .
T     X   .
```

$E = \{(H,H),\ (T,H)\}$, $|E| = 2$. The entire left column — condition on second toss selects a whole column.

---

## Part B — Interpretation

---

### Case 1

> **Question:** Describe the event represented by this grid:
> ```
>       H   T
> H     X   X
> T     .   .
> ```

**Answer: "The first toss is heads."**

Both marked cells are in the top row (first toss = H). Second toss can be anything. $F = \{(H,H),\ (H,T)\}$.

---

### Case 2

> **Question:** Describe the event represented by this grid:
> ```
>       H   T
> H     .   X
> T     X   .
> ```

**Answer: "The two tosses give different results"** (equivalently, "exactly one head").

$(H,T)$: H ≠ T ✓. $(T,H)$: T ≠ H ✓. This is $G = \{(H,T),\ (T,H)\} = B^c$ (complement of "both same").
