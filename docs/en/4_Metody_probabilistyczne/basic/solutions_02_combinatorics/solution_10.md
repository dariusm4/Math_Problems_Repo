# Solution — Task 10: Urn Models

Urn contains: 5 red, 4 blue, 3 green → **12 balls total** (all individually distinguishable).

> **Key assumption throughout:** Even though balls share colors, each ball is treated as a unique object (e.g., red₁, red₂, …, red₅). This is why we count with $n = 12$ rather than $n = 3$ (number of colors).

---

## 1. Draw 3 without replacement, order ignored

**What we are asked:** How many different groups of 3 balls can we form?

**Why combination $\binom{n}{k}$?**

We need to answer two questions to pick the right formula:

| Question | Answer |
|----------|--------|
| Does the order of drawing matter? | **No** — the group {red₁, blue₂, green₃} is the same regardless of which ball was drawn first. |
| Is repetition (replacement) allowed? | **No** — once a ball is drawn, it stays out of the urn. |

When order does **not** matter and there is **no** replacement, we use the **combination** formula:

$$\binom{n}{k} = \frac{n!}{k! \cdot (n-k)!}$$

This formula counts the number of ways to **choose** $k$ items from $n$ items, ignoring the order. The denominator $k!$ removes the duplicate counts that arise from different orderings of the same group.

**Calculation:**

$$\binom{12}{3} = \frac{12!}{3! \cdot 9!}$$

Cancel $9!$:

$$= \frac{12 \cdot 11 \cdot 10 \cdot \cancel{9!}}{\cancel{9!} \cdot 3!} = \frac{12 \cdot 11 \cdot 10}{3 \cdot 2 \cdot 1} = \frac{1\,320}{6} = 220$$

> **Interpretation:** There are **220** distinct unordered groups of 3 balls that can be drawn from the urn.

---

## 2. Exactly 2 red balls (order ignored)

**What we are asked:** Among all 3-ball draws (order ignored), how many contain **exactly** 2 red and 1 non-red ball?

**Why the Multiplication Principle (Rule of Product)?**

We break the draw into two **independent** sub-tasks:

1. **Choose 2 red balls** out of the 5 available.
2. **Choose 1 non-red ball** out of the remaining $4 + 3 = 7$ non-red balls.

These two choices are independent — picking which reds we take doesn't affect which non-reds are available. When two tasks are independent, we **multiply** their individual counts (this is the fundamental counting principle / rule of product).

**Step 1 — Choose 2 red from 5:**

Again, order doesn't matter among the reds we select (picking red₁ then red₃ gives the same group as red₃ then red₁), so we use a combination:

$$\binom{5}{2} = \frac{5!}{2! \cdot 3!} = \frac{5 \cdot 4 \cdot \cancel{3!}}{\cancel{3!} \cdot 2!} = \frac{5 \cdot 4}{2 \cdot 1} = \frac{20}{2} = 10$$

**Step 2 — Choose 1 non-red from 7:**

$$\binom{7}{1} = 7$$

**Combine via Multiplication Principle:**

$$10 \cdot 7 = 70$$

> **Interpretation:** There are **70** ways to draw exactly 2 red and 1 non-red ball (without caring about draw order).

---

## 3. Draw 3, order of colors recorded

**What we are asked:** How many different **sequences** (ordered draws) of 3 balls exist?

**Why $k$-permutation $P(n, k)$?**

| Question | Answer |
|----------|--------|
| Does the order of drawing matter? | **Yes** — for example, drawing (red₁, blue₂, green₃) is a different outcome from (green₃, blue₂, red₁). |
| Is repetition (replacement) allowed? | **No** — once drawn, the ball is not returned. |

When order **matters** and there is **no** replacement, we use the **$k$-permutation** formula:

$$P(n, k) = \frac{n!}{(n-k)!}$$

**Intuitive reasoning:** For the 1st draw we have 12 choices, for the 2nd draw 11 remain, for the 3rd draw 10 remain. These are multiplied because each draw is an independent sequential step.

**Calculation:**

$$P(12, 3) = \frac{12!}{9!} = \frac{12 \cdot 11 \cdot 10 \cdot \cancel{9!}}{\cancel{9!}} = 12 \cdot 11 \cdot 10 = 1\,320$$

> **Interpretation:** There are **1,320** distinct ordered sequences of 3 balls. Notice this is exactly $220 \times 3! = 220 \times 6 = 1\,320$, which makes sense: every unordered group of 3 can be arranged in $3! = 6$ different orders.

---

## 4. Exactly 2 red balls (order recorded)

**What we are asked:** Among all ordered 3-ball sequences, how many contain **exactly** 2 red and 1 non-red ball?

**Why do we need three separate steps here?**

Because order matters, we cannot simply count groups — we must also decide **which positions** in the sequence are red. We decompose the problem into three independent steps:

1. **Choose which 2 of the 3 positions are red** — this is a structural/layout decision.
2. **Fill those red positions with actual red balls** — this is a selection decision (ordered).
3. **Fill the remaining position with a non-red ball** — another selection decision.

**Step 1 — Choose positions for red balls:**

We have 3 positions (1st, 2nd, 3rd) and need to pick 2 of them for the red balls. Order among the chosen positions doesn't matter here (we just need to know *which* positions are red, not in what order we decided them), so we use a combination:

$$\binom{3}{2} = \frac{3!}{2! \cdot 1!} = \frac{3 \cdot \cancel{2!}}{\cancel{2!} \cdot 1} = 3$$

The 3 possible position layouts are: (R, R, \_), (R, \_, R), (\_, R, R).

**Step 2 — Fill red positions (ordered, 2 from 5 red):**

Now we need to assign *which* red balls go into the 2 chosen positions. Since the positions are distinct (e.g., 1st draw vs. 3rd draw), the order matters here. We use a $k$-permutation:

$$P(5, 2) = \frac{5!}{3!} = \frac{5 \cdot 4 \cdot \cancel{3!}}{\cancel{3!}} = 5 \cdot 4 = 20$$

> **Why not $\binom{5}{2} = 10$?** Because putting red₁ in position 1 and red₃ in position 3 is a *different outcome* from putting red₃ in position 1 and red₁ in position 3. The ordered permutation $P(5,2) = 20$ counts both; the combination $\binom{5}{2} = 10$ would collapse them into one.

**Step 3 — Fill remaining position (1 from 7 non-red):**

Only one position is left, and we pick 1 ball from the 7 non-red balls:

$$7$$

**Combine via Multiplication Principle:**

All three steps are independent, so we multiply:

$$3 \cdot 20 \cdot 7 = 420$$

> **Interpretation:** There are **420** ordered sequences of 3 balls that contain exactly 2 red and 1 non-red ball.

> **Sanity check:** In part 2 we found 70 unordered groups with exactly 2 red balls. Each such group can be arranged in $3! = 6$ orders, giving $70 \times 6 = 420$. ✓
