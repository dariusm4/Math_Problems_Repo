# Problem 10 — Correlation Traps

## Generated files

- Dataset: [`problem_10_correlation_traps.csv`](problem_10_correlation_traps.csv)
- Dataset without outlier group: [`problem_10_without_outlier_group.csv`](problem_10_without_outlier_group.csv)
- Outlier observations: [`outlier_group_observations.csv`](outlier_group_observations.csv)
- Correlation summary: [`correlation_summary.csv`](correlation_summary.csv)
- Group summary: [`summary_by_group.csv`](summary_by_group.csv)
- Plots:
  - [`scatter_with_outliers.png`](scatter_with_outliers.png)
  - [`scatter_without_outliers.png`](scatter_without_outliers.png)
  - [`correlation_by_scope.png`](correlation_by_scope.png)

## Description of the data

One row represents one observation with two numerical variables, `x` and `y`. The variable `group` indicates whether the observation belongs to the left branch, the right branch, or the outlier group.

The dataset contains 264 observations: 260 regular observations and 4 observations in the outlier group.

## Correlation results

| Data scope | Observation count | Correlation between x and y |
| :--------- | ----------------: | --------------------------: |
| all observations | 264 | 0.0179 |
| without outlier_group | 260 | 0.0572 |
| left_branch only | 125 | -0.9428 |
| right_branch only | 135 | 0.9405 |

The correlation for all observations is very close to zero. After removing the outlier group, the correlation is still close to zero. However, this does not mean that there is no relationship between `x` and `y`.

## Group summary

| Group | Observation count | Mean x | Mean y | Min x | Max x | Min y | Max y |
| :---- | ----------------: | -----: | -----: | ----: | ----: | ----: | ----: |
| left_branch | 125 | -2.1482 | 5.9510 | -3.995 | -0.063 | -2.163 | 16.804 |
| outlier_group | 4 | 8.2500 | 2.1250 | 7.500 | 9.000 | 1.000 | 3.000 |
| right_branch | 135 | 2.1446 | 6.0978 | 0.069 | 3.998 | -2.595 | 17.557 |

## Plots

![Scatter plot with outliers](scatter_with_outliers.png)

![Scatter plot without outlier group](scatter_without_outliers.png)

![Correlation by data scope](correlation_by_scope.png)

## Interpretation

The scatter plot shows a clear nonlinear relationship. The regular observations form a U-shaped pattern similar to \(y=x^2\). This relationship is strong visually, but it is not a simple linear relationship.

The correlation coefficient measures linear association. Because the U-shape is roughly symmetric, the negative trend on the left branch and the positive trend on the right branch cancel each other when all regular observations are combined. That is why the correlation without the outlier group is only 0.0572.

Within each branch, the relationship is almost linear. On the left branch, the correlation is -0.9428. On the right branch, it is 0.9405. These large values are hidden when both branches are summarized by one correlation coefficient.

The outlier group also matters. The correlation using all observations is 0.0179, while the correlation after removing the outlier group is 0.0572. In this dataset the outliers change the value, but the deeper issue is that a single correlation coefficient is not appropriate for describing the nonlinear pattern.

A low correlation does not necessarily mean that there is no relationship. It may mean that the relationship is nonlinear, that different subgroups behave differently, or that outliers are distorting the numerical summary. The scatter plot reveals structure that the correlation coefficient alone does not show.
