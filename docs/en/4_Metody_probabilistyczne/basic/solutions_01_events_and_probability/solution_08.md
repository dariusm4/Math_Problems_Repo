# Solution

## Task 8 — Events and Probabilities in Card Drawing

### Elementary outcome probabilities

- In \(\Omega_1\): each card has probability \(\tfrac1{52}\).
- In \(\Omega_2\) with replacement: each ordered pair has probability \(\tfrac1{2704}\).
- In \(\Omega_2'\) without replacement: each ordered pair has probability \(\tfrac1{2652}\).

### One card drawn

- \(A_1 = \{\text{heart}\}\), so \(P(A_1) = \tfrac{13}{52} = \tfrac14\).
- \(B_1 = \{\text{king}\}\), so \(P(B_1) = \tfrac{4}{52} = \tfrac1{13}\).
- \(C_1 = \{\text{not a face card}\}\), so \(P(C_1) = \tfrac{40}{52} = \tfrac{10}{13}\).

### Two cards drawn with replacement

- \(A_2 = \{\text{both hearts}\}\), so \(P(A_2) = \Bigl(\tfrac{13}{52}\Bigr)^2 = \tfrac1{16}\).
- \(B_2 = \{\text{same rank}\}\), so \(P(B_2) = 13 \cdot \Bigl(\tfrac{4}{52}\Bigr)^2 = \tfrac1{13}\).
- \(C_2 = \{\text{at least one ace}\}\), so \(P(C_2) = 1 - \Bigl(\tfrac{48}{52}\Bigr)^2 = 1 - \Bigl(\tfrac{12}{13}\Bigr)^2 = \tfrac{25}{169}\).

### Two cards drawn without replacement

- \(A_3 = \{\text{both hearts}\}\), so \(P(A_3) = \tfrac{13}{52} \cdot \tfrac{12}{51} = \tfrac1{17}\).
- \(B_3 = \{\text{same rank}\}\), so \(P(B_3) = \dfrac{13 \cdot \binom{4}{2}}{2652} = \dfrac{78}{2652} = \dfrac1{34}\).
- \(C_3 = \{\text{one king and one queen in any order}\}\), so \(P(C_3) = \dfrac{4 \cdot 4 \cdot 2}{2652} = \dfrac{32}{2652} = \dfrac{8}{663}\).

### Additional event on \(\Omega_2'\)

- Example: \(D_3 = \{\text{both cards are red}\}\).
- There are 26 red cards and \(26 \cdot 25 = 650\) ordered red-red outcomes. Thus \(P(D_3) = \dfrac{650}{2652} = \dfrac{25}{102}\).
