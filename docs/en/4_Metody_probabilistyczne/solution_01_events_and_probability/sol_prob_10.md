# Task 10 — Channel Transmission with Error Matrix

## Given

Sequences AAAA, BBBB, CCCC with prior probabilities 0.4, 0.3, 0.3.

Transition matrix per letter:

| Sent \ Recv | A | B | C |
|---|---|---|---|
| A | 0.8 | 0.1 | 0.1 |
| B | 0.1 | 0.8 | 0.1 |
| C | 0.1 | 0.1 | 0.8 |

Letters are independently affected.

## 1. Probability of receiving AAAA

$$P(\text{recv AAAA}) = P(\text{AAAA}|\text{sent AAAA}) \cdot 0.4 + P(\text{AAAA}|\text{sent BBBB}) \cdot 0.3 + P(\text{AAAA}|\text{sent CCCC}) \cdot 0.3$$

- $P(\text{AAAA}|\text{AAAA}) = 0.8^4 = 0.4096$
- $P(\text{AAAA}|\text{BBBB}) = 0.1^4 = 0.0001$
- $P(\text{AAAA}|\text{CCCC}) = 0.1^4 = 0.0001$

$$= 0.4096 \cdot 0.4 + 0.0001 \cdot 0.3 + 0.0001 \cdot 0.3$$

$$= 0.16384 + 0.00003 + 0.00003$$

$$\boxed{P(\text{recv AAAA}) \approx 0.1639}$$

## 2. Probability of receiving ACAA

- From AAAA: $P = 0.8 \cdot 0.1 \cdot 0.8 \cdot 0.8 = 0.0512$
- From BBBB: $P = 0.1 \cdot 0.1 \cdot 0.1 \cdot 0.1 = 0.0001$
- From CCCC: $P = 0.1 \cdot 0.8 \cdot 0.1 \cdot 0.1 = 0.0008$

$$P(\text{recv ACAA}) = 0.0512 \cdot 0.4 + 0.0001 \cdot 0.3 + 0.0008 \cdot 0.3$$

$$= 0.02048 + 0.00003 + 0.00024$$

$$\boxed{P(\text{recv ACAA}) \approx 0.02075}$$
