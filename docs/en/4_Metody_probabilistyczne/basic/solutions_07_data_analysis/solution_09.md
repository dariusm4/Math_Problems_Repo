# Problem 9 — Warehouse Orders, Demand, and Returns

## Problem Statement

We are given a dataset of warehouse order lines for automotive parts. Each record captures a single order event at one of five warehouses, for one of five product groups, and indicates the quantity ordered and whether the item was returned. Our goal is to summarize demand patterns, compute return rates at various levels of aggregation, visualize the results, and discuss the difference between empirical summaries and theoretical probability models.

## Generated Files

- Dataset: [`problem_09_warehouse_orders.csv`](problem_09_warehouse_orders/problem_09_warehouse_orders.csv)
- Overall summary: [`warehouse_orders_overall_summary.csv`](problem_09_warehouse_orders/warehouse_orders_overall_summary.csv)
- Warehouse summary: [`summary_by_warehouse.csv`](problem_09_warehouse_orders/summary_by_warehouse.csv)
- Product-group summary: [`summary_by_product_group.csv`](problem_09_warehouse_orders/summary_by_product_group.csv)
- Return rate by product group: [`return_rate_by_product_group.csv`](problem_09_warehouse_orders/return_rate_by_product_group.csv)
- Return rate by warehouse: [`return_rate_by_warehouse.csv`](problem_09_warehouse_orders/return_rate_by_warehouse.csv)
- Daily total quantity: [`daily_total_quantity.csv`](problem_09_warehouse_orders/daily_total_quantity.csv)
- Plots:
  - [`total_quantity_by_product_group.png`](problem_09_warehouse_orders/total_quantity_by_product_group.png)
  - [`return_rate_by_product_group.png`](problem_09_warehouse_orders/return_rate_by_product_group.png)

---

## Solution

### Task 1: Describe what one row of the dataset represents

**Answer:**

Each row in `problem_09_warehouse_orders.csv` represents **one warehouse order line** — that is, a single line item within an order placed at one of the company's warehouses. The columns are:

| Column | Type | Description |
| :----- | :--- | :---------- |
| `order_id` | string | A unique identifier for the order (e.g., `O00001`) |
| `date` | date | The date on which the order was placed (e.g., `2026-04-14`) |
| `warehouse` | categorical | The warehouse that processed the order (`central`, `south`, `west`, `north`, or `east`) |
| `product_group` | categorical | The product category (`filters`, `brakes`, `suspension`, `electrical`, or `engine`) |
| `quantity` | integer | The number of units ordered in this line |
| `returned` | boolean | Whether this order line was subsequently returned (`True` or `False`) |

For example, the first row `O00001, 2026-04-14, west, filters, 2, True` tells us that order O00001 was placed on April 14, 2026 at the west warehouse, for 2 units of filters, and this order line was later returned.

The dataset contains **1,200 order lines** spanning 30 days (April 1–30, 2026) across 5 warehouses and 5 product groups.

---

### Task 2: Compute total quantity ordered by warehouse

**Answer:**

To compute the total quantity by warehouse, we group the data by the `warehouse` column and sum the `quantity` field:

```python
total_by_warehouse = df.groupby('warehouse')['quantity'].sum().sort_values(ascending=False)
```

The results are:

| Warehouse | Order Lines | Total Quantity |
| :-------- | ----------: | -------------: |
| central   | 336         | 1,029          |
| south     | 240         | 739            |
| west      | 233         | 737            |
| north     | 197         | 574            |
| east      | 194         | 567            |

The **central warehouse** dominates with a total ordered quantity of **1,029 units**, accounting for approximately:

$$
\frac{1{,}029}{3{,}646} \approx 0.2822 = 28.22\%
$$

of all ordered quantity. This is partly because the central warehouse also has the largest number of order lines (336 out of 1,200). The south and west warehouses are roughly comparable (739 vs. 737 units), while north and east have the lowest total quantities.

We can verify that the totals add up correctly:

$$
1{,}029 + 739 + 737 + 574 + 567 = 3{,}646
$$

which matches the overall total.

---

### Task 3: Compute total quantity ordered by product group

**Answer:**

Grouping by `product_group` and summing `quantity`:

```python
total_by_product = df.groupby('product_group')['quantity'].sum().sort_values(ascending=False)
```

| Product Group | Order Lines | Total Quantity |
| :------------ | ----------: | -------------: |
| filters       | 353         | 1,405          |
| brakes        | 263         | 825            |
| suspension    | 191         | 501            |
| electrical    | 205         | 488            |
| engine        | 188         | 427            |

**Filters** are the clear leader with **1,405 units** — more than three times the quantity of the engine group and representing:

$$
\frac{1{,}405}{3{,}646} \approx 0.3854 = 38.54\%
$$

of total demand. The high demand for filters is driven both by a higher number of order lines (353) and by a larger average quantity per line (as we will see in Task 4).

Verification:

$$
1{,}405 + 825 + 501 + 488 + 427 = 3{,}646 \checkmark
$$

---

### Task 4: Compute average order quantity by product group

**Answer:**

The average (mean) quantity per order line for each product group is computed as:

$$
\bar{q}_g = \frac{\text{Total quantity for group } g}{\text{Number of order lines in group } g}
$$

```python
avg_by_product = df.groupby('product_group')['quantity'].mean()
```

| Product Group | Order Lines | Total Quantity | Average Quantity \( \bar{q}_g \) |
| :------------ | ----------: | -------------: | -------------------------------: |
| filters       | 353         | 1,405          | 3.9802                           |
| brakes        | 263         | 825            | 3.1369                           |
| suspension    | 191         | 501            | 2.6230                           |
| electrical    | 205         | 488            | 2.3805                           |
| engine        | 188         | 427            | 2.2713                           |

Let us verify the calculation for *filters*:

$$
\bar{q}_{\text{filters}} = \frac{1{,}405}{353} \approx 3.9802
$$

And for *engine*:

$$
\bar{q}_{\text{engine}} = \frac{427}{188} \approx 2.2713
$$

The overall mean across all order lines is:

$$
\bar{q}_{\text{overall}} = \frac{3{,}646}{1{,}200} \approx 3.0383
$$

**Interpretation:** Filters not only have the most order lines but also the highest average quantity per order line (\( \approx 4.0 \) units), suggesting that when customers order filters, they tend to order in larger quantities. Engine parts have the lowest average (\( \approx 2.3 \) units), likely because engine components are higher-value items ordered in smaller quantities.

---

### Task 5: Compute the return rate overall

**Answer:**

The **return rate** is the proportion of order lines that were marked as returned. Formally:

$$
\hat{p}_{\text{return}} = \frac{\text{Number of returned order lines}}{\text{Total number of order lines}} = \frac{74}{1{,}200} \approx 0.0617
$$

This means that approximately **6.17%** of all order lines were returned.

```python
return_rate = df['returned'].sum() / len(df)
# return_rate ≈ 0.0617
```

From a probabilistic perspective, this is the **empirical probability** (relative frequency) of a return. If we model returns as a Bernoulli process with parameter \( p \), then \( \hat{p} = 0.0617 \) serves as a point estimate of the true return probability.

A **95% confidence interval** for the true return rate (using the normal approximation to the binomial) would be:

$$
\hat{p} \pm z_{0.025} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} = 0.0617 \pm 1.96 \sqrt{\frac{0.0617 \times 0.9383}{1200}} \approx 0.0617 \pm 0.0136
$$

giving the interval \( [0.0481,\; 0.0753] \). This tells us that with 95% confidence, the true return rate lies roughly between 4.8% and 7.5%.

---

### Task 6: Compute the return rate by product group

**Answer:**

The return rate for each product group is:

$$
\hat{p}_g = \frac{\text{Returned lines in group } g}{\text{Total lines in group } g}
$$

| Product Group | Returned Lines | Order Lines | Return Rate \( \hat{p}_g \) |
| :------------ | -------------: | ----------: | --------------------------: |
| suspension    | 19             | 191         | 0.0995                      |
| electrical    | 15             | 205         | 0.0732                      |
| filters       | 19             | 353         | 0.0538                      |
| engine        | 9              | 188         | 0.0479                      |
| brakes        | 12             | 263         | 0.0456                      |

```python
return_rate_by_group = df.groupby('product_group')['returned'].mean()
```

**Key observations:**

1. **Suspension** has the highest return rate at **9.95%** — nearly double the overall average. This is noteworthy: even though suspension has only 191 order lines, 19 of them were returned. Let us verify:

$$
\hat{p}_{\text{suspension}} = \frac{19}{191} \approx 0.0995
$$

2. **Brakes** have the lowest return rate at **4.56%**, well below the overall average of 6.17%.

3. Although *filters* and *suspension* both have 19 returned lines, their return rates are very different because filters have nearly twice as many total order lines (353 vs. 191). This demonstrates why raw counts alone are misleading — **rates** (proportions) provide a fairer comparison.

4. The total number of returned lines sums correctly: \( 19 + 15 + 19 + 9 + 12 = 74 \).

---

### Task 7: Compute the return rate by warehouse

**Answer:**

Similarly, we compute the return rate for each warehouse:

$$
\hat{p}_w = \frac{\text{Returned lines at warehouse } w}{\text{Total lines at warehouse } w}
$$

| Warehouse | Returned Lines | Order Lines | Return Rate \( \hat{p}_w \) |
| :-------- | -------------: | ----------: | --------------------------: |
| west      | 17             | 233         | 0.0730                      |
| east      | 14             | 194         | 0.0722                      |
| north     | 13             | 197         | 0.0660                      |
| south     | 13             | 240         | 0.0542                      |
| central   | 17             | 336         | 0.0506                      |

```python
return_rate_by_wh = df.groupby('warehouse')['returned'].mean()
```

**Key observations:**

1. The **west** and **east** warehouses have the highest return rates (7.30% and 7.22% respectively), exceeding the overall average of 6.17%.

2. The **central** warehouse has the lowest return rate (5.06%) despite processing the most order lines. This could suggest that the central warehouse has better quality control or more experienced staff, or it may simply be a statistical fluctuation in this sample.

3. Notice that both *central* and *west* have 17 returned lines each, but their return rates differ considerably (5.06% vs. 7.30%) because central processes many more order lines (336 vs. 233). This again illustrates the importance of computing **relative frequencies** rather than relying on absolute counts.

4. Verification: \( 17 + 13 + 17 + 13 + 14 = 74 \) returned lines total. ✓

---

### Task 8: Draw a bar chart of total quantity by product group

**Answer:**

The bar chart visualizes the total ordered quantity for each product group:

```python
import matplotlib.pyplot as plt

product_totals = df.groupby('product_group')['quantity'].sum().sort_values(ascending=False)
product_totals.plot(kind='bar', color='steelblue', edgecolor='black')
plt.title('Total Quantity by Product Group')
plt.ylabel('Total Quantity')
plt.xlabel('Product Group')
plt.tight_layout()
plt.savefig('total_quantity_by_product_group.png', dpi=150)
```

![Total quantity ordered by product group](problem_09_warehouse_orders/total_quantity_by_product_group.png)

**Interpretation of the chart:**

The bar chart clearly shows that **filters** dominate demand with 1,405 units — a bar that is substantially taller than all others. **Brakes** are a distant second at 825 units. The remaining three product groups (suspension, electrical, engine) are all relatively close to one another, ranging from 427 to 501 units.

This visualization makes the relative differences immediately apparent. In percentage terms:

| Product Group | Total Quantity | Share of Total |
| :------------ | -------------: | -------------: |
| filters       | 1,405          | 38.54%         |
| brakes        | 825            | 22.63%         |
| suspension    | 501            | 13.74%         |
| electrical    | 488            | 13.38%         |
| engine        | 427            | 11.71%         |

Additionally, we can view the return rate by product group:

![Return rate by product group](problem_09_warehouse_orders/return_rate_by_product_group.png)

This chart complements the previous one by showing that while filters have the highest demand, suspension has the highest return rate — an important distinction for inventory management.

---

### Task 9: Identify which product groups generate the highest demand

**Answer:**

Based on the analysis in Tasks 3, 4, and 8, the product groups generating the **highest demand** are:

**1. Filters** — The undisputed leader across every demand metric:
- **Total quantity:** 1,405 units (38.54% of all demand)
- **Order lines:** 353 (29.42% of all lines)
- **Average quantity per line:** 3.98 units (highest among all groups)

**2. Brakes** — The second-highest demand group:
- **Total quantity:** 825 units (22.63% of all demand)
- **Order lines:** 263 (21.92% of all lines)
- **Average quantity per line:** 3.14 units

Together, filters and brakes account for:

$$
\frac{1{,}405 + 825}{3{,}646} = \frac{2{,}230}{3{,}646} \approx 0.6116 = 61.16\%
$$

of total ordered quantity. This means that just **two out of five product groups** generate more than **61%** of total demand. This is a manifestation of the **Pareto principle** (80/20 rule) in a milder form.

**Supply chain implications:** Warehouse managers should ensure that filters and brakes are always well-stocked, as stockouts in these categories would disproportionately affect overall fulfillment rates. Meanwhile, engine parts — with the lowest demand (427 units) and the lowest average quantity per line (2.27) — could potentially be managed with lower safety stock levels.

---

### Task 10: Explain how empirical summaries differ from a theoretical probability model

**Answer:**

This is a fundamental conceptual distinction in probability and statistics:

#### Empirical Summaries (What We Did Here)

All the statistics computed in this problem — totals, averages, return rates, bar charts — are **empirical summaries**. They describe **what was observed** in this particular dataset of 1,200 order lines. Key characteristics:

- They are computed **directly from data** using formulas like:

$$
\hat{p} = \frac{\sum_{i=1}^{n} \mathbf{1}[\text{returned}_i = \text{True}]}{n}, \qquad \bar{q} = \frac{\sum_{i=1}^{n} q_i}{n}
$$

- They are **sample statistics** — they can change if we collect a different sample.
- They do not make assumptions about the underlying data-generating process.
- They answer: *"What happened in this particular sample?"*

#### Theoretical Probability Models (What We Did NOT Do)

A **theoretical probability model** would specify the data-generating mechanism *before* observing the data. For example:

1. **Return model:** "Each order line has a probability \( p = 0.06 \) of being returned, independently of other orders." This would be a **Bernoulli model** with parameter \( p \):

$$
X_i \sim \text{Bernoulli}(p), \qquad P(X_i = 1) = p
$$

2. **Quantity model:** "The ordered quantity follows a Poisson distribution with mean \( \lambda = 3 \)":

$$
Q \sim \text{Poisson}(\lambda), \qquad P(Q = k) = \frac{e^{-\lambda}\lambda^k}{k!}
$$

3. **Warehouse assignment model:** "Each order is assigned to a warehouse according to a categorical distribution with probabilities \( (p_{\text{central}}, p_{\text{south}}, p_{\text{west}}, p_{\text{north}}, p_{\text{east}}) \)."

#### Key Differences

| Aspect | Empirical Summary | Theoretical Model |
| :----- | :---------------- | :---------------- |
| Basis | Observed data | Mathematical assumptions |
| Goal | Describe what happened | Predict / explain the process |
| Parameters | Computed from data (\( \hat{p} \)) | Assumed or estimated (\( p \)) |
| Variability | One fixed result per sample | Accounts for randomness across samples |
| Generalization | Limited to this sample | Extends to future data |

#### Why It Matters

Our empirical return rate of \( \hat{p} = 0.0617 \) is a single number from one sample. A theoretical model would allow us to:
- Compute **confidence intervals** for the true return rate
- Perform **hypothesis tests** (e.g., "Is the suspension return rate significantly higher than the overall rate?")
- Make **predictions** about future returns
- Quantify **uncertainty** in our estimates

Without a theoretical model, we can only describe; with one, we can **infer** and **predict**.

---

## Summary and Key Takeaways

This problem provided a comprehensive exercise in descriptive data analysis of warehouse order data. We analyzed 1,200 order lines across 5 warehouses and 5 product groups, computing totals, averages, and return rates at multiple levels of aggregation.

The main findings are: **(1)** Filters and brakes generate the majority of demand (61.16% combined), with filters alone accounting for nearly 39% of total quantity. **(2)** The overall return rate is 6.17%, but this masks significant variation — suspension has a return rate of 9.95% while brakes are at just 4.56%. **(3)** Among warehouses, west and east have the highest return rates (>7%), while central has the lowest (5.06%) despite processing the most orders.

Critically, all of these results are **empirical summaries** — they describe what was observed in this specific sample. Transitioning from description to inference would require specifying a **theoretical probability model**, which would enable hypothesis testing, confidence intervals, and predictive capabilities. The gap between "what the data shows" and "what the data means" is bridged by probabilistic modeling.
