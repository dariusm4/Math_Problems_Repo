# Solution — Task 2: Hypergeometric Model (Sampling from a Batch)

## Problem Recap

A warehouse has **20 components**: **5 defective**, **15 functional**. We draw **4 without replacement**. Let $X$ = number of defective components in our sample.

---

## 1. Describe the random experiment

**The experiment:** We randomly select 4 components from a batch of 20, **without replacement** (once selected, a component is not put back).

**Why hypergeometric and not binomial?**

| Model | Replacement? | Population | Probability changes? |
|-------|-------------|------------|---------------------|
| Binomial | With replacement (or infinite pop.) | Effectively unlimited | No — $p$ stays constant |
| **Hypergeometric** | **Without replacement** | **Finite (20)** | **Yes — each draw changes the pool** |

> **Key insight:** Since we draw **without replacement** from a **finite** population, the probability of drawing a defective item changes after each draw. For example, if the first draw is defective, there are now only 4 defective out of 19 remaining. This dependency between draws is exactly what the hypergeometric distribution captures.

---

## 2. Define the sample space $\Omega$

We define $X$ = number of defective components among the 4 drawn.

$$\Omega = \{0, 1, 2, 3, 4\}$$

These are all possible counts of defective items in our sample.

> **Why can $X$ go from 0 to 4?** The minimum is 0 (all 4 drawn are functional). The maximum is 4 (all 4 drawn are defective) — this is possible because there are 5 defective components and we only draw 4.

---

## 3. Determine the possible values of the random variable

$X$ can take values $k \in \{0, 1, 2, 3, 4\}$.

More precisely, the possible values satisfy:

$$\max(0,\ n - (N - K)) \leq k \leq \min(n, K)$$

where $N = 20$ (total), $K = 5$ (defective), $n = 4$ (drawn):

$$\max(0,\ 4 - 15) = \max(0, -11) = 0$$
$$\min(4, 5) = 4$$

So $k \in \{0, 1, 2, 3, 4\}$ ✓

---

## 4. Provide the probability distribution

**The hypergeometric formula:**

$$P(X = k) = \frac{\binom{K}{k} \cdot \binom{N-K}{n-k}}{\binom{N}{n}}$$

**Why this formula?**

- $\binom{K}{k}$ = ways to choose $k$ defective items from $K$ defective total → we pick which defective items end up in our sample
- $\binom{N-K}{n-k}$ = ways to choose the remaining $n-k$ functional items from $N-K$ functional total → we fill the rest of the sample with good items
- $\binom{N}{n}$ = total ways to choose any $n$ items from $N$ → this is the denominator (total equally likely outcomes)

> **Intuition:** We are counting favorable outcomes over total outcomes. The favorable outcomes are those where exactly $k$ of our 4 items come from the defective pile and the rest come from the functional pile.

**Substituting** $N=20$, $K=5$, $n=4$:

$$P(X = k) = \frac{\binom{5}{k} \cdot \binom{15}{4-k}}{\binom{20}{4}}$$

**Denominator (total ways):**

$$\binom{20}{4} = \frac{20!}{4! \cdot 16!} = \frac{20 \cdot 19 \cdot 18 \cdot 17}{4 \cdot 3 \cdot 2 \cdot 1} = \frac{116\,280}{24} = 4\,845$$

**Now compute each probability:**

**$P(X = 0)$: No defective items**

$$P(X=0) = \frac{\binom{5}{0} \cdot \binom{15}{4}}{\binom{20}{4}} = \frac{1 \cdot 1\,365}{4\,845} = \frac{1\,365}{4\,845} \approx 0.2817$$

where $\binom{15}{4} = \frac{15 \cdot 14 \cdot 13 \cdot 12}{4!} = \frac{32\,760}{24} = 1\,365$

**$P(X = 1)$: Exactly 1 defective**

$$P(X=1) = \frac{\binom{5}{1} \cdot \binom{15}{3}}{\binom{20}{4}} = \frac{5 \cdot 455}{4\,845} = \frac{2\,275}{4\,845} \approx 0.4696$$

where $\binom{15}{3} = \frac{15 \cdot 14 \cdot 13}{3!} = \frac{2\,730}{6} = 455$

**$P(X = 2)$: Exactly 2 defective**

$$P(X=2) = \frac{\binom{5}{2} \cdot \binom{15}{2}}{\binom{20}{4}} = \frac{10 \cdot 105}{4\,845} = \frac{1\,050}{4\,845} \approx 0.2167$$

where $\binom{15}{2} = \frac{15 \cdot 14}{2} = 105$

**$P(X = 3)$: Exactly 3 defective**

$$P(X=3) = \frac{\binom{5}{3} \cdot \binom{15}{1}}{\binom{20}{4}} = \frac{10 \cdot 15}{4\,845} = \frac{150}{4\,845} \approx 0.0310$$

**$P(X = 4)$: All 4 defective**

$$P(X=4) = \frac{\binom{5}{4} \cdot \binom{15}{0}}{\binom{20}{4}} = \frac{5 \cdot 1}{4\,845} = \frac{5}{4\,845} \approx 0.0010$$

**Summary table:**

| $k$ | $P(X = k)$ | Fraction | Decimal |
|-----|------------|----------|---------|
| 0 | $\frac{1\,365}{4\,845}$ | — | 0.2817 |
| 1 | $\frac{2\,275}{4\,845}$ | — | 0.4696 |
| 2 | $\frac{1\,050}{4\,845}$ | — | 0.2167 |
| 3 | $\frac{150}{4\,845}$ | — | 0.0310 |
| 4 | $\frac{5}{4\,845}$ | — | 0.0010 |

**Verification:** $1\,365 + 2\,275 + 1\,050 + 150 + 5 = 4\,845$ ✓ (probabilities sum to 1)

---

## 5. Explain what a success means

A **"success"** is drawing a **defective component**.

> **Why?** We defined $X$ as the count of defective items. The "success" label always goes to the outcome we are counting. Here, each draw can result in a defective (success) or functional (failure) component.
