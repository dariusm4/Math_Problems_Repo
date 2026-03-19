# Solution — Task 10: Urn Models

Urn contains: 5 red, 4 blue, 3 green → **12 balls total** (all individually distinguishable).

## 1. Draw 3 without replacement, order ignored

$$\binom{12}{3} = \frac{12!}{3! \cdot 9!}$$

Cancel $9!$:

$$= \frac{12 \cdot 11 \cdot 10 \cdot \cancel{9!}}{\cancel{9!} \cdot 3!} = \frac{12 \cdot 11 \cdot 10}{3 \cdot 2 \cdot 1} = \frac{1\,320}{6} = 220$$

## 2. Exactly 2 red balls (order ignored)

Choose 2 red from 5:

$$\binom{5}{2} = \frac{5!}{2! \cdot 3!} = \frac{5 \cdot 4 \cdot \cancel{3!}}{\cancel{3!} \cdot 2!} = \frac{5 \cdot 4}{2 \cdot 1} = \frac{20}{2} = 10$$

Choose 1 non-red from $4 + 3 = 7$:

$$\binom{7}{1} = 7$$

Multiply:

$$10 \cdot 7 = 70$$

## 3. Draw 3, order of colors recorded

k-permutation (ordered selection):

$$P(12, 3) = \frac{12!}{9!} = \frac{12 \cdot 11 \cdot 10 \cdot \cancel{9!}}{\cancel{9!}} = 12 \cdot 11 \cdot 10 = 1\,320$$

## 4. Exactly 2 red balls (order recorded)

Choose which 2 of the 3 positions are red:

$$\binom{3}{2} = \frac{3!}{2! \cdot 1!} = \frac{3 \cdot \cancel{2!}}{\cancel{2!} \cdot 1} = 3$$

Fill red positions (ordered, 2 from 5 red):

$$P(5, 2) = \frac{5!}{3!} = \frac{5 \cdot 4 \cdot \cancel{3!}}{\cancel{3!}} = 5 \cdot 4 = 20$$

Fill remaining position (1 from 7 non-red):

$$7$$

Multiply:

$$3 \cdot 20 \cdot 7 = 420$$
