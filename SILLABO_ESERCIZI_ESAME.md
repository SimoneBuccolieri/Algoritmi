# 📚 SILLABO COMPLETO E DEFINITIVO ESAMI UFFICIALI (Prof. Baldan)
> **Il punto di riferimento unico e totale per superare lo scritto con il massimo dei voti.**  
> **Fonti 100% Reali d'Esame**: `pdfjoiner.txt` (Appelli 2024–2026) e `Raccolta Appelli.txt` (Appelli 2019–2023).  
> **Ogni esercizio è un vero tema d'esame assegnato negli appelli ufficiali dal 2019 al 2026.**  
> **Zero Latex**: Formattazione pulita in testo semplice per la massima leggibilità.

---

# 📐 SEZIONE 1: DOMANDE A (5–7 Punti)
*Tipologia: Teoria asintotica, equazioni di ricorrenza, metodi formali, piccoli algoritmi.*

---

### 🔹 PATTERN A.1: Master Theorem (Casi 1, 2, 3 + Condizione di Regolarità)
*   **Regola chiave**: Confrontare `f(n)` con `n^(log_b a)`.
    *   Caso 1: `f(n) = O(n^(log_b a - eps))` per `eps > 0` -> `Theta(n^(log_b a))`.
    *   Caso 2: `f(n) = Theta(n^(log_b a))` -> `Theta(n^(log_b a) * log n)`.
    *   Caso 3: `f(n) = Omega(n^(log_b a + eps))` per `eps > 0` E vale la condizione di regolarità `a * f(n/b) <= c * f(n)` per qualche costante `c < 1` e `n` sufficientemente grande -> `Theta(f(n))`.

#### [x] 📝 Esercizio A.1.1 (Appello 18 Giugno 2024, Domanda A — 7 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Master Theorem Caso 3 con verifica della condizione di regolarita.`
*   **Traccia Integrale**:
    Risolvere la seguente equazione di ricorrenza tramite il Master Theorem, specificando a quale caso si fa riferimento e verificando tutte le condizioni (inclusa l'eventuale condizione di regolarità):
    ```plaintext
    T(n) = 4 * T(n/2) + n^3 + 1      per n > 1
    T(1) = 1
    ```

#### [x] 📝 Esercizio A.1.2 (Appello 07 Febbraio 2025, Domanda A — 7 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Master Theorem Caso 2 con f(n) = Theta(n^(log_b a)).`
*   **Traccia Integrale**:
    Risolvere la seguente equazione di ricorrenza tramite il Master Theorem, specificando il caso applicato e verificando formalmente le condizioni:
    ```plaintext
    T(n) = 3 * T(n/3) + n/2 + 1      per n > 1
    T(1) = 1
    ```

---


#### [ ] 📝 Esercizio A.1.3 (Raccolta Esercizi, Domanda 3)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Risolvere la ricorrenza utilizzando il Master Theorem:
    ```plaintext
    T(n) = 4 * T(n/2) + n^2 * sqrt(n)
    ```
    Verificare in modo esplicito la condizione di regolarità calcolando la costante `c < 1` tale che `a * f(n/b) <= c * f(n)`.

---

### 🔹 PATTERN A.2: Metodo di Sostituzione Induttivo & Ricorrenze Sottrattive
*   **Regola chiave**: Ipotizzare la forma asintotica, sostituire l'ipotesi induttiva, ricavare le costanti `c > 0` e la soglia `n_0 >= 1`.

#### [x] 📝 Esercizio A.2.1 (Appello 19 Settembre 2024, Domanda A — 7 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Sostituzione induttiva T(n-1) + 3n con ricavo delle costanti c e n_0.`
*   **Traccia Integrale**:
    Data la seguente equazione di ricorrenza:
    ```plaintext
    T(n) = T(n - 1) + 3*n      per n > 1
    T(1) = 1
    ```
    Dimostrare per sostituzione (induzione) che `T(n) = O(n^2)`. Determinare esplicitamente le costanti `c > 0` e `n_0 >= 1` per cui vale la definizione formale.

#### [x] 📝 Esercizio A.2.2 (Appello 16 Giugno 2023 / 11 Aprile 2019, Domanda 1 — 7 Punti)
> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `7.0/10 — Sostituzione induttiva T(n) = (1/3)T(n-1) + 3n^2; compreso il metodo di maggiorazione dopo correzione sull'impostazione algebrica.`
*   **Traccia Integrale**:
    Dare la definizione della classe `Theta(f(n))`. Mostrare che la ricorrenza:
    ```plaintext
    T(n) = (1/3) * T(n - 1) + 3*n^2      per n > 1
    T(1) = 1
    ```
    ha soluzione in `Theta(n^2)` provando separatamente che `T(n) = O(n^2)` e `T(n) = Omega(n^2)` mediante induzione.

---


#### [ ] 📝 Esercizio A.2.3 (Raccolta Esercizi, Domanda 4)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Risolvere la ricorrenza `T(n) = T(n - 2) + 2n` utilizzando il metodo di sostituzione per dimostrare un limite asintotico stretto `T(n) = Theta(n^2)`.

---

### 🔹 PATTERN A.3: Alberi di Ricorsione (Ricorrenze Asimmetriche / Più Rami)
*   **Regola chiave**: Calcolare il costo di ogni livello `j`, verificare se i livelli formano una serie geometrica convergente (`Theta(n)`) o sono costanti su ogni livello (`Theta(n log n)`).

#### [x] 📝 Esercizio A.3.1 (Appello 14 Febbraio 2024, Domanda A — 7 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Albero di ricorsione con serie geometrica e somma a livello j.`
*   **Traccia Integrale**:
    Si dia la definizione di limite asintotico stretto (`Theta`). Data la seguente equazione di ricorrenza:
    ```plaintext
    T(n) = 2 * T(n/5) + T(n/2) + n      per n > 1
    T(1) = 1
    ```
    Mostrare, tramite l'albero di ricorsione e la somma della serie geometrica associata, che `f(n) = n` è limite asintotico stretto per la soluzione (`T(n) = Theta(n)`).

#### [ ] 📝 Esercizio A.3.2 (Appello 04 Luglio 2025, Domanda A — 7 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Determinare la complessità asintotica stretta (`Theta`) per la seguente equazione di ricorrenza asimmetrica:
    ```plaintext
    T(n) = T(n/4) + T(3n/4) + n      per n > 1
    T(1) = 1
    ```
    Disegnare i primi livelli dell'albero di ricorsione, calcolare la somma dei costi su ciascun livello `j`, determinare la profondità minima e massima dell'albero e concludere la complessità.

---

### 🔹 PATTERN A.4: Dimostrazioni Formali su Notazioni Asintotiche (O, Omega, Theta)
*   **Regola chiave**: Usare le definizioni formali con le costanti `c_1, n_1`, sostituire, isolare e scegliere `c_2 = 1/2` per ricavare la soglia `n_0 = max(n_1, ...)`.

#### [x] 📝 Esercizio A.4.1 (Appello 18 Giugno 2025, Domanda A — 7 Punti)
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — Dimostrazione algebrica impeccabile, scelta costante c_2=1/2 e soglia n_0 corretta.`
*   **Traccia Integrale**:
    1. Dare la definizione formale delle classi `O(f(n))` e `Omega(f(n))` per una funzione generica `f(n)`.
    2. Mostrare formalmente che: se `f(n) = O(n)` e `g(n) = n^2 - f(n)`, allora `g(n) = Omega(n^2)`.

#### [ ] 📝 Esercizio A.4.2 (Appello 10 Settembre 2025, Domanda A — 7 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    1. Dare la definizione formale della classe `Omega(f(n))`.
    2. Mostrare che date due funzioni `f(n)` e `g(n)` (che si possono assumere sempre positive), se `f(n) = Omega(n^2)` allora `f(n) + g(n) = Omega(n^2 + g(n))`.
    3. Vale anche `f(n) - g(n) = Omega(n^2 - g(n))`? Dimostrarlo o fornire un controesempio.

---

### 🔹 PATTERN A.5: Ordinamento Asintotico di Funzioni
*   **Gerarchia universale**: Costante `<` `log n` `<` `(log n)^k` `<` `sqrt(n)` `<` `n` `<` `n log n` `<` `n^k` `<` `a^n (a > 1)` `<` `n!`.

#### [x] 📝 Esercizio A.5.1 (Appello 02 Luglio 2024, Domanda A — 6 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.5/10 — Ordinamento asintotico di 8 funzioni senza errori.`
*   **Traccia Integrale**:
    Ordinare le seguenti 8 funzioni in una sequenza `f_1, f_2, ..., f_8` tale che `f_i = O(f_{i+1})` per ogni `i in {1, ..., 7}`:
    ```plaintext
    n!,   (1.1)^n,   n^2,   sqrt(n),   log(n),   n * log(n),   2^(2n),   (log n)^2
    ```

#### [x] 📝 Esercizio A.5.2 (Appello 20 Gennaio 2026, Domanda A — 6 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.5/10 — Ordinamento asintotico con esponenziali a base < 1 e > 1.`
*   **Traccia Integrale**:
    Ordinare in ordine di crescita asintotica crescente le seguenti funzioni, motivando sinteticamente le posizioni relative:
    ```plaintext
    n^(3/2),   2^n,   (log n)^3,   n^2 / log(n),   n * (log n)^2,   0.9^n,   (1.05)^n,   log(n)
    ```

---

### 🔹 PATTERN A.6: Algoritmi Brevi & Strutture Dati in Domanda A

#### [x] 📝 Esercizio A.6.1 (Appello 31 Gennaio 2024, Domanda A — 6 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Procedura Ord(A,p,r) Divide et Impera con Master Theorem.`
*   **Traccia Integrale**:
    Realizzare una funzione booleana di tipo Divide et Impera `Ord(A, p, r)` che verifica se l'array `A[p..r]` è ordinato in senso crescente. Scrivere lo pseudocodice, spiegarne l'idea e calcolarne la complessità mediante Master Theorem.

#### [ ] 📝 Esercizio A.6.2 (Appello 24 Gennaio 2025, Domanda A — 6 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    1. Dare la definizione di Max-Heap.
    2. Dati un min-heap `A` di dimensione `n` e un max-heap `B` di dimensione `n`, descrivere un algoritmo per trovare l'elemento minimo presente nell'unione dei due heap `A U B` con complessità temporale ottimale `O(1)`.

---
---

# 🌳 SEZIONE 2: DOMANDE B (6–7 Punti)
*Tipologia: Esecuzione su strutture dati, simulazioni passo-passo, proprietà teoriche.*

---

### 🔹 PATTERN B.1: Max-Heap & Min-Heap (`BuildMaxHeap` e Operazioni)
*   **Regola chiave**: Gli indici non-foglia partono da `floor(n/2)` a scendere fino a `1`. Ad ogni passo si chiama `MaxHeapify`.

#### [x] 📝 Esercizio B.1.1 (Appello 18 Giugno 2024, Domanda B — 6 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — BuildMaxHeap passo-passo a partire dagli indici non-foglia floor(n/2).`
*   **Traccia Integrale**:
    Dare la definizione di max-heap. Dato l'array `A` con elementi:
    ```plaintext
    A = [7, 1, 17, 0, 5, 4, 22]      (dimensione n = 7)
    ```
    si specifichi il max-heap ottenuto applicando ad `A` la procedura `BuildMaxHeap`. Si descriva sinteticamente come si procede per arrivare al risultato (riportando il contenuto dello heap nei passi intermedi).

#### [ ] 📝 Esercizio B.1.2 (Appello 11 Aprile 2019 / 20 Gennaio 2026, Domanda B — 6 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Dare la definizione di min-heap. Data la sequenza di elementi:
    ```plaintext
    60, 69, 26, 95, 51, 24, 46, 80, 60, 38, 12, 70
    ```
    si specifichi il min-heap ottenuto, inserendo uno alla volta questi elementi nell'ordine indicato a partire da uno heap vuoto tramite `HeapInsert`. Descrivere sinteticamente i primi passi e dare l'albero finale.

---

### 🔹 PATTERN B.2: Tabelle Hash a Indirizzamento Aperto (Doppio Hashing, Ispezione Lineare, DELETED)
*   **Regola chiave**: Per il doppio hashing `h(k, i) = (h1(k) + i * h2(k)) mod m`, `m` deve essere primo affinché `MCD(h2(k), m) = 1` garantisca l'ispezione completa. `DELETED` evita di interrompere la ricerca delle chiavi successive.

#### [x] 📝 Esercizio B.2.1 (Appello 07 Febbraio 2025, Domanda B — 7 Punti)
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.0/10 — Inserimenti con doppio hashing corretti; compresa e motivata formalmente la regola del coprimo MCD(h2,m)=1.`
*   **Traccia Integrale**:
    Si consideri una tabella hash di dimensione `m = 7`, e indirizzamento aperto con doppio hash basato sulle funzioni:
    ```plaintext
    h1(k) = k mod 7
    h2(k) = 1 + (k mod 5)
    h(k, i) = (h1(k) + i * h2(k)) mod 7
    ```
    1. Si descriva sinteticamente come avviene l'inserimento degli elementi e si specifichi il risultato dell'inserzione della sequenza di chiavi: `10, 20, 34, 35, 48`.
    2. Sarebbe appropriato lavorare con una tabella di dimensione `m = 8` e le stesse funzioni hash? Motivare formalmente la risposta.

#### [ ] 📝 Esercizio B.2.2 (Appello 16 Giugno 2023, Domanda B — 7 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Si consideri una tabella hash di dimensione `m = 11`, gestita a indirizzamento aperto con ispezione lineare `h(k, i) = (k + i) mod 11`.
    1. Inserire la sequenza: `22, 1, 13, 11, 24, 33, 12`.
    2. Cancellare la chiave `11`. Spiegare perché è necessario utilizzare la marcatura speciale `DELETED` invece di impostare la cella a vuoto.

---

### 🔹 PATTERN B.3: Tabelle Hash con Chaining (Liste di Trabocco)

#### [x] 📝 Esercizio B.3.1 (Appello 31 Gennaio 2024, Domanda B — 6 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.5/10 — Tabella Chaining con inserimenti e fattore di carico alpha.`
*   **Traccia Integrale**:
    Si consideri una tabella hash di dimensione `m = 8`, gestita mediante chaining (liste di trabocco) con funzione di hash `h(k) = k mod 8`. 
    1. Si descriva in dettaglio come avviene l'inserimento della sequenza di chiavi: `13, 10, 33, 21, 8, 26`.
    2. Disegnare lo stato finale delle 8 liste della tabella.
    3. Calcolare il fattore di carico `alpha = n / m`.

#### [ ] 📝 Esercizio B.3.2 (Appello 15 Luglio 2023, Domanda B — 6 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Data una tabella hash di dimensione `m = 7` con liste di trabocco e funzione di hash `h(k) = (2k + 3) mod 7`:
    Inserire nell'ordine le chiavi `5, 28, 19, 15, 20, 33, 12, 17, 10`. Riportare la configurazione finale e calcolare la lunghezza della catena più lunga.

---

### 🔹 PATTERN B.4: Codici di Huffman

#### [x] 📝 Esercizio B.4.1 (Appello 14 Febbraio 2024, Domanda B — 6 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.5/10 — Costruzione albero di Huffman ed estrazione codici prefissi.`
*   **Traccia Integrale**:
    Indicare, in forma di albero binario, il codice prefisso ottenuto tramite l'algoritmo di Huffman per l'alfabeto `{a, b, c, d, e, f}`, supponendo che ogni simbolo appaia con le seguenti frequenze:
    ```plaintext
    Simbolo:     a    b    c    d    e    f
    Frequenza:  11    6   13   35   10   25
    ```
    Spiegare brevemente il processo di costruzione del codice mostrando i nodi estratti e uniti ad ogni passo.

#### [ ] 📝 Esercizio B.4.2 (Appello 18 Giugno 2025, Domanda B — 6 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Costruire l'albero di Huffman e ricavare la tabella dei codici binari per i caratteri:
    ```plaintext
    Simbolo:     A    B    C    D    E    F
    Frequenza:  45   13   12   16    9    5
    ```
    Calcolare la lunghezza media del codice in bit per carattere: `L_avg = Somma (frequenza_i * lunghezza_codice_i) / Somma frequenze`.

---

### 🔹 PATTERN B.5: Alberi Binari di Ricerca (BST) — Inserimenti e Cancellazioni

#### [x] 📝 Esercizio B.5.1 (Appello 04 Luglio 2025, Domanda B — 7 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Inserimento BST e cancellazione nodo a 2 figli con Successore.`
*   **Traccia Integrale**:
    1. Dare la definizione di albero binario di ricerca.
    2. Specificare l'albero ottenuto inserendo, con la procedura vista a lezione, a partire da un albero vuoto, i nodi aventi le seguenti chiavi: `10, 5, 3, 15, 7, 12`.
    3. Si supponga che dall'albero così ottenuto si cancelli il nodo con chiave `5` e si indichi l'albero ottenuto. Sia per gli inserimenti che per la cancellazione, motivare sinteticamente il risultato ottenuto (indicando il successore utilizzato).

---


#### [x] 📝 Esercizio B.5.2 (Appello 24 Gennaio 2022, Domanda B — 6 Punti) — `SearchUnique(T, k)`
> **Stato**: ⭐ SVOLTO OGGI (31/08) | **Valutazione Reale**: `9.0/10 — Ricerca chiave unica in BST in tempo O(h) con verifica dei sottoalberi.`
*   **Traccia Integrale**:
    Realizzare una funzione `SearchUnique(T, k)` che dato un BST `T` verifica se la chiave `k` è presente in un unico nodo (restituendo il nodo) oppure se è assente/duplicata (restituendo `nil`) in tempo `O(h)`.

---

### 🔹 PATTERN B.6: Teoria Greedy (GREEDY-SEL e Controesempi)

#### [ ] 📝 Esercizio B.6.1 (Appello 24 Gennaio 2025, Domanda B — 7 Punti)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Nel problema di selezione di attività compatibili, si descriva l'algoritmo standard `GREEDY-SEL` che seleziona le attività ordinate per tempo di fine crescente.
    Fornire un controesempio concreto (con tempi di inizio e fine specificati) per dimostrare che la strategia greedy alternativa di "selezionare sempre l'attività di durata minima `f_i - s_i`" non produce necessariamente una soluzione ottima.

---
---


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

---

# 🧩 SEZIONE 3: ESERCIZI 1 (9–10 Punti)
*Tipologia: Divide et Impera, Ricerca Binaria, Array Puntatori, BST Avanzati, Operazioni Heap.*

---

### 🔹 PATTERN C.1: Ricerca Binaria Modificata (Punti di Transizione, Picchi, Array Ruotati)
*   **Regola chiave**: Confrontare l'elemento mediano `A[q]` con i vicini per dimezzare l'intervallo in tempo `O(log n)`. Caso base rigoroso `p == r` per evitare cicli infiniti.

#### [x] 📝 Esercizio C.1.1 (Appello 24 Gennaio 2025, Esercizio 1 — 9 Punti) — `Split(V)`
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `8.5/10 — Split(V) Divide et Impera; sistemato il caso base p==r per evitare loop.`
*   **Traccia Integrale**:
    Dato un array `V[1..n]` che rappresenta l'andamento giornaliero di un titolo azionario: prima ha valori strettamente negativi, poi oscilla tra valori positivi e negativi, e infine si stabilizza su valori strettamente positivi.
    Realizzare una procedura Divide et Impera efficiente `Split(V)` che individua il primo giorno a partire dal quale il titolo azionario è sempre strettamente positivo (cioè `V[j] > 0` per ogni `j >= i`). Se il titolo non si stabilizza su valori positivi, restituire `0`.
    Fornire lo pseudocodice in tempo `O(log n)`, motivarne la correttezza e analizzare la complessità con equazione di ricorrenza.

#### [x] 📝 Esercizio C.1.2 (Appello 04 Luglio 2025, Esercizio 1 — 9 Punti) — `stab(A, p, r)`
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — stab(A,p,r) indice stabile in O(log n).`
*   **Traccia Integrale**:
    Sia `A[1..n]` un array ordinato in modo crescente di interi distinti. Un indice `i` si dice *stabile* se `A[i] = i`.
    Realizzare un algoritmo Divide et Impera `stab(A, p, r)` che restituisce un indice stabile se esiste, oppure `0` se non esiste, in tempo `O(log n)`. Fornire pseudocodice, dimostrazione di correttezza ed equazione di ricorrenza.

#### [x] 📝 Esercizio C.1.3 (Appello 09 Febbraio 2022, Esercizio 1 — 10 Punti) — Array Triangolare / Ricerca Picco
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — Logica di bisezione su picco ottima; equazione di ricorrenza e Master Theorem perfetti Theta(log n).`
*   **Traccia Integrale**:
    Un array di interi `A[1..n]` si dice *triangolare* se esiste un indice `q in [1, n]` tale che `A[1..q]` è strettamente crescente e `A[q..n]` è strettamente decrescente (l'elemento `A[q]` è il massimo assoluto, detto *picco*).
    Realizzare un algoritmo Divide et Impera che trova il valore del massimo `A[q]` in tempo `O(log n)`. Scrivere lo pseudocodice e motivare la complessità.


#### [ ] 📝 Esercizio C.1.5 (Appello 17 Giugno 2022, Esercizio 1 — 10 Punti) — Array Semi-Ordinato (Ruotato)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Diciamo che un array senza ripetizioni `A[1..n]` è *semi-ordinato* se esiste un indice `k in [1, n]` tale che `A[1..k]` è strettamente crescente, `A[k+1..n]` è strettamente crescente, e `A[1] > A[n]` (l'array è ordinato e poi ruotato circolarmente verso destra).
    Realizzare un algoritmo Divide et Impera efficiente `FindMin(A, p, r)` che trova e restituisce l'elemento minimo dell'array `A` in tempo `O(log n)`. Scrivere lo pseudocodice e motivare la complessità.

#### [x] 📝 Esercizio C.1.4 (Appello 06 Luglio 2021, Esercizio 1 — 8 Punti) — `missing(A, n)`
> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `7.0/10 — Elemento mancante in O(log n); trovata la condizione A[q] < q dopo analisi del controesempio sulla media.`
*   **Traccia Integrale**:
    Realizzare una funzione `missing(A, n)` che dato un array `A[1..n]` contenente `n` interi distinti nell'intervallo `[0, n]` ordinati in senso strettamente crescente, trova e restituisce l'unico intero mancante nell'intervallo `[0, n]` con complessità temporale `O(log n)`.

---


#### [ ] 📝 Esercizio C.1.6 (Raccolta Esercizi, Esercizio 1) — `gap(A, p, r)`
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Dato un array di interi `A[1..n]`, chiamiamo *gap* un indice `i in [1, n)` tale che `A[i + 1] - A[i] > 1`.
    1. Mostrare per induzione su `n` che un array `A[1..n]` tale che `A[n] - A[1] >= n` contiene almeno un gap.
    2. Fornire lo pseudocodice di una procedura ricorsiva Divide et Impera `gap(A, p, r)` che dato un array con `A[r] - A[p] >= r - p + 1` restituisce un gap in tempo `O(log n)`.
    3. Valutare la complessità con il Master Theorem.

---

### 🔹 PATTERN C.2: Two / Three Pointers su Array Ordinato e Partizioni sul Posto
*   **Regola chiave**: Indici agli estremi che avanzano o indietreggiano verso il centro in `O(n)` sfruttando l'ordinamento.

#### [x] 📝 Esercizio C.2.1 (Appello 31 Gennaio 2024, Esercizio 1 — 10 Punti) — `Prod(A, k)`
> **Stato**: ⭐ CONSOLIDATO IL 31/08 | **Valutazione Reale**: `9.5/10 — Prod(A, k) Two Pointers con gestione completa di positivi e negativi in tempo O(n) e spazio O(1) svolto brillantemente.`
*   **Traccia Integrale**:
    Realizzare una funzione `Prod(A, k)` che dato un array `A` di interi `>= 0` ordinato in senso crescente e un valore intero `k >= 0` verifica se esistono due indici `i` e `j` tali che `k = A[i] * A[j]`. Valutarne la complessità (tempo `O(n)` e spazio `O(1)`).
    Adattare la soluzione al caso in cui i valori nell'array possono essere anche negativi (assumendo ancora `k >= 0`).

#### [x] 📝 Esercizio C.2.2 (Appello 18 Giugno 2024, Esercizio 1 — 9 Punti) — `triplet(A)`
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — triplet(A) Three Pointers in O(n^2).`
*   **Traccia Integrale**:
    Sia `A[1..n]` un array ordinato di interi positivi distinti. Realizzare un algoritmo efficiente `triplet(A)` che verifica se esistono tre indici `i < j < k` tali che `A[i] + A[j] = A[k]`.
    Scrivere lo pseudocodice, motivare la correttezza e dimostrare che la complessità temporale è `O(n^2)` con spazio ausiliario `O(1)`.

#### [x] 📝 Esercizio C.2.3 (Appello 14 Febbraio 2024 / 30 Gennaio 2023, Esercizio 1 — 10 Punti) — `TriSort` / `3Order`
> **Stato**: ⭐ SVOLTO OGGI (31/08) | **Valutazione Reale**: `10/10 — Partizione a 3 puntatori su resti modulo 3 in tempo O(n) e spazio O(1) in-place svolta perfettamente al primo colpo.`
*   **Traccia Integrale**:
    Realizzare una procedura `TriSort(A)` che dato un array `A[1..n]` di `n` elementi con valori in `{0, 1, 2}` lo ordina in modo crescente in-place. L'unica operazione ammessa per modificare l'array è lo scambio di elementi in posizione `i` e `j`.
    Dare lo pseudocodice a 3 puntatori (`low, mid, high`), motivarne la correttezza e calcolare il numero esatto di confronti e scambi nel caso peggiore in tempo `O(n)`.

#### [x] 📝 Esercizio C.2.4 (Appello 12 Settembre 2022, Esercizio 1 — 10 Punti) — `Diff(A, k)`
> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `6.5/10 — Two Pointers su differenza; chiarita la regola dei puntatori concordi da sinistra i=1, j=2.`
*   **Traccia Integrale**:
    Realizzare una funzione `Diff(A, k)` che, dato un array `A[1..n]` ordinato in senso crescente di interi distinti e un intero `k > 0`, verifica se esistono due indici `i, j` tali che `A[j] - A[i] = k` in tempo `O(n)` e spazio ausiliario `O(1)`.

---

### 🔹 PATTERN C.3: Arricchimento di Alberi Binari di Ricerca (BST)
*   **Regola chiave**: Definire il campo extra del nodo `x` in funzione solo dei figli `x.left` e `x.right`. Aggiornare il campo durante `Insert` risalendo lungo il cammino percorso in tempo `O(h)`.

#### [x] 📝 Esercizio C.3.1 (Appello 18 Giugno 2025, Esercizio 1 — 10 Punti) — `leaves(x)`
> **Stato**: ⭐ CONSOLIDATO IL 31/08 | **Valutazione Reale**: `9.5/10 — Arricchimento leaves(x) con definizione locale corretta, CountLeaves in O(1) e manutenzione in O(h); capita al 100% anche la visita ricorsiva O(n).`
*   **Traccia Integrale**:
    Si vuole arricchire ciascun nodo `x` di un albero binario di ricerca con un campo `x.leaves` che mantiene il numero di foglie presenti nel sottoalbero radicato in `x`.
    1. Descrivere come modificare la procedura `Insert(T, z)` per mantenere aggiornato il campo `leaves` in tempo `O(h)`.
    2. Scrivere una funzione `CountLeaves(T)` che in tempo `O(1)` restituisce il numero totale di foglie dell'albero `T`.

#### [x] 📝 Esercizio C.3.2 (Appello 20 Gennaio 2026, Esercizio 1 — 10 Punti) — `diff(x)`
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Arricchimento diff(x) = max_key - min_key con Insert.`
*   **Traccia Integrale**:
    Si consideri un arricchimento di alberi binari di ricerca nei quali ogni nodo `x` mantiene:
    `x.diff = max_key(sottoalbero(x)) - min_key(sottoalbero(x))`
    (dove per una foglia `x.diff = 0`).
    Descrivere lo pseudocodice di inserimento di una nuova chiave `z` in tempo `O(h)` spiegando come aggiornare `diff` risalendo lungo il cammino dalla nuova foglia alla radice.

#### [ ] 📝 Esercizio C.3.3 (Appello 26 Giugno 2020, Esercizio 1 — 9 Punti) — `avgTree(T)`
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Realizzare una funzione `avgTree(T)` che dato un albero binario `T` con nodi aventi chiavi numeriche arricchisce ciascun nodo `x` con i campi `x.size` (numero di nodi nel sottoalbero) e `x.sum` (somma delle chiavi nel sottoalbero).
    Mostrare come utilizzare tali campi per calcolare la media delle chiavi di qualsiasi sottoalbero in tempo `O(1)`.

---


#### [x] 📝 Esercizio C.3.4 (Appello 24 Gennaio 2022, Esercizio 1 — 9 Punti) — BST con Campo `x.min`
> **Stato**: ⭐ SVOLTO OGGI (31/08) | **Valutazione Reale**: `9.5/10 — Inserimento Insert(T, z) con aggiornamento x.min in tempo O(h) svolto in autonomia.`
*   **Traccia Integrale**:
    Si consideri una variante dei BST nella quale i nodi `x` hanno un campo `x.min` (minimo delle chiavi nel sottoalbero di `x`). Realizzare la procedura `Insert(T, z)` in tempo `O(h)`.

---

### 🔹 PATTERN C.4: Visite e Proprietà Strutturali su BST
*   **Regola chiave**: Visita ricorsiva post-order per calcolare altezze o validare proprietà in tempo `O(n)`. Uso di valori sentinella (es. `-1`).

#### [x] 📝 Esercizio C.4.1 (Appello 15 Luglio 2023, Esercizio 1 — 9 Punti) — `isBalanced(T)`
> **Stato**: ⭐ CONSOLIDATO IL 30/08 | **Valutazione Reale**: `8.5/10 — isBalanced con sentinella -1 e altezza 1 + max(left, right) in tempo lineare Theta(n) completato con successo.`
*   **Traccia Integrale**:
    Dato un BST `T`, realizzare una funzione `isBalanced(T)` che verifica se l'albero è bilanciato in altezza (per ogni nodo la differenza tra l'altezza del figlio sinistro e destro è al più 1). L'algoritmo deve visitare ogni nodo una sola volta in tempo `O(n)`.

#### [ ] 📝 Esercizio C.4.2 (Appello 10 Settembre 2025, Esercizio 1 — 9 Punti) — `mdist(T, v)`
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Dato un BST `T` e un valore `v`, realizzare una funzione `mdist(T, v)` che trova il nodo nell'albero avente chiave a distanza minima da `v` (cioè minimizza `|x.key - v|`) in tempo `O(h)`.

#### [x] 📝 Esercizio C.4.3 (Appello 18 Giugno 2021, Esercizio 1 — 9 Punti) — `Anc(T, k1, k2)` (Lowest Common Ancestor - LCA)
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.0/10 — Discesa lungo un solo cammino O(h) capita; proprieta di partizione del BST corretta.`
*   **Traccia Integrale**:
    Scrivere una funzione `Anc(T, k1, k2)` che dato un albero binario di ricerca `T` nel quale sono presenti le chiavi `k1 < k2` individua il loro antenato comune più basso (LCA) in tempo `O(h)`.
    Spiegare la proprietà del BST che consente di non visitare l'intero albero ma di scendere lungo un solo cammino.

#### [x] 📝 Esercizio C.4.4 (Appello 18 Febbraio 2020, Esercizio 1 — 7 Punti) — `BST(A)` (Costruzione da Array Ordinato)
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — Costruzione BST perfettamente bilanciato in tempo lineare Theta(n) con elemento mediano e Master Theorem Caso 1.`
*   **Traccia Integrale**:
    Realizzare una procedura `BST(A)` che dato un array `A[1..n]` di interi, ordinato in modo crescente, costruisce un albero binario di ricerca bilanciato (di altezza `O(log n)`) contenente gli elementi di `A` in tempo lineare `O(n)`.

---


#### [x] 📝 Esercizio C.4.5 (Appello 04 Luglio 2022, Esercizio 1 — 9 Punti) — `strongBST(T)`
> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `7.5/10 — Verifica strongBST; intuita la propagazione intervallo (min,max), sistemata la chiusura ricorsiva.`
*   **Traccia Integrale**:
    Realizzare una funzione `strongBST(T)` che dato un albero binario `T` con nodi aventi chiavi numeriche intere verifica se `T` soddisfa la proprietà di albero binario di ricerca in tempo `O(n)`.
    L'algoritmo deve verificare che per ogni nodo `x`, la sua chiave sia strettamente maggiore del massimo del sottoalbero sinistro e strettamente minore del minimo del sottoalbero destro visitando ogni nodo una sola volta.

---

### 🔹 PATTERN C.5: Operazioni su Max-Heap & Min-Heap

#### [x] 📝 Esercizio C.5.1 (Appello 07 Febbraio 2025, Esercizio 1 — 10 Punti) — `SortJoin(A, B, n)`
> **Stato**: ⭐ CONSOLIDATO IL 30/08 | **Valutazione Reale**: `9.5/10 — SortJoin fusione in-place in tempo O(n log n) e spazio O(1); logica copiatura, BuildMaxHeap ed estrazione Heapsort capita al 100%.`
*   **Traccia Integrale**:
    Dati due max-heap `A` e `B` ciascuno memorizzato in un array di dimensione `n`, scrivere una procedura `SortJoin(A, B, n)` che fonde i due heap in un unico array ordinato di dimensione `2n` in tempo `O(n log n)` operando in-place.

#### [x] 📝 Esercizio C.5.2 (Appello 02 Luglio 2024, Esercizio 1 — 10 Punti) — `Union(A1, A2, n)`
> **Stato**: ⭐ CONSOLIDATO IL 30/08 | **Valutazione Reale**: `9.5/10 — Union di max-heap in tempo lineare O(n) con BuildMaxHeap; motivato il confronto con HeapInsert O(n log n).`
*   **Traccia Integrale**:
    Dati due max-heap `A1` e `A2` di dimensione `n`, realizzare un algoritmo efficiente per costruire un nuovo max-heap contenente l'unione insiemistica degli elementi (senza duplicati) in tempo `O(n)`.

---

### 🔹 PATTERN C.6: Ordinamento Avanzato e Inversioni

#### [x] 📝 Esercizio C.6.1 (Appello 16 Giugno 2023, Esercizio 1 — 10 Punti) — `CountInversions(A, p, r)`
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `8.5/10 — CountInversions MergeSort con conteggio inversioni cross n1 - i + 1.`
*   **Traccia Integrale**:
    Realizzare un algoritmo Divide et Impera `CountInversions(A, p, r)` che restituisce il numero totale di inversioni (`A[i] > A[j]` con `i < j`) presenti in un array `A[1..n]` di interi distinti in tempo `O(n log n)`.
    Spiegare perché durante la procedura di fusione `MergeAndCount`, quando `R[j] < L[i]`, si generano esattamente `n1 - i + 1` inversioni cross.

---
---

# 💼 SEZIONE 4: ESERCIZI 2 (8–11 Punti)
*Tipologia: Programmazione Dinamica (Bottom-Up & Top-Down) e Algoritmi Greedy con Dimostrazioni.*

---

### 🔹 PATTERN D.1: DP Bottom-Up su 2 Stringhe (Tabella 2D m x n)

#### [x] 📝 Esercizio D.1.1 (Appello 24 Gennaio 2025, Esercizio 2 — 8 Punti)
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — Pseudocodice Bottom-Up corretto al primo colpo con matrice e ricerca del max; conteggio esatto confronti m*n.`
*   **Traccia Integrale**:
    Date due stringhe `X = <x_1, ..., x_m>` e `Y = <y_1, ..., y_n>`, si consideri la quantità `l(i, j)` definita per ogni `0 <= i <= m` e `0 <= j <= n`:
    ```plaintext
    l(i, j) = 1                                         se i = 0 oppure j = 0
    l(i, j) = 3 * l(i, j - 1)                           se i > 0, j > 0 e X[i] == Y[j]
    l(i, j) = 2 * l(i - 1, j - 1) - l(i - 1, j)         se i > 0, j > 0 e X[i] != Y[j]
    ```
    Si vuole calcolare `q = max{ l(i, j) : 0 <= i <= m, 0 <= j <= n }`.
    (a) Scrivere un algoritmo iterativo Bottom-Up per il calcolo di `q`.
    (b) Determinare la complessità esatta dell'algoritmo, supponendo che le uniche operazioni di costo unitario siano i confronti tra caratteri `X[i] == Y[j]`.

#### [x] 📝 Esercizio D.1.2 (Appello 18 Giugno 2024, Esercizio 2 — 11 Punti) — Longest Common Substring
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — Longest Common Substring Bottom-Up con azzeramento a 0 su caratteri diversi.`
*   **Traccia Integrale**:
    Date due stringhe `X = <x_1, ..., x_m>` e `Y = <y_1, ..., y_n>`, scrivere un algoritmo di Programmazione Dinamica Bottom-Up in tempo `O(m * n)` per calcolare la lunghezza della più lunga sottostringa comune continua tra `X` e `Y`.
    Spiegare la ricorrenza utilizzata e perché quando `X[i] != Y[j]` la cella viene impostata a `0`.

---

### 🔹 PATTERN D.2: DP Top-Down Memoizzata su Singola Stringa Triangolare (`1 <= i <= j <= n`)

#### [x] 📝 Esercizio D.2.1 (Appello 14 Febbraio 2024 & Appello 04 Luglio 2025, Esercizio 2 — 9 Punti)
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — DP Top-Down INIT_L + REC_L memoizzata su singola stringa impeccabile; caso migliore T_best(n) = Theta(n) motivato a fondo.`
*   **Traccia Integrale**:
    Data una stringa `X = <x_1, ..., x_n>`, sia `l(i, j)` definita per `1 <= i <= j <= n`:
    ```plaintext
    l(i, j) = 1                                              se i = j
    l(i, j) = 2                                              se i = j - 1
    l(i, j) = 2 + l(i + 1, j - 1)                           se (i < j - 1) e (X[i] == X[j])
    l(i, j) = Somma da k=i a j-1 di (l(i, k) + l(k + 1, j)) se (i < j - 1) e (X[i] != X[j])
    ```
    (a) Scrivere una coppia di algoritmi `INIT_L(X)` e `REC_L(X, i, j, M)` per il calcolo memoizzato (Top-Down) di `l(1, n)`.
    (b) Determinarne la complessità al caso migliore `T_best(n)`, supponendo che le uniche operazioni di costo unitario siano i confronti tra caratteri.

---

### 🔹 PATTERN D.3: DP su Matrici Numeriche Pure con Calcolo Esatto Operazioni

#### [x] 📝 Esercizio D.3.1 (Appello 19 Settembre 2024 / Appello 02 Luglio 2024, Esercizio 2 — 9 Punti)
> **Stato**: ✅ SVOLTO NELLE SESSIONI PRECEDENTI | **Valutazione Reale**: `9.0/10 — DP matrice c(i,j) Bottom-Up con calcolo esatto prodotti n*(n-1)/2.`
*   **Traccia Integrale**:
    Per `n > 0`, siano dati due vettori a componenti intere `a, b in Z^n`. Si consideri la quantità `c(i, j)` con `0 <= i <= j <= n-1`:
    ```plaintext
    c(i, j) = a[i]                       se 0 < i <= n-1 e j = n-1
    c(i, j) = b[j]                       se i = 0 e 0 <= j <= n-1
    c(i, j) = c(i - 1, j) * c(i, j + 1)  se 0 < i <= j < n-1
    ```
    Si vuole calcolare `m = max{ c(i, j) : 0 <= i <= j <= n-1 }`.
    (a) Scrivere un algoritmo iterativo Bottom-Up per il calcolo di `m`.
    (b) Valutare la complessità esatta dell'algoritmo contando il numero esatto di prodotti tra interi eseguiti.

#### [x] 📝 Esercizio D.3.2 (Appello 10 Settembre 2025, Esercizio 2 — 9 Punti)
> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `7.5/10 — DP Top-Down INIT_M + REC_M corretta; spiegata la formula di Gauss per il conteggio esatto delle celle.`
*   **Traccia Integrale**:
    Sia `n > 0`. Ricorrenza `M(i, j)` per `1 <= i <= j <= n`:
    ```plaintext
    M(i, j) = 1                                         se i = j
    M(i, j) = 2                                         se j = i + 1
    M(i, j) = M(i + 1, j - 1) * M(i + 1, j) * M(i, j - 1) se j > i + 1
    ```
    (a) Scrivere una coppia di algoritmi `INIT_M(n)` e `REC_M(i, j, Table)` per il calcolo memoizzato di `M(1, n)`.
    (b) Calcolare il numero esatto `T(n)` di moltiplicazioni tra interi eseguite per il calcolo di `M(1, n)`.

---

### 🔹 PATTERN D.4: Algoritmi Greedy con Dimostrazione Formale

#### [x] 📝 Esercizio D.4.1 (Appello 31 Gennaio 2024 & Appello 02 Luglio 2024, Esercizio 2 — 10 Punti) — Activity Selection "Inizia per Ultima"
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — Algoritmo iterativo a ritroso O(n) ottimo; dimostrazione per sostituzione compresa a fondo con la catena f_j <= s_k <= s_n.`
*   **Traccia Integrale**:
    Si consideri il problema di selezione di attività compatibili, con `n` attività date attraverso due vettori `s` e `f` di tempi di inizio e fine, ordinate per tempo di inizio (`s_1 <= s_2 <= ... <= s_n`).
    (a) Scrivere un algoritmo greedy iterativo che implementa la scelta greedy di selezionare l'attività compatibile che **inizia per ultima**.
    (b) Determinare l'insieme di attività restituito quando eseguito sull'istanza con 6 attività:
    ```plaintext
    s = (1, 2, 3, 5, 7, 10)
    f = (3, 9, 10, 7, 11, 12)
    ```
    (c) Dimostrare formalmente la **Proprietà di Scelta Greedy**, cioè che esiste una soluzione ottima che contiene l'attività che inizia per ultima.

#### [x] 📝 Esercizio D.4.2 (Appello 18 Giugno 2025, Esercizio 2 — 9 Punti) — Scheduling Minimizzazione Tempi di Completamento (SPT)
> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — Algoritmo SPT in O(n log n); dimostrazione formale per scambio di elementi adiacenti invertiti compresa e padroneggiata.`
*   **Traccia Integrale**:
    Si hanno `n` programmi da registrare su un nastro magnetico, con lunghezze `L[1..n]`. Il tempo di completamento del programma in posizione `j` è `C_j = Somma da k=1 a j di L[k]`. Si vuole minimizzare la somma dei tempi di completamento `Somma da j=1 a n di C_j`.
    (a) Descrivere l'algoritmo greedy che ordina i programmi per lunghezza crescente `L[1] <= L[2] <= ... <= L[n]`.
    (b) Dimostrare l'ottimalità della strategia mediante la tecnica dello scambio tra elementi adiacenti invertiti (mostrando che se esiste `L[i] > L[i+1]`, scambiarli riduce strettamente il costo totale).

#### [ ] 📝 Esercizio D.4.3 (Appello 20 Gennaio 2026, Esercizio 2 — 9 Punti) — Cloud Storage File entro Capacità `c`
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Avete `n` file `f_1, ..., f_n` di dimensioni note `d_1, ..., d_n` (in MB) da caricare su un servizio di cloud storage che ha una capacità massima disponibile di `c` MB. Si vuole massimizzare il numero totale di file caricati sul cloud.
    (a) Proporre un algoritmo greedy efficiente per risolvere il problema in tempo `O(n log n)`.
    (b) Dimostrare la proprietà di scelta greedy tramite tecnica di sostituzione (mostrando che esiste una soluzione ottima che contiene il file di dimensione minima).


#### [ ] 📝 Esercizio D.4.5 (Appello 04 Luglio 2022, Esercizio 2 — 10 Punti) — Copertura Punti con Intervalli Unitari
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Dato un insieme di `n` numeri reali positivi e distinti `S = {x_1, ..., x_n}` su una retta, si vuole trovare il numero minimo di intervalli chiusi di lunghezza 1 (cioè della forma `[a, a + 1]`) che coprono tutti i punti di `S`.
    (a) Progettare un algoritmo greedy efficiente: dopo aver ordinato i punti `x_1 < x_2 < ... < x_n`, posizionare il primo intervallo su `[x_1, x_1 + 1]`, eliminare i punti coperti e ripetere sul primo punto scoperto.
    (b) Dimostrare formalmente la proprietà di scelta greedy tramite tecnica di sostituzione.

#### [ ] 📝 Esercizio D.4.4 (Appello 27 Agosto 2020, Esercizio 2 — 9 Punti) — Greedy Parcheggi e Auto
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Lungo una strada rettilinea ci sono `n` parcheggi liberi alle posizioni `p_1 < p_2 < ... < p_n` e `n` auto alle posizioni `a_1 < a_2 < ... < a_n`. Un posteggiatore vuole assegnare ciascuna auto a un parcheggio distinto minimizzando la somma totale degli spostamenti `Somma |a_i - p_{f(i)}|`.
    (a) Proporre una strategia greedy che assegna l'auto `a_i` al parcheggio `p_i` per ogni `i`.
    (b) Dimostrare la correttezza mostrando che se due assegnazioni si incrociano, scambiare i parcheggi riduce o lascia invariata la distanza totale.

---


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

---

### 🔹 PATTERN D.6: DP Coin Change (Resto Monete)

#### [ ] 📝 Esercizio D.5.1 (Appello 30 Gennaio 2023, Esercizio 2 — 9 Punti) — Coin Change (Resto Monete)
> **Stato**: ⏳ **DA SVOLGERE / IN CODA**
*   **Traccia Integrale**:
    Supponiamo di avere un numero illimitato di monete di `k` tagli distinti `d_1 < d_2 < ... < d_k` (con `d_1 = 1`). Si vuole pagare una somma intera `s > 0` utilizzando il numero minimo possibile di monete.
    (a) Scrivere l'equazione di ricorrenza DP per `C(s)` (numero minimo di monete per pagare `s`).
    (b) Scrivere un algoritmo iterativo Bottom-Up in tempo `O(s * k)` e spazio `O(s)`.
