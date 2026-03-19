# Solution — Task 5: Combinations

## 1. Choosing 4 from 12 students

Order does not matter, no repetition:

$$\binom{12}{4} = \frac{12!}{4! \cdot 8!} = \frac{12 \cdot 11 \cdot 10 \cdot 9}{4 \cdot 3 \cdot 2 \cdot 1} = \frac{11\,880}{24} = 495$$

## 2. Committee contains a particular student

Fix that student in the committee. Choose the remaining 3 from the other 11:

$$\binom{11}{3} = \frac{11 \cdot 10 \cdot 9}{3!} = \frac{990}{6} = 165$$

## 3. At least one of two particular students

Use inclusion-exclusion. Let $A$ = committees containing student A, $B$ = committees containing student B.

$$|A| = \binom{11}{3} = 165, \quad |B| = \binom{11}{3} = 165$$

$$|A \cap B| = \binom{10}{2} = 45 \quad \text{(both fixed, choose 2 more from 10)}$$

$$|A \cup B| = 165 + 165 - 45 = 285$$

## 4. Exactly 2 women (7 men, 5 women)

Choose 2 women from 5, and 2 men from 7:

$$\binom{5}{2} \cdot \binom{7}{2} = 10 \cdot 21 = 210$$
