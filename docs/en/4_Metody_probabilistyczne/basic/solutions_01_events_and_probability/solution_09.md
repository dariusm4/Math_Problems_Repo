# Solution

## Task 9 — Events and Probabilities in Weekly Weather Observation

Assume each day is independent and each weather state occurs with probability \(\tfrac13\).

- Total number of outcomes in \(\Omega_7\) is \(3^7 = 2187\).

### Events

- \(A\): the weekend is sunny (Saturday and Sunday are both \(S\)).
  - Probability: \(\left(\tfrac13\right)^2 = \tfrac19\).

- \(B\): Wednesday, Thursday, and Friday are all rainy.
  - Probability: \(\left(\tfrac13\right)^3 = \tfrac1{27}\).

- \(C\): at least one sunny day during the week.
  - Probability: \(1 - \left(\tfrac23\right)^7 = 1 - \tfrac{128}{2187} = \tfrac{2059}{2187}\).

- \(D\): no rainy day occurs during the week.
  - Probability: \(\left(\tfrac23\right)^7 = \tfrac{128}{2187}\).

- \(E\): exactly two sunny days in the week.
  - There are \(\binom{7}{2} = 21\) choices for which days are sunny.
  - Probability: \(21 \cdot \left(\tfrac13\right)^2 \cdot \left(\tfrac23\right)^5 = \dfrac{672}{2187} = \dfrac{224}{729}\).

### Additional event on \(\Omega_7\)

- Example: \(F = \{\text{first day sunny and last day rainy}\}\).
- Probability: \(\tfrac13 \cdot \tfrac13 = \tfrac19\).
