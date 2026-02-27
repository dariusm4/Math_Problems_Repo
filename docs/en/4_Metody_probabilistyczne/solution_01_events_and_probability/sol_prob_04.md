# Task 4 — Parallel Circuit Probability

## Given

$P(A_1) = P(A_2) = p$, $P(A_1 \cap A_2) = p^2$.

## Solution

For a parallel circuit, current flows if **at least one** element works:

$$P(A) = P(A_1 \cup A_2) = P(A_1) + P(A_2) - P(A_1 \cap A_2)$$

$$= p + p - p^2 = 2p - p^2$$

$$\boxed{P(A) = 2p - p^2 = 1 - (1-p)^2}$$

Note: $(1-p)^2$ is the probability that **both** fail simultaneously. The formula $1-(1-p)^2$ is the standard parallel reliability formula.
