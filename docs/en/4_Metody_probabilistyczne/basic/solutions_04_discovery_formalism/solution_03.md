# Solution — Problem 3: Weather (7 days × 3 states)

## Part A — Marking Events

---

### 1. Monday is sunny

> **Question:** Mark all outcomes satisfying: *Monday is sunny*

```
      Mon Tue Wed Thu Fri Sat Sun
S     X   X   X   X   X   X   X
C     .   X   X   X   X   X   X
R     .   X   X   X   X   X   X
```

Monday → only S allowed. All other days → any state. Event = $\{S\} \times \{S,C,R\}^6$, size $= 1 \times 3^6 = 729$.

---

### 2. The weekend (Saturday and Sunday) is rainy

> **Question:** Mark all outcomes satisfying: *the weekend (Saturday and Sunday) is rainy*

```
      Mon Tue Wed Thu Fri Sat Sun
S     X   X   X   X   X   .   .
C     X   X   X   X   X   .   .
R     X   X   X   X   X   X   X
```

Saturday and Sunday → only R. Weekdays → any state. Event = $\{S,C,R\}^5 \times \{R\} \times \{R\}$, size $= 3^5 = 243$.

---

### 3. It rains on Wednesday or Friday

> **Question:** Mark all outcomes satisfying: *it rains on Wednesday or Friday*

This is a **disjunction** (OR) — at least one of Wednesday or Friday must be rainy. A single grid represents a conjunction, so we need the **union** of two grids:

**Grid W** (Wednesday rainy, Friday anything):
```
      Mon Tue Wed Thu Fri Sat Sun
S     X   X   .   X   X   X   X
C     X   X   .   X   X   X   X
R     X   X   X   X   X   X   X
```

**Grid F** (Friday rainy, Wednesday anything):
```
      Mon Tue Wed Thu Fri Sat Sun
S     X   X   X   X   .   X   X
C     X   X   X   X   .   X   X
R     X   X   X   X   X   X   X
```

The full event is $W \cup F$. A single grid can't directly represent OR — this is a key insight of this problem.

---

### 4. There is no rainy day during the week

> **Question:** Mark all outcomes satisfying: *there is no rainy day during the week*

```
      Mon Tue Wed Thu Fri Sat Sun
S     X   X   X   X   X   X   X
C     X   X   X   X   X   X   X
R     .   .   .   .   .   .   .
```

Every day → S or C, rain excluded. Event = $\{S,C\}^7$, size $= 2^7 = 128$.

---

### 5. Thursday is not sunny

> **Question:** Mark all outcomes satisfying: *Thursday is not sunny*

```
      Mon Tue Wed Thu Fri Sat Sun
S     X   X   X   .   X   X   X
C     X   X   X   X   X   X   X
R     X   X   X   X   X   X   X
```

Thursday → C or R (not S). All other days → any state. Size $= 3^3 \times 2 \times 3^3 = 1458$.

---

## Part B — Interpretation

---

### Case 1

> **Question:** Describe the event:
> ```
>       Mon Tue Wed Thu Fri Sat Sun
> S     .   .   .   .   .   X   X
> C     .   .   .   .   .   .   .
> R     .   .   .   .   .   .   .
> ```

**Answer: "The weekend (Saturday and Sunday) is sunny."**

Only S is marked for Saturday and Sunday. Weekdays have no marks (unconstrained). Event = $\{S,C,R\}^5 \times \{S\} \times \{S\}$, size $= 3^5 = 243$.

---

### Case 2

> **Question:** Describe the event:
> ```
>       Mon Tue Wed Thu Fri Sat Sun
> S     X   X   X   X   X   X   X
> C     X   X   X   X   X   X   X
> R     .   .   .   .   .   .   .
> ```

**Answer: "There is no rainy day during the entire week"** (every day is either sunny or cloudy).

S and C are marked for every day, R is never marked. Event = $\{S,C\}^7$, size $= 2^7 = 128$. Identical to Part A question 4.
