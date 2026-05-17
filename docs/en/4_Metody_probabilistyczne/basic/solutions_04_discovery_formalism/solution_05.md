# Solution — Problem 5: From Recorded Frequencies to Probability

## Problem Recap

A student rolled a six-sided die **1000 times** and recorded:

$$n(\{1\})=168,\quad n(\{2\})=154,\quad n(\{3\})=181,\quad n(\{4\})=167,\quad n(\{5\})=160,\quad n(\{6\})=170.$$

The sample space is $\Omega = \{1,2,3,4,5,6\}$.

For any event $A \subseteq \Omega$, the **observed frequency** is: $f(A) = \frac{n(A)}{1000}$

---

## Part A — From Elementary Outcomes to Events

> **Question:** Compute observed frequencies of: $A=\{2,4,6\}$, $B=\{1,2,3\}$, $C=\{5,6\}$, $D=\{1,3,5\}$, $E=\{1,2,3,4\}$

For each event, we compute $n(A)$ by summing the counts of the elementary outcomes it contains, then compute $f(A)$.

### 1. $A = \{2, 4, 6\}$ (even numbers)

$$n(A) = n(\{2\}) + n(\{4\}) + n(\{6\}) = 154 + 167 + 170 = 491$$
$$f(A) = \frac{491}{1000} = 0.491$$

### 2. $B = \{1, 2, 3\}$ (numbers ≤ 3)

$$n(B) = n(\{1\}) + n(\{2\}) + n(\{3\}) = 168 + 154 + 181 = 503$$
$$f(B) = \frac{503}{1000} = 0.503$$

### 3. $C = \{5, 6\}$ (numbers ≥ 5)

$$n(C) = n(\{5\}) + n(\{6\}) = 160 + 170 = 330$$
$$f(C) = \frac{330}{1000} = 0.330$$

### 4. $D = \{1, 3, 5\}$ (odd numbers)

$$n(D) = n(\{1\}) + n(\{3\}) + n(\{5\}) = 168 + 181 + 160 = 509$$
$$f(D) = \frac{509}{1000} = 0.509$$

### 5. $E = \{1, 2, 3, 4\}$ (numbers ≤ 4)

$$n(E) = n(\{1\}) + n(\{2\}) + n(\{3\}) + n(\{4\}) = 168 + 154 + 181 + 167 = 670$$
$$f(E) = \frac{670}{1000} = 0.670$$

**Summary table:**

| Event | Elements | $n(\cdot)$ | $f(\cdot)$ |
|:---:|:---:|:---:|:---:|
| $A$ | $\{2,4,6\}$ | 491 | 0.491 |
| $B$ | $\{1,2,3\}$ | 503 | 0.503 |
| $C$ | $\{5,6\}$ | 330 | 0.330 |
| $D$ | $\{1,3,5\}$ | 509 | 0.509 |
| $E$ | $\{1,2,3,4\}$ | 670 | 0.670 |

---

## Part B — How Frequencies Combine

> **Question:** Verify the following relations and explain why they hold: 
> (1) $f(\{2,4,6\}) = f(\{2\})+f(\{4\})+f(\{6\})$
> (2) $f(\{1,2,3,4\}) = f(\{1,2\})+f(\{3,4\})$
> (3) $f(\{1,3,5\})+f(\{2,4,6\})=1$
> (4) $f(\{5,6\})=1-f(\{1,2,3,4\})$

### 1. Disjoint singletons

**Left side:** $f(\{2,4,6\}) = 0.491$.
**Right side:** $f(\{2\}) + f(\{4\}) + f(\{6\}) = \frac{154 + 167 + 170}{1000} = 0.491$

✅ **Verified.** The equality holds because $\{2\}, \{4\}, \{6\}$ are **pairwise disjoint**. No throw can produce two different outcomes simultaneously, so the count is exactly the sum of individual counts.

### 2. Disjoint sets

**Left side:** $f(\{1,2,3,4\}) = 0.670$.
**Right side:** $f(\{1,2\}) + f(\{3,4\}) = \frac{322}{1000} + \frac{348}{1000} = 0.670$

✅ **Verified.** The equality holds because $\{1,2\}$ and $\{3,4\}$ are **disjoint**, and their union is $\{1,2,3,4\}$. Frequency is **additive on disjoint events**.

### 3. Complementary sets sum to 1

**Left side:** $f(\{1,3,5\}) + f(\{2,4,6\}) = 0.509 + 0.491 = 1.000$

✅ **Verified.** $\{1,3,5\}$ and $\{2,4,6\}$ are **complementary events**: disjoint and union is $\Omega$. Every throw produces one, so counts sum to 1000.

### 4. Complement rule

**Left side:** $f(\{5,6\}) = 0.330$.
**Right side:** $1 - f(\{1,2,3,4\}) = 1 - 0.670 = 0.330$.

✅ **Verified.** $\{5,6\} = \{1,2,3,4\}^c$. Since $f(\Omega) = 1$, $f(A) + f(A^c) = 1 \Longrightarrow f(A^c) = 1 - f(A)$.

---

## Part C — When Simple Addition Works and When It Fails

> **Question:** Check when $f(A \cup B) = f(A)+f(B)$ works and when it fails (using $M=\{1,2,3\}, N=\{3,4,5\}$). Explain why it fails and identify double-counted outcomes.

### 1. Disjoint union works

$$f(\{1,2\} \cup \{5,6\}) = 0.652 \quad \text{and} \quad f(\{1,2\}) + f(\{5,6\}) = \frac{322}{1000} + \frac{330}{1000} = 0.652$$

✅ **Verified.** Sets are disjoint, so additivity applies.

### 2. Overlapping sets fail

$$M = \{1,2,3\},\qquad N = \{3,4,5\}$$
$$f(M) = 0.503, \quad f(N) = 0.508$$
$$f(M \cup N) = f(\{1,2,3,4,5\}) = \frac{168+154+181+167+160}{1000} = 0.830$$
$$f(M) + f(N) = 0.503 + 0.508 = 1.011$$

### 3. Why it fails & double counting

The sum $f(M)+f(N)$ overcounts because $M$ and $N$ are **not disjoint**. 
$M \cap N = \{3\}$. The outcome **3** belongs to both.
The correct formula is **inclusion-exclusion**:
$f(M \cup N) = f(M) + f(N) - f(M \cap N) = 1.011 - 0.181 = 0.830$

---

## Part D — Covering the Whole Sample Space

> **Question:** Sum frequencies of all singletons. Split $\Omega$ into disjoint events. Formulate a general statement about partitions.

### 1. Sum of all singletons
$$\sum_{k=1}^{6} f(\{k\}) = \frac{168+154+181+167+160+170}{1000} = 1$$
Every single throw produces exactly one outcome, so the total count is 1000.

### 2. Splitting $\Omega$ into disjoint events
$\Omega = \{1,2\} \cup \{3,4\} \cup \{5,6\}$
$f(\{1,2\}) + f(\{3,4\}) + f(\{5,6\}) = 0.322 + 0.348 + 0.330 = 1.000$

### 3. General statement

> **Theorem (Additivity of frequency over partitions):** If $\Omega = A_1 \cup A_2 \cup \cdots \cup A_m$ where the $A_i$ are pairwise disjoint, then $f(A_1) + \cdots + f(A_m) = 1$.
Every elementary outcome belongs to exactly one $A_i$, ensuring $\sum n(A_i) = 1000$.

---

## Part E — From Observed Frequency to Probability

> **Question:** Based on observed properties, write down what properties a probability function should have.

### Property 1: Values between 0 and 1
$$0 \leq P(A) \leq 1$$
**Justification:** $0 \leq n(A) \leq 1000$, so $0 \leq f(A) \leq 1$. frequencies can't be negative or > 100%.

### Property 2: The impossible event has probability 0
$$P(\emptyset) = 0$$
**Justification:** No throw produces an outcome in $\emptyset$, so $n(\emptyset) = 0$ and $f(\emptyset) = 0$.

### Property 3: The whole sample space has probability 1
$$P(\Omega) = 1$$
**Justification:** Every throw produces some outcome in $\Omega$, so $n(\Omega) = 1000$ and $f(\Omega) = 1$.

### Property 4: Additivity for disjoint events
$$\text{If } A \cap B = \emptyset, \quad \text{then } P(A \cup B) = P(A) + P(B)$$
**Justification:** Verified in parts B, C, D. No throw is counted twice when events don't overlap.

---

## Part F — Conclusion

> **Question:** Explain how elementary outcomes, observed frequencies, and probability as abstraction are connected.

### Level 1: Elementary outcomes and events
The **structural** level. $\Omega$ is the set of all possible results. Events are subsets. We describe *what can happen* using sets, without numbers.

### Level 2: Observed frequencies
The **empirical** level. We perform 1000 throws and calculate $f(A) = \frac{n(A)}{1000}$. Concrete data that reflects what *actually happened*.

### Level 3: Probability as mathematical abstraction
The **formal** level. Inspired by frequencies, we mandate a function $P$ satisfying the properties observed in Part E (axioms). 

Frequency depends on a specific experiment. Probability is a fixed mathematical object that acts as the **idealized model**. Level 1 provides structure, Level 2 provides motivation, Level 3 provides the formal framework.
