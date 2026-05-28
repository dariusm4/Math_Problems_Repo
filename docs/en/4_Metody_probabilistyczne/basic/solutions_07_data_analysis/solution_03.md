# Problem 3 — Exam Scores in Two Groups

## Problem Statement

We are given a dataset of 240 students who took an exam. Each student belongs to one of two groups — **Group A** or **Group B** (120 students each). For every student we know their exam score (numerical, on a scale roughly 0–100) and whether they passed (score ≥ 50). The goal is to compute descriptive statistics overall and by group, visualize the score distributions, and draw conclusions about which group performed better.

## Generated Files

| File | Description |
|------|-------------|
| [problem_03_exam_scores.csv](problem_03_exam_scores/problem_03_exam_scores.csv) | Raw dataset (240 rows) |
| [overall_score_summary.csv](problem_03_exam_scores/overall_score_summary.csv) | Mean, median, min, max, variance, std dev for all students |
| [score_summary_by_group.csv](problem_03_exam_scores/score_summary_by_group.csv) | Same statistics split by group |
| [pass_rate_by_group.csv](problem_03_exam_scores/pass_rate_by_group.csv) | Pass counts and rates by group |
| [score_histograms_by_group.png](problem_03_exam_scores/score_histograms_by_group.png) | Histograms of scores for A and B |
| [score_boxplots_by_group.png](problem_03_exam_scores/score_boxplots_by_group.png) | Side-by-side boxplots |

---

## Solution

### Task 1: Describe what one row of the dataset represents

**Answer:**

Each row in `problem_03_exam_scores.csv` represents **one student who took the exam**. The columns are:

| Column | Type | Meaning |
|--------|------|---------|
| `student_id` | string | Unique identifier for the student (e.g., `A001`, `B042`) |
| `group` | categorical | The study group the student belongs to: `A` or `B` |
| `score` | float | The numerical exam score achieved by the student |
| `passed` | boolean | Whether the student passed the exam (\(\text{score} \ge 50\)) |

There are 240 rows in total — 120 from Group A (IDs `A001`–`A120`) and 120 from Group B (IDs `B001`–`B120`). The **observational unit** is a single student, and the **response variable** of primary interest is `score`.

---

### Task 2: Compute mean, median, min, max, variance, and standard deviation of `score`

**Answer:**

We compute the six standard descriptive statistics over all 240 scores combined (ignoring the group variable).

**Formulas used:**

The **sample mean** of \( n \) observations \( x_1, x_2, \ldots, x_n \) is:

$$
\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

The **sample variance** (with Bessel's correction) is:

$$
s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2
$$

The **sample standard deviation** is \( s = \sqrt{s^2} \).

The **median** is the middle value when all observations are sorted; for even \( n \), it is the average of the two central values.

```python
import pandas as pd

df = pd.read_csv("problem_03_exam_scores.csv")
stats = df["score"].describe()
variance = df["score"].var()  # Bessel-corrected by default
```

**Results:**

| Statistic | Value |
|-----------|------:|
| Mean | 71.128 |
| Median | 70.400 |
| Minimum | 27.600 |
| Maximum | 100.000 |
| Variance | 230.744 |
| Standard deviation | 15.190 |

**Interpretation:**

- The average exam score across all students is **71.128**, which is well above the pass threshold of 50. This tells us that the typical student performed reasonably well.
- The **median of 70.400** is close to the mean, suggesting the overall distribution is roughly symmetric (or only mildly skewed).
- The **range** is \( 100.0 - 27.6 = 72.4 \) points, indicating substantial variability — some students scored near perfect while others scored below 30.
- The **standard deviation of 15.190** means that roughly 68% of scores (under a normal approximation) lie in the interval \( [71.128 - 15.190,\; 71.128 + 15.190] = [55.94, 86.32] \).

---

### Task 3: Compute the same quantities separately for Group A and Group B

**Answer:**

We repeat the descriptive statistics computation separately for each group.

```python
grouped = df.groupby("group")["score"]
summary = grouped.agg(["mean", "median", "min", "max", "var", "std"])
```

**Results:**

| Statistic | Group A | Group B |
|-----------|--------:|--------:|
| Mean | 69.849 | 72.406 |
| Median | 68.900 | 72.450 |
| Minimum | 39.900 | 27.600 |
| Maximum | 94.200 | 100.000 |
| Variance | 132.194 | 327.937 |
| Standard deviation | 11.498 | 18.109 |

**Interpretation:**

These numbers reveal a rich and nuanced picture:

1. **Central tendency:** Group B has a higher mean (72.406 vs. 69.849) and a higher median (72.450 vs. 68.900). Both measures agree — the "center" of Group B's distribution is shifted to the right relative to Group A.

2. **Spread:** Group B's standard deviation (18.109) is **substantially larger** than Group A's (11.498). In fact, Group B's variance (\( 327.937 \)) is roughly **2.5 times** that of Group A (\( 132.194 \)):

$$
\frac{s_B^2}{s_A^2} = \frac{327.937}{132.194} \approx 2.48
$$

3. **Range:** Group A's scores range from 39.9 to 94.2 (a span of 54.3 points), while Group B's range from 27.6 to 100.0 (a span of 72.4 points). Group B has both the lowest and the highest scores in the entire dataset.

4. **Coefficient of variation:** To compare variability in a scale-free way, we can compute:

$$
\text{CV}_A = \frac{s_A}{\bar{x}_A} = \frac{11.498}{69.849} \approx 0.165 \quad (16.5\%)
$$

$$
\text{CV}_B = \frac{s_B}{\bar{x}_B} = \frac{18.109}{72.406} \approx 0.250 \quad (25.0\%)
$$

Group B's relative variability is about 1.5 times higher than Group A's.

---

### Task 4: Compute the pass rate in each group

**Answer:**

A student passes if their score is **at least 50**. The pass rate for a group is:

$$
\text{Pass rate} = \frac{\text{Number of students with score} \ge 50}{\text{Total number of students in group}}
$$

```python
pass_rates = df.groupby("group")["passed"].agg(["sum", "count"])
pass_rates["rate"] = pass_rates["sum"] / pass_rates["count"]
```

**Results:**

| Group | Students who passed | Total students | Pass rate |
|:-----:|--------------------:|---------------:|----------:|
| A | 117 | 120 | 0.975 (97.5%) |
| B | 105 | 120 | 0.875 (87.5%) |

**Interpretation:**

- Group A has an impressive pass rate of **97.5%** — only 3 students out of 120 failed (students A026 with 46.0, A084 with 39.9, and A111 with 46.7).
- Group B has a lower pass rate of **87.5%** — 15 students failed. These include some very low scores like 27.6 and 29.4.

The difference in pass rates is:

$$
\Delta = 0.975 - 0.875 = 0.100
$$

This 10 percentage point gap is a crucial finding. Even though Group B has the higher mean, it has **far more failures**. This is a direct consequence of Group B's larger spread — the wider distribution extends further below the 50-point threshold.

---

### Task 5: Draw histograms of exam scores for both groups

**Answer:**

The histograms below show the frequency distributions of exam scores for Group A and Group B side by side.

![Histograms of exam scores by group](problem_03_exam_scores/score_histograms_by_group.png)

```python
import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(12, 5), sharey=True)
for ax, grp in zip(axes, ["A", "B"]):
    subset = df[df["group"] == grp]["score"]
    ax.hist(subset, bins=15, edgecolor="black", alpha=0.7)
    ax.set_title(f"Group {grp}")
    ax.set_xlabel("Score")
    ax.set_ylabel("Frequency")
plt.tight_layout()
plt.savefig("score_histograms_by_group.png", dpi=150)
```

**What the histograms reveal:**

- **Group A** has a distribution that is relatively **compact and unimodal**, concentrated roughly in the 55–90 range. There are very few observations below 50.
- **Group B** has a **wider spread**. It has a noticeable cluster of high scores (some reaching 100), but also has a visible left tail with scores in the 27–50 range.
- The visual difference confirms what the numerical statistics showed: Group B is more dispersed, with both more top performers and more students who struggled.

---

### Task 6: Draw boxplots comparing the two groups

**Answer:**

Boxplots provide a compact summary of each group's distribution, showing the median, interquartile range (IQR), whiskers, and potential outliers.

![Boxplots of exam scores by group](problem_03_exam_scores/score_boxplots_by_group.png)

```python
df.boxplot(column="score", by="group", figsize=(8, 6))
plt.title("Exam Scores by Group")
plt.suptitle("")
plt.ylabel("Score")
plt.savefig("score_boxplots_by_group.png", dpi=150)
```

**Reading the boxplots:**

Recall the anatomy of a boxplot:
- The **box** spans from \( Q_1 \) to \( Q_3 \) (the interquartile range).
- The **line inside the box** is the median (\( Q_2 \)).
- The **whiskers** extend to the most extreme data point within \( 1.5 \times \text{IQR} \) of the box.
- Points beyond the whiskers are plotted individually as **potential outliers**.

From the boxplots we can observe:
- Group A's box is **shorter** (smaller IQR), confirming less variability.
- Group B's box is **taller** and the whiskers are longer, especially the lower whisker, reflecting its wider range.
- Group B's median line sits slightly higher than Group A's.
- Group B may show low outliers in the sub-40 range.

---

### Task 7: Which group has the higher mean score?

**Answer:**

**Group B** has the higher mean score:

$$
\bar{x}_B = 72.406 > 69.849 = \bar{x}_A
$$

The difference is:

$$
\bar{x}_B - \bar{x}_A = 72.406 - 69.849 = 2.557 \text{ points}
$$

This means that on average, a student in Group B scored about **2.6 points higher** than a student in Group A. Group B also has the higher median (72.450 vs. 68.900), so both common measures of central tendency agree.

However, this higher mean is partly driven by Group B's cluster of very high scores (including multiple students who scored 100), which pull the mean upward. The mean alone does not tell the full story — we must also consider the variability (see Tasks 8 and 9).

---

### Task 8: Which group has the larger standard deviation?

**Answer:**

**Group B** has the larger standard deviation:

$$
s_B = 18.109 > 11.498 = s_A
$$

Group B's standard deviation is roughly **57% larger** than Group A's:

$$
\frac{s_B - s_A}{s_A} = \frac{18.109 - 11.498}{11.498} \approx 0.575 \quad (57.5\%)
$$

In terms of variance, the comparison is even more dramatic:

$$
s_B^2 = 327.937 \quad \text{vs.} \quad s_A^2 = 132.194
$$

This means Group B's scores are spread over a much wider range. Some Group B students achieved the highest possible score (100), but others scored as low as 27.6. Group A's scores, by contrast, are clustered more tightly around the group mean.

**Practical meaning:** If you picked a random student from Group B, there would be much more **uncertainty** about what their score might be compared to picking a random student from Group A.

---

### Task 9: Explain why comparing only the means may be misleading

**Answer:**

Comparing only the means would lead to the simple conclusion: "Group B performed better because \( \bar{x}_B = 72.406 > 69.849 = \bar{x}_A \)." But this conclusion is **incomplete and potentially misleading** for several reasons:

1. **The mean hides variability.** The mean is a single number that summarizes the center of a distribution, but says nothing about how spread out the data is. Two distributions with the same mean can look completely different. In our case, Group B's standard deviation is 18.109 — much larger than Group A's 11.498.

2. **Outliers and extreme values inflate the mean.** Group B contains multiple perfect scores (100) and several very high scores (95+). These values pull the mean upward. If we removed just a few of these extreme scores, Group B's mean could drop below Group A's.

3. **The pass rate tells a different story.** Group A has a pass rate of 97.5%, while Group B's is only 87.5%. So if "performing well" means "almost everyone passes," then Group A is clearly the better-performing group.

4. **The mean is sensitive to skewness.** If Group B's distribution is skewed (with a long right tail of high scores), the mean is pulled in the direction of the tail and no longer represents a "typical" score. The median is more robust in such cases.

5. **Simpson's paradox-like reasoning.** Looking at means alone can mask subgroup-level patterns. In this data, Group B has more students at the extremes (both very high and very low), while Group A is concentrated near the center.

**The lesson:** Descriptive statistics should always be reported as a **package** — central tendency (mean, median), spread (variance, standard deviation, range), and shape (histograms, boxplots). Relying on any single number can lead to misleading conclusions.

---

### Task 10: Decide which group performed better overall

**Answer:**

This question does not have a single definitive answer — it depends on **which criterion** we prioritize. Let us summarize the evidence:

| Criterion | Group A | Group B | Winner |
|-----------|---------|---------|--------|
| Mean score | 69.849 | 72.406 | **B** |
| Median score | 68.900 | 72.450 | **B** |
| Standard deviation | 11.498 | 18.109 | **A** (lower is better for consistency) |
| Minimum score | 39.900 | 27.600 | **A** (higher minimum) |
| Maximum score | 94.200 | 100.000 | **B** |
| Pass rate | 97.5% | 87.5% | **A** |
| Failed students | 3 | 15 | **A** |

**Arguments for Group B:**
- Higher mean and median — the "typical" Group B student scored higher.
- Contains the top performers (multiple students scored 100).
- If the goal is to maximize the average score, Group B wins.

**Arguments for Group A:**
- Much more **consistent** performance (lower standard deviation).
- Nearly all students passed (97.5% vs. 87.5%) — only 3 failures vs. 15.
- Higher minimum score — no student scored below 39.9.
- If the goal is to ensure as many students as possible pass, Group A wins decisively.

**Balanced conclusion:**

> Group B achieved the higher typical score by both mean and median, making it stronger in terms of **central tendency**. However, Group A demonstrated far more **reliable and consistent** performance: its pass rate is 10 percentage points higher, its variability is much smaller, and its weakest student still scored close to the pass threshold.
>
> If the primary objective is maximizing the average score or producing top-tier students, **Group B** performed better. If the objective is ensuring consistent, above-threshold performance for the greatest number of students, **Group A** performed better overall.
>
> In most educational contexts, a pass rate of 97.5% with moderate average scores is arguably more desirable than a higher average accompanied by 15 failures. Therefore, a reasonable overall judgment is that **Group A performed better from a reliability perspective**, while **Group B performed better from a peak-performance perspective**.

---

## Summary and Key Takeaways

This problem illustrates a fundamental principle of data analysis: **a single summary statistic never tells the full story**. Group B's higher mean (72.4 vs. 69.8) might superficially suggest it is the better group, but this masks critical differences in variability and pass rates. Group B's large standard deviation (18.1 vs. 11.5) reflects a bimodal-like spread — it contains both the dataset's highest achievers and its weakest performers. Group A, meanwhile, is tightly clustered around its mean, resulting in a pass rate of 97.5% compared to Group B's 87.5%.

The key statistical concepts reinforced here are:
- **Mean vs. Median**: Both can describe the center but may diverge in skewed distributions.
- **Variance and Standard Deviation**: Essential for understanding how representative the mean is.
- **Coefficient of Variation**: Allows scale-free comparison of variability.
- **Pass rates**: A threshold-based metric that can reverse conclusions drawn from means.
- **Visual tools** (histograms and boxplots): Irreplaceable for understanding distribution shape.

Always present multiple statistics and visualizations before drawing conclusions about group comparisons.
