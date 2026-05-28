# Problem 8 — Waiting Times and Empirical CDF

## Problem Statement

A service desk collects data on customer waiting times (in minutes) for 500 tickets. Each ticket is classified as either **standard** or **priority** service. We are asked to summarise the distribution of waiting times, construct empirical CDFs, compare the two service types using quantiles, and connect the analysis to theoretical concepts in probability — particularly the **cumulative distribution function (CDF)** and the nature of **right-skewed distributions**.

## Generated Files

- Dataset: [problem_08_waiting_times.csv](problem_08_waiting_times/problem_08_waiting_times.csv)
- Overall summary: [waiting_time_summary_overall.csv](problem_08_waiting_times/waiting_time_summary_overall.csv)
- Service-type summary: [waiting_time_summary_by_service_type.csv](problem_08_waiting_times/waiting_time_summary_by_service_type.csv)
- ECDF probability estimates: [ecdf_probability_estimates.csv](problem_08_waiting_times/ecdf_probability_estimates.csv)
- Quantiles by service type: [waiting_time_quantiles_by_service_type.csv](problem_08_waiting_times/waiting_time_quantiles_by_service_type.csv)
- Plots:
  - [waiting_time_histograms_by_service_type.png](problem_08_waiting_times/waiting_time_histograms_by_service_type.png)
  - [waiting_time_ecdf_by_service_type.png](problem_08_waiting_times/waiting_time_ecdf_by_service_type.png)
  - [waiting_time_boxplot_by_service_type.png](problem_08_waiting_times/waiting_time_boxplot_by_service_type.png)

---

## Solution

### Task 1: Describe what one row of the dataset represents

**Answer:**

Each row of the dataset represents **one service ticket** — a single customer interaction with the service desk. The columns are:

| Column | Description |
|:-------|:------------|
| `ticket_id` | Unique identifier (e.g., `T0001`, `T0002`, …) |
| `service_type` | Either `standard` or `priority`, indicating the level of service |
| `waiting_time_min` | The waiting time in minutes — a continuous, positive real number |
| `resolved_under_10_min` | Boolean flag: `True` if \( T \leq 10 \) minutes, `False` otherwise |

For example, ticket T0001 is a standard-service ticket with a waiting time of 20.41 minutes that was *not* resolved within 10 minutes.

The dataset contains **500 tickets** in total:
- **160 priority** tickets (32%)
- **340 standard** tickets (68%)

Note the crucial difference from Problem 7: here the variable of interest (`waiting_time_min`) is **continuous**, not a discrete count. This means we work with continuous distributions (like the exponential or gamma) rather than discrete ones (like the Poisson).

---

### Task 2: Compute mean, median, quartiles, and standard deviation of waiting_time_min

**Answer:**

We compute the standard descriptive statistics across all 500 tickets:

```python
import pandas as pd

df = pd.read_csv("problem_08_waiting_times.csv")
summary = df["waiting_time_min"].describe()
q1 = df["waiting_time_min"].quantile(0.25)
q3 = df["waiting_time_min"].quantile(0.75)
```

| Statistic | Value |
|:----------|------:|
| Number of tickets \( n \) | 500 |
| Mean \( \bar{x} \) | **11.5661** |
| Median \( \tilde{x} \) (Q2) | **9.2000** |
| First quartile \( Q_1 \) | **5.0825** |
| Third quartile \( Q_3 \) | **16.7275** |
| Standard deviation \( s \) | **8.7133** |
| Minimum | 0.4600 |
| Maximum | 55.3400 |
| Resolved under 10 min | 53.8% |

**Interpretation:**

- The **mean** (11.57 min) is considerably larger than the **median** (9.20 min). This is a hallmark of a **right-skewed distribution**: a few very long waiting times pull the mean upward while the median remains closer to the bulk of the data.

- The **interquartile range (IQR)** is:

$$
\text{IQR} = Q_3 - Q_1 = 16.7275 - 5.0825 = 11.6450 \text{ minutes}
$$

  This means the middle 50% of all tickets had waiting times between about 5 and 17 minutes.

- The **coefficient of variation** (CV) measures relative variability:

$$
\text{CV} = \frac{s}{\bar{x}} = \frac{8.7133}{11.5661} \approx 0.753
$$

  A CV of 0.75 indicates high variability — the standard deviation is about 75% of the mean. This level of relative variability is typical for exponentially-distributed or gamma-distributed waiting times.

- **53.8% of tickets** were resolved within 10 minutes, which is slightly above half. This is consistent with the median being 9.2 minutes — just below the 10-minute threshold.

---

### Task 3: Compute same summaries separately for each service_type

**Answer:**

```python
grouped = df.groupby("service_type")["waiting_time_min"]
summary_by_type = grouped.agg(["count", "mean", "median", "std", "min", "max"])
```

| Service type | Tickets | Mean | Median | \( Q_1 \) | \( Q_3 \) | Std. dev. | Min | Max | Resolved ≤ 10 min |
|:-------------|--------:|-----:|-------:|----------:|----------:|----------:|----:|----:|-------------------:|
| **Priority** | 160 | **5.8512** | **5.1250** | 2.6475 | 7.9425 | 3.9044 | 0.46 | 26.49 | **85.62%** |
| **Standard** | 340 | **14.2555** | **12.2400** | 7.1850 | 19.9025 | 9.0519 | 0.65 | 55.34 | **38.82%** |

**Interpretation:**

The two service types have dramatically different distributions:

1. **Priority service is much faster.** The mean waiting time for priority tickets (5.85 min) is less than half that of standard tickets (14.26 min). The median tells a similar story: 5.13 vs. 12.24 minutes.

2. **Priority service has less variability.** The standard deviation for priority (3.90) is less than half that of standard (9.05). The IQR is also much narrower:
   - Priority IQR: \( 7.94 - 2.65 = 5.30 \) min
   - Standard IQR: \( 19.90 - 7.19 = 12.72 \) min

3. **Resolution rates differ dramatically.** About **85.6%** of priority tickets are resolved within 10 minutes, compared to only **38.8%** of standard tickets. This is a massive gap that justifies the existence of the priority tier.

4. **Both are right-skewed.** In both groups, the mean exceeds the median:
   - Priority: \( \bar{x} / \tilde{x} = 5.85 / 5.13 = 1.14 \)
   - Standard: \( \bar{x} / \tilde{x} = 14.26 / 12.24 = 1.16 \)

   Right-skewness is inherent in waiting-time data (as we discuss in Task 8).

5. **The maximum standard waiting time (55.34 min) is extreme.** This is about 4.3 standard deviations above the standard mean — a genuine outlier that illustrates the heavy right tail.

---

### Task 4: Draw histograms for standard and priority service

**Answer:**

![Waiting time histograms by service type](problem_08_waiting_times/waiting_time_histograms_by_service_type.png)

The side-by-side histograms reveal the distributional shapes clearly:

**Priority service (left panel):**
- The distribution is concentrated in the range 0–10 minutes.
- The mode appears near 2–4 minutes.
- The right tail extends to about 26.5 minutes, but this is rare.
- The shape resembles an **exponential** or **gamma** distribution with a relatively small shape parameter.

**Standard service (right panel):**
- The distribution is much more spread out, covering 0–55 minutes.
- The mode appears near 5–10 minutes.
- There is a long right tail with observations extending well beyond 30 minutes.
- The shape is again right-skewed, consistent with exponential-family distributions.

**Why histograms are useful here:** Histograms allow us to see the *shape* of the distribution at a glance — whether it is symmetric, skewed, unimodal, bimodal, etc. They reveal information that summary statistics alone cannot convey, such as the heavy tail of the standard service distribution.

---

### Task 5: Construct an empirical CDF for waiting_time_min

**Answer:**

The **empirical cumulative distribution function (ECDF)** is defined as:

$$
\hat{F}_n(t) = \frac{1}{n} \sum_{i=1}^{n} \mathbf{1}(x_i \leq t) = \frac{\text{number of observations} \leq t}{n}
$$

where \( \mathbf{1}(\cdot) \) is the indicator function. In words, \( \hat{F}_n(t) \) is the **proportion of data points** that are less than or equal to \( t \).

```python
import numpy as np

def ecdf(data):
    """Compute the empirical CDF."""
    x_sorted = np.sort(data)
    y = np.arange(1, len(x_sorted) + 1) / len(x_sorted)
    return x_sorted, y

x, y = ecdf(df["waiting_time_min"].values)
```

The ECDF is a **step function** that jumps by \( 1/n = 1/500 = 0.002 \) at each observed data point. It starts at 0 for values below the minimum observation and reaches 1 at the maximum observation.

![Empirical CDF of waiting times by service type](problem_08_waiting_times/waiting_time_ecdf_by_service_type.png)

**Reading the ECDF plot:**

- The **priority ECDF** (one curve) rises steeply and reaches values near 0.85 by \( t = 10 \) minutes. This means about 85% of priority tickets have waiting times ≤ 10 minutes.
- The **standard ECDF** (other curve) rises more slowly. At \( t = 10 \), it is only at about 0.39.
- The priority curve is **always to the left** of (or above) the standard curve, meaning priority service **stochastically dominates** standard service: for any threshold \( t \), a larger fraction of priority tickets meets that threshold.

This visual dominance is a concept known as **first-order stochastic dominance**: \( F_{\text{priority}}(t) \geq F_{\text{standard}}(t) \) for all \( t \geq 0 \).

---

### Task 6: Use the ECDF to estimate P(≤5), P(≤10), P(>20)

**Answer:**

We use the ECDF to estimate empirical probabilities. These are computed by counting the proportion of observations satisfying each condition:

$$
\hat{P}(T \leq t_0) = \hat{F}_n(t_0) = \frac{\#\{i : x_i \leq t_0\}}{n}
$$

```python
p_le_5  = (df["waiting_time_min"] <= 5).mean()
p_le_10 = (df["waiting_time_min"] <= 10).mean()
p_gt_20 = (df["waiting_time_min"] > 20).mean()
```

| Event | Empirical probability | Interpretation |
|:------|----------------------:|:---------------|
| \( P(T \leq 5) \) | **0.244** | About 24.4% of all tickets are resolved within 5 minutes |
| \( P(T \leq 10) \) | **0.538** | About 53.8% of all tickets are resolved within 10 minutes |
| \( P(T > 20) \) | **0.170** | About 17.0% of all tickets require more than 20 minutes |

**Detailed interpretation:**

1. **\( \hat{P}(T \leq 5) = 0.244 \):** Nearly a quarter of tickets are handled very quickly. These are likely dominated by priority tickets (which have a median of 5.13 min — so roughly half of priority tickets alone would fall under 5 min).

2. **\( \hat{P}(T \leq 10) = 0.538 \):** A slim majority of tickets meet a 10-minute target. This could be used as a **service level agreement (SLA)** metric. If the SLA requires 80% of tickets under 10 minutes, the current performance (53.8%) would be far from meeting it.

3. **\( \hat{P}(T > 20) = 0.170 \):** One in six tickets takes over 20 minutes. Note that this is the complement:

$$
\hat{P}(T > 20) = 1 - \hat{F}_n(20) = 1 - 0.830 = 0.170
$$

These empirical probabilities are **point estimates** of the true (population) probabilities. By the **Glivenko–Cantelli theorem**, the ECDF converges uniformly to the true CDF as \( n \to \infty \):

$$
\sup_t |\hat{F}_n(t) - F(t)| \xrightarrow{a.s.} 0
$$

With \( n = 500 \), our estimates should be reasonably precise. The **Dvoretzky–Kiefer–Wolfowitz (DKW) inequality** gives us a confidence band of approximately \( \pm 1.36 / \sqrt{n} \approx \pm 0.061 \) at the 95% level.

---

### Task 7: Compare standard and priority service using quantiles

**Answer:**

Quantiles provide a comprehensive comparison of two distributions. The \( p \)-th quantile \( Q_p \) is the value below which a proportion \( p \) of the data falls:

$$
Q_p = \inf\{t : \hat{F}_n(t) \geq p\}
$$

| Quantile | Priority (min) | Standard (min) | Ratio (Standard / Priority) |
|:---------|---------------:|---------------:|----------------------------:|
| \( Q_{10} \) (10th percentile) | 1.767 | 4.394 | 2.49 |
| \( Q_{25} \) (25th percentile) | 2.648 | 7.185 | 2.71 |
| \( Q_{50} \) (median) | 5.125 | 12.240 | 2.39 |
| \( Q_{75} \) (75th percentile) | 7.943 | 19.903 | 2.51 |
| \( Q_{90} \) (90th percentile) | 10.841 | 26.206 | 2.42 |

```python
quantiles = [0.10, 0.25, 0.50, 0.75, 0.90]
for st in ["priority", "standard"]:
    subset = df[df["service_type"] == st]["waiting_time_min"]
    print(subset.quantile(quantiles))
```

**Key findings:**

1. **Priority service is consistently faster at every quantile.** The standard service quantiles are roughly **2.4 to 2.7 times larger** than the corresponding priority quantiles. This means that **no matter which part of the distribution we look at** — fast tickets, slow tickets, or the middle — standard service takes about 2.5× longer.

2. **The ratio is fairly stable.** The fact that the Standard/Priority ratio hovers around 2.4–2.7 across all quantiles suggests that the two distributions may have a **scale relationship**: they might follow the same distributional family but with different rate (or scale) parameters.

3. **Practical implications:**
   - The **fastest 10%** of priority tickets are resolved in under 1.77 min; the fastest 10% of standard tickets take up to 4.39 min.
   - The **slowest 10%** of priority tickets wait over 10.84 min; the slowest 10% of standard tickets wait over 26.21 min.
   - If a customer needs their issue resolved within 10 minutes, they should strongly prefer priority service: \( Q_{90} \) for priority (10.84 min) is just above 10, meaning about 90% of priority tickets meet this target. For standard service, only the bottom half (\( Q_{50} = 12.24 \) min) is close.

![Waiting time boxplot by service type](problem_08_waiting_times/waiting_time_boxplot_by_service_type.png)

The box plot visualisation above confirms the quantile comparison: the priority box is much more compact and shifted toward lower values, while the standard box is wider with many upper outliers.

---

### Task 8: Explain why waiting-time data are often right-skewed

**Answer:**

Waiting-time data are almost always **right-skewed** (positively skewed). This is not a coincidence but a consequence of fundamental mathematical and physical constraints:

#### 1. The lower bound constraint

Waiting times have a **hard lower bound at zero** — nobody can wait a negative amount of time. This means the distribution is truncated on the left. However, there is **no natural upper bound**: a small fraction of tickets may experience exceptionally long waits due to complex problems, system failures, or backlogs. This asymmetry — bounded below, unbounded above — inherently produces right skew.

$$
T \geq 0, \quad \text{but } T \text{ can be very large in rare cases}
$$

#### 2. Multiplicative effects

In queuing systems, delays often accumulate through **multiplicative processes**. For example, if a server is busy, your wait depends on how many people are ahead of you × how long each of their issues takes. Multiplicative random processes tend to produce **log-normal** or **exponential-type** distributions, both of which are right-skewed.

#### 3. The exponential distribution as a natural model

The simplest model for waiting times is the **exponential distribution**, where:

$$
f(t) = \lambda e^{-\lambda t}, \quad t \geq 0
$$

This distribution is *always* right-skewed, with skewness equal to 2 regardless of the rate \( \lambda \). It arises naturally from the memoryless property of Poisson arrival processes.

#### 4. Empirical evidence in our data

In our dataset:
- Overall: mean = 11.57, median = 9.20. Since \( \bar{x} > \tilde{x} \), the distribution is right-skewed.
- Standard: mean = 14.26, median = 12.24 (skewed right).
- Priority: mean = 5.85, median = 5.13 (skewed right).
- The maximum value (55.34 min) is about 6× the median but only 1× the minimum above zero.

The practical consequence of right-skewness is that the **mean is not a representative "typical" value**. The median is a better measure of central tendency for waiting-time data, and service targets should be defined using **percentiles** (e.g., "90% of tickets resolved within X minutes") rather than averages.

---

### Task 9: Explain the difference between a histogram and an empirical CDF

**Answer:**

Both the histogram and the ECDF are tools for visualising the distribution of data, but they emphasise different aspects:

| Feature | Histogram | Empirical CDF |
|:--------|:----------|:--------------|
| **Y-axis** | Frequency or density (how many observations fall in each bin) | Cumulative proportion (what fraction of data is ≤ a given value) |
| **Shape** | Bar chart with bins | Step function (or smooth curve) |
| **Reading probabilities** | Area under the curve between two values gives \( P(a < X \leq b) \) | Direct reading: \( \hat{F}(t) = \hat{P}(X \leq t) \) |
| **Sensitivity to bins** | Yes — the appearance changes with the number and width of bins | No — the ECDF is uniquely determined by the data |
| **Best for** | Seeing the *shape* (mode, skewness, multimodality) | Comparing distributions, reading quantiles and probabilities |

#### The histogram shows density

A histogram divides the range of the data into intervals (bins) and counts the number of observations in each bin. It is essentially an estimate of the **probability density function (PDF)** \( f(x) \). The key relationship is:

$$
P(a < X \leq b) \approx \int_a^b f(x)\,dx \approx \sum_{\text{bins in } [a,b]} \text{(bin height)} \times \text{(bin width)}
$$

The histogram is excellent for detecting the **shape** of the distribution: is it unimodal? bimodal? symmetric? skewed? However, its appearance depends on the **choice of bin width**, which introduces subjectivity.

#### The ECDF shows cumulative probability

The ECDF plots \( \hat{F}_n(t) \) versus \( t \). It is a non-decreasing step function from 0 to 1. The key advantage is that it requires **no binning decisions** and directly answers questions like "what proportion of observations are below this threshold?"

The relationship between the two is:

$$
\hat{F}_n(t) = \int_{-\infty}^{t} \hat{f}(x)\,dx
$$

where \( \hat{f} \) is the density estimated by the histogram. Conversely, the histogram can be thought of as the **derivative** of the ECDF.

#### When to use each

- Use a **histogram** when you want to understand the *shape* and *mode* of the distribution at a glance.
- Use an **ECDF** when you need to read off specific probabilities or quantiles, or when comparing two or more distributions (stacking ECDFs on the same plot is cleaner than overlapping histograms).

In our analysis, the histogram (Task 4) showed us that both distributions are right-skewed and unimodal, while the ECDF (Task 5) let us directly estimate probabilities like \( P(T \leq 10) \) and clearly showed that priority service stochastically dominates standard service.

---

### Task 10: Explain how this connects to the concept of a theoretical CDF

**Answer:**

#### The theoretical CDF

In probability theory, a **cumulative distribution function (CDF)** for a random variable \( X \) is defined as:

$$
F(t) = P(X \leq t), \quad t \in \mathbb{R}
$$

It is a deterministic function that completely characterises the probability distribution of \( X \). For a continuous random variable with density \( f \):

$$
F(t) = \int_{-\infty}^{t} f(x)\,dx
$$

For example, the **exponential distribution** with rate \( \lambda \) has CDF:

$$
F(t) = 1 - e^{-\lambda t}, \quad t \geq 0
$$

#### The empirical CDF as an approximation

The empirical CDF \( \hat{F}_n(t) \) is a **data-based estimate** of the unknown true CDF \( F(t) \). It is constructed purely from observed data, without assuming any particular parametric form. The relationship is:

$$
\hat{F}_n(t) = \frac{\#\{i : x_i \leq t\}}{n} \quad \xrightarrow{n \to \infty} \quad F(t)
$$

This convergence is guaranteed by the **Glivenko–Cantelli theorem** (the "Fundamental Theorem of Statistics"):

$$
\sup_{t \in \mathbb{R}} \left| \hat{F}_n(t) - F(t) \right| \xrightarrow{a.s.} 0 \quad \text{as } n \to \infty
$$

In words: the ECDF converges *uniformly* to the true CDF almost surely. This means that with enough data, the ECDF approximates the theoretical CDF arbitrarily well at *every* point simultaneously.

#### How this connects to our problem

In our waiting-time analysis:

1. **We do not know the true CDF.** We do not know the exact distribution generating the waiting times. It could be exponential, gamma, log-normal, or something else.

2. **The ECDF gives us an empirical estimate.** When we computed \( \hat{P}(T \leq 10) = 0.538 \), we were evaluating \( \hat{F}_{500}(10) \) — an estimate of the true probability \( F(10) = P(T \leq 10) \).

3. **We could fit a theoretical model.** If we believed the data followed an exponential distribution, we could estimate \( \hat{\lambda} = 1/\bar{x} = 1/11.57 \approx 0.0864 \) and compute the theoretical CDF:

$$
F_{\text{exp}}(10) = 1 - e^{-0.0864 \times 10} = 1 - e^{-0.864} \approx 0.578
$$

   This is close to but not exactly equal to our empirical estimate of 0.538, suggesting the exponential model is a reasonable but imperfect fit.

4. **Goodness-of-fit tests** compare the ECDF to a theoretical CDF. The **Kolmogorov–Smirnov test** uses the maximum distance \( D_n = \sup_t |\hat{F}_n(t) - F_0(t)| \) to test whether the data come from a specified distribution \( F_0 \).

#### Summary of the connection

| Concept | Theoretical CDF \( F(t) \) | Empirical CDF \( \hat{F}_n(t) \) |
|:--------|:---------------------------|:---------------------------------|
| **Nature** | A mathematical function derived from a probability model | A step function computed from data |
| **Parameters** | Known or assumed (e.g., \( \lambda \) for exponential) | Non-parametric (no assumptions) |
| **Exactness** | Gives exact probabilities if the model is correct | Gives approximate probabilities; improves with more data |
| **Use** | Theoretical analysis, prediction | Exploratory analysis, model checking |
| **Relationship** | \( F(t) = P(X \leq t) \) | \( \hat{F}_n(t) \approx F(t) \) for large \( n \) |

The empirical CDF is the bridge between **observed data** and **theoretical probability models**. It allows us to estimate probabilities without committing to a specific model, and it provides the benchmark against which parametric models are evaluated.

---

## Summary and Key Takeaways

This problem provided a thorough introduction to the analysis of **continuous waiting-time data** and the concept of the **empirical CDF**:

- The dataset consists of 500 service tickets with two service types: priority (160 tickets, mean 5.85 min) and standard (340 tickets, mean 14.26 min).
- Waiting-time distributions are inherently **right-skewed**, with the mean exceeding the median in all subgroups. This skewness arises from the hard lower bound at zero and the potential for very long waits.
- The ECDF allowed us to directly estimate probabilities: 24.4% of tickets are resolved within 5 minutes, 53.8% within 10 minutes, and 17.0% require more than 20 minutes.
- **Quantile comparison** showed that standard service takes roughly 2.4–2.7× longer than priority service across the entire distribution, not just on average.
- The ECDF is a **non-parametric estimator** of the theoretical CDF. By the Glivenko–Cantelli theorem, it converges uniformly to the true CDF, making it a powerful tool for both exploratory analysis and as a stepping stone toward fitting parametric probability models.
- Understanding the distinction between histograms (density estimation) and ECDFs (cumulative probability estimation) is fundamental to statistical data analysis.
