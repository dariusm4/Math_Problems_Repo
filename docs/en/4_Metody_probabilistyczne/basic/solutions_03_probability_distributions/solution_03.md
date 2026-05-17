# Solution — Task 3: Geometric Model (Waiting for the First Event)

## Problem Recap

In a printing house, each page may contain a **printing error** with probability $p$. We observe consecutive pages until the **first error** appears.

---

## 1. Describe the random experiment

**The experiment:** We inspect pages one by one. For each page, we check whether it has an error (with probability $p$) or not (with probability $q = 1-p$). We **stop** as soon as we find the first page with an error.

**Why the geometric distribution?**

| Feature | Our experiment |
|---------|----------------|
| We repeat independent Bernoulli trials | ✅ Each page is checked independently |
| Same probability $p$ each trial | ✅ Each page has the same error probability |
| We count trials until first success | ✅ We stop at the first error |
| Number of trials is **not** fixed in advance | ✅ We don't know beforehand when the first error will appear |

> **Key insight:** The geometric distribution is the "waiting time" distribution — it answers "how long do we wait until the first success?" Unlike the binomial (fixed number of trials), the geometric model has a **random** number of trials.

---

## 2. Determine the sample space $\Omega$

Let $X$ = the page number on which the first error appears.

The first error could appear on page 1, page 2, page 3, …, and in theory there is no upper bound (we might be incredibly unlucky and keep finding error-free pages for a very long time):

$$\Omega = \{1, 2, 3, 4, \ldots\} = \mathbb{N}^+$$

> **Why infinite?** There is always a nonzero probability (however tiny) that the first $k$ pages are all error-free, no matter how large $k$ is. So we cannot set an upper limit.

---

## 3. Provide the probability distribution

**The geometric formula:**

$$P(X = k) = (1-p)^{k-1} \cdot p, \quad k = 1, 2, 3, \ldots$$

**Why this formula? Let's build it from first principles:**

For the first error to appear on page $k$, we need:

- Pages $1, 2, \ldots, k-1$ are all **error-free** (each with probability $q = 1-p$)
- Page $k$ **has an error** (probability $p$)

Since the pages are inspected **independently**, we multiply:

$$P(X = k) = \underbrace{(1-p) \cdot (1-p) \cdots (1-p)}_{k-1 \text{ error-free pages}} \cdot\ p = (1-p)^{k-1} \cdot p$$

**Example values** (for illustration, assume $p = 0.1$):

| $k$ (page of first error) | $P(X = k)$ | Calculation | Value |
|---------------------------|-------------|-------------|-------|
| 1 | $(0.9)^0 \cdot 0.1$ | $1 \cdot 0.1$ | 0.1000 |
| 2 | $(0.9)^1 \cdot 0.1$ | $0.9 \cdot 0.1$ | 0.0900 |
| 3 | $(0.9)^2 \cdot 0.1$ | $0.81 \cdot 0.1$ | 0.0810 |
| 4 | $(0.9)^3 \cdot 0.1$ | $0.729 \cdot 0.1$ | 0.0729 |
| 5 | $(0.9)^4 \cdot 0.1$ | $0.6561 \cdot 0.1$ | 0.0656 |

> **Pattern:** The probabilities form a decreasing geometric sequence (hence the name!). The most likely outcome is always $k = 1$ (first page has the error). As $k$ increases, the probability decreases exponentially.

**Verification — probabilities sum to 1:**

$$\sum_{k=1}^{\infty} (1-p)^{k-1} \cdot p = p \cdot \sum_{k=0}^{\infty} (1-p)^k = p \cdot \frac{1}{1-(1-p)} = p \cdot \frac{1}{p} = 1 \quad \checkmark$$

We used the geometric series formula: $\sum_{k=0}^{\infty} r^k = \frac{1}{1-r}$ for $|r| < 1$.

---

## 4. Specify what is considered a success

A **"success"** is finding a **page with a printing error**.

> **Why?** We are counting how many trials it takes until we observe this event. The geometric distribution always measures trials until the first occurrence of the "success" event.

> **Memoryless property (bonus):** The geometric distribution is the only discrete distribution with the memoryless property: $P(X > m + n \mid X > m) = P(X > n)$. This means that if you've checked 10 pages without finding an error, the probability of needing at least 5 more pages is the same as if you were starting fresh. "The pages don't remember" how long you've been looking.
