# Task 8 — Pulse Arrangement Probability

## Given

7 pulses: 4×A, 2×B, 1×C. Random arrangement.

Total permutations: $\frac{7!}{4!2!1!} = \frac{5040}{24 \cdot 2} = 105$

## Solutions

**1. First pulse is A:**

Fix A in position 1, arrange remaining 6 pulses (3A, 2B, 1C): $\frac{6!}{3!2!1!} = \frac{720}{12} = 60$

$$\boxed{P = \frac{60}{105} = \frac{4}{7} \approx 0.571}$$

(This makes sense intuitively: 4 out of 7 pulses are A.)

**2. First pulse is A or C:**

$P(\text{first}=A) = 4/7$, $P(\text{first}=C) = 1/7$

$$\boxed{P = \frac{4}{7} + \frac{1}{7} = \frac{5}{7} \approx 0.714}$$

**3. First two pulses are A then C (in that order):**

Fix A in position 1, C in position 2. Remaining 5 positions: 3A, 2B → $\frac{5!}{3!2!} = 10$

$$\boxed{P = \frac{10}{105} = \frac{2}{21} \approx 0.095}$$
