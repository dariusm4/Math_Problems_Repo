# Solution — Task 9: Poisson Model (Numerical)

## Problem Recap

A customer service center receives on average **$\lambda = 5$ requests per hour**. Calculate:

1. P(exactly 3 requests in one hour)
2. P(at least one request in one hour)

---

## Setup

**Why Poisson?** We're counting random events (service requests) arriving over a continuous time interval (1 hour) at a known average rate. The requests are assumed to be independent of each other. This fits the Poisson model perfectly.

$$X \sim \text{Poisson}(\lambda = 5)$$

The Poisson formula:

$$P(X = k) = \frac{\lambda^k \cdot e^{-\lambda}}{k!}$$

We'll use $e^{-5} \approx 0.006738$.

---

## Part (a): P(exactly 3 requests)

$$P(X = 3) = \frac{5^3 \cdot e^{-5}}{3!}$$

**Step 1 — Numerator components:**

$$5^3 = 125$$
$$e^{-5} \approx 0.006738$$
$$5^3 \cdot e^{-5} = 125 \times 0.006738 = 0.8422$$

**Step 2 — Denominator:**

$$3! = 6$$

> **Why $3!$ in the denominator?** The Poisson formula counts the probability of $k$ events occurring in the interval. The $k!$ accounts for the fact that we don't care about the **order** in which the 3 requests arrive — only the **count** matters.

**Step 3 — Divide:**

$$P(X = 3) = \frac{0.8422}{6} = 0.1404$$

$$\boxed{P(X = 3) \approx 0.1404 \approx 14.04\%}$$

> **Interpretation:** There is about a 14% chance of receiving exactly 3 requests in an hour, which is slightly below the average of 5. This makes sense: the Poisson distribution is skewed right for $\lambda = 5$, and $k = 3$ is below the mean.

---

## Part (b): P(at least one request)

"At least one" means $X \geq 1$.

**Why use the complement?**

Computing $P(X \geq 1) = P(X=1) + P(X=2) + P(X=3) + \cdots$ would require an infinite sum. Instead:

$$P(X \geq 1) = 1 - P(X = 0)$$

> **Why does this work?** "$X \geq 1$" and "$X = 0$" are exhaustive, mutually exclusive events. Together they cover all possibilities, so $P(X \geq 1) + P(X = 0) = 1$.

**Calculate $P(X = 0)$:**

$$P(X = 0) = \frac{5^0 \cdot e^{-5}}{0!} = \frac{1 \cdot e^{-5}}{1} = e^{-5} \approx 0.006738$$

> **Why is $P(X=0)$ so small?** When $\lambda = 5$, having **zero** requests in an entire hour is extremely unlikely — on average we expect 5. The probability decays exponentially as $e^{-\lambda}$.

**Apply complement:**

$$P(X \geq 1) = 1 - e^{-5} = 1 - 0.006738 = 0.9933$$

$$\boxed{P(X \geq 1) \approx 0.9933 \approx 99.33\%}$$

> **Interpretation:** There is a 99.3% chance that at least one request arrives within the hour. This is almost certain — the average is 5 per hour, so it would be very unusual to see a completely quiet hour.

> **General formula:** For any Poisson distribution, $P(X \geq 1) = 1 - e^{-\lambda}$. As $\lambda$ increases, this approaches 1 very quickly.
