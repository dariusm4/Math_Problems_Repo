# Solution — Task 8: Geometric Model (Numerical)

## Problem Recap

The probability of a compilation error is $p = 0.1$. A programmer compiles repeatedly until the **first error**. Calculate:

1. P(first error on the 4th compilation)
2. P(first error no later than the 3rd compilation)

---

## Setup

**Why geometric?** The programmer performs independent trials (compilations), each with the same probability $p = 0.1$ of "success" (error). We count how many trials until the first success. This is the geometric model.

$$X \sim \text{Geom}(p = 0.1)$$

The geometric formula:

$$P(X = k) = (1-p)^{k-1} \cdot p, \quad k = 1, 2, 3, \ldots$$

Here $q = 1 - p = 0.9$.

---

## Part (a): First error on the 4th compilation

For the first error to occur on compilation $k = 4$, we need:

- Compilations 1, 2, 3: all **error-free** (probability $0.9$ each)
- Compilation 4: **error** (probability $0.1$)

$$P(X = 4) = (0.9)^{4-1} \cdot 0.1 = (0.9)^3 \cdot 0.1$$

**Calculate:**

$$(0.9)^3 = 0.9 \times 0.9 \times 0.9 = 0.729$$

$$P(X = 4) = 0.729 \times 0.1 = 0.0729$$

$$\boxed{P(X = 4) = 0.0729 = 7.29\%}$$

> **Interpretation:** There is about a 7.3% chance that the first three compilations succeed and the fourth one fails. This is lower than $P(X=1) = 0.1$ because we need three consecutive successes before the error.

> **Pattern:** Each step later reduces the probability by a factor of $q = 0.9$:
> - $P(X=1) = 0.1$
> - $P(X=2) = 0.09$
> - $P(X=3) = 0.081$
> - $P(X=4) = 0.0729$ ← our answer

---

## Part (b): First error no later than the 3rd compilation

"No later than the 3rd" means $X \leq 3$, i.e., the first error happens on compilation 1, 2, or 3.

### Method 1: Direct sum

$$P(X \leq 3) = P(X=1) + P(X=2) + P(X=3)$$

$$= (0.9)^0 \cdot 0.1 + (0.9)^1 \cdot 0.1 + (0.9)^2 \cdot 0.1$$

$$= 0.1 + 0.09 + 0.081$$

$$= 0.271$$

### Method 2: Complement (more elegant)

$$P(X \leq 3) = 1 - P(X > 3) = 1 - P(X \geq 4)$$

$P(X \geq 4)$ means the first error happens on compilation 4 or later, which means **the first 3 compilations are all error-free**:

$$P(X \geq 4) = P(\text{no error in first 3}) = (1-p)^3 = (0.9)^3 = 0.729$$

> **Why does $P(X \geq 4) = (0.9)^3$?** For the first error to be on trial 4 or later, all we need is that trials 1, 2, and 3 are error-free. We don't care about what happens from trial 4 onward.

Therefore:

$$P(X \leq 3) = 1 - 0.729 = 0.271$$

$$\boxed{P(X \leq 3) = 0.271 = 27.1\%}$$

> **Interpretation:** There is about a 27% chance that the programmer encounters the first error within the first 3 compilations. Conversely, there is a 73% chance that all three compilations run error-free.

> **General formula:** $P(X \leq k) = 1 - (1-p)^k$. This is actually the CDF (cumulative distribution function) of the geometric distribution.
