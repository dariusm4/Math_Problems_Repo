# Solution — Task 10: Multinomial Model (Numerical)

## Problem Recap

A box contains candies with the following flavor proportions:

- **Strawberry:** 40% → $p_1 = 0.40$
- **Lemon:** 35% → $p_2 = 0.35$
- **Mint:** 25% → $p_3 = 0.25$

We randomly select **$n = 6$ candies independently**. Calculate P(3 strawberry, 2 lemon, 1 mint).

---

## Setup

**Why multinomial?**

| Feature | Our experiment |
|---------|----------------|
| Fixed number of trials | ✅ $n = 6$ candies selected |
| More than 2 outcome categories | ✅ 3 flavors |
| Trials are independent | ✅ "independently" given in the problem |
| Constant probabilities | ✅ The box proportions don't change (with replacement or very large box) |

> **Key insight:** The word "independently" in the problem tells us that each selection does not affect the next. This could mean we draw with replacement, or the box is so large that removing a candy doesn't noticeably change the proportions.

> **Why not binomial?** Binomial handles only 2 outcomes. Since we have 3 flavors and we care about the specific count of each flavor, we need the multinomial.

**We want:** $P(X_1 = 3,\ X_2 = 2,\ X_3 = 1)$

where $X_1$ = strawberry count, $X_2$ = lemon count, $X_3$ = mint count.

**Check:** $3 + 2 + 1 = 6 = n$ ✓

---

## Applying the multinomial formula

$$P(X_1 = x_1,\ X_2 = x_2,\ X_3 = x_3) = \frac{n!}{x_1! \cdot x_2! \cdot x_3!} \cdot p_1^{x_1} \cdot p_2^{x_2} \cdot p_3^{x_3}$$

### Step 1 — Multinomial coefficient

$$\frac{n!}{x_1! \cdot x_2! \cdot x_3!} = \frac{6!}{3! \cdot 2! \cdot 1!}$$

**Calculate:**

$$6! = 720$$
$$3! = 6, \quad 2! = 2, \quad 1! = 1$$
$$\frac{720}{6 \cdot 2 \cdot 1} = \frac{720}{12} = 60$$

> **What does 60 mean?** There are **60 different orderings** in which we can draw 3 strawberry, 2 lemon, and 1 mint candy. For example:
> - S, S, S, L, L, M
> - S, L, S, M, L, S
> - M, L, S, S, L, S
> - … (60 such sequences in total)
>
> The multinomial coefficient is essentially a permutation with repeated elements: we are arranging the word "SSSLLM" and dividing by the factorial of each repeated letter count.

### Step 2 — Probability of one specific sequence

Any single sequence with 3 strawberry, 2 lemon, 1 mint has probability:

$$p_1^{x_1} \cdot p_2^{x_2} \cdot p_3^{x_3} = (0.40)^3 \cdot (0.35)^2 \cdot (0.25)^1$$

**Calculate each factor:**

$$(0.40)^3 = 0.40 \times 0.40 \times 0.40 = 0.064$$

> **Why $(0.40)^3$?** Each of the 3 strawberry draws has probability 0.40. Since draws are independent, we multiply: $0.40 \times 0.40 \times 0.40$.

$$(0.35)^2 = 0.35 \times 0.35 = 0.1225$$

> **Why $(0.35)^2$?** Same reasoning — 2 independent lemon draws, each with probability 0.35.

$$(0.25)^1 = 0.25$$

**Product:**

$$0.064 \times 0.1225 \times 0.25 = 0.064 \times 0.030625 = 0.00196$$

### Step 3 — Combine

$$P(X_1=3, X_2=2, X_3=1) = 60 \times 0.00196 = 0.1176$$

$$\boxed{P(X_1=3, X_2=2, X_3=1) = 0.1176 \approx 11.76\%}$$

---

## Interpretation

There is approximately an **11.8% chance** that from 6 randomly selected candies, we get exactly 3 strawberry, 2 lemon, and 1 mint.

**Is this reasonable?** Let's check:

- Expected counts: $E[X_1] = 6 \times 0.40 = 2.4$ strawberry, $E[X_2] = 6 \times 0.35 = 2.1$ lemon, $E[X_3] = 6 \times 0.25 = 1.5$ mint
- Our target (3, 2, 1) is close to the expected values (2.4, 2.1, 1.5), so a probability around 12% is plausible — not the most likely outcome, but not rare either.

> **Verification via factored form:**
>
> $$\frac{6!}{3! \cdot 2! \cdot 1!} \cdot (0.40)^3 \cdot (0.35)^2 \cdot (0.25)^1 = 60 \cdot 0.064 \cdot 0.1225 \cdot 0.25 = 60 \cdot 0.00196 = 0.1176 \quad \checkmark$$
