# Problem 1 — Die Rolls and Empirical Distribution

## Generated files

- Dataset: [`problem_01_die_rolls.csv`](problem_01_die_rolls.csv)
- Frequency table: [`frequency_table.csv`](frequency_table.csv)
- Event probabilities: [`event_probabilities.csv`](event_probabilities.csv)
- Plot: [`empirical_distribution.png`](empirical_distribution.png)

## Description of the data

One row of the dataset represents one die roll. The column `trial` gives the number of the trial, `roll` gives the observed result, `is_even` tells whether the result is even, and `is_at_least_5` tells whether the result is at least 5.

The dataset contains 1000 die rolls generated with a fixed random seed.

## Frequency table

| Roll | Absolute frequency | Relative frequency | Fair die probability |
| ---: | -----------------: | -----------------: | -------------------: |
| 1 | 157 | 0.157 | 0.167 |
| 2 | 174 | 0.174 | 0.167 |
| 3 | 151 | 0.151 | 0.167 |
| 4 | 184 | 0.184 | 0.167 |
| 5 | 158 | 0.158 | 0.167 |
| 6 | 176 | 0.176 | 0.167 |

![Empirical distribution of die rolls](empirical_distribution.png)

## Empirical probabilities

| Event | Empirical probability | Fair die probability |
| ----- | --------------------: | -------------------: |
| The result is even | 0.534 | 0.500 |
| The result is at least 5 | 0.334 | 0.333 |
| The result is equal to 6 | 0.176 | 0.167 |

## Interpretation

The empirical distribution is not exactly uniform. The most frequent result is 4, with relative frequency 0.184, and the least frequent result is 3, with relative frequency 0.151. For a fair die, each result would have probability approximately 0.167.

These differences are expected in random data. Even if a die is fair, empirical frequencies from a finite sample do not have to be exactly equal to theoretical probabilities.

Based only on this generated dataset, the die does not look perfectly fair, but the deviations from the fair-die probabilities are moderate. The result 4 and the event "even" appear slightly more often than under a fair die, while result 3 appears less often. This suggests a possible imbalance, but this descriptive analysis alone is not a formal statistical test.
