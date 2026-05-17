# TASK LIST NO. 1: Random Events and Probability

## Task 1
Let the sample space $\Omega$ of elementary events of an experiment consist of five elementary events $\omega_i$: $\Omega=\{\omega_1, \omega_2, \omega_3, \omega_4, \omega_5\}$. We define the events: $A=\{\omega_1, \omega_3, \omega_5\}$, $B=\{\omega_2, \omega_3, \omega_4\}$.

Find the events:

1. $A \cup B$ (union of events)
2. $A \cap B$ (intersection of events)
3. $B \backslash A$ (difference of events)
4. $A \backslash B$

## Task 2
Consider an electrical circuit in which element $a_1$ is connected in series with a block consisting of two elements $a_2$ and $a_3$ connected in parallel. Let $A_i, i=1, 2, 3$, denote the event "element $a_i$ is functional at time $t$".

Using operations on events $A_i$ and the symbols for union ($\cup$) and intersection ($\cap$), describe the event $A$: "in the time interval $t$, the current flow through the circuit will not be interrupted".

## Task 3
Person $X$ performs a certain job in 4, 5, or 6 hours and may commit 0, 1, or 2 errors. Assuming equal probability for each of the 9 possible elementary events (pairs: time, number of errors), find the probability of the following events:

1. The job will be completed in 4 hours.
2. The job will be completed flawlessly in 6 hours.
3. The job will be completed in at most 5 hours.
4. The job will be completed in at most 5 hours and with at most one error.

## Task 4
A fragment of an electrical network consists of two elements connected in parallel: $a_1$ and $a_2$. Let $A_i, i=1, 2$, denote the event that element $a_i$ remains functional for at least time $t$.

Calculate the probability of continuous current flow through this system for at least time $t$, given that $P(A_1)=P(A_2)=p$ and the probability of simultaneous functionality of both elements is $P(A_1 \cap A_2)=p^2$.

## Task 5
We consider the volume (in $dm^3$) of water that a concrete culvert can conduct per second. Past observations allow us to assume that:

* The probability that the volume of water takes a value from the interval $\langle 125, 250 \rangle$ is $P(A) = 0.6$.
* The probability that the volume of water takes a value from the interval $(200, 300\rangle$ is $P(B) = 0.7$.
* The probability of the union of these events is $P(A \cup B)=0.8$.

Calculate the probability:

1. $P(A')$ (complementary event to A)
2. $P(A \cap B)$ (intersection of intervals)
3. $P(A' \cap B')$ (water volume does not fall into either of these intervals)

## Task 6
Identical products manufactured by 2 automated machines are placed on a conveyor belt. The quantitative ratio of production of the first machine to the production of the second is $3:2$. The first machine produces on average $65\%$ of first-grade products, while the second produces $85\%$.

1. One product is randomly selected from the products on the conveyor belt. Calculate the probability that it will be a first-grade product (use the total probability formula).
2. A randomly selected product turned out to be of first quality. Calculate the probability that it was produced by the first machine (use Bayes' theorem).

## Task 7
On a communication line, two types of signals are transmitted in the form of code combinations 111 or 000 with a priori probabilities of $0.65$ and $0.35$ respectively. The signals are subject to random interference, as a result of which the symbol 1 can be received as 0 with a probability of $0.2$, and with the same probability, the symbol 0 can be received as 1. We assume that symbols 1 and 0 are subject to interference independently of each other.

Calculate the probability of receiving the signal:

1. 111
2. 000
3. 010

## Task 8
Coded information consists of seven pulses of types $A, B, C$ in quantities: four pulses of $A$, two pulses of $B$, and one pulse of $C$. Assuming a random arrangement of pulses, find the probability that:

1. the first received pulse will be $A$,
2. the first received pulse will be $A$ or $C$,
3. the first two pulses will be $A$ and $C$ in that order.

## Task 9
A certain good is produced by 3 plants. The probability of producing first-quality goods by these plants is $0.97$, $0.90$, and $0.86$, respectively.

Find the probability that a randomly taken item — from among three items originating (one each) from different plants — is of first quality.

## Task 10
Only 3 types of letter sequences are transmitted via a communication channel: $AAAA$, $BBBB$, $CCCC$ with probabilities $0.4$, $0.3$, and $0.3$, respectively. These letters (signals) are subject to independent random interference (errors), as a result of which, e.g., letter $A$ can be received as $B$ or $C$. The probabilities of correct transmission or error for a single letter are given in the table:

| Transmitted \ Received | A | B | C |
| :--- | :--- | :--- | :--- |
| **A** | 0.8 | 0.1 | 0.1 |
| **B** | 0.1 | 0.8 | 0.1 |
| **C** | 0.1 | 0.1 | 0.8 |

Find the probability of receiving the signal at the output:

1. $AAAA$
2. $ACAA$