# Solution — Task 6: Binomial Model (Numerical)

## Problem Recap

The probability of a defective part is $p = 0.04$. An inspector checks $n = 10$ parts. Calculate:

1. P(exactly 2 defective)
2. P(at least one defective)

---

## Setup

**Why binomial?** Each part is independently inspected (Bernoulli trial), with the same probability $p = 0.04$ of being defective. We have a fixed number of trials $n = 10$. This is a classic binomial experiment.

Let $X$ = number of defective parts. Then:

$$X \sim \text{Bin}(n=10,\ p=0.04)$$

The binomial formula:

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

Here $q = 1 - p = 0.96$.

---

## Part (a): P(exactly 2 defective)

$$P(X = 2) = \binom{10}{2} \cdot (0.04)^2 \cdot (0.96)^8$$

**Step 1 — Binomial coefficient:**

$$\binom{10}{2} = \frac{10!}{2! \cdot 8!} = \frac{10 \cdot 9}{2 \cdot 1} = 45$$

> **Why $\binom{10}{2}$?** This counts the number of ways to choose **which** 2 of the 10 parts are the defective ones. It doesn't matter whether part 3 and part 7 are defective, or part 1 and part 10 — all such pairs contribute equally.

**Step 2 — Probability of defectives:**

$$(0.04)^2 = 0.0016$$

> **Why $(0.04)^2$?** The 2 defective parts each independently have probability 0.04. By independence, we multiply: $0.04 \times 0.04$.

**Step 3 — Probability of non-defectives:**

$$(0.96)^8 = 0.7214 \quad (\text{approximately})$$

> **Why $(0.96)^8$?** The remaining 8 parts must all be good. Each has probability 0.96, and by independence we multiply them.

**Putting it together:**

$$P(X = 2) = 45 \cdot 0.0016 \cdot 0.7214 = 45 \cdot 0.001154 \approx 0.0519$$

$$\boxed{P(X = 2) \approx 0.0519 \approx 5.19\%}$$

> **Interpretation:** There is about a 5.2% chance that exactly 2 out of 10 inspected parts are defective. This is relatively low because the defect rate ($p = 0.04$) is small.

---

## Part (b): P(at least one defective)

"At least one" means $X \geq 1$, i.e., $X \in \{1, 2, 3, \ldots, 10\}$.

**Why use the complement?**

Computing $P(X \geq 1)$ directly would require summing 10 terms:

$$P(X \geq 1) = P(X=1) + P(X=2) + \cdots + P(X=10)$$

This is tedious. Instead, we use the **complement rule**:

$$P(X \geq 1) = 1 - P(X = 0)$$

> **Why does this work?** The events "$X \geq 1$" and "$X = 0$" are complementary — one of them must be true. So their probabilities sum to 1.

**Calculate $P(X = 0)$:**

$$P(X = 0) = \binom{10}{0} \cdot (0.04)^0 \cdot (0.96)^{10} = 1 \cdot 1 \cdot (0.96)^{10}$$

$$(0.96)^{10} = 0.6648 \quad (\text{approximately})$$

**Apply complement:**

$$P(X \geq 1) = 1 - 0.6648 = 0.3352$$

$$\boxed{P(X \geq 1) \approx 0.3352 \approx 33.52\%}$$

> **Interpretation:** Despite the low defect rate of 4%, when checking 10 parts there is about a 1 in 3 chance of finding at least one defective part. This illustrates how repeated trials accumulate probability.
