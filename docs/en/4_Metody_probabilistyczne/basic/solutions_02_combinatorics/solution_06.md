# Solution — Task 6: Combinations in Card Problems

A standard deck has 52 cards: 13 hearts, 13 diamonds, 13 clubs, 13 spades. Each suit has 3 face cards (J, Q, K).

## 1. Exactly 2 hearts in a 5-card hand

Choose 2 hearts from 13, and 3 non-hearts from 39:

$$\binom{13}{2} \cdot \binom{39}{3} = 78 \cdot 9\,139 = 712\,842$$

## 2. At least one heart

Total hands minus hands with **no hearts** (all 5 from the 39 non-hearts):

$$\binom{52}{5} - \binom{39}{5} = 2\,598\,960 - 575\,757 = 2\,023\,203$$

## 3. No face cards

There are $3 \times 4 = 12$ face cards in total, so $52 - 12 = 40$ non-face cards.

$$\binom{40}{5} = \frac{40 \cdot 39 \cdot 38 \cdot 37 \cdot 36}{5!} = \frac{40 \cdot 39 \cdot 38 \cdot 37 \cdot 36}{120} = 658\,008$$
