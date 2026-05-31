# Solution

## Task 3 — Drawing Cards

1. Sample space for drawing one card from a standard 52-card deck:

\(\Omega_1 = \{\text{all 52 cards}\}\).

2. Sample space for two consecutive draws with replacement:

\(\Omega_2 = \{(c_1, c_2) : c_1, c_2 \in \Omega_1\}\).

- In this case, the same card may appear in both positions because the first card is returned to the deck before the second draw.

3. Sample space for two consecutive draws without replacement:

\(\Omega_2' = \{(c_1, c_2) : c_1, c_2 \in \Omega_1,\ c_1 \neq c_2\}\).

4. Number of elementary outcomes:

- With replacement: \(|\Omega_2| = 52 \times 52 = 2704\).
- Without replacement: \(|\Omega_2'| = 52 \times 51 = 2652\).

5. Interpretation of an elementary outcome:

- In \(\Omega_1\): the specific card drawn on a single draw.
- In \(\Omega_2\): the ordered sequence of two draws when the first card is replaced before the second draw.
- In \(\Omega_2'\): the ordered sequence of two draws when the first card is not replaced before the second draw.
