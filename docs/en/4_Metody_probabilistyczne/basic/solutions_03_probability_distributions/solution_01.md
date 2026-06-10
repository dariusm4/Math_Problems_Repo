# Solution

## Task 1 — Binomial Model (Quality Control)

1. Random experiment: inspect 3 consecutive screws; each screw is either good (G) or defective (D).

2. Sample space:

	\Omega = {GGG, GGD, GDG, DGG, GDD, DGD, DDG, DDD}.

3. Probabilities: if p is the probability a single screw is defective, then any outcome with k defects has probability

	\[ P(\text{sequence with }k\text{ defects}) = p^{k}(1-p)^{3-k}. \]

	Examples:

	- P(GGG) = (1-p)^3
	- P(GGD) = (1-p)^2 p
	- P(DDD) = p^3

4. Success definition: we treat a "defective screw" as a success for the binomial model (so the number of successes in 3 trials is the number of defective screws).

