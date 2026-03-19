# Solution — Task 5: Combinations

## 1. Choosing 4 from 12 students

Order does not matter, no repetition:

$$\binom{12}{4} = \frac{12!}{4! \cdot 8!}$$

Cancel $8!$:

$$= \frac{12 \cdot 11 \cdot 10 \cdot 9 \cdot \cancel{8!}}{\cancel{8!} \cdot 4!} = \frac{12 \cdot 11 \cdot 10 \cdot 9}{4!}$$

$$= \frac{12 \cdot 11 \cdot 10 \cdot 9}{4 \cdot 3 \cdot 2 \cdot 1} = \frac{11\,880}{24} = 495$$

## 2. Committee contains a particular student

Fix that student. Choose remaining 3 from 11:

$$\binom{11}{3} = \frac{11!}{3! \cdot 8!}$$

Cancel $8!$:

$$= \frac{11 \cdot 10 \cdot 9 \cdot \cancel{8!}}{\cancel{8!} \cdot 3!} = \frac{11 \cdot 10 \cdot 9}{3!}$$

$$= \frac{11 \cdot 10 \cdot 9}{3 \cdot 2 \cdot 1} = \frac{990}{6} = 165$$

## 3. At least one of two particular students

Use inclusion-exclusion. Let $A$ = committees with student A, $B$ = committees with student B.

**Committees with A:** fix A, choose 3 from 11

$$|A| = \binom{11}{3} = \frac{11 \cdot 10 \cdot 9}{3 \cdot 2 \cdot 1} = 165$$

**Committees with B:** same calculation

$$|B| = \binom{11}{3} = 165$$

**Committees with both A and B:** fix both, choose 2 from 10

$$|A \cap B| = \binom{10}{2} = \frac{10!}{2! \cdot 8!} = \frac{10 \cdot 9 \cdot \cancel{8!}}{\cancel{8!} \cdot 2!} = \frac{10 \cdot 9}{2 \cdot 1} = \frac{90}{2} = 45$$

**At least one (subtract overlap):**

$$|A \cup B| = 165 + 165 - 45 = 285$$

## 4. Exactly 2 women (7 men, 5 women)

Choose 2 women from 5:

$$\binom{5}{2} = \frac{5!}{2! \cdot 3!} = \frac{5 \cdot 4 \cdot \cancel{3!}}{\cancel{3!} \cdot 2!} = \frac{5 \cdot 4}{2 \cdot 1} = \frac{20}{2} = 10$$

Choose 2 men from 7:

$$\binom{7}{2} = \frac{7!}{2! \cdot 5!} = \frac{7 \cdot 6 \cdot \cancel{5!}}{\cancel{5!} \cdot 2!} = \frac{7 \cdot 6}{2 \cdot 1} = \frac{42}{2} = 21$$

Multiply (product rule):

$$10 \cdot 21 = 210$$
