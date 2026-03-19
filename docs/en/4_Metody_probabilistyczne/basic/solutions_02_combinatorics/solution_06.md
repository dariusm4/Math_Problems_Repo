# Solution — Task 6: Combinations in Card Problems

A standard deck: 52 cards, 4 suits × 13 cards each. Face cards: J, Q, K (3 per suit = 12 total). Hearts: 13 cards.

## 1. Exactly 2 hearts in a 5-card hand

Choose 2 hearts from 13:

$$\binom{13}{2} = \frac{13!}{2! \cdot 11!} = \frac{13 \cdot 12 \cdot \cancel{11!}}{\cancel{11!} \cdot 2!} = \frac{13 \cdot 12}{2 \cdot 1} = \frac{156}{2} = 78$$

Choose 3 non-hearts from $52 - 13 = 39$:

$$\binom{39}{3} = \frac{39!}{3! \cdot 36!} = \frac{39 \cdot 38 \cdot 37 \cdot \cancel{36!}}{\cancel{36!} \cdot 3!} = \frac{39 \cdot 38 \cdot 37}{3 \cdot 2 \cdot 1} = \frac{54\,834}{6} = 9\,139$$

Multiply (product rule):

$$78 \cdot 9\,139 = 712\,842$$

## 2. At least one heart

Total hands minus hands with **no hearts**:

$$\binom{52}{5} = \frac{52!}{5! \cdot 47!} = \frac{52 \cdot 51 \cdot 50 \cdot 49 \cdot 48 \cdot \cancel{47!}}{\cancel{47!} \cdot 5!} = \frac{52 \cdot 51 \cdot 50 \cdot 49 \cdot 48}{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = \frac{311\,875\,200}{120} = 2\,598\,960$$

$$\binom{39}{5} = \frac{39!}{5! \cdot 34!} = \frac{39 \cdot 38 \cdot 37 \cdot 36 \cdot 35 \cdot \cancel{34!}}{\cancel{34!} \cdot 5!} = \frac{39 \cdot 38 \cdot 37 \cdot 36 \cdot 35}{120} = \frac{69\,090\,840}{120} = 575\,757$$

Subtract:

$$2\,598\,960 - 575\,757 = 2\,023\,203$$

## 3. No face cards

Face cards: $3 \times 4 = 12$. Non-face cards: $52 - 12 = 40$.

$$\binom{40}{5} = \frac{40!}{5! \cdot 35!} = \frac{40 \cdot 39 \cdot 38 \cdot 37 \cdot 36 \cdot \cancel{35!}}{\cancel{35!} \cdot 5!} = \frac{40 \cdot 39 \cdot 38 \cdot 37 \cdot 36}{5 \cdot 4 \cdot 3 \cdot 2 \cdot 1} = \frac{78\,960\,960}{120} = 658\,008$$
