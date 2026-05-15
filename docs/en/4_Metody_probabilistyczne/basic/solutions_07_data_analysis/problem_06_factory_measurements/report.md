# Problem 6 — Factory Measurements and Specification Limits

## Generated files

- Dataset: [`problem_06_factory_measurements.csv`](problem_06_factory_measurements.csv)
- Overall summary: [`length_summary_overall.csv`](length_summary_overall.csv)
- Machine summaries: [`length_summary_by_machine.csv`](length_summary_by_machine.csv)
- Within-spec counts: [`within_spec_counts_by_machine.csv`](within_spec_counts_by_machine.csv)
- Boxplot: [`length_boxplots_by_machine.png`](length_boxplots_by_machine.png)
- Within-spec plot: [`within_spec_proportion_by_machine.png`](within_spec_proportion_by_machine.png)

## Description of the data

One row represents one manufactured part. The dataset records the part identifier, the machine that produced it, the measured length in millimeters, the deviation from the target length of 50 mm, and whether the part is within the specification interval from 48.5 mm to 51.5 mm.

The dataset contains 540 parts: 180 from each machine.

## Overall summary

| Part count | Mean | Median | Minimum | Maximum | Variance | Standard deviation | Mean absolute deviation from target | Within-spec proportion |
| ---------: | ---: | -----: | ------: | ------: | -------: | -----------------: | ----------------------------------: | ---------------------: |
| 540 | 49.9998 | 49.9625 | 47.8730 | 53.0100 | 0.4872 | 0.6980 | 0.5446 | 0.9667 |

Overall, the production is centered very close to the target value of 50 mm. However, this overall summary hides differences between machines.

## Summary by machine

| Machine | Mean | Median | Standard deviation | Mean deviation from target | Mean absolute deviation from target | Within-spec proportion |
| :------ | ---: | -----: | -----------------: | -------------------------: | ----------------------------------: | ---------------------: |
| M1 | 49.9813 | 49.9720 | 0.5343 | -0.0187 | 0.4399 | 1.0000 |
| M2 | 50.3074 | 50.2755 | 0.7910 | 0.3074 | 0.6513 | 0.9222 |
| M3 | 49.7106 | 49.7310 | 0.6135 | -0.2894 | 0.5426 | 0.9778 |

## Plots

![Boxplots of part lengths by machine](length_boxplots_by_machine.png)

![Within-spec proportion by machine](within_spec_proportion_by_machine.png)

## Interpretation

Machine M1 seems most centered around the target value. Its mean length is 49.9813 mm, very close to 50 mm, and its mean deviation from target is only -0.0187 mm. It also has the smallest standard deviation, 0.5343 mm.

Machine M2 has the highest mean length, 50.3074 mm, so it tends to produce parts that are too long. It also has the largest standard deviation, 0.7910 mm. This makes M2 the most variable machine and gives it the lowest within-spec proportion, 0.9222.

Machine M3 tends to produce parts that are slightly too short. Its mean deviation from target is -0.2894 mm. However, it is less variable than M2 and has a high within-spec proportion of 0.9778.

The best machine in this dataset is M1, because it is closest to the target, has the smallest variability, and produced all sampled parts within specification.

A machine can have a good mean but still produce many problematic parts if its variability is large. In that case, the average may be close to the target, but many individual parts may still fall outside the specification limits.
