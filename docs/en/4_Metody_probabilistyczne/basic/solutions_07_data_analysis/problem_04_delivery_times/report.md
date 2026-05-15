# Problem 4 — Delivery Times, Skewness, and Outliers

## Generated files

- Dataset: [`problem_04_delivery_times.csv`](problem_04_delivery_times.csv)
- Overall summary: [`delivery_time_summary.csv`](delivery_time_summary.csv)
- Zone summary: [`delivery_time_summary_by_zone.csv`](delivery_time_summary_by_zone.csv)
- Possible outliers: [`outliers_1_5_iqr.csv`](outliers_1_5_iqr.csv)
- Histogram: [`delivery_time_histogram.png`](delivery_time_histogram.png)
- Boxplot: [`delivery_time_boxplot_by_zone.png`](delivery_time_boxplot_by_zone.png)

## Description of the data

One row represents one delivery. The column `delivery_id` identifies the delivery, `zone` gives the delivery zone, `delivery_time_min` gives the delivery time in minutes, and `delayed` indicates whether the delivery took more than 60 minutes.

The dataset contains 350 deliveries.

## Overall summary

| Number of deliveries | Mean | Median | Q1 | Q3 | IQR | Lower fence | Upper fence | Possible outliers | Delayed proportion |
| -------------------: | ---: | -----: | -: | -: | --: | ----------: | ----------: | ----------------: | -----------------: |
| 350 | 37.730 | 33.300 | 24.625 | 43.775 | 19.150 | -4.100 | 72.500 | 20 | 0.100 |

The 1.5 IQR rule gives:

$$
Q_1 - 1.5 \cdot IQR = -4.1,
$$

$$
Q_3 + 1.5 \cdot IQR = 72.5.
$$

Since delivery times cannot be negative, only unusually large delivery times are identified as possible outliers. There are 20 observations above 72.5 minutes.

## Summary by zone

| Zone | Count | Mean | Median | Minimum | Maximum | Standard deviation | Delayed proportion |
| :--- | ----: | ---: | -----: | ------: | ------: | -----------------: | -----------------: |
| central | 154 | 38.686 | 33.000 | 10.000 | 232.500 | 25.337 | 0.117 |
| remote | 56 | 39.168 | 36.450 | 16.000 | 128.100 | 18.569 | 0.089 |
| suburban | 140 | 36.103 | 33.050 | 11.300 | 151.000 | 19.855 | 0.086 |

## Plots

![Histogram of delivery times](delivery_time_histogram.png)

![Boxplot of delivery times by zone](delivery_time_boxplot_by_zone.png)

## Interpretation

The mean delivery time is 37.730 minutes, while the median is 33.300 minutes. The mean is higher than the median because the distribution is right-skewed: most deliveries are concentrated around moderate times, but a small number of very long deliveries pull the mean upward.

The delayed proportion is 0.100, so about 10% of deliveries took more than 60 minutes.

The remote zone has the highest median delivery time, 36.450 minutes, while the central zone has the highest mean, 38.686 minutes, and the largest standard deviation, 25.337 minutes. The central zone also has the highest delayed proportion, 0.117. This suggests that central deliveries contain some unusually long cases, even though the typical central delivery is not much slower than the suburban one.

The median is more informative than the mean in this dataset because the mean is sensitive to unusually large delivery times. For a skewed distribution with outliers, the median gives a better description of a typical delivery.
