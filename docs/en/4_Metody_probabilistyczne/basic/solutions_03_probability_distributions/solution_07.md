# Solution — Task 7: Hypergeometric Model (Numerical)

## Problem Recap

A box contains:
- **12 working** light bulbs
- **3 defective** ones
- **Total: 15** bulbs

We draw **5 bulbs without replacement**. Calculate P(exactly 2 defective).

---

## Setup

**Why hypergeometric?** We draw **without replacement** from a **finite** population. This means each draw changes the composition of remaining bulbs — the probability shifts. This is exactly the hypergeometric scenario.

> **Contrast with binomial:** If we were drawing **with replacement** (put each bulb back before drawing the next), we'd use binomial. But since drawn bulbs stay out of the box, the hypergeometric model is correct.

**Parameters:**
- $N = 15$ (total bulbs)
- $K = 3$ (defective bulbs — "success" category)
- $n = 5$ (bulbs drawn)
- $k = 2$ (defective bulbs we want in our sample)

---

## Applying the hypergeometric formula

$$P(X = k) = \frac{\binom{K}{k} \cdot \binom{N-K}{n-k}}{\binom{N}{n}}$$

**Why this formula?** (Recall from Task 2)

- **Numerator:** The number of favorable ways = (ways to pick $k$ defective) × (ways to pick $n-k$ working)
- **Denominator:** The total number of ways to pick any $n$ bulbs from $N$

$$P(X = 2) = \frac{\binom{3}{2} \cdot \binom{12}{3}}{\binom{15}{5}}$$

**Step 1 — Choose 2 defective from 3:**

$$\binom{3}{2} = \frac{3!}{2! \cdot 1!} = 3$$

> **Meaning:** There are 3 ways to pick which 2 of the 3 defective bulbs end up in our sample.

**Step 2 — Choose 3 working from 12:**

$$\binom{12}{3} = \frac{12!}{3! \cdot 9!} = \frac{12 \cdot 11 \cdot 10}{3 \cdot 2 \cdot 1} = \frac{1\,320}{6} = 220$$

> **Meaning:** There are 220 ways to fill the remaining 3 spots in our sample with working bulbs.

**Step 3 — Total ways to draw 5 from 15:**

$$\binom{15}{5} = \frac{15!}{5! \cdot 10!} = \frac{15 \cdot 14 \cdot 13 \cdot 12 \cdot 11}{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = \frac{360\,360}{120} = 3\,003$$

**Step 4 — Combine:**

$$P(X = 2) = \frac{3 \cdot 220}{3\,003} = \frac{660}{3\,003} = \frac{220}{1\,001} \approx 0.2198$$

$$\boxed{P(X = 2) = \frac{220}{1\,001} \approx 0.2198 \approx 21.98\%}$$

> **Interpretation:** There is approximately a 22% chance that exactly 2 of the 5 drawn bulbs are defective. Given that 3 out of 15 (20%) bulbs are defective, getting 2 out of 5 (40%) is relatively high — but not extremely unlikely due to the small sample size.

> **Sanity check:** The expected number of defective bulbs in the sample is $E[X] = n \cdot \frac{K}{N} = 5 \cdot \frac{3}{15} = 1$. Getting exactly 2 (one more than average) should have a reasonable probability, and 22% confirms this.
