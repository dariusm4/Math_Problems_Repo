# Solution — Task 4: Poisson Model (Arrival of Events)

## Problem Recap

A web service receives on average **3 error reports per hour**. The number of reports follows a **Poisson distribution**.

---

## 1. Describe the random experiment

**The experiment:** We observe the web service for **1 hour** and count how many error reports arrive during that period.

**Why Poisson distribution?**

The Poisson model is appropriate when:

| Condition | Check |
|-----------|-------|
| Events occur **independently** of each other | ✅ One error report does not cause another |
| Events occur at a **constant average rate** | ✅ The average rate is 3 per hour |
| Two events cannot happen at the **exact same instant** | ✅ Reports arrive one at a time |
| We are counting events in a **continuous interval** (time/space) | ✅ We count over a 1-hour window |

> **Key insight:** The Poisson distribution models **rare, random events** occurring over a continuous interval. Unlike the binomial (which needs a fixed number of discrete trials), Poisson describes events that could theoretically occur any number of times in the interval.

> **Connection to binomial:** Poisson can be derived as a limit of the binomial distribution when $n \to \infty$, $p \to 0$, and $np = \lambda$ stays constant. Imagine splitting 1 hour into millions of tiny intervals — each has a very small probability of containing an error report, but there are very many intervals.

---

## 2. Determine the sample space $\Omega$

Let $X$ = number of error reports received in 1 hour.

$$\Omega = \{0, 1, 2, 3, \ldots\} = \mathbb{N}_0$$

> **Why infinite?** Although receiving, say, 100 reports in one hour is extremely unlikely, it is not impossible. The Poisson model allows any non-negative integer value.

---

## 3. Provide the formula of the probability distribution

**The Poisson formula:**

$$P(X = k) = \frac{\lambda^k \cdot e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \ldots$$

**Why this formula? Breaking down each component:**

- $\lambda^k$: represents the "weight" of observing $k$ events — higher $\lambda$ makes larger $k$ values more likely
- $e^{-\lambda}$: a normalizing factor that ensures the probabilities sum to 1; it represents the probability of "zero events" before any scaling
- $k!$: accounts for the fact that the order of arrival doesn't matter — it divides out the $k!$ possible orderings

With $\lambda = 3$:

$$P(X = k) = \frac{3^k \cdot e^{-3}}{k!}$$

**Example calculations:**

| $k$ | $\lambda^k$ | $k!$ | $P(X = k) = \frac{3^k \cdot e^{-3}}{k!}$ | ≈ |
|-----|-----------|------|-----------------------------------|------|
| 0 | $1$ | $1$ | $e^{-3}$ | 0.0498 |
| 1 | $3$ | $1$ | $3e^{-3}$ | 0.1494 |
| 2 | $9$ | $2$ | $\frac{9}{2}e^{-3}$ | 0.2240 |
| 3 | $27$ | $6$ | $\frac{27}{6}e^{-3}$ | 0.2240 |
| 4 | $81$ | $24$ | $\frac{81}{24}e^{-3}$ | 0.1680 |
| 5 | $243$ | $120$ | $\frac{243}{120}e^{-3}$ | 0.1008 |

> **Observation:** The probabilities increase up to $k = \lambda$ (or nearby), then decrease. The mode of a Poisson distribution is at or near $\lambda$.

**Verification — probabilities sum to 1:**

$$\sum_{k=0}^{\infty} \frac{\lambda^k e^{-\lambda}}{k!} = e^{-\lambda} \sum_{k=0}^{\infty} \frac{\lambda^k}{k!} = e^{-\lambda} \cdot e^{\lambda} = 1 \quad \checkmark$$

We used the Taylor series: $e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!}$

---

## 4. Interpret the parameter $\lambda$

$\lambda = 3$ is the **expected (average) number of events** per unit time (here, per hour).

**Formal interpretation:**

- $\lambda = E[X]$ — the mean of the distribution
- $\lambda = \text{Var}(X)$ — also the variance (a unique property of Poisson!)

> **Practical meaning:** If we observed this web service over many hours, the average number of error reports per hour would converge to 3. Some hours would have 0 or 1 reports, others might have 5 or 6, but on average it's 3.

> **Scaling property:** If $\lambda = 3$ per hour, then:
> - In 2 hours: $\lambda' = 6$ reports expected
> - In 30 minutes: $\lambda' = 1.5$ reports expected
> - In general: $\lambda' = \lambda \cdot t$ where $t$ is the time interval length
