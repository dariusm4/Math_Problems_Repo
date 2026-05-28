# Problem 5 — Customer Survey and Conditional Frequencies

## Problem Statement

A company surveyed 600 customers, recording each customer's age group, the contact channel they used, their satisfaction score (1–5), and whether they renewed their subscription. Our goal is to build frequency tables, compute renewal rates overall and by subgroup, explore two distinct conditional probabilities, and determine whether satisfaction and renewal appear to be related.

## Generated Files

- Dataset: [problem_05_customer_survey.csv](problem_05_customer_survey/problem_05_customer_survey.csv)
- Frequency tables:
  - [frequency_age_group.csv](problem_05_customer_survey/frequency_age_group.csv)
  - [frequency_channel.csv](problem_05_customer_survey/frequency_channel.csv)
  - [frequency_satisfaction.csv](problem_05_customer_survey/frequency_satisfaction.csv)
  - [frequency_renewed.csv](problem_05_customer_survey/frequency_renewed.csv)
- Overall renewal summary: [overall_renewal_summary.csv](problem_05_customer_survey/overall_renewal_summary.csv)
- Renewal by channel: [renewal_rate_by_channel.csv](problem_05_customer_survey/renewal_rate_by_channel.csv)
- Renewal by satisfaction: [renewal_rate_by_satisfaction.csv](problem_05_customer_survey/renewal_rate_by_satisfaction.csv)
- Plots:
  - [satisfaction_frequency_bar.png](problem_05_customer_survey/satisfaction_frequency_bar.png)
  - [renewal_rate_by_satisfaction.png](problem_05_customer_survey/renewal_rate_by_satisfaction.png)
  - [renewal_rate_by_channel.png](problem_05_customer_survey/renewal_rate_by_channel.png)

---

## Solution

### Task 1: Describe what one row of the dataset represents

**Answer:**

Each row in the dataset corresponds to **one surveyed customer**. The columns are:

| Column | Description | Type / Range |
|:-------|:------------|:-------------|
| `customer_id` | Unique customer identifier (e.g., C0001) | Categorical (ID) |
| `age_group` | Age bracket of the customer | Categorical: 18-25, 26-40, 41-60, 60+ |
| `channel` | Contact channel the customer primarily uses | Categorical: mobile_app, phone, website |
| `satisfaction` | Customer's satisfaction score | Ordinal integer: 1, 2, 3, 4, 5 |
| `renewed` | Whether the customer renewed their subscription | Boolean: True / False |

For example, the first data row reads:

> **C0001**, age group **26-40**, contacted via **phone**, satisfaction score **4**, **renewed = True**.

This tells us that customer C0001 is between 26 and 40 years old, primarily used the phone channel, was quite satisfied (score 4 out of 5), and did renew. The dataset contains \( n = 600 \) such records in total.

---

### Task 2: Construct frequency tables for age_group, channel, satisfaction, renewed

**Answer:**

A **frequency table** lists how many observations fall into each category (absolute frequency) and the proportion of the total (relative frequency). For a category \( c \) with count \( n_c \) out of \( n = 600 \) customers:

$$
f_{\text{rel}}(c) = \frac{n_c}{n}
$$

#### Age Group

| Age Group | Frequency \( n_c \) | Relative Frequency \( f_{\text{rel}} \) |
|:----------|--------------------:|----------------------------------------:|
| 18-25     | 111                 | \( 111/600 = 0.185 \)                   |
| 26-40     | 248                 | \( 248/600 \approx 0.413 \)             |
| 41-60     | 185                 | \( 185/600 \approx 0.308 \)             |
| 60+       | 56                  | \( 56/600 \approx 0.093 \)              |

The **26-40** age group dominates with about 41.3% of all customers. The **60+** group is the smallest at roughly 9.3%. This is a right-skewed age distribution, typical of many consumer services where the core user base is in the 26-40 bracket.

#### Channel

| Channel    | Frequency \( n_c \) | Relative Frequency \( f_{\text{rel}} \) |
|:-----------|--------------------:|----------------------------------------:|
| mobile_app | 225                 | \( 225/600 = 0.375 \)                   |
| phone      | 91                  | \( 91/600 \approx 0.152 \)              |
| website    | 284                 | \( 284/600 \approx 0.473 \)             |

The **website** is the most commonly used channel (47.3%), followed by the **mobile app** (37.5%). The **phone** channel is used by only about 15.2% of customers — expected in the digital age.

#### Satisfaction

| Satisfaction | Frequency \( n_c \) | Relative Frequency \( f_{\text{rel}} \) |
|:-------------|--------------------:|----------------------------------------:|
| 1            | 5                   | \( 5/600 \approx 0.008 \)              |
| 2            | 51                  | \( 51/600 = 0.085 \)                   |
| 3            | 217                 | \( 217/600 \approx 0.362 \)            |
| 4            | 217                 | \( 217/600 \approx 0.362 \)            |
| 5            | 110                 | \( 110/600 \approx 0.183 \)            |

![Satisfaction frequency distribution](problem_05_customer_survey/satisfaction_frequency_bar.png)

The distribution is **left-skewed** (concentrated at higher values). Scores 3 and 4 together account for about 72.3% of all responses. Very few customers (only 5) gave the lowest score of 1, while 110 customers (18.3%) gave the highest score of 5. This is a generally positive sentiment.

#### Renewed

| Renewed | Frequency \( n_c \) | Relative Frequency \( f_{\text{rel}} \) |
|:--------|--------------------:|----------------------------------------:|
| False   | 146                 | \( 146/600 \approx 0.243 \)            |
| True    | 454                 | \( 454/600 \approx 0.757 \)            |

A clear majority — about **75.7%** — of customers renewed their subscription. The remaining 24.3% churned.

**Verification:** All frequency tables sum to \( n = 600 \). For instance: \( 111 + 248 + 185 + 56 = 600 \). ✓

---

### Task 3: Compute the overall renewal rate

**Answer:**

The **overall renewal rate** is the proportion of all 600 customers who renewed. This is an empirical (frequentist) estimate of the probability of renewal:

$$
P(\text{renewed}) = \frac{\text{Number of customers who renewed}}{\text{Total number of customers}} = \frac{454}{600} \approx 0.757
$$

In Python, this is straightforward:

```python
import pandas as pd
df = pd.read_csv("problem_05_customer_survey.csv")
renewal_rate = df['renewed'].mean()  # True=1, False=0
print(f"Overall renewal rate: {renewal_rate:.3f}")
# Output: Overall renewal rate: 0.757
```

**Interpretation:** Roughly **3 out of every 4 customers** renewed. This is a fairly healthy retention rate, but there is still room for improvement — nearly 1 in 4 customers is lost. The key question is: *which factors predict whether a customer renews?*

---

### Task 4: Compute the renewal rate by channel

**Answer:**

We now compute the renewal rate *conditional on* the channel. For each channel \( c \):

$$
P(\text{renewed} \mid \text{channel} = c) = \frac{\text{Number renewed in channel } c}{\text{Total customers in channel } c}
$$

| Channel    | Renewed Customers | Total Customers | Renewal Rate |
|:-----------|------------------:|----------------:|-------------:|
| mobile_app | 194               | 225             | \( 194/225 \approx 0.862 \) |
| phone      | 51                | 91              | \( 51/91 \approx 0.560 \) |
| website    | 209               | 284             | \( 209/284 \approx 0.736 \) |

![Renewal rate by channel](problem_05_customer_survey/renewal_rate_by_channel.png)

```python
renewal_by_channel = df.groupby('channel')['renewed'].agg(['sum', 'count'])
renewal_by_channel['rate'] = renewal_by_channel['sum'] / renewal_by_channel['count']
```

**Interpretation:**

- **Mobile app** has the highest renewal rate at **86.2%**. Customers using the app may be more engaged, or the app may provide a smoother experience that encourages loyalty.
- **Website** has a moderate rate of **73.6%**, close to the overall average.
- **Phone** has the lowest renewal rate at **56.0%** — significantly below the other channels. This could indicate that phone users are contacting support with complaints, or that the phone experience is less satisfying.

The gap between the best (mobile_app) and worst (phone) channel is \( 0.862 - 0.560 = 0.302 \), or about 30 percentage points. This is a **substantial** difference.

---

### Task 5: Compute the renewal rate by satisfaction

**Answer:**

Similarly, we condition on satisfaction level \( s \in \{1, 2, 3, 4, 5\} \):

$$
P(\text{renewed} \mid \text{satisfaction} = s) = \frac{n_{\text{renewed},\, s}}{n_s}
$$

| Satisfaction | Renewed Customers | Total Customers | Renewal Rate |
|:-------------|------------------:|----------------:|-------------:|
| 1            | 3                 | 5               | \( 3/5 = 0.600 \) |
| 2            | 27                | 51              | \( 27/51 \approx 0.529 \) |
| 3            | 140               | 217             | \( 140/217 \approx 0.645 \) |
| 4            | 179               | 217             | \( 179/217 \approx 0.825 \) |
| 5            | 105               | 110             | \( 105/110 \approx 0.955 \) |

![Renewal rate by satisfaction](problem_05_customer_survey/renewal_rate_by_satisfaction.png)

```python
renewal_by_sat = df.groupby('satisfaction')['renewed'].agg(['sum', 'count'])
renewal_by_sat['rate'] = renewal_by_sat['sum'] / renewal_by_sat['count']
```

**Interpretation:**

There is a **clear monotonic trend** (with one exception): as satisfaction increases from 2 to 5, the renewal rate rises steadily:

$$
0.529 \;\to\; 0.645 \;\to\; 0.825 \;\to\; 0.955
$$

The satisfaction-1 group breaks the strict monotonic pattern with a rate of 0.600, but this group contains **only 5 observations** — far too few to draw reliable conclusions. With \( n = 5 \), the standard error of the proportion is approximately:

$$
\text{SE} = \sqrt{\frac{0.6 \times 0.4}{5}} \approx 0.219
$$

This enormous uncertainty means the 0.600 figure for satisfaction = 1 is essentially uninformative.

The jump from satisfaction 4 to 5 is noteworthy: the renewal rate increases from 82.5% to 95.5%. This suggests that **moving a customer from "satisfied" to "delighted"** has a powerful effect on retention.

---

### Task 6: Compute \( P(\text{renewed} \mid \text{satisfaction} = 5) \)

**Answer:**

This conditional probability asks: *"Among customers who gave a satisfaction score of 5, what fraction renewed?"*

Using Bayes' definition of conditional probability:

$$
P(\text{renewed} \mid \text{satisfaction} = 5) = \frac{P(\text{renewed} \cap \text{satisfaction} = 5)}{P(\text{satisfaction} = 5)}
$$

From the data:

- \( n(\text{renewed} \cap \text{satisfaction} = 5) = 105 \) customers who both gave score 5 **and** renewed.
- \( n(\text{satisfaction} = 5) = 110 \) customers who gave score 5.

Therefore:

$$
P(\text{renewed} \mid \text{satisfaction} = 5) = \frac{105}{110} \approx 0.955
$$

**Interpretation:** An overwhelming **95.5%** of the most satisfied customers renewed. Only 5 out of 110 highly satisfied customers churned. This is a remarkably strong signal: high satisfaction is nearly a guarantee of renewal.

---

### Task 7: Compute \( P(\text{satisfaction} = 5 \mid \text{renewed}) \)

**Answer:**

This conditional probability asks a *different* question: *"Among customers who renewed, what fraction had satisfaction score 5?"*

$$
P(\text{satisfaction} = 5 \mid \text{renewed}) = \frac{P(\text{satisfaction} = 5 \cap \text{renewed})}{P(\text{renewed})}
$$

From the data:

- \( n(\text{satisfaction} = 5 \cap \text{renewed}) = 105 \)
- \( n(\text{renewed}) = 454 \)

Therefore:

$$
P(\text{satisfaction} = 5 \mid \text{renewed}) = \frac{105}{454} \approx 0.231
$$

**Interpretation:** Only about **23.1%** of renewed customers had given a satisfaction score of 5. The vast majority of renewals (76.9%) came from customers with satisfaction scores of 1 through 4. This makes sense — there are many more customers with scores 3 and 4, so even with lower individual renewal rates, they contribute a large share of total renewals.

---

### Task 8: Explain why the two conditional probabilities answer different questions

**Answer:**

The two conditional probabilities from Tasks 6 and 7 are related by **Bayes' theorem**, but they answer fundamentally different questions:

| Probability | Question | "Universe" restricted to | Value |
|:------------|:---------|:-------------------------|------:|
| \( P(\text{renewed} \mid \text{sat}=5) \) | "If I know a customer gave score 5, how likely are they to renew?" | Customers with satisfaction = 5 | 0.955 |
| \( P(\text{sat}=5 \mid \text{renewed}) \) | "If I know a customer renewed, how likely is it they gave score 5?" | Customers who renewed | 0.231 |

**Mathematically**, the connection between these two is given by Bayes' theorem:

$$
P(\text{sat}=5 \mid \text{renewed}) = \frac{P(\text{renewed} \mid \text{sat}=5) \cdot P(\text{sat}=5)}{P(\text{renewed})}
$$

Let us verify:

$$
= \frac{0.955 \times 0.183}{0.757} = \frac{0.1749}{0.757} \approx 0.231 \quad \checkmark
$$

**Why they differ so dramatically:**

- \( P(\text{renewed} \mid \text{sat}=5) = 0.955 \) is high because satisfaction 5 is an excellent *predictor* of renewal — almost everyone in this group renews.
- \( P(\text{sat}=5 \mid \text{renewed}) = 0.231 \) is modest because satisfaction 5 is a relatively *rare* category (only 18.3% of all customers). Most renewals come from the large pool of customers with scores 3 and 4.

**Analogy:** Think of a medical test. "Given that someone has the disease, how likely is a positive test?" (sensitivity) is not the same as "Given a positive test, how likely is the disease?" (positive predictive value). The base rate of the condition matters enormously — this is the same principle at work here.

---

### Task 9: Decide whether data suggest a relationship between satisfaction and renewal

**Answer:**

**Yes — the data strongly suggest a positive relationship between satisfaction and renewal.**

The evidence for this conclusion comes from multiple angles:

**1. Monotonic trend in renewal rates:**

As satisfaction increases from 2 to 5, the renewal rate climbs steadily:

| Satisfaction | Renewal Rate |
|:-------------|:-------------|
| 2            | 52.9%        |
| 3            | 64.5%        |
| 4            | 82.5%        |
| 5            | 95.5%        |

The difference between the lowest (score 2) and highest (score 5) is:

$$
\Delta = 0.955 - 0.529 = 0.426
$$

A 42.6 percentage-point spread is very large.

**2. If satisfaction and renewal were independent**, we would expect the renewal rate to be roughly the *same* across all satisfaction levels — approximately equal to the overall rate of 0.757. Instead, we observe:

- Satisfaction 2: 0.529 (well below average)
- Satisfaction 5: 0.955 (well above average)

Under independence, \( P(\text{renewed} \mid \text{sat}=s) = P(\text{renewed}) \) for all \( s \). This is clearly violated.

**3. Practical significance:**

The renewal rate nearly *doubles* from satisfaction 2 to satisfaction 5. For a business, this means that investing in customer satisfaction — particularly pushing customers from "neutral" (3-4) to "delighted" (5) — can yield significant improvements in retention.

**Caveat:** The satisfaction = 1 group has only 5 observations, so we cannot draw reliable conclusions about this category. Additionally, this is an **observational** study — we can identify an *association* but not prove *causation*. It is possible that some unmeasured third variable (e.g., product quality, pricing) drives both satisfaction and renewal simultaneously.

---

### Task 10: Explain why this problem is related to conditional probability

**Answer:**

This problem is a textbook application of **conditional probability** because nearly every meaningful analysis involves restricting attention to a *subgroup* of the data and computing proportions within that subgroup.

**Formal definition:** The conditional probability of event \( A \) given event \( B \) is:

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0
$$

In this problem:

1. **Renewal rate by channel** = \( P(\text{renewed} \mid \text{channel} = c) \). We restrict to customers using channel \( c \) and compute the fraction who renewed.

2. **Renewal rate by satisfaction** = \( P(\text{renewed} \mid \text{satisfaction} = s) \). We restrict to customers with satisfaction \( s \) and compute the fraction who renewed.

3. **Task 6** directly computes \( P(\text{renewed} \mid \text{satisfaction} = 5) = 0.955 \).

4. **Task 7** computes the "reverse" conditional: \( P(\text{satisfaction} = 5 \mid \text{renewed}) = 0.231 \).

5. **Bayes' theorem** connects these two, showing how the direction of conditioning changes the answer.

The key insight is that **every group-specific rate is an empirical conditional probability**. When we say "the renewal rate among mobile app users is 86.2%," we are really saying:

$$
P(\text{renewed} \mid \text{channel} = \text{mobile\_app}) = \frac{194}{225} = 0.862
$$

This is the empirical counterpart of the theoretical conditional probability. The entire analysis — from frequency tables stratified by subgroups to Bayes' theorem connecting reverse conditionals — is a practical demonstration of how conditional probability governs real-world data analysis.

Furthermore, the comparison between \( P(\text{renewed} \mid \text{sat}=5) \) and \( P(\text{sat}=5 \mid \text{renewed}) \) illustrates one of the most commonly misunderstood concepts in probability theory: **the fallacy of the transposed conditional** (also known as the *prosecutor's fallacy*). Confusing these two quantities can lead to seriously wrong conclusions in fields ranging from medicine to criminal justice.

---

## Summary and Key Takeaways

This problem demonstrated how conditional probability and frequency analysis apply to a real-world customer survey dataset of 600 customers. We found that the overall renewal rate is 75.7%, but this masks important variation across subgroups. The mobile app channel has the highest renewal rate (86.2%), while phone has the lowest (56.0%). Most strikingly, satisfaction is strongly associated with renewal: the rate climbs from about 53% at satisfaction 2 to over 95% at satisfaction 5. The two conditional probabilities — \( P(\text{renewed} \mid \text{sat}=5) = 0.955 \) and \( P(\text{sat}=5 \mid \text{renewed}) = 0.231 \) — illustrate that the direction of conditioning matters profoundly. Bayes' theorem provides the formal link between these two quantities. This analysis shows that conditional probability is not just an abstract mathematical concept — it is the foundation of any data-driven decision making that involves comparing subgroup behavior.
