# Problem 2 — Coin Tosses and Relative Frequencies

## Problem Statement

We are given a dataset of 2000 simulated coin tosses (generated with seed 702). Each toss results in either heads (H) or tails (T). The dataset tracks cumulative heads counts and running relative frequencies. Our tasks are to describe the experiment, build frequency tables, plot the evolution of the relative frequency over time, relate our observations to the Law of Large Numbers, and assess whether the coin appears to be fair.

## Generated Files

- Dataset: [problem_02_coin_tosses.csv](problem_02_coin_tosses/problem_02_coin_tosses.csv)
- Frequency table: [frequency_table.csv](problem_02_coin_tosses/frequency_table.csv)
- Relative frequency checkpoints: [relative_frequency_checkpoints.csv](problem_02_coin_tosses/relative_frequency_checkpoints.csv)
- Relative frequency plot: [relative_frequency_heads.png](problem_02_coin_tosses/relative_frequency_heads.png)

---

## Solution

### Task 1: Describe the random experiment represented by the dataset

**Answer:**

The dataset represents a **Bernoulli experiment** repeated 2000 times. Each trial consists of tossing a coin once. The outcome space for a single toss is:

$$
\Omega = \{H, T\},
$$

where \( H \) denotes heads and \( T \) denotes tails. We can define a random variable \( X_i \) for the \( i \)-th toss:

$$
X_i = \begin{cases} 1 & \text{if the } i\text{-th toss is heads,} \\ 0 & \text{if the } i\text{-th toss is tails.} \end{cases}
$$

Each \( X_i \) follows a **Bernoulli distribution** \( X_i \sim \text{Bernoulli}(p) \), where \( p \) is the probability of heads. For a fair coin, \( p = 0.5 \).

The dataset has the following columns:

| Column | Meaning |
|--------|---------|
| `trial` | The sequential number of the toss (1 through 2000) |
| `result` | The observed outcome: `H` (heads) or `T` (tails) |
| `is_head` | Boolean flag: `True` if the result is heads |
| `cumulative_heads` | Running total of heads observed up to and including this trial |
| `relative_frequency_heads` | Proportion of heads out of all trials so far: \( \frac{\text{cumulative\_heads}}{\text{trial}} \) |

For instance, the first row shows `trial=1, result=H, is_head=True, cumulative_heads=1, relative_frequency_heads=1.0` — the first toss was heads, so after one trial the relative frequency of heads is \( 1/1 = 1.0 \) (100%).

The key feature of this dataset is that it tracks the **evolution of the relative frequency** over time, which allows us to observe the empirical manifestation of the **Law of Large Numbers**.

---

### Task 2: Construct a frequency table for `result`

**Answer:**

The **absolute frequency** counts how many times each outcome occurred across all 2000 tosses:

| Result | Absolute frequency \( n_k \) |
|:---:|:---:|
| H (Heads) | 1038 |
| T (Tails) | 962 |
| **Total** | **2000** |

We can verify: \( 1038 + 962 = 2000 \). ✓

Out of 2000 tosses, heads appeared 1038 times — 76 more times than tails. This means heads has a **surplus** of:

$$
\Delta n = n_H - n_T = 1038 - 962 = 76.
$$

While this may seem like a noticeable imbalance, we need to consider it relative to the total sample size. The proportional surplus is \( 76/2000 = 0.038 = 3.8\% \), which is moderate.

In Python:

```python
import pandas as pd

df = pd.read_csv("problem_02_coin_tosses.csv")
freq = df["result"].value_counts()
print(freq)
# H    1038
# T     962
```

---

### Task 3: Compute the relative frequency of heads and tails

**Answer:**

The **relative frequency** is the absolute frequency divided by the total number of trials:

$$
f_H = \frac{n_H}{n} = \frac{1038}{2000} = 0.519,
$$

$$
f_T = \frac{n_T}{n} = \frac{962}{2000} = 0.481.
$$

As always, the relative frequencies sum to 1:

$$
f_H + f_T = 0.519 + 0.481 = 1.000. \quad \checkmark
$$

**Comparison with a fair coin:**

| Result | Empirical \( f_k \) | Fair coin \( P \) | Difference |
|:---:|:---:|:---:|:---:|
| H | 0.519 | 0.500 | +0.019 |
| T | 0.481 | 0.500 | −0.019 |

The relative frequency of heads exceeds the fair-coin probability by \( 0.019 \) — less than two percentage points. For a fair coin with \( n = 2000 \) tosses, the standard deviation of the sample proportion is:

$$
\sigma_{\hat{p}} = \sqrt{\frac{p(1-p)}{n}} = \sqrt{\frac{0.5 \times 0.5}{2000}} = \sqrt{\frac{0.25}{2000}} = \sqrt{0.000125} \approx 0.01118.
$$

The observed deviation from 0.5 in standardised units (the z-score) is:

$$
z = \frac{0.519 - 0.500}{0.01118} \approx \frac{0.019}{0.01118} \approx 1.70.
$$

A z-score of 1.70 corresponds to a two-tailed p-value of approximately 0.089 — not statistically significant at the conventional \( \alpha = 0.05 \) level, but close. This tells us the data is on the boundary: mildly suspicious but not conclusive.

---

### Task 4: Draw a line plot of `relative_frequency_heads` against `trial`

**Answer:**

The plot below shows how the relative frequency of heads evolves as we accumulate more and more tosses. The x-axis is the trial number (1 to 2000), and the y-axis is the running proportion of heads. The dashed red line marks the fair-coin reference of \( p = 0.5 \).

![Relative frequency of heads over 2000 coin tosses](problem_02_coin_tosses/relative_frequency_heads.png)

A Python snippet to produce such a plot:

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("problem_02_coin_tosses.csv")

plt.figure(figsize=(10, 5))
plt.plot(df["trial"], df["relative_frequency_heads"], 
         color="steelblue", linewidth=0.5)
plt.axhline(y=0.5, color="red", linestyle="--", label="p = 0.5")
plt.xlabel("Trial number")
plt.ylabel("Relative frequency of heads")
plt.title("Convergence of Relative Frequency of Heads")
plt.legend()
plt.show()
```

The plot beautifully illustrates the **stabilisation** phenomenon: early in the experiment, the relative frequency swings wildly (reaching as high as 0.65 after just 20 tosses), but as more data accumulates, the fluctuations dampen and the curve settles near its long-run value.

---

### Task 5: Explain what happens to the relative frequency as trials increase

**Answer:**

The behaviour visible in the plot and the checkpoint table is a textbook illustration of the **Law of Large Numbers (LLN)**. Let us examine the checkpoints:

| Trial \( n \) | Cumulative heads \( S_n \) | Relative frequency \( f_n = S_n/n \) | Distance from 0.5 |
|---:|---:|---:|---:|
| 10 | 6 | 0.600 | 0.100 |
| 20 | 13 | 0.650 | 0.150 |
| 50 | 27 | 0.540 | 0.040 |
| 100 | 55 | 0.550 | 0.050 |
| 200 | 105 | 0.525 | 0.025 |
| 500 | 262 | 0.524 | 0.024 |
| 1000 | 521 | 0.521 | 0.021 |
| 2000 | 1038 | 0.519 | 0.019 |

**Key observations:**

1. **Early instability.** After just 10 tosses, the relative frequency is 0.60 — 10 percentage points away from 0.5. After 20 tosses, it peaks at 0.65. This is because when \( n \) is small, each individual toss has a large impact on the running proportion. A single head changes the proportion by roughly \( 1/n \).

2. **Gradual stabilisation.** As \( n \) grows, the amplitude of the fluctuations shrinks. The distance from 0.5 decreases:
   - At \( n = 10 \): distance = 0.100
   - At \( n = 100 \): distance = 0.050
   - At \( n = 1000 \): distance = 0.021
   - At \( n = 2000 \): distance = 0.019

3. **Convergence, not equality.** The relative frequency *approaches* the true probability but does not reach it exactly. Even at \( n = 2000 \), we have 0.519 rather than 0.500 (or the true generating probability of 0.520).

4. **Mathematical explanation.** The variance of the running proportion is:

$$
\text{Var}\left(\frac{S_n}{n}\right) = \frac{p(1-p)}{n}.
$$

As \( n \) increases, this variance shrinks to zero, which is why the fluctuations dampen. More precisely, the standard deviation of the proportion is:

$$
\sigma_n = \sqrt{\frac{p(1-p)}{n}} \propto \frac{1}{\sqrt{n}}.
$$

So doubling the sample size reduces the standard deviation by a factor of \( \sqrt{2} \approx 1.41 \), not by 2. This is why convergence is gradual.

5. **The Law of Large Numbers** (formal statement): If \( X_1, X_2, \ldots \) are independent and identically distributed random variables with \( E[X_i] = \mu \), then:

$$
\frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{P} \mu \quad \text{as } n \to \infty.
$$

In our context, \( \mu = p \) (the true probability of heads), and the sample mean is the relative frequency of heads.

---

### Task 6: Compare the final relative frequency of heads with 0.5

**Answer:**

The final relative frequency of heads after 2000 tosses is:

$$
f_{2000} = \frac{1038}{2000} = 0.519.
$$

Compared with the fair-coin probability of 0.5:

$$
f_{2000} - 0.5 = 0.519 - 0.500 = 0.019.
$$

This is a positive deviation of 1.9 percentage points, meaning heads appeared slightly more often than tails.

**Is this deviation meaningful?** Let us consider it from several perspectives:

1. **Absolute perspective:** A difference of 0.019 is small in everyday terms — the coin lands on heads roughly 52 times out of every 100 instead of 50.

2. **Statistical perspective:** The standard error of the proportion for a fair coin with \( n = 2000 \) is:

$$
\text{SE} = \sqrt{\frac{0.5 \times 0.5}{2000}} \approx 0.01118.
$$

The observed deviation of 0.019 is about \( 1.70 \) standard errors away from 0.5:

$$
z = \frac{0.019}{0.01118} \approx 1.70.
$$

The two-tailed p-value for \( z = 1.70 \) is approximately 0.089. At the conventional \( \alpha = 0.05 \) significance level, this is **not** statistically significant. However, at the \( \alpha = 0.10 \) level, it would be marginally significant.

3. **Confidence interval:** A 95% confidence interval for \( p \) based on the observed data is:

$$
\hat{p} \pm 1.96 \times \text{SE} = 0.519 \pm 1.96 \times 0.01118 = 0.519 \pm 0.0219 = (0.497, 0.541).
$$

The value \( p = 0.5 \) is just barely inside this interval, which is consistent with the p-value being slightly above 0.05.

4. **True generating probability:** The data were actually generated with \( p = 0.52 \) for heads. The observed relative frequency of 0.519 is remarkably close to this true value, differing by only \( |0.519 - 0.52| = 0.001 \). This confirms that the Law of Large Numbers is working: with 2000 observations, the empirical frequency closely approximates the true probability.

---

### Task 7: Does the generated coin appear to be fair? Explain carefully

**Answer:**

The question of whether the coin is fair requires careful, nuanced reasoning. Let us weigh the evidence:

**Evidence suggesting the coin may not be fair:**

- Heads appeared 1038 times out of 2000, giving a relative frequency of 0.519 — consistently above 0.500.
- The relative frequency plot shows that after the initial volatile period, the curve stabilises *above* the 0.5 line, not oscillating symmetrically around it. From approximately trial 500 onward, the curve remains persistently in the range 0.51–0.53.
- Looking at checkpoints: at trials 50, 100, 200, 500, 1000, and 2000, the relative frequency is *always* above 0.5. If the coin were truly fair, we would expect the relative frequency to spend roughly equal time above and below 0.5.

**Evidence suggesting the data is compatible with a fair coin:**

- The deviation from 0.5 is only 0.019, which is less than 2 standard errors (\( z \approx 1.70 \)).
- The two-tailed p-value of ~0.089 is above the conventional significance threshold of 0.05.
- The 95% confidence interval (0.497, 0.541) includes 0.5.

**Balanced conclusion:**

The coin does **not appear perfectly fair** — there is a persistent, though modest, tilt toward heads. The relative frequency consistently exceeds 0.5, which is a qualitative signal of bias. However, in a **formal statistical framework** at the 5% significance level, we would fail to reject the null hypothesis \( H_0: p = 0.5 \). The evidence is suggestive but not conclusive.

This is actually a common scenario in statistics: the data hint at an effect (a slight bias toward heads), but the sample is not large enough to establish it beyond reasonable doubt. A larger experiment (e.g., 10,000 or 50,000 tosses) would provide more definitive evidence.

> **Ground truth:** The coin was generated with \( p_H = 0.52 \) and \( p_T = 0.48 \). So the coin is indeed slightly biased, but the bias is small enough that 2000 observations do not provide overwhelming statistical evidence against fairness.

---

### Task 8: Explain the difference between theoretical probability and empirical relative frequency

**Answer:**

This is a foundational distinction in probability and statistics. Let us clarify it carefully.

#### Theoretical Probability

The **theoretical probability** \( P(A) \) is a number assigned to an event \( A \) by a **mathematical model** (the probability measure). It describes the long-run behaviour of a random experiment **before** any data is observed. For example:

- For a fair coin: \( P(H) = 0.5 \), \( P(T) = 0.5 \).
- For a loaded coin with \( p = 0.52 \): \( P(H) = 0.52 \), \( P(T) = 0.48 \).

Key properties:
- It is a **fixed, deterministic number** — not random.
- It is a property of the **model**, not of any particular dataset.
- It satisfies the **Kolmogorov axioms**: \( 0 \leq P(A) \leq 1 \), \( P(\Omega) = 1 \), and countable additivity.
- In many practical situations, the true probability is **unknown** and must be estimated from data.

#### Empirical Relative Frequency

The **empirical relative frequency** \( f_n(A) \) is the proportion of times event \( A \) occurs in \( n \) observed trials:

$$
f_n(A) = \frac{\text{number of trials where } A \text{ occurred}}{n}.
$$

Key properties:
- It is a **random quantity** — different datasets of the same experiment will yield different relative frequencies.
- It is computed **after** observing data. It is a **statistic**, i.e., a function of the observed sample.
- It always lies in the interval \( [0, 1] \) and the relative frequencies of all outcomes sum to 1.
- It depends on the **sample size** \( n \): for small \( n \), it can deviate substantially from the theoretical probability; for large \( n \), it tends to be close.

#### The Relationship: Law of Large Numbers

The bridge between theoretical probability and empirical relative frequency is the **Law of Large Numbers**:

$$
f_n(A) \xrightarrow{n \to \infty} P(A).
$$

In words: as the number of trials grows without bound, the relative frequency **converges** to the theoretical probability. This is what we observed in our data:

| \( n \) | \( f_n(H) \) | Distance from \( P(H) = 0.52 \) |
|---:|---:|---:|
| 10 | 0.600 | 0.080 |
| 100 | 0.550 | 0.030 |
| 1000 | 0.521 | 0.001 |
| 2000 | 0.519 | 0.001 |

The convergence is clear: the empirical frequency gets closer and closer to the true probability as \( n \) increases.

#### A Helpful Analogy

Think of theoretical probability as the **speed limit** on a road, and empirical relative frequency as the **average speed** measured from a GPS over a trip. The speed limit is a fixed rule; the measured average speed depends on the specific trip — traffic, stops, acceleration. Over a very long trip on a single stretch of road, the measured average speed will approach the speed limit, but for any finite trip, they may differ.

#### Summary Table

| Property | Theoretical Probability | Empirical Relative Frequency |
|----------|:-----------------------:|:----------------------------:|
| Nature | Model parameter (fixed) | Data statistic (random) |
| Computed from | Mathematical assumptions | Observed outcomes |
| Depends on \( n \)? | No | Yes |
| Exact value known? | Only if model is fully specified | Always computable from data |
| Notation | \( P(A) \) | \( f_n(A) \) or \( \hat{P}(A) \) |
| Relationship | — | \( f_n(A) \to P(A) \) as \( n \to \infty \) |

---

## Summary and Key Takeaways

In this problem we explored the fundamental relationship between probability and data through the lens of a simple coin-tossing experiment:

1. **The random experiment** consists of 2000 independent Bernoulli trials (coin tosses), each producing H or T.
2. We built a **frequency table** showing H = 1038 (51.9%) and T = 962 (48.1%), revealing a mild surplus of heads.
3. The **relative frequency plot** vividly demonstrates the Law of Large Numbers: early on, the proportion fluctuates dramatically (0.40 to 0.67), but as \( n \) increases, the oscillations dampen and the curve stabilises near its long-run value.
4. The final relative frequency of 0.519 is close to 0.5 but consistently above it. A z-test gives \( z \approx 1.70 \) with a p-value of ~0.089 — marginally non-significant at the 5% level.
5. The coin **does not appear perfectly fair** — there is a subtle, persistent lean toward heads — but **a definitive conclusion requires either more data or a formal hypothesis test at a relaxed significance level**.
6. The critical conceptual distinction between **theoretical probability** (a fixed model quantity) and **empirical relative frequency** (a random, data-dependent estimate) underpins all of statistical inference. The Law of Large Numbers guarantees convergence, but **never exact equality in finite samples**.
7. The true generating probability was \( p = 0.52 \), confirming that the empirical frequency (0.519) is an excellent estimate of the truth — a testament to the power of 2000 observations.
