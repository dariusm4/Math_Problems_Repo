# Task 7 — Signal Transmission with Interference

## Given

- $P(\text{send } 111) = 0.65$, $P(\text{send } 000) = 0.35$
- $P(\text{bit flip}) = 0.2$, $P(\text{correct bit}) = 0.8$
- Bits are independent

## 1. Probability of receiving 111

$$P(\text{recv } 111) = P(111|\text{send } 111) \cdot P(\text{send } 111) + P(111|\text{send } 000) \cdot P(\text{send } 000)$$

- $P(111|\text{send } 111) = 0.8^3 = 0.512$
- $P(111|\text{send } 000) = 0.2^3 = 0.008$

$$P(\text{recv } 111) = 0.512 \cdot 0.65 + 0.008 \cdot 0.35 = 0.3328 + 0.0028$$

$$\boxed{P(\text{recv } 111) = 0.3356}$$

## 2. Probability of receiving 000

- $P(000|\text{send } 111) = 0.2^3 = 0.008$
- $P(000|\text{send } 000) = 0.8^3 = 0.512$

$$P(\text{recv } 000) = 0.008 \cdot 0.65 + 0.512 \cdot 0.35 = 0.0052 + 0.1792$$

$$\boxed{P(\text{recv } 000) = 0.1844}$$

## 3. Probability of receiving 010

- $P(010|\text{send } 111)$: positions 1,3 flip ($0.2$), position 2 stays ($0.8$) → $0.2 \cdot 0.8 \cdot 0.2 = 0.032$
- $P(010|\text{send } 000)$: position 2 flips ($0.2$), positions 1,3 stay ($0.8$) → $0.8 \cdot 0.2 \cdot 0.8 = 0.128$

$$P(\text{recv } 010) = 0.032 \cdot 0.65 + 0.128 \cdot 0.35 = 0.0208 + 0.0448$$

$$\boxed{P(\text{recv } 010) = 0.0656}$$
