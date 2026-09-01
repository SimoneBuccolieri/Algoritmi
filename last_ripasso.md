# 🚀 LAST RIPASSO — Vademecum Definitivo d'Esame (Algoritmi e Strutture Dati)
> **Il punto di riferimento tascabile da rileggere prima di entrare in aula.**  
> *Autore: Simone Buccolieri | Data: 01 Settembre 2026*  
> *Zero LaTeX: Testo semplice, chiaro e ad altissima leggibilità.*

---

## 📐 1. SEZIONE 1: DOMANDA A (5–7 Punti)

### 🔹 Master Theorem: `T(n) = a * T(n/b) + f(n)`
1. Calcola il "fondo": **`n^(log_b a)`**.
2. Confronta con `f(n)`:
   * **Caso 1 (`f(n)` più piccolo del fondo)**: `f(n) = O(n^(log_b a - eps))` -> **`T(n) = Theta(n^(log_b a))`**.
   * **Caso 2 (Pareggio perfetto)**: `f(n) = Theta(n^(log_b a))` -> **`T(n) = Theta(n^(log_b a) * log n)`**.
   * **Caso 3 (`f(n)` più grande del fondo)**: `f(n) = Omega(n^(log_b a + eps))` -> **SCRIVI LA VERIFICA DI REGOLARITÀ**:
     * Formula: `a * f(n/b) <= c * f(n)` per qualche costante `c < 1` e `n >= n_0`.
     * Risultato: **`T(n) = Theta(f(n))`**.

### 🔹 Metodo di Sostituzione Induttivo
* **Per `O(n^2)`**: Ipotesi `T(n-1) <= c * (n-1)^2`. Sostituisci, maggiora con `c * n^2`, isola `c` (es. `c >= 9/2`) e verifica il caso base `T(1)`.
* **Per `O(2^n)`**: Ipotesi `T(n-1) <= c * 2^(n-1) - 1`. Sottrai la costante per assorbire il `+ 1` additivo.

### 🔹 Scala di Potere Asintotica Universale
`0.9^n (tende a 0) < 1 < log n < (log n)^k < sqrt(n) < n < n log n < n^k < a^n (a > 1) < n!`

---

## 🌳 2. SEZIONE 2: DOMANDA B (6–7 Punti)

### 🔹 Max-Heap & `BuildMaxHeap`
* I nodi non-foglia partono da **`i = floor(n/2)` a scendere fino a `1`**.
* Ad ogni passo si chiama `MaxHeapify(A, i, n)` per far scendere l'elemento violato.
* Proprietà Max-Heap: `A[i] >= A[2*i]` e `A[i] >= A[2*i + 1]`.

### 🔹 Tabelle Hash a Doppio Hashing
* Formula di ispezione: **`h(k, i) = (h1(k) + i * h2(k)) mod m`** (per `i = 0, 1, 2, ...`).
* **Regola del Coprimo**: `m` e `h2(k)` devono essere coprimi (**`MCD(h2(k), m) = 1`**), altrimenti l'algoritmo non visita tutte le `m` celle della tabella! Per questo `m` si sceglie quasi sempre numero primo.
* **Marcatura `DELETED`**: Indispensabile nell'indirizzamento aperto per non interrompere le catene di ricerca delle chiavi inserite successivamente.

### 🔹 Tabelle Hash con Chaining (Liste di Trabocco)
* Inserimento in testa alla lista collegata `T[h(k)]` in tempo **`O(1)`**.
* **Fattore di carico**: **`alpha = n / m`** (numero elementi / numero slot).

### 🔹 Codici di Huffman
1. Metti tutti i simboli con le loro frequenze in una coda con priorità (min-heap).
2. Estrai ripetutamente i **2 nodi con frequenza minima**, uniscili creando un nodo padre con frequenza somma.
3. Assegna ramo sinistro = `0`, ramo destro = `1`.
4. **Lunghezza media codice**: `L_avg = [ Somma (frequenza_i * lunghezza_codice_i) ] / [ Somma frequenze ]`.

### 🔹 Cancellazione su Albero BST
* Nodo con 0 figli (foglia): si elimina direttamente.
* Nodo con 1 figlio: il figlio prende il posto del nodo eliminato.
* Nodo con 2 figli: si sostituisce con il **Successore** (il nodo con chiave minima nel suo sottoalbero destro), poi si cancella il successore dalla sua posizione originale.

---

## 🧩 3. SEZIONE 3: ESERCIZI 1 (9–10 Punti)

### 🔹 Ricerca Binaria Modificata (`O(log n)`)
* **Punto medio**: `q = floor((p + r) / 2)`.
* **Array Triangolare (Picco)**: Se `A[q] < A[q+1]` -> cerca a destra `[q+1..r]`; altrimenti a sinistra `[p..q]`.
* **Array Ruotato / Semi-ordinato (`FindMin` / `centre`)**: Confronta `A[q]` con l'estremo destro `A[r]`. Se `A[q] > A[r]` -> cerca a destra `[q..r]`; altrimenti a sinistra `[p..q]`. Caso base `if r == p + 1: return p`.
* **Elemento Mancante `missing(A, p, r)`**: Se `A[q] < q` (cioè `A[q] == q-1`) -> cerca a destra `[q+1..r]`; altrimenti a sinistra `[p..q-1]`. Caso base: `if p > r: return p - 1`.

### 🔹 Two Pointers su Array (`O(n)`)
* **Per Somma / Prodotto (`A[i] + A[j] == k` o `A[i] * A[j] == k`)**:
  * Puntatori agli **estremi opposti**: `i = 1` e `j = n`.
  * Somma troppo piccola -> `i++`.
  * Somma troppo grande -> `j--`.
* **Per Differenza (`A[j] - A[i] == k`)**:
  * Puntatori che partono **insieme da sinistra**: `i = 1` e `j = 2`.
  * Differenza troppo piccola -> `j++`.
  * Differenza troppo grande -> `i++`.
* **3-Partizione in-place (`TriSort` / `3Order`)**:
  * Tre puntatori: `i = 1, mid = 1, high = n`.
  * Se valore `0`: scambia `A[mid]` con `A[i]`, `i++`, `mid++`.
  * Se valore `1`: `mid++`.
  * Se valore `2`: scambia `A[mid]` con `A[high]`, `high--` *(NON avanzare mid!)*.

### 🔹 Alberi BST & Visite
* **`strongBST(T)`**: Passa l'intervallo `(min, max)` dall'alto in basso a partire da `(-infinito, +infinito)`.
  `return check(x.left, min, x.key) and check(x.right, x.key, max)`.
* **`isBalanced(T)`**: Post-order con sentinella `-1`. Se sbilanciato restituisce `-1`, altrimenti l'altezza reale `1 + max(left, right)`.
* **`SearchUnique(T, k)`**: Trova `x = TreeSearch(T.root, k)`. Poi controlla che `TreeSearch(x.left, k) == nil` e `TreeSearch(x.right, k) == nil`.
* **`Anc(x, k1, k2)` (LCA)**: Se `x.key > k2` scendi a sinistra; se `x.key < k1` scendi a destra; altrimenti `return x`.
* **Arricchimento Campi (`leaves`, `min`, `size`)**:
  * Definizione locale in `O(1)` dai due figli.
  * In `Insert(T, z)`: risali da `y` fino alla radice aggiornando i padri con `curr.leaves = left + right` e `curr = curr.p` in tempo `O(h)`.

### 🔹 Max-Heap Avanzati
* **`SortJoin(A, B, n)` in-place**: Copia `B` in `A[n+1..2n]` in `O(n)`, chiama `BuildMaxHeap(A, 2n)` in `O(n)`, poi esegui il ciclo di estrazione Heapsort in `O(n log n)`.
* **`Union(A1, A2, n)` in `O(n)`**: Alloca nuovo array `C[1..2n]`, copia entrambi e chiama `BuildMaxHeap(C, 2n)` in `O(n)` (molto più efficiente di fare `HeapInsert` uno a uno che costerebbe `O(n log n)`).

---

## 💼 4. SEZIONE 4: ESERCIZI 2 (8–11 Punti)

### 🔹 Programmazione Dinamica (DP)
* **2 Stringhe (LCS vs Substring Continua)**:
  * Tabella `L[0..m, 0..n]` inizializzata con riga 0 e colonna 0 a `0`.
  * Se `X[i] == Y[j]`: `L[i, j] = 1 + L[i-1, j-1]`.
  * Se `X[i] != Y[j]`:
    * Per **Sottosequenza**: `L[i, j] = max(L[i-1, j], L[i, j-1])`.
    * Per **Sottostringa Continua**: `L[i, j] = 0` (e cerchi `max{ L[i, j] }` su tutta la tabella).
  * Complessità: `Tempo O(m * n)` e `Spazio O(m * n)`.
* **DP Top-Down Memoizzata su Matrici (`INIT` + `REC`)**:
  * `INIT`: alloca tabella inizializzata a `NIL`, chiama `REC(1, n)`.
  * `REC`: se cella `!= NIL` ritorna subito il valore memoizzato; altrimenti calcola casi base o formula ricorsiva, salva e ritorna.
  * Conteggio moltiplicazioni: `(moltiplicazioni per cella) * [celle ricorsive (n-1)(n-2)/2] = Theta(n^2)`.

### 🔹 Algoritmi Greedy & Le 2 Dimostrazioni Formali
1. **Famiglia "Selezione di un Sottoinsieme" (Activity Selection, Cloud Storage)**:
   * **Attività**: Se ordinate per inizio crescente -> prendi l'**ULTIMA** e vai a ritroso. Se per fine crescente -> prendi la **PRIMA** e vai in avanti.
   * **Cloud Storage**: Ordina per dimensione crescente e prendi i file più piccoli fino a capacità `c`.
   * **Dimostrazione per Sostituzione**:
     * Sia `X` una soluzione ottima.
     * Se `X` contiene già la scelta greedy `a_1`, è dimostrato.
     * Se non la contiene, prendi l'elemento estremo di `X` e sostituiscilo con `a_1`: la nuova soluzione `X'` rimane valida (è compatibile / non supera la capacità), ha la stessa cardinalità ottima di `X` e contiene la scelta greedy.
2. **Famiglia "Ordinamento Globale" (Scheduling SPT con tempi di completamento `Somma C_j`)**:
   * **Strategia**: Ordina i programmi per lunghezza crescente `L[1] <= L[2] <= ... <= L[n]`.
   * **Dimostrazione per Scambio di Adiacenti Invertiti**:
     * Supponi per assurdo che esista una soluzione ottima `S` non ordinata in modo crescente.
     * Allora esistono due elementi consecutivi invertiti con `L[i] > L[i+1]`.
     * Scambiando `i` e `i+1`, i tempi di tutti gli altri elementi prima e dopo rimangono identici, mentre il tempo tra i due diminuisce strettamente di `L[i] - L[i+1] > 0`.
     * Il costo totale `C_tot` cala strettamente: assurdo perché `S` era ottima! Quindi l'ordine ottimo è crescente.

---

## 🧠 5. STRATEGIA GARA IN AULA
1. **Primi 5 minuti**: Leggi tutto il compito con calma.
2. **Inizia dalle certezze**: Risolvi subito Domanda A, Domanda B o l'Esercizio che trovi più immediato per mettere in cassaforte 15-20 punti nei primi 45 minuti.
3. **Scrivi sempre 2 righe di spiegazione** prima dello pseudocodice ("L'idea è procedere con un algoritmo Divide et Impera che ad ogni passo dimezza l'intervallo...").
4. **Respira**: Hai visto tutti i pattern. La preparazione c'è al 100%.

**Spacca tutto, Simone!** 🎯
