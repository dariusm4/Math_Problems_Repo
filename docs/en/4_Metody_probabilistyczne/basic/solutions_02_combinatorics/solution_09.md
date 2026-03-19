# Solution — Task 9: Digit Restrictions

## 1. Total 5-digit numbers

The first digit cannot be 0 (must be $1$–$9$), the remaining 4 digits can be $0$–$9$:

$$9 \cdot 10^4 = 90\,000$$

## 2. Even 5-digit numbers

The last digit must be even ($0, 2, 4, 6, 8$ → 5 choices). The first digit is $1$–$9$ (9 choices). The middle 3 digits are $0$–$9$ (10 choices each):

$$9 \cdot 10^3 \cdot 5 = 45\,000$$

## 3. No repeated digits

First digit: 9 choices ($1$–$9$). Second digit: 9 choices ($0$–$9$ minus the first). Third: 8. Fourth: 7. Fifth: 6.

$$9 \cdot 9 \cdot 8 \cdot 7 \cdot 6 = 27\,216$$

## 4. At least one repeated digit

Total 5-digit numbers minus those with no repeated digits:

$$90\,000 - 27\,216 = 62\,784$$
