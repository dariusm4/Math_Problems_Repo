# Solution — Task 8: Sequences with Repetition

## 1. Total 5-digit PIN codes (digits may repeat)

Each of 5 positions: any digit $0$–$9$ (10 choices), repetition allowed:

$$10^5 = 10 \cdot 10 \cdot 10 \cdot 10 \cdot 10 = 100\,000$$

## 2. At least one repeated digit

Total PINs minus PINs with **all digits different**:

$$10^5 - P(10, 5) = 100\,000 - 30\,240 = 69\,760$$

## 3. All digits different

This is a k-permutation — choose 5 from 10, order matters, no repetition:

$$P(10, 5) = \frac{10!}{(10-5)!} = \frac{10!}{5!}$$

Cancel $5!$:

$$= \frac{10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot \cancel{5!}}{\cancel{5!}} = 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 = 30\,240$$
