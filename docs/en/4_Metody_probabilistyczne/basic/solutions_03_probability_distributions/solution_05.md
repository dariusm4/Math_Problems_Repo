# Solution — Task 5: Multinomial Model (Categories of Outcomes)

## Problem Recap

A player rolls a **die 5 times**. Outcomes are grouped into three categories:

- **Small** (1–2): probability $p_1 = \frac{2}{6} = \frac{1}{3}$
- **Medium** (3–4): probability $p_2 = \frac{2}{6} = \frac{1}{3}$
- **Large** (5–6): probability $p_3 = \frac{2}{6} = \frac{1}{3}$

---

## 1. Describe the random experiment

**The experiment:** Roll a fair die 5 times. After each roll, classify the outcome into one of three categories (small, medium, large). Count how many rolls fall into each category.

**Why the multinomial distribution?**

| Feature | Our experiment |
|---------|----------------|
| Fixed number of trials $n$ | ✅ $n = 5$ rolls |
| Each trial has $c > 2$ possible outcomes | ✅ 3 categories (small/medium/large) |
| Trials are independent | ✅ Each roll is independent |
| Probabilities stay the same across trials | ✅ Each roll uses the same fair die |

> **Key insight:** The multinomial distribution is a **generalization of the binomial** for more than 2 outcome categories. The binomial handles success/failure (2 outcomes); the multinomial handles any number of categories.

> **Relationship:** If we had only 2 categories (e.g., "small" vs. "not small"), this would reduce to a binomial distribution.

---

## 2. Define the sample space

We build $\Omega$ step by step.

---

**Step 1 — What do we observe after the experiment?**

After rolling the die 5 times, we don't care about the exact sequence of rolls (e.g., "1, 4, 6, 2, 3"). We only care about **how many rolls** fell into each of the 3 categories.

So we record three numbers:

- $X_1$ = how many of the 5 rolls gave a **small** result (1 or 2)
- $X_2$ = how many of the 5 rolls gave a **medium** result (3 or 4)
- $X_3$ = how many of the 5 rolls gave a **large** result (5 or 6)

> **Example:** If the rolls are 1, 4, 6, 2, 3 → we get 2 small (1 and 2), 2 medium (4 and 3), 1 large (6) → we record $(X_1, X_2, X_3) = (2, 2, 1)$.

---

**Step 2 — What constraints do these numbers have?**

Two rules:

1. **Each $X_i \geq 0$** — you cannot have a negative count. It is possible to get zero rolls in a category (e.g., no large numbers at all).

2. **$X_1 + X_2 + X_3 = 5$** — every roll must fall into exactly one category, and there are 5 rolls total. So the three counts must always add up to 5.

---

**Step 3 — Write $\Omega$ formally**

Combining Steps 1 and 2, the sample space is:

$$\Omega = \{(x_1, x_2, x_3) \in \mathbb{N}_0^3 : x_1 + x_2 + x_3 = 5\}$$

**What does each symbol mean?**

| Symbol | Meaning |
|--------|---------|
| $(x_1, x_2, x_3)$ | An ordered triple — the counts for small, medium, large |
| $\in$ | "belongs to" / "is an element of" |
| $\mathbb{N}_0$ | Non-negative integers: $\{0, 1, 2, 3, \ldots\}$. The subscript $0$ means zero is included |
| $\mathbb{N}_0^3$ | All possible triples of non-negative integers. The superscript $3$ means 3 components |
| $:$ | "such that" — a filter condition follows |
| $x_1 + x_2 + x_3 = 5$ | The constraint: total must be 5 |

> **In plain language:** $\Omega$ is the set of all ways to split 5 rolls among 3 categories, where each category gets zero or more, and the total is always 5.

---

**Step 4 — Examples: which triples are in $\Omega$ and which are not?**

✅ **Valid elements** (they satisfy both rules):

| Element | Check | Interpretation |
|---------|-------|---------------|
| $(5, 0, 0)$ | $5+0+0=5$ ✓, all $\geq 0$ ✓ | All 5 rolls are small |
| $(2, 2, 1)$ | $2+2+1=5$ ✓, all $\geq 0$ ✓ | 2 small, 2 medium, 1 large |
| $(0, 0, 5)$ | $0+0+5=5$ ✓, all $\geq 0$ ✓ | All 5 rolls are large |
| $(1, 3, 1)$ | $1+3+1=5$ ✓, all $\geq 0$ ✓ | 1 small, 3 medium, 1 large |
| $(0, 2, 3)$ | $0+2+3=5$ ✓, all $\geq 0$ ✓ | No small, 2 medium, 3 large |

❌ **Invalid — NOT in $\Omega$:**

| Element | Why not? |
|---------|----------|
| $(3, 3, 1)$ | $3+3+1 = 7 \neq 5$ — sum is too large |
| $(4, 2, 0)$ | Wait — $4+2+0 = 6 \neq 5$ — one roll too many |
| $(-1, 4, 2)$ | $-1 < 0$ — negative counts are impossible |
| $(2, 1, 1)$ | $2+1+1 = 4 \neq 5$ — sum is too small, one roll missing |

---

**Step 5 — How many elements does $\Omega$ have?**

We need to answer: **in how many ways can we write 5 as a sum of 3 non-negative integers?**

$$x_1 + x_2 + x_3 = 5, \quad x_i \geq 0$$

This is a classic counting problem called **"Stars and Bars"**.

**The idea behind Stars and Bars:**

Imagine our 5 rolls as 5 identical stars: ★ ★ ★ ★ ★

We need to split them into 3 groups (one group per category). To create 3 groups from a row of stars, we insert **2 dividers** (bars "|") among them.

**How it works — example:**

The arrangement `★★ | ★★ | ★` means: 2 stars go to category 1, 2 stars to category 2, 1 star to category 3 → triple $(2, 2, 1)$.

More examples:

| Arrangement | How to read it | Triple |
|------------|----------------|--------|
| `★★★★★ ∣∣` | All 5 left of both bars → 5 small, 0 medium, 0 large | $(5, 0, 0)$ |
| `★★ ∣ ★★ ∣ ★` | 2 left of 1st bar, 2 between bars, 1 right of 2nd bar | $(2, 2, 1)$ |
| `∣ ★★ ∣ ★★★` | 0 left of 1st bar, 2 between, 3 right | $(0, 2, 3)$ |
| `★ ∣ ★★★ ∣ ★` | 1 left, 3 between, 1 right | $(1, 3, 1)$ |
| `∣∣ ★★★★★` | 0 left, 0 between, 5 right → all large | $(0, 0, 5)$ |

> **Note:** Bars can be adjacent (like `★★★★★ ||`) — that just means an empty group (0 rolls in that category). This is perfectly valid.

**Counting the arrangements:**

We have 7 symbols total: 5 stars + 2 bars. We need to choose **which 2 of the 7 positions** are bars (the rest are automatically stars).

$$\binom{7}{2} = \frac{7!}{2! \cdot 5!} = \frac{7 \cdot 6}{2 \cdot 1} = 21$$

**Where does the general formula come from?**

With $n$ stars (items to distribute) and $c$ categories, we need $c - 1$ bars. Total symbols = $n + (c-1)$. Choose positions for the bars:

$$\binom{n + c - 1}{c - 1}$$

Plugging in $n = 5$, $c = 3$:

$$\binom{5 + 3 - 1}{3 - 1} = \binom{7}{2} = 21$$

**Conclusion:** $|\Omega| = 21$ — there are **21 possible distributions** of 5 rolls across 3 categories.

---

## 3. Specify the multinomial distribution

**The multinomial formula:**

$$P(X_1 = x_1,\ X_2 = x_2,\ X_3 = x_3) = \frac{n!}{x_1! \cdot x_2! \cdot x_3!} \cdot p_1^{x_1} \cdot p_2^{x_2} \cdot p_3^{x_3}$$

**Why this formula? Breaking down each component:**

- $\frac{n!}{x_1! \cdot x_2! \cdot x_3!}$ is the **multinomial coefficient** — it counts the number of ways to arrange $n$ trials such that $x_1$ are of type 1, $x_2$ of type 2, and $x_3$ of type 3. This is essentially a permutation of objects with repeated elements.

- $p_1^{x_1} \cdot p_2^{x_2} \cdot p_3^{x_3}$ is the probability of any **one specific** sequence with the given composition. Since trials are independent, we multiply probabilities.

> **Analogy:** Think of it like arranging colored balls. $\frac{5!}{x_1! x_2! x_3!}$ counts the number of distinct orderings (e.g., SSMML, SMSML, ...), and each ordering has the same probability $p_1^{x_1} p_2^{x_2} p_3^{x_3}$.

**Substituting** $n = 5$, $p_1 = p_2 = p_3 = \frac{1}{3}$:

$$P(X_1 = x_1,\ X_2 = x_2,\ X_3 = x_3) = \frac{5!}{x_1! \cdot x_2! \cdot x_3!} \cdot \left(\frac{1}{3}\right)^5$$

Since $\left(\frac{1}{3}\right)^5 = \frac{1}{243}$:

$$P(X_1 = x_1,\ X_2 = x_2,\ X_3 = x_3) = \frac{5!}{x_1! \cdot x_2! \cdot x_3!} \cdot \frac{1}{243}$$

**Example:** $P(X_1 = 2, X_2 = 2, X_3 = 1)$:

$$= \frac{5!}{2! \cdot 2! \cdot 1!} \cdot \frac{1}{243} = \frac{120}{2 \cdot 2 \cdot 1} \cdot \frac{1}{243} = \frac{30}{243} \approx 0.1235$$

---

## 4. Explain the interpretation of the parameters

**$n = 5$:** The total number of independent trials (die rolls).

**$c = 3$:** The number of outcome categories.

**$p_1, p_2, p_3$:** The probability of each category on a single trial.

- $p_1 = \frac{1}{3}$: probability of rolling a small number (1 or 2)
- $p_2 = \frac{1}{3}$: probability of rolling a medium number (3 or 4)
- $p_3 = \frac{1}{3}$: probability of rolling a large number (5 or 6)

**Constraint:** $p_1 + p_2 + p_3 = 1$ (the probabilities of all categories must sum to 1, since every roll must fall into exactly one category).

> **Important:** In this problem all three probabilities happen to be equal ($\frac{1}{3}$), but the multinomial distribution works for any set of probabilities summing to 1. For an unfair die or different groupings, the $p_i$ values would differ.

> **Marginal distributions:** Each individual $X_i$ follows a binomial distribution: $X_i \sim \text{Bin}(n, p_i)$. For example, $X_1 \sim \text{Bin}(5, \frac{1}{3})$. However, $X_1, X_2, X_3$ are **not** independent of each other (since $X_1 + X_2 + X_3 = 5$, knowing two determines the third).
