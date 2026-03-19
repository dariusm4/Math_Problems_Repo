# Solution — Task 4: Circular Permutations

## 1. 7 people around a round table

Circular permutation of 7 distinct objects:

$$(7 - 1)! = 6! = 720$$

## 2. Two particular people must sit next to each other

Treat the two people as a single block → **6 objects** around a circle:

$$(6 - 1)! = 5! = 120$$

Within the block, the two can swap:

$$2! = 2$$

Total:

$$5! \cdot 2 = 120 \cdot 2 = 240$$

## 3. Two particular people must sit opposite each other

At a round table with 7 seats, there is **no seat directly opposite** another seat (7 is odd — opposite seats only exist for even numbers).

Therefore, **this arrangement is impossible** and the answer is:

$$0$$

> **Note:** If the problem intended an even number of seats (e.g., 8), then: fix one person, the opposite person has 1 choice, and the remaining people arrange freely, giving $(n-2)! \cdot 1$. With 7 seats, no exact opposite exists.
