# Solution — Task 10: Urn Models

Urn contains: 5 red, 4 blue, 3 green → **12 balls total** (all individually distinguishable).

## 1. Draw 3 without replacement, order ignored

This is a combination:

$$\binom{12}{3} = \frac{12 \cdot 11 \cdot 10}{3!} = 220$$

## 2. Exactly 2 red balls (order ignored)

Choose 2 red from 5, and 1 non-red from $4 + 3 = 7$:

$$\binom{5}{2} \cdot \binom{7}{1} = 10 \cdot 7 = 70$$

## 3. Draw 3, order of colors recorded

This is a k-permutation (ordered selection of 3 from 12 distinguishable balls):

$$P(12, 3) = 12 \cdot 11 \cdot 10 = 1\,320$$

## 4. Exactly 2 red balls (order recorded)

Choose which 2 of the 3 positions are red: $\binom{3}{2} = 3$ ways.

Choose which 2 red balls fill those positions: $P(5, 2) = 5 \cdot 4 = 20$.

Choose which non-red ball fills the remaining position: $7$ choices.

$$3 \cdot 20 \cdot 7 = 420$$

*Alternative approach:* Choose 2 red and 1 non-red, then arrange all 3:

$$\binom{5}{2} \cdot \binom{7}{1} \cdot 3! = 10 \cdot 7 \cdot 6 = 420$$

Wait — but the balls are distinguishable, so we should use:

$$\binom{5}{2} \cdot 7 \cdot 3! = 10 \cdot 7 \cdot 6 = 420$$

But this overcounts since we want ordered sequences. Let me reconsider:

Since order matters, we pick 3 balls in sequence. We need exactly 2 red among 3 draws.

- Choose positions for red: $\binom{3}{2} = 3$
- Fill red positions (ordered): $5 \cdot 4 = 20$
- Fill the remaining position: $7$ choices

$$3 \cdot 20 \cdot 7 = 420$$
