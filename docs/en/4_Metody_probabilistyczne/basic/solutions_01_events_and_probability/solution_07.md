# Solution

## Task 7 — Events and Probabilities in Die Rolling

### Elementary outcome probabilities

For a fair six-sided die:

- In \(\Omega_1\): each of \(1,2,3,4,5,6\) has probability \(\tfrac16\).
- In \(\Omega_2\): each of the 36 ordered pairs has probability \(\tfrac1{36}\).
- In \(\Omega_3\): each of the 216 ordered triples has probability \(\tfrac1{216}\).

### One die roll

- \(A_1 = \{2,4,6\}\), so \(P(A_1) = \tfrac36 = \tfrac12\).
- \(B_1 = \{5,6\}\), so \(P(B_1) = \tfrac26 = \tfrac13\).
- \(C_1 = \{1,2,3\}\), so \(P(C_1) = \tfrac36 = \tfrac12\).

### Two die rolls

- \(A_2 = \{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}\), so \(P(A_2) = \tfrac6{36} = \tfrac16\).
- \(B_2 = \{(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\}\), so \(P(B_2) = \tfrac6{36} = \tfrac16\).
- \(C_2 = \{(4,6),(5,5),(5,6),(6,4),(6,5),(6,6)\}\), so \(P(C_2) = \tfrac6{36} = \tfrac16\).

### Three die rolls

- \(A_3 = \{(i,j,k) : i+j+k = 10\}\). There are 27 such triples, so \(P(A_3) = \tfrac{27}{216} = \tfrac18\).
- \(B_3 = \{\text{exactly two rolls equal}\}\). The number of outcomes with one repeated value and one different value is \(6 \times 5 \times 3 = 90\), so \(P(B_3) = \tfrac{90}{216} = \tfrac{5}{12}\).
- \(C_3 = \{(2,2,3), (2,3,2), (3,2,2)\}\), so \(P(C_3) = \tfrac3{216} = \tfrac1{72}\).

### Additional event on \(\Omega_3\)

- Example: \(D_3 = \{\text{all three rolls are even}\}\). There are \(3^3 = 27\) such outcomes, so \(P(D_3) = \tfrac{27}{216} = \tfrac18\).
