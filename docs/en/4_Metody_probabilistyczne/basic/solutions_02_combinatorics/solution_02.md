# Solution — Task 2: Permutations

## 1. Arranging 8 different books on a shelf

All 8 books are distinct, all are used, order matters:

$$P_8 = 8! = 40\,320$$

## 2. Two particular people must sit next to each other

Treat the two people as a single block. We now have **7 objects** (6 people + 1 block):

$$7! \text{ arrangements of the 7 objects}$$

Within the block, the two people can swap places:

$$2! = 2$$

Total:

$$7! \cdot 2 = 5040 \cdot 2 = 10\,080$$

## 3. Two particular people must NOT sit next to each other

Total arrangements minus arrangements where they are together:

$$8! - 7! \cdot 2 = 40\,320 - 10\,080 = 30\,240$$

## 4. 10 questions ordered, first question fixed

The first position is fixed (1 way). The remaining 9 questions can be arranged freely:

$$1 \cdot 9! = 362\,880$$
