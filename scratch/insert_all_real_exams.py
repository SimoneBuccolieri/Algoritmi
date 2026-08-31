with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Insert C.1.5 after C.1.4
c15 = """
#### [ ] 📝 Esercizio C.1.5 (Appello 17 Giugno 2022, Esercizio 1 — 10 Punti) — Array Semi-Ordinato (Ruotato)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Diciamo che un array senza ripetizioni `A[1..n]` è *semi-ordinato* se esiste un indice `k in [1, n]` tale che `A[1..k]` è strettamente crescente, `A[k+1..n]` è strettamente crescente, e `A[1] > A[n]` (l'array è ordinato e poi ruotato circolarmente verso destra).
    Realizzare un algoritmo Divide et Impera efficiente `FindMin(A, p, r)` che trova e restituisce l'elemento minimo dell'array `A` in tempo `O(log n)`. Scrivere lo pseudocodice e motivare la complessità.
"""

if 'Esercizio C.1.5' not in text:
    text = text.replace('#### [ ] 📝 Esercizio C.1.4 (Appello 06 Luglio 2021, Esercizio 1 — 8 Punti) — `missing(A, n)`', c15 + '\n#### [ ] 📝 Esercizio C.1.4 (Appello 06 Luglio 2021, Esercizio 1 — 8 Punti) — `missing(A, n)`')

# Insert C.4.5 after C.4.4
c45 = """
#### [ ] 📝 Esercizio C.4.5 (Appello 04 Luglio 2022, Esercizio 1 — 9 Punti) — `strongBST(T)`
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Realizzare una funzione `strongBST(T)` che dato un albero binario `T` con nodi aventi chiavi numeriche intere verifica se `T` soddisfa la proprietà di albero binario di ricerca in tempo `O(n)`.
    L'algoritmo deve verificare che per ogni nodo `x`, la sua chiave sia strettamente maggiore del massimo del sottoalbero sinistro e strettamente minore del minimo del sottoalbero destro visitando ogni nodo una sola volta.
"""
if 'Esercizio C.4.5' not in text:
    text = text.replace('### 🔹 PATTERN C.5: Operazioni su Max-Heap & Min-Heap', c45 + '\n---\n\n### 🔹 PATTERN C.5: Operazioni su Max-Heap & Min-Heap')

# Insert D.5.1 Coin Change
d51 = """
---

### 🔹 PATTERN D.5: DP su Sequenze 1D & Coin Change (Resto Monete)

#### [ ] 📝 Esercizio D.5.1 (Appello 30 Gennaio 2023, Esercizio 2 — 9 Punti) — Coin Change (Resto Monete)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Supponiamo di avere un numero illimitato di monete di `k` tagli distinti `d_1 < d_2 < ... < d_k` (con `d_1 = 1`). Si vuole pagare una somma intera `s > 0` utilizzando il numero minimo possibile di monete.
    (a) Scrivere l'equazione di ricorrenza DP per `C(s)` (numero minimo di monete per pagare `s`).
    (b) Scrivere un algoritmo iterativo Bottom-Up in tempo `O(s * k)` e spazio `O(s)`.
"""
if 'Esercizio D.5.1' not in text:
    text = text + d51

# Insert D.4.5 Copertura Punti
d45 = """
#### [ ] 📝 Esercizio D.4.5 (Appello 04 Luglio 2022, Esercizio 2 — 10 Punti) — Copertura Punti con Intervalli Unitari
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Dato un insieme di `n` numeri reali positivi e distinti `S = {x_1, ..., x_n}` su una retta, si vuole trovare il numero minimo di intervalli chiusi di lunghezza 1 (cioè della forma `[a, a + 1]`) che coprono tutti i punti di `S`.
    (a) Progettare un algoritmo greedy efficiente: dopo aver ordinato i punti `x_1 < x_2 < ... < x_n`, posizionare il primo intervallo su `[x_1, x_1 + 1]`, eliminare i punti coperti e ripetere sul primo punto scoperto.
    (b) Dimostrare formalmente la proprietà di scelta greedy tramite tecnica di sostituzione.
"""
if 'Esercizio D.4.5' not in text:
    text = text.replace('#### [ ] 📝 Esercizio D.4.4', d45 + '\n#### [ ] 📝 Esercizio D.4.4')

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully inserted all real exam tasks into SILLABO_ESERCIZI_ESAME.md!')
