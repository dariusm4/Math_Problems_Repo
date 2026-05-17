# Solution — Problem 2: Die × Die

## Part A — Marking Events

---

### 1. The sum is equal to 8

> **Question:** Mark all outcomes satisfying: *the sum is equal to 8*

```
      1 2 3 4 5 6
1     . . . . . .
2     . . . . . X
3     . . . . X .
4     . . . X . .
5     . . X . . .
6     . X . . . .
```

$A = \{(2,6),(3,5),(4,4),(5,3),(6,2)\}$, $|A| = 5$. Anti-diagonal line for sum = 8.

---

### 2. The first die is greater than the second

> **Question:** Mark all outcomes satisfying: *the first die is greater than the second*

```
      1 2 3 4 5 6
1     . . . . . .
2     X . . . . .
3     X X . . . .
4     X X X . . .
5     X X X X . .
6     X X X X X .
```

$B = \{(i,j) : i > j\}$, $|B| = 15$. Lower triangle below the diagonal.

---

### 3. Both dice show even numbers

> **Question:** Mark all outcomes satisfying: *both dice show even numbers*

```
      1 2 3 4 5 6
1     . . . . . .
2     . X . X . X
3     . . . . . .
4     . X . X . X
5     . . . . . .
6     . X . X . X
```

$C = \{(i,j) : i \in \{2,4,6\},\ j \in \{2,4,6\}\}$, $|C| = 9$. Regular 3×3 sub-grid of even rows × even columns.

---

### 4. At least one die shows 6

> **Question:** Mark all outcomes satisfying: *at least one die shows 6*

```
      1 2 3 4 5 6
1     . . . . . X
2     . . . . . X
3     . . . . . X
4     . . . . . X
5     . . . . . X
6     X X X X X X
```

$D = \{(i,j) : i = 6 \text{ or } j = 6\}$, $|D| = 11$. Union of row 6 and column 6, L-shape.

---

### 5. Exactly one die shows 1

> **Question:** Mark all outcomes satisfying: *exactly one die shows 1*

```
      1 2 3 4 5 6
1     . X X X X X
2     X . . . . .
3     X . . . . .
4     X . . . . .
5     X . . . . .
6     X . . . . .
```

$E = \{(i,j) : (i=1) \oplus (j=1)\}$, $|E| = 10$. Top row + left column, excluding $(1,1)$ where both show 1.

---

## Part B — Interpretation

---

### Case 1

> **Question:** Describe the event:
> ```
>       1 2 3 4 5 6
> 1     . . . . . .
> 2     . . . . . .
> 3     . . X X X X
> 4     . . X X X X
> 5     . . X X X X
> 6     . . X X X X
> ```

**Answer: "Both dice show at least 3."**

$F = \{(i,j) : i \geq 3 \text{ and } j \geq 3\}$, $|F| = 16$. A 4×4 block in the bottom-right corner.

---

### Case 2

> **Question:** Describe the event:
> ```
>       1 2 3 4 5 6
> 1     X . . . . .
> 2     . X . . . .
> 3     . . X . . .
> 4     . . . X . .
> 5     . . . . X .
> 6     . . . . . X
> ```

**Answer: "Both dice show the same number."**

$G = \{(i,j) : i = j\} = \{(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\}$, $|G| = 6$. The main diagonal.
