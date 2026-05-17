# Solution — Problem 4: Building Complex Statements from Simple Ones

## Part A — Basic Statements

### Event $A$: The sum is 7

> **Question:** Mark the event: *$A$: the sum of the two results is equal to 7*

**Step-by-step thinking:**
We are rolling two dice. Every outcome is a pair $(i, j)$ where:
- $i$ = result of the first die (rows)
- $j$ = result of the second die (columns)
The sample space has $6 \times 6 = 36$ possible outcomes.

**What is an "event"?**
An event is a set of outcomes that satisfy a specific condition.
Our task is to find which cells satisfy the condition and mark them with an `X`.

**The condition:**
Which $(i,j)$ pairs satisfy: $i + j = 7$ ?

Let's find them one by one:
- If first die $i=1$, second die $j$ must be $6 \rightarrow (1,6)$
- If first die $i=2$, second die $j$ must be $5 \rightarrow (2,5)$
- If first die $i=3$, second die $j$ must be $4 \rightarrow (3,4)$
- If first die $i=4$, second die $j$ must be $3 \rightarrow (4,3)$
- If first die $i=5$, second die $j$ must be $2 \rightarrow (5,2)$
- If first die $i=6$, second die $j$ must be $1 \rightarrow (6,1)$

$A = \{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}$, $|A| = 6$.

If we mark these pairs in our 6×6 grid, it forms an **anti-diagonal** line running from the top-right to the bottom-left:

```text
      1 2 3 4 5 6
1     . . . . . X
2     . . . . X .
3     . . . X . .
4     . . X . . .
5     . X . . . .
6     X . . . . .
```

**Java — for loop to generate this grid:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if (i + j == 7) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### Event $B$: The first die is greater than the second

> **Question:** Mark the event: *$B$: the first die shows a greater number than the second*

**Step-by-step thinking:**
Just like before, we have $36$ outcomes in the form $(i,j)$.

**The condition:**
Which $(i,j)$ pairs satisfy: $i > j$ ?

Let's go row by row (checking the first die, $i$):
- If $i=1$, are there any $j$ smaller than 1? No. (0 outcomes)
- If $i=2$, $j$ can be $1 \rightarrow (2,1)$
- If $i=3$, $j$ can be $1, 2 \rightarrow (3,1), (3,2)$
- If $i=4$, $j$ can be $1, 2, 3 \rightarrow (4,1), (4,2), (4,3)$
- If $i=5$, $j$ can be $1, 2, 3, 4 \rightarrow (5,1), (5,2), (5,3), (5,4)$
- If $i=6$, $j$ can be $1, 2, 3, 4, 5 \rightarrow (6,1), (6,2), (6,3), (6,4), (6,5)$

$B = \{(i,j) : i > j\}$, $|B| = 1 + 2 + 3 + 4 + 5 = 15$.

If we mark these pairs in our grid, they form a **lower triangle** strictly below the main diagonal:

```text
      1 2 3 4 5 6
1     . . . . . .
2     X . . . . .
3     X X . . . .
4     X X X . . .
5     X X X X . .
6     X X X X X .
```

**Java — for loop to generate this grid:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if (i > j) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### Event $C$: At least one die shows 6

> **Question:** Mark the event: *$C$: at least one die shows 6*

**Step-by-step thinking:**
We are again looking evaluating $(i,j)$ pairs.

**The condition:**
Which $(i,j)$ pairs satisfy: $i = 6$ OR $j = 6$ ?
"At least one" means either the first die is 6, or the second die is 6, or both are 6.

Let's list them:
Checking the first die ($i=6$):
- $(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)$ (this covers the entire bottom row)

Checking the second die ($j=6$):
- $(1,6), (2,6), (3,6), (4,6), (5,6), (6,6)$ (this covers the entire rightmost column)

Notice that we listed $(6,6)$ twice because it satisfies both conditions, but in our set (and grid), it is just one unique outcome!

$C = \{(i,j) : i = 6 \text{ or } j = 6\}$, $|C| = 6 + 6 - 1 = 11$.

If we mark these pairs in our grid, they form an **L-shape** covering row 6 and column 6:

```text
      1 2 3 4 5 6
1     . . . . . X
2     . . . . . X
3     . . . . . X
4     . . . . . X
5     . . . . . X
6     X X X X X X
```

**Java — for loop to generate this grid:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if (i == 6 || j == 6) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

## Part B — Compound Statements

### 1. $A \cup C$: The sum is 7 **or** at least one die shows 6

> **Question:** Mark: *the sum is 7 **or** at least one die shows 6*

**Step-by-step thinking:**
We need to find all $(i,j)$ pairs that satisfy **either** condition $A$ **or** condition $C$ (or both).

**The condition:**
Which $(i,j)$ pairs satisfy: $i+j=7$ OR $i=6$ OR $j=6$ ?

Let's combine the pairs we found earlier:
- From $A$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$
- From $C$: $(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)$ and the right column $(1,6), (2,6), (3,6), (4,6), (5,6)$

Notice that $(1,6)$ and $(6,1)$ are in both lists. In a union, we don't count duplicates twice.

$|A \cup C| = |A| + |C| - |A \cap C| = 6 + 11 - 2 = 15$.

If we mark all these pairs, we get both the anti-diagonal and the L-shape:

```text
      1 2 3 4 5 6
1     . . . . . X
2     . . . . X X
3     . . . X . X
4     . . X . . X
5     . X . . . X
6     X X X X X X
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if ((i + j == 7) || (i == 6 || j == 6)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 2. $A \cap C$: The sum is 7 **and** at least one die shows 6

> **Question:** Mark: *the sum is 7 **and** at least one die shows 6*

**Step-by-step thinking:**
We need to find all $(i,j)$ pairs that satisfy **both** condition $A$ **and** condition $C$ at the same time.

**The condition:**
Which $(i,j)$ pairs satisfy: $i+j=7$ AND ($i=6$ OR $j=6$) ?

Let's check our $A$ list: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$.
Which of these also have a 6 in them?
- $(1,6)$: Yes, $j=6$ ✅
- $(2,5)$: No 6 here ❌
- $(3,4)$: No 6 here ❌
- $(4,3)$: No 6 here ❌
- $(5,2)$: No 6 here ❌
- $(6,1)$: Yes, $i=6$ ✅

$A \cap C = \{(1,6),(6,1)\}$, $|A \cap C| = 2$.

```text
      1 2 3 4 5 6
1     . . . . . X
2     . . . . . .
3     . . . . . .
4     . . . . . .
5     . . . . . .
6     X . . . . .
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if ((i + j == 7) && (i == 6 || j == 6)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 3. $B \cap C$: The first die is greater than the second **and** at least one die shows 6

> **Question:** Mark: *the first die is greater than the second **and** at least one die shows 6*

**Step-by-step thinking:**
We are looking for pairs that satisfy **both** conditions.

**The condition:**
Which $(i,j)$ pairs satisfy: $i > j$ AND ($i=6$ OR $j=6$) ?

We know we must have a 6. Let's analyze:
- What if the second die is 6 ($j=6$)? Then for $i > j$ to work, we need $i > 6$. But 6 is the max roll on a standard die! So $j=6$ yields no solutions.
- What if the first die is 6 ($i=6$)? Then for $i > j$ to work, we need $6 > j$. This means $j$ can be $1, 2, 3, 4$, or $5$.

Let's list them:
$(6,1), (6,2), (6,3), (6,4), (6,5)$.

$B \cap C = \{(6,1),(6,2),(6,3),(6,4),(6,5)\}$, $|B \cap C| = 5$.

```text
      1 2 3 4 5 6
1     . . . . . .
2     . . . . . .
3     . . . . . .
4     . . . . . .
5     . . . . . .
6     X X X X X .
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if ((i > j) && (i == 6 || j == 6)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 4. $A \cap B^c$: The sum is 7, **but** the first die is **not** greater than the second

> **Question:** Mark: *the sum is 7, **but** the first die is not greater than the second*

**Step-by-step thinking:**
"Not greater than" simply means "less than or equal to".

**The condition:**
Which $(i,j)$ pairs satisfy: $i+j=7$ AND $i \leq j$ ?

Let's look at the pairs from Event $A$ (where the sum is 7) and see which ones pass the test $i \leq j$:
- $(1,6): 1 \leq 6$ ✅
- $(2,5): 2 \leq 5$ ✅
- $(3,4): 3 \leq 4$ ✅
- $(4,3): 4 \not\leq 3$ ❌
- $(5,2): 5 \not\leq 2$ ❌
- $(6,1): 6 \not\leq 1$ ❌

$A \cap B^c = \{(1,6),(2,5),(3,4)\}$, $|A \cap B^c| = 3$.

```text
      1 2 3 4 5 6
1     . . . . . X
2     . . . . X .
3     . . . X . .
4     . . . . . .
5     . . . . . .
6     . . . . . .
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if ((i + j == 7) && !(i > j)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 5. $A \cap C^c$: The sum is 7, **and** no die shows 6

> **Question:** Mark: *the sum is 7, **and** no die shows 6*

**Step-by-step thinking:**
"No die shows 6" is the direct opposite (complement) of "at least one die shows 6".

**The condition:**
Which $(i,j)$ pairs satisfy: $i+j=7$ AND $i \neq 6$ AND $j \neq 6$ ?

Take the list from Event $A$: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$.
We just need to throw out any pair that has a 6 in it:
- Toss out: $(1,6)$ and $(6,1)$.
- Keep what's left: $(2,5), (3,4), (4,3), (5,2)$.

$A \cap C^c = \{(2,5),(3,4),(4,3),(5,2)\}$, $|A \cap C^c| = 4$.

```text
      1 2 3 4 5 6
1     . . . . . .
2     . . . . X .
3     . . . X . .
4     . . X . . .
5     . X . . . .
6     . . . . . .
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if ((i + j == 7) && !(i == 6 || j == 6)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 6. $C \cap A^c$: At least one die shows 6, **but** the sum is **not** 7

> **Question:** Mark: *at least one die shows 6, **but** the sum is not 7*

**Step-by-step thinking:**
We need pairs where at least one die is 6, BUT we exclude the pairs where the sum is exactly 7.

**The condition:**
Which $(i,j)$ pairs satisfy: ($i=6$ OR $j=6$) AND $i+j \neq 7$ ?

Let's take the list from Event $C$ (the L-shape):
- Row 6: $(6,1), (6,2), (6,3), (6,4), (6,5), (6,6)$
- Col 6: $(1,6), (2,6), (3,6), (4,6), (5,6)$

Now we remove any pair where $i+j = 7$:
- $(6,1)$ sum is 7 ❌ remove
- $(1,6)$ sum is 7 ❌ remove

The remaining pairs: $(6,2), (6,3), (6,4), (6,5), (6,6)$ and $(2,6), (3,6), (4,6), (5,6)$.

$C \cap A^c = C \setminus A$, $|C \cap A^c| = 11 - 2 = 9$.

```text
      1 2 3 4 5 6
1     . . . . . .
2     . . . . . X
3     . . . . . X
4     . . . . . X
5     . . . . . X
6     . X X X X X
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if ((i == 6 || j == 6) && !(i + j == 7)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 7. $A^c \cap B$: The sum is **not** 7 **and** the first die is greater than the second

> **Question:** Mark: *the sum is not 7 **and** the first die is greater than the second*

**Step-by-step thinking:**
We need pairs where the first die is strictly greater than the second, BUT the sum is NOT 7.

**The condition:**
Which $(i,j)$ pairs satisfy: $i > j$ AND $i+j \neq 7$ ?

Let's take our existing $B$ set (the lower triangle, 15 elements):
$(2,1), (3,1), (3,2), (4,1), (4,2), (4,3), \dots$ etc.

Which of these have a sum of 7?
We know from Event $A$ that the sum is 7 for $(4,3), (5,2), (6,1)$.
We just remove these three from $B$.

$A^c \cap B = B \setminus A$, $|A^c \cap B| = 15 - 3 = 12$.

```text
      1 2 3 4 5 6
1     . . . . . .
2     X . . . . .
3     X X . . . .
4     X X . . . .
5     X . X X . .
6     . X X X X .
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if (!(i + j == 7) && (i > j)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 8. $B^c \cap C$: The first die is **not** greater than the second **and** at least one die shows 6

> **Question:** Mark: *the first die is not greater than the second **and** at least one die shows 6*

**Step-by-step thinking:**
"Not greater than" means $i \leq j$.

**The condition:**
Which $(i,j)$ pairs satisfy: $i \leq j$ AND ($i=6$ OR $j=6$) ?

Let's test our two cases for having a 6:
- If first die $i=6$: we need $6 \leq j$. Since $j$ is at most 6, the only solution is $(6,6)$.
- If second die $j=6$: we need $i \leq 6$. This is always true! So $i$ can be $1, 2, 3, 4, 5, 6$.
  This gives $(1,6), (2,6), (3,6), (4,6), (5,6), (6,6)$.

Combining these (and avoiding listing $(6,6)$ twice) gives:
$B^c \cap C = \{(1,6),(2,6),(3,6),(4,6),(5,6),(6,6)\}$, $|B^c \cap C| = 6$.

This is exactly the **rightmost column**.

```text
      1 2 3 4 5 6
1     . . . . . X
2     . . . . . X
3     . . . . . X
4     . . . . . X
5     . . . . . X
6     . . . . . X
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if (!(i > j) && (i == 6 || j == 6)) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 9. $(A \cup C)^c$: It is **not** true that (the sum is 7 **or** at least one die shows 6)

> **Question:** Mark: *it is not true that the sum is 7 **or** at least one die shows 6*

**Step-by-step thinking:**
This is the complement of our very first compound event ($A \cup C$).
By De Morgan's law: $(A \cup C)^c = A^c \cap C^c$.
This means: the sum is NOT 7 AND neither die is 6.

**The condition:**
Which $(i,j)$ pairs satisfy: $i+j \neq 7$ AND $i \leq 5$ AND $j \leq 5$ ?

"Neither die is 6" means we restrict ourselves to the top-left 5x5 grid (25 pairs).
Inside this 5x5 grid, we must remove the pairs where the sum is 7:
$(2,5), (3,4), (4,3), (5,2)$. (These are 4 pairs).

So we take the 25 pairs and remove those 4.
$|(A \cup C)^c| = 25 - 4 = 21$.

```text
      1 2 3 4 5 6
1     X X X X X .
2     X X X X . .
3     X X X . X .
4     X X . X X .
5     X . X X X .
6     . . . . . .
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if (!((i + j == 7) || (i == 6 || j == 6))) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

### 10. $(A \cap C)^c$: It is **not** true that (the sum is 7 **and** at least one die shows 6)

> **Question:** Mark: *it is not true that the sum is 7 **and** at least one die shows 6*

**Step-by-step thinking:**
This is the complement of our second compound event ($A \cap C$).
By De Morgan's law: $(A \cap C)^c = A^c \cup C^c$.
This means we want all outcomes **except** the ones where the sum is 7 AND there is a 6.

**The condition:**
We already found $A \cap C = \{(1,6), (6,1)\}$.
Since we are looking for the complement (everything NOT in the set), we just take the entire $6 \times 6$ grid (36 pairs) and remove $(1,6)$ and $(6,1)$.

$|(A \cap C)^c| = 36 - 2 = 34$.

```text
      1 2 3 4 5 6
1     X X X X X .
2     X X X X X X
3     X X X X X X
4     X X X X X X
5     X X X X X X
6     . X X X X X
```

**Java — for loop:**

```java
for (int i = 1; i <= 6; i++) {
    for (int j = 1; j <= 6; j++) {
        if (!((i + j == 7) && (i == 6 || j == 6))) {
            System.out.print("X ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}
```

---

> **Key observations across all 10 compound events:**
>
> - **Union ($\cup$)** corresponds to the logical **OR** (`||`) and produces a **larger** region.
> - **Intersection ($\cap$)** corresponds to the logical **AND** (`&&`) and produces a **smaller** region.
> - **Complement ($^c$)** corresponds to **NOT** (`!`) and produces the "negative" of the grid.
> - **De Morgan's Laws** are visually verifiable: the complement of a union equals the intersection of the complements, and vice versa.
> - The grid representation makes these set-theoretic operations **geometrically visible**, which is a core pedagogical goal of this problem.
> - Every grid above can be generated with **the same nested for-loop** — only the `if` condition changes. This is exactly like Java **star-pattern** exercises, where the shape is determined by the condition inside the loop.
