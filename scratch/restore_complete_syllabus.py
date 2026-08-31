with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's restore all distinct problem typologies:
# A.1.3 (Master Theorem con radice n^2 sqrt(n))
# A.2.3 (Sostituzione sottrattiva con passo 2: T(n-2) + 2n)
# B.7.1 (B-Alberi) & B.7.2 (Proprietà Heap: sndmin e IsMaxHeap)
# C.1.4 (gap(A, p, r))
# D.4.1 (Cammino Massimo su Scacchiera / Griglia 2D)
# D.4.2 (Parentesizzazione Minima di Espressioni)
# D.5.1 (LIS - Longest Increasing Subsequence) & D.5.2 (Coin Change)

a13 = """
#### [ ] 📝 Esercizio A.1.3 (Raccolta Esercizi, Domanda 3)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Risolvere la ricorrenza utilizzando il Master Theorem:
    ```plaintext
    T(n) = 4 * T(n/2) + n^2 * sqrt(n)
    ```
    Verificare in modo esplicito la condizione di regolarità calcolando la costante `c < 1` tale che `a * f(n/b) <= c * f(n)`.
"""
if 'Esercizio A.1.3' not in text:
    text = text.replace('### 🔹 PATTERN A.2: Metodo di Sostituzione', a13 + '\n---\n\n### 🔹 PATTERN A.2: Metodo di Sostituzione')

a23 = """
#### [ ] 📝 Esercizio A.2.3 (Raccolta Esercizi, Domanda 4)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Risolvere la ricorrenza `T(n) = T(n - 2) + 2n` utilizzando il metodo di sostituzione per dimostrare un limite asintotico stretto `T(n) = Theta(n^2)`.
"""
if 'Esercizio A.2.3' not in text:
    text = text.replace('### 🔹 PATTERN A.3: Alberi di Ricorsione', a23 + '\n---\n\n### 🔹 PATTERN A.3: Alberi di Ricorsione')

b7 = """
---

### 🔹 PATTERN B.7: B-Alberi & Proprietà Heap Avanzate

#### [ ] 📝 Esercizio B.7.1 (Raccolta Esercizi, Domanda 47) — B-Alberi (B-Tree)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Dare la definizione formale di B-Albero con grado minimo `t >= 2`.
    Qual è la minima altezza di un B-albero con grado minimo `t` contenente `n` chiavi? Dimostrare la formula considerando il caso in cui ogni nodo ha il numero massimo di figli `2t`.

#### [ ] 📝 Esercizio B.7.2 (Raccolta Esercizi, Domande 22 & 23) — Secondo Minimo in Min-Heap & IsMaxHeap
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    1. Scrivere una funzione `sndmin(A)` che dato in input un array `A` di dimensione `n >= 3` organizzato a min-heap, restituisce il secondo elemento più piccolo presente nell'heap in tempo `O(1)` (dimostrando che esso deve trovarsi necessariamente tra i due figli della radice `A[2]` e `A[3]`).
    2. Scrivere una funzione ricorsiva `IsMaxHeap(A, i, n)` che dato un array `A[1..n]` verifica se esso soddisfa la proprietà di max-heap in tempo `O(n)`.
"""
if 'PATTERN B.7' not in text:
    text = text.replace('# 🧩 SEZIONE 3: ESERCIZI 1', b7 + '\n---\n\n# 🧩 SEZIONE 3: ESERCIZI 1')

gap_c = """
#### [ ] 📝 Esercizio C.1.6 (Raccolta Esercizi, Esercizio 1) — `gap(A, p, r)`
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Dato un array di interi `A[1..n]`, chiamiamo *gap* un indice `i in [1, n)` tale che `A[i + 1] - A[i] > 1`.
    1. Mostrare per induzione su `n` che un array `A[1..n]` tale che `A[n] - A[1] >= n` contiene almeno un gap.
    2. Fornire lo pseudocodice di una procedura ricorsiva Divide et Impera `gap(A, p, r)` che dato un array con `A[r] - A[p] >= r - p + 1` restituisce un gap in tempo `O(log n)`.
    3. Valutare la complessità con il Master Theorem.
"""
if 'gap(A, p, r)' not in text:
    text = text.replace('### 🔹 PATTERN C.2: Two / Three Pointers', gap_c + '\n---\n\n### 🔹 PATTERN C.2: Two / Three Pointers')

grid_dp = """
---

### 🔹 PATTERN D.5: DP su Griglie 2D, Parentesizzazione di Espressioni e LIS

#### [ ] 📝 Esercizio D.5.1 (Raccolta Esercizi, Esercizio 22) — Cammino Massimo su Scacchiera
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Si supponga di avere una scacchiera `n x n`. Si vuole spostare un pezzo dall'angolo in basso a sinistra `(1, 1)` all'angolo in alto a destra `(n, n)`. Ad ogni passo il pezzo può muoversi solo di una casella verso l'alto o verso destra. Ad ogni casella `(i, j)` è associato un guadagno `G[i, j]`.
    1. Scrivere l'equazione di ricorrenza per il massimo guadagno ottenibile.
    2. Scrivere l'algoritmo Bottom-Up in tempo `O(n^2)` e spazio `O(n^2)`.
    3. Spiegare come ricostruire il cammino ottimo effettuato.

#### [ ] 📝 Esercizio D.5.2 (Raccolta Esercizi, Esercizio 19) — Parentesizzazione Minima di Espressioni
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Sia data un'espressione `E = x_1 op_1 x_2 op_2 ... x_{n-1} op_{n-1} x_n` con `n >= 2`, dove ogni `x_i` è un intero positivo e `op_i in {+, *}`. Utilizzando la Programmazione Dinamica, determinare una parentesizzazione che rende il valore dell'espressione minimo.
    1. Dare una caratterizzazione ricorsiva del valore minimo `v(i, j)` per la sottoespressione da `x_i` a `x_j`.
    2. Scrivere l'algoritmo Bottom-Up in tempo `O(n^3)` per il calcolo di `v(1, n)`.

#### [ ] 📝 Esercizio D.5.3 (Raccolta Esercizi, Esercizio 28) — LIS (Longest Increasing Subsequence)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Data una sequenza di numeri `X = <x_1, ..., x_n>`, si vuole determinare una sottosequenza crescente di lunghezza massima.
    1. Definire la ricorrenza `L[i] = 1 + max{ L[j] : j < i e X[j] < X[i] }`.
    2. Scrivere l'algoritmo Bottom-Up in tempo `O(n^2)`.
    3. Mostrare come ricostruire la sequenza tramite array dei puntatori `prev[1..n]`.
"""
if 'PATTERN D.5: DP su Griglie' not in text:
    text = text.replace('### 🔹 PATTERN D.5: DP su Sequenze 1D & Coin Change', grid_dp + '\n---\n\n### 🔹 PATTERN D.6: DP Coin Change')

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully restored all valuable problem typologies into SILLABO_ESERCIZI_ESAME.md!')
