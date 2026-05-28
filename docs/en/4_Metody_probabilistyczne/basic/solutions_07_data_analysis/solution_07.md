# Problem 7 — Call Center Requests Over Time

## Problem Statement

A call center records the number of customer requests received in each hour of the day, over a period of 30 days (March 1–30, 2026). The dataset distinguishes between weekdays and weekends. We are asked to explore the data using descriptive statistics, visualisations, and to connect the findings to the **Poisson distribution** — a classical model for counting events in fixed time intervals.

## Generated Files

- Dataset: [problem_07_call_center_requests.csv](problem_07_call_center_requests/problem_07_call_center_requests.csv)
- Overall hourly summary: [hourly_requests_summary.csv](problem_07_call_center_requests/hourly_requests_summary.csv)
- Day-type summary: [requests_summary_by_day_type.csv](problem_07_call_center_requests/requests_summary_by_day_type.csv)
- Average requests by hour: [average_requests_by_hour.csv](problem_07_call_center_requests/average_requests_by_hour.csv)
- Daily totals: [daily_total_requests.csv](problem_07_call_center_requests/daily_total_requests.csv)
- Daily total summary by day type: [daily_total_summary_by_day_type.csv](problem_07_call_center_requests/daily_total_summary_by_day_type.csv)
- Plots:
  - [average_requests_by_hour.png](problem_07_call_center_requests/average_requests_by_hour.png)
  - [hourly_requests_histogram.png](problem_07_call_center_requests/hourly_requests_histogram.png)
  - [mean_hourly_requests_by_day_type.png](problem_07_call_center_requests/mean_hourly_requests_by_day_type.png)

---

## Solution

### Task 1: Describe what one row of the dataset represents

**Answer:**

Each row of the dataset represents **one hour of operation at the call center**. Specifically, a single observation records:

| Column | Description |
|:-------|:------------|
| `date` | The calendar date (e.g., `2026-03-01`) |
| `day_type` | Whether the date is a `weekday` or `weekend` |
| `hour` | The hour of the day, coded as an integer from 0 (midnight) to 23 (11 PM) |
| `requests` | The number of customer requests received during that one-hour interval |

For example, the very first row tells us that on March 1, 2026 (a weekend day), during hour 0 (midnight to 1 AM), the call center received **1 request**.

Since the dataset covers 30 days × 24 hours per day, it contains exactly:

$$
n = 30 \times 24 = 720 \text{ rows (hourly observations)}
$$

This structure is critical: the unit of observation is a **fixed-length time interval** (one hour), and the response variable is a **count of events** occurring in that interval. This is precisely the setup where the Poisson distribution is most naturally applied.

---

### Task 2: Compute the mean and variance of hourly request counts

**Answer:**

We compute the **sample mean** \( \bar{x} \) and **sample variance** \( s^2 \) across all 720 hourly observations. Recall the formulas:

$$
\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i, \qquad s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2
$$

```python
import pandas as pd

df = pd.read_csv("problem_07_call_center_requests.csv")
mean_val = df["requests"].mean()      # 3.8542
var_val  = df["requests"].var()       # 11.1484
std_val  = df["requests"].std()       # 3.3389
```

| Statistic | Value |
|:----------|------:|
| Number of observations \( n \) | 720 |
| Sample mean \( \bar{x} \) | **3.8542** |
| Sample variance \( s^2 \) | **11.1484** |
| Standard deviation \( s \) | 3.3389 |
| Minimum | 0 |
| Maximum | 19 |

**Interpretation:** On average, the call center receives about **3.85 requests per hour**. However, the standard deviation of 3.34 is almost as large as the mean, indicating substantial variability. Some hours are very quiet (0 requests), while others are extremely busy (up to 19 requests in a single hour).

A key observation is that the **variance (11.15) is much larger than the mean (3.85)**. The ratio is:

$$
\frac{s^2}{\bar{x}} = \frac{11.1484}{3.8542} \approx 2.89
$$

For a Poisson distribution, this ratio should be approximately 1, since \( \text{Var}(X) = \lambda = E[X] \). The fact that it is nearly 3 is a strong signal that the data are **overdispersed** relative to a single Poisson model. We will explore why in Tasks 9 and 10.

---

### Task 3: Compare request counts for weekdays and weekends

**Answer:**

The 30-day period contains **21 weekdays** (\( 21 \times 24 = 504 \) hourly observations) and **9 weekend days** (\( 9 \times 24 = 216 \) hourly observations).

| Day type | Hours \( n \) | Mean \( \bar{x} \) | Variance \( s^2 \) | Std. dev. \( s \) | Min | Max |
|:---------|-------------:|-------------------:|-------------------:|-----------------:|----:|----:|
| Weekday  | 504 | **4.3452** | 12.9700 | 3.6014 | 0 | 19 |
| Weekend  | 216 | **2.7083** |  5.0541 | 2.2481 | 0 |  9 |

**Interpretation:**

- **Weekdays are significantly busier.** The mean number of requests per hour on weekdays (4.35) is about **60% higher** than on weekends (2.71):

$$
\frac{\bar{x}_{\text{weekday}}}{\bar{x}_{\text{weekend}}} = \frac{4.3452}{2.7083} \approx 1.60
$$

- **Weekdays also have higher variability.** The weekday variance (12.97) is more than twice the weekend variance (5.05). The maximum hourly count on weekdays (19) is also much higher than on weekends (9).

- **Overdispersion persists within each group**, though it is less extreme:
  - Weekday: \( s^2 / \bar{x} = 12.97 / 4.35 \approx 2.98 \)
  - Weekend: \( s^2 / \bar{x} = 5.05 / 2.71 \approx 1.86 \)

  The weekend ratio (1.86) is closer to 1 than the overall ratio (2.89), but still above 1. This suggests that even within each day type, the request rate is **not constant** across hours.

---

### Task 4: Compute the average number of requests by hour of day

**Answer:**

For each hour \( h \in \{0, 1, \ldots, 23\} \), we compute the mean request count across all 30 days. This gives us the **hourly profile** — the typical pattern of activity throughout the day.

| Hour | Mean requests | Variance | Std. dev. |
|-----:|--------------:|---------:|----------:|
| 0 | 1.1667 | 1.3161 | 1.1472 |
| 1 | 1.4333 | 1.7023 | 1.3047 |
| 2 | 1.4000 | 0.9379 | 0.9685 |
| 3 | 1.2000 | 1.4759 | 1.2149 |
| 4 | 1.1000 | 1.2655 | 1.1250 |
| 5 | 1.0667 | 1.5126 | 1.2299 |
| 6 | 0.9667 | 0.8609 | 0.9279 |
| 7 | 1.0333 | 0.7230 | 0.8503 |
| 8 | **6.6333** | 8.5851 | 2.9300 |
| 9 | **6.0667** | 7.5816 | 2.7535 |
| 10 | **5.8333** | 7.3161 | 2.7048 |
| 11 | **7.2667** | 11.0989 | 3.3315 |
| 12 | **6.4333** | 10.1851 | 3.1914 |
| 13 | **6.9333** | 9.9954 | 3.1616 |
| 14 | **6.6333** | 15.3437 | 3.9171 |
| 15 | **6.5333** | 5.9816 | 2.4457 |
| 16 | **6.3333** | 10.2299 | 3.1984 |
| 17 | **6.2000** | 6.9241 | 2.6314 |
| 18 | 4.0667 | 5.5126 | 2.3479 |
| 19 | 4.0333 | 3.3437 | 1.8286 |
| 20 | 4.2667 | 5.8575 | 2.4202 |
| 21 | 4.1667 | 4.8333 | 2.1985 |
| 22 | 0.9000 | 0.5069 | 0.7120 |
| 23 | 0.8333 | 1.3851 | 1.1769 |

```python
hourly = df.groupby("hour")["requests"].agg(["count", "mean", "var", "std"])
```

**Key observations:**

1. **Night hours (0–7, 22–23):** Average requests are low, roughly 0.8–1.4 per hour.
2. **Business hours (8–17):** Average requests surge to 5.8–7.3 per hour. The **peak is hour 11** (11 AM – noon) with a mean of 7.27 requests.
3. **Evening hours (18–21):** Moderate activity at about 4.0–4.3 requests per hour.

Notice that within each hour, the variance and mean are much closer to each other. For instance, at hour 2: mean = 1.40, variance = 0.94 (\( s^2/\bar{x} = 0.67 \)). This is consistent with Poisson behaviour **at a fixed rate** — the overdispersion in the overall data is largely explained by **mixing different hourly rates**.

---

### Task 5: Draw a line plot showing average requests by hour

**Answer:**

![Average requests by hour of day](problem_07_call_center_requests/average_requests_by_hour.png)

The line plot above shows the average number of requests at each hour of the day, averaged across all 30 days. The shape reveals a clear **diurnal pattern**:

1. **Low plateau from midnight to ~7 AM:** The call center receives roughly 1 request per hour during the night. This makes intuitive sense — few customers contact a call center during sleeping hours.

2. **Sharp rise at 8 AM:** There is a dramatic jump from ~1 request/hour to ~6.6 requests/hour when business hours begin. This represents approximately a **six-fold increase**.

3. **High plateau from 8 AM to 5 PM:** Activity remains elevated throughout business hours, fluctuating between about 5.8 and 7.3 requests per hour.

4. **Moderate decline from 6 PM to 9 PM:** Requests drop to about 4 per hour during the evening — still above the nighttime level, but clearly lower than business hours.

5. **Sharp drop at 10 PM:** Activity falls back to ~0.9 requests/hour, matching nighttime levels.

This pattern is exactly what we would expect for a customer service operation. It also provides the first visual clue that a single Poisson rate \( \lambda \) cannot describe the entire dataset: the rate clearly **varies with time**.

Additionally, the separated weekday/weekend plot shows:

![Mean hourly requests by day type](problem_07_call_center_requests/mean_hourly_requests_by_day_type.png)

This plot confirms that weekdays have consistently higher request rates during business hours, while the nighttime baseline is similar for both day types.

---

### Task 6: Compute daily totals

**Answer:**

By summing the 24 hourly counts for each day, we obtain the **daily total** number of requests:

```python
daily = df.groupby(["date", "day_type"])["requests"].sum().reset_index()
daily.columns = ["date", "day_type", "daily_total_requests"]
```

| Date | Day type | Daily total |
|:-----|:---------|------------:|
| 2026-03-01 | weekend | 57 |
| 2026-03-02 | weekday | 109 |
| 2026-03-03 | weekday | 90 |
| 2026-03-04 | weekday | 102 |
| 2026-03-05 | weekday | 124 |
| 2026-03-06 | weekday | 109 |
| 2026-03-07 | weekend | 61 |
| 2026-03-08 | weekend | 57 |
| 2026-03-09 | weekday | 106 |
| 2026-03-10 | weekday | 109 |
| 2026-03-11 | weekday | 113 |
| 2026-03-12 | weekday | 102 |
| 2026-03-13 | weekday | 100 |
| 2026-03-14 | weekend | 64 |
| 2026-03-15 | weekend | 75 |
| 2026-03-16 | weekday | 106 |
| 2026-03-17 | weekday | 118 |
| 2026-03-18 | weekday | 114 |
| 2026-03-19 | weekday | 98 |
| 2026-03-20 | weekday | 92 |
| 2026-03-21 | weekend | 56 |
| 2026-03-22 | weekend | 63 |
| 2026-03-23 | weekday | 100 |
| 2026-03-24 | weekday | 86 |
| 2026-03-25 | weekday | 96 |
| 2026-03-26 | weekday | 91 |
| 2026-03-27 | weekday | 117 |
| 2026-03-28 | weekend | 85 |
| 2026-03-29 | weekend | 67 |
| 2026-03-30 | weekday | 108 |

**Summary by day type:**

| Day type | Days | Mean daily total | Variance | Std. dev. | Min | Max |
|:---------|-----:|-----------------:|---------:|----------:|----:|----:|
| Weekday  | 21 | **104.2857** | 100.8143 | 10.0406 | 86 | 124 |
| Weekend  |  9 | **65.0000** | 91.7500 |  9.5786 | 56 |  85 |

**Interpretation:**

- The average weekday sees about **104 requests**, compared to **65 requests** on a weekend day — a difference of roughly 40 requests per day.
- Interestingly, the **variability** (standard deviation ≈ 10) is similar for both day types, meaning the spread of daily totals around their respective means is comparable.
- From a Poisson perspective, if hourly counts within a day were independent Poisson random variables with rates \( \lambda_h \), then the daily total would also be Poisson with rate \( \Lambda = \sum_{h=0}^{23} \lambda_h \). This is a consequence of the **additive property** of Poisson distributions.

---

### Task 7: Draw a histogram of hourly request counts

**Answer:**

![Histogram of hourly request counts](problem_07_call_center_requests/hourly_requests_histogram.png)

The histogram displays the frequency distribution of all 720 hourly request counts. Key features:

1. **Right-skewed shape:** The distribution is clearly skewed to the right. The mode is near 0–1 requests, with a long tail extending to 19 requests. This is typical of count data.

2. **Bimodal tendency:** There is a suggestion of two peaks — one near 0–2 requests (reflecting nighttime hours) and another near 5–8 requests (reflecting business hours). This bimodality is a visual signature of the **mixture** of different Poisson rates across hours.

3. **No negative values:** As expected for count data, all values are non-negative integers \( \{0, 1, 2, \ldots\} \).

The shape of this histogram is **not** what we would expect from a single Poisson distribution. A Poisson histogram with \( \lambda = 3.85 \) would be unimodal and centred near 4. The bimodal character and heavy right tail in the data reflect the mixing of low-rate (nighttime) and high-rate (daytime) processes.

---

### Task 8: Compare the empirical mean and variance of hourly counts

**Answer:**

A fundamental property of the Poisson distribution is that the mean equals the variance:

$$
X \sim \text{Poisson}(\lambda) \implies E[X] = \text{Var}(X) = \lambda
$$

This is sometimes called the **equidispersion** property. Let us check this across different subsets of the data:

| Subset | Mean | Variance | Ratio \( s^2 / \bar{x} \) | Assessment |
|:-------|-----:|---------:|---------------------------:|:-----------|
| **All data** | 3.8542 | 11.1484 | **2.89** | Strongly overdispersed |
| Weekday | 4.3452 | 12.9700 | **2.98** | Strongly overdispersed |
| Weekend | 2.7083 | 5.0541 | **1.87** | Moderately overdispersed |
| Hour 2 (all days) | 1.4000 | 0.9379 | 0.67 | Slightly underdispersed |
| Hour 7 (all days) | 1.0333 | 0.7230 | 0.70 | Slightly underdispersed |
| Hour 11 (all days) | 7.2667 | 11.0989 | 1.53 | Mildly overdispersed |
| Hour 15 (all days) | 6.5333 | 5.9816 | 0.92 | ≈ equidispersed |

**Key insight:** When we look at individual hours, the ratio \( s^2 / \bar{x} \) tends to be **much closer to 1** than for the aggregate data. For example, hour 15 has a ratio of 0.92, which is nearly perfect for a Poisson distribution.

This is a manifestation of the mathematical fact that **mixing Poisson distributions with different rates always increases the variance relative to the mean**. If \( X | \Lambda = \lambda \sim \text{Poisson}(\lambda) \) and \( \Lambda \) is itself random, then by the **law of total variance**:

$$
\text{Var}(X) = E[\text{Var}(X | \Lambda)] + \text{Var}(E[X | \Lambda]) = E[\Lambda] + \text{Var}(\Lambda)
$$

Since \( E[X] = E[\Lambda] \), we get:

$$
\text{Var}(X) = E[X] + \text{Var}(\Lambda) > E[X]
$$

whenever \( \Lambda \) has positive variance. This explains the overdispersion perfectly.

---

### Task 9: Explain why this dataset is related to the Poisson distribution

**Answer:**

The **Poisson distribution** models the number of independent events occurring in a fixed interval of time (or space), given a constant average rate. Formally, if events arrive at a constant rate \( \lambda \) per unit time and are independent of each other, then the number \( X \) of events in a unit time interval follows:

$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \ldots
$$

This dataset is a textbook example of a Poisson-type setting because:

1. **Counting events in fixed intervals:** Each observation is the number of customer requests arriving during a one-hour window. The interval length is fixed (1 hour), and the quantity measured is a non-negative integer count.

2. **Events are (approximately) independent:** Each customer's decision to contact the call center is essentially independent of other customers' decisions.

3. **Events occur one at a time:** It is unlikely that two requests arrive at the *exact* same instant.

4. **The rate is meaningful:** The parameter \( \lambda \) has a natural interpretation as the expected number of calls per hour.

These are precisely the conditions under which the Poisson model is most appropriate. The Poisson distribution arises naturally as the limit of a Binomial distribution when the number of potential events is very large and the probability of each is very small — which is exactly the situation at a call center (millions of potential customers, each with a tiny probability of calling in any given hour).

---

### Task 10: Explain why the whole dataset should not be treated as one Poisson distribution

**Answer:**

Although each individual hour's count may be well-described by a Poisson distribution, the **entire dataset of 720 observations should NOT be treated as draws from a single Poisson(\(\lambda\)) distribution**. There are several compelling reasons:

#### Reason 1: The rate changes with the hour of day

The average number of requests per hour varies dramatically across the day:

- **Night hours (0–7):** \( \lambda \approx 1.0 \text{–} 1.4 \)
- **Business hours (8–17):** \( \lambda \approx 5.8 \text{–} 7.3 \)
- **Evening hours (18–21):** \( \lambda \approx 4.0 \text{–} 4.3 \)

The Poisson model assumes a **single constant rate** \( \lambda \), but here the rate is clearly a function of the hour: \( \lambda = \lambda(h) \). Using a single \( \lambda \) would be like saying a student who sleeps 8 hours and studies 8 hours "on average" does 8 hours of each activity all the time — it masks the structure.

#### Reason 2: The rate differs between weekdays and weekends

Even at the same hour, the request rate differs by day type. The overall weekday mean (4.35) is much higher than the weekend mean (2.71). This adds another dimension of heterogeneity.

#### Reason 3: Overdispersion confirms the mixture

As computed in Task 8, the overall variance (11.15) is nearly **three times** the overall mean (3.85). A single Poisson distribution requires \( \text{Var}(X) = E[X] \), so this ratio should be 1. The large ratio is a direct consequence of **mixing** multiple Poisson distributions with different rates.

Mathematically, if we observe the mixture:

$$
X \sim \begin{cases} \text{Poisson}(\lambda_1) & \text{with probability } p_1 \\ \text{Poisson}(\lambda_2) & \text{with probability } p_2 \\ \vdots \end{cases}
$$

then using the **law of total variance**:

$$
\text{Var}(X) = \underbrace{E[\lambda]}_{\text{mean}} + \underbrace{\text{Var}(\lambda)}_{\text{extra dispersion}} > E[X]
$$

The term \( \text{Var}(\lambda) \) captures the variability in the rate itself, producing overdispersion in the marginal distribution.

#### The correct approach

Instead of one Poisson model, we should use a **non-homogeneous Poisson process** or, equivalently, fit separate Poisson models for different (hour, day_type) combinations. For example, "hour 11 on a weekday" could be modelled as \( \text{Poisson}(\lambda_{11, \text{weekday}}) \), while "hour 3 on a weekend" as \( \text{Poisson}(\lambda_{3, \text{weekend}}) \). This respects the structure of the data and eliminates the overdispersion problem.

---

## Summary and Key Takeaways

This problem provided a rich case study of **Poisson-type count data** in a real-world setting. We found that:

- The call center dataset consists of 720 hourly observations, each recording the number of customer requests in a one-hour interval.
- The overall mean is 3.85 requests/hour, but this masks dramatic variation by hour of day (night ≈ 1, business hours ≈ 6–7) and day type (weekday ≈ 4.35, weekend ≈ 2.71).
- The **variance-to-mean ratio** is approximately 2.89 for the overall data, indicating strong **overdispersion** relative to a single Poisson model.
- When we condition on specific hours, the variance-to-mean ratio moves much closer to 1, confirming that the overdispersion is caused by **mixing** different Poisson rates.
- This illustrates the important statistical concept that **aggregating heterogeneous Poisson processes** always produces overdispersion (law of total variance).
- The correct modelling approach is to use a **non-homogeneous Poisson process** that allows the rate \( \lambda \) to vary with hour and day type.
