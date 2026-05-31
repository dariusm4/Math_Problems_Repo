# Solution

## Task 6 — Events and Probabilities in Coin Tossing

### Elementary outcome probabilities

For a fair coin:

- In \(\Omega_1\): each of \(H\) and \(T\) has probability \(\tfrac12\).
- In \(\Omega_2\): each of the four ordered pairs has probability \(\tfrac14\).
- In \(\Omega_3\): each of the eight ordered triples has probability \(\tfrac18\).

### One coin toss

- \(A_1 = \{H\}\), so \(P(A_1) = \tfrac12\).
- \(B_1 = \{T\}\), so \(P(B_1) = \tfrac12\).
- \(C_1 = \{\text{not }T\} = \{H\}\), so \(P(C_1) = \tfrac12\).

### Two coin tosses

- \(A_2 = \{(H,T), (T,H)\}\), so \(P(A_2) = \tfrac24 = \tfrac12\).
- \(B_2 = \Omega_2 \setminus \{(T,T)\} = \{(H,H), (H,T), (T,H)\}\), so \(P(B_2) = \tfrac34\).
- \(C_2 = \{(H,H), (T,T)\}\), so \(P(C_2) = \tfrac24 = \tfrac12\).

### Three coin tosses

- \(A_3 = \{(H,H,T), (H,T,H), (T,H,H)\}\), so \(P(A_3) = \tfrac38\).
- \(B_3 = \Omega_3 \setminus \{(H,H,H)\}\), so \(P(B_3) = \tfrac78\).
- \(C_3 = \{(H,H,H), (T,T,T)\}\), so \(P(C_3) = \tfrac28 = \tfrac14\).

### Additional event on \(\Omega_3\)

- Example: \(D_3 = \{\text{first toss is } H\} = \{(H,H,H), (H,H,T), (H,T,H), (H,T,T)\}\).
- Then \(P(D_3) = \tfrac48 = \tfrac12\).
