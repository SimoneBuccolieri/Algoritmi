# 📖 GUIDA DEFINITIVA: STRUTTURE DATI & TEMPLATE D'ESAME
> **Prof. Baldan — Algoritmi e Strutture Dati (UniPD)**
> *File di riferimento unico con ESEMPI NUMERICI CONCRETI per ogni struttura e template.*

---

## 📚 PARTE 1: LE STRUTTURE DATI DELL'ESAME (Proprietà + Esempi Concreti)

### 1. ARRAY E ARRAY ORDINATI
* **Proprietà**: Accesso diretto per indice in tempo `O(1)`.
* **Uso all'Esame**: Ricerca di coppie con la tecnica **Two Pointers (Due Indici)** in tempo **`Theta(n)`** su array ordinato.

#### 💡 ESEMPIO NUMERICO CONCRETO:
Dato l'array ordinato `A = [1, 3, 4, 7, 9, 11]` e valore target `k = 10`:
* Puntatori iniziali: `left = 1` (valore `1`), `right = 6` (valore `11`).
* **Passo 1**: `A[1] + A[6] = 1 + 11 = 12 > 10` ➔ Somma troppo grande, spostiamo `right = 5`.
* **Passo 2**: `A[1] + A[5] = 1 + 9 = 10 == 10` ➔ **Trovato!** Ritorna `True`.

---

### 2. HEAP (Max-Heap e Min-Heap su Array)
* **Proprietà Max-Heap**: Ogni padre è maggiore o uguale ai suoi figli. `A[PARENT(i)] >= A[i]`.
* **Rappresentazione in Array (Convenzione 1-indexed)**:
  * **Radice (Massimo)**: `A[1]`
  * **Figlio Sinistro**: `2 * i`
  * **Figlio Destro**: `2 * i + 1`
  * **Padre**: `floor(i / 2)`
  * **Nodi Interni (nodi con figli)**: dall'indice `1` a `floor(n / 2)`
  * **FOGLIE**: dall'indice `floor(n / 2) + 1` a `n`

#### 💡 ESEMPIO NUMERICO CONCRETO (Max-Heap di 7 elementi):
Array: `A = [100, 80, 90, 1, 50, 5, 2]`  (dimensione `n = 7`)

```text
              100  (A[1] - Radice/Massimo)
            /     \
          80       90  (A[2] e A[3] - Nodi Interni)
         /  \     /  \
        1   50   5    2  (A[4], A[5], A[6], A[7] - FOGLIE!)
```

* **Nodi Interni**: indici da `1` a `floor(7/2) = 3` (`A[1]=100`, `A[2]=80`, `A[3]=90`).
* **Foglie**: indici da `floor(7/2)+1 = 4` a `7` (`A[4]=1`, `A[5]=50`, `A[6]=5`, `A[7]=2`).
* **Navigazione per A[2] (valore 80)**:
  * Figlio Sinistro: `2 * 2 = 4` ➔ `A[4] = 1`
  * Figlio Destro: `2 * 2 + 1 = 5` ➔ `A[5] = 50`

---

### 3. ALBERI BINARI DI RICERCA (BST)

#### A. BST Puntato Standard (Puntatori `x.key`, `x.left`, `x.right`)
* **Proprietà**: Sottoalbero sinistro `< x.key <` Sottoalbero destro.

#### 💡 ESEMPIO VISIVO CONCRETO:
```text
           10  (x.key = 10)
          /  \
         5    20  (x.left.key = 5, x.right.key = 20)
        / \
       2   8  (Leaves)
```
* **Visita In-Order (ordinata)**: `2, 5, 8, 10, 20`.

#### B. BST Completo Memorizzato in Array (Convenzione Heap)
* **Mappatura indici**: Radice `T[1]`, Figlio Sinistro `2*i`, Figlio Destro `2*i + 1`.

#### 💡 ESEMPIO NUMERICO CONCRETO (`merge(T1, T2, k)`):
Dati `T1 = [5, 2, 8]`, `T2 = [20, 15, 30]` e chiave `k = 10`:
Unione in `T` di dimensione `2n + 1 = 7`:
* `T[1] = k = 10` (Radice)
* Per `j = 1`: `T[2] = T1[1] = 5`, `T[3] = T2[1] = 20`
* Per `j = 2`: `T[4] = T1[2] = 2`, `T[5] = T2[2] = 15`
* Per `j = 3`: `T[6] = T1[3] = 8`, `T[7] = T2[3] = 30`

Array finale `T = [10, 5, 20, 2, 15, 8, 30]`. 
In forma d'albero:
```text
              10  (T[1])
            /    \
           5      20  (T[2] e T[3])
          / \    /  \
         2   8  15  30 (T[4], T[5], T[6], T[7])
```

---

### 4. TABELLE HASH (Doppio Hashing)
* **Formula**: `h(k, i) = (h1(k) + i * h2(k)) mod m`
* Con `h1(k) = k mod m` e `h2(k) = 1 + (k mod (m - 2))`.

#### 💡 ESEMPIO NUMERICO CONCRETO (Dimensione `m = 7`):
Per `m = 7`: `h1(k) = k mod 7`, `h2(k) = 1 + (k mod 5)`.
* **Inserimento `k = 10`**: `h1(10) = 10 mod 7 = 3`. Slot `T[3]` è libero ➔ inserito in `T[3]`.
* **Inserimento `k = 17`**: `h1(17) = 17 mod 7 = 3` (Collisione con 10!).
  * Passo `i = 1`: `h2(17) = 1 + (17 mod 5) = 1 + 2 = 3`.
  * Nuovo Slot `(3 + 1 * 3) mod 7 = 6 mod 7 = 6`. Slot `T[6]` è libero ➔ inserito in `T[6]`.

---

### 5. CODICI DI HUFFMAN (Algoritmo Greedy)

#### 💡 ESEMPIO NUMERICO CONCRETO:
Alfabeto: `{a: 5, b: 9, c: 12, d: 13, e: 16, f: 45}`
* **Passo 1**: Estraiamo le due frequenze minime `a(5)` e `b(9)` dal Min-Heap.
* **Passo 2**: Li fondiamo in un nodo radice `(a,b)` con frequenza `5 + 9 = 14`.
* **Passo 3**: Reinseriamo `14` nel Min-Heap e ripetiamo fino ad avere un unico albero!

---

## 🛠️ PARTE 2: I TEMPLATE DI CODICE D'ESAME

### TEMPLATE 1: Two Pointers su Array Ordinato (`Theta(n)`)

```plaintext
RicercaCoppia(A, target):
    Sort(A)  // Ordina A in tempo O(n log n)
    left = 1
    right = A.length

    while left < right:
        val = A[left] + A[right]
        if val == target:
            return True
        else if val < target:
            left = left + 1    // Aumentiamo la somma spostandoci a destra
        else:
            right = right - 1  // Diminuiamo la somma spostandoci a sinistra

    return False
```

---

### TEMPLATE 2: BST Completo in Array — Ricerca del Massimo/Minimo (`O(log n)`)

```plaintext
// Massimo di un BST completo su Array: ci si sposta sempre nel figlio destro (2*i + 1)
max_bst_array(T, n):
    if n <= 0:
        return NIL

    i = 1  // Si parte dalla radice
    while (2 * i + 1) <= n:
        i = 2 * i + 1  // Ci spostiamo nel figlio destro

    return T[i]

// Minimo di un BST completo su Array: ci si sposta sempre nel figlio sinistro (2*i)
min_bst_array(T, n):
    if n <= 0:
        return NIL

    i = 1  // Si parte dalla radice
    while (2 * i) <= n:
        i = 2 * i  // Ci spostiamo nel figlio sinistro

    return T[i]
```

---

### TEMPLATE 3: BST Completo in Array — Unione `merge(T1, T2, k)` (`Theta(n)`)

```plaintext
merge_bst_array(T1, T2, k, n):
    T = nuovo Array di dimensione (2 * n + 1)
    T[1] = k  // k diventa la radice del nuovo BST
    
    for j = 1 to n:
        T[2 * j] = T1[j]      // T1 va a sinistra negli indici pari
        T[2 * j + 1] = T2[j]  // T2 va a destra negli indici dispari
        
    return T
```

---

### TEMPLATE 4: Arricchimento e Ricorsione su BST Puntato (`O(n)`)

```plaintext
AlgoritmoRicorsivoBST(x):
    if x == NIL:
        return 0

    left_val = AlgoritmoRicorsivoBST(x.left)
    right_val = AlgoritmoRicorsivoBST(x.right)

    x.prop = CalcolaProprietà(left_val, right_val, x.key)
    return x.prop
```

---

### TEMPLATE 5: Unione Insiemistica di Heap senza Duplicati (`Theta(n)`)

```plaintext
union_heap(A1, A2, n):
    A = nuovo array vuoto
    H = nuova Tabella Hash

    foreach x in A1:
        A.append(x)
        H.insert(x)

    foreach y in A2:
        if NOT H.contains(y):
            A.append(y)
            H.insert(y)

    BuildMaxHeap(A)  // Tempo O(n)
    return A
```

---

### TEMPLATE 6: Programmazione Dinamica Bottom-Up (LCS)

```plaintext
CalcoloTabellaDP(X, Y, m, n):
    Crea tabella c[0..m, 0..n]

    for i = 0 to m: c[i, 0] = 0
    for j = 0 to n: c[0, j] = 0

    for i = 1 to m:
        for j = 1 to n:
            if X[i] == Y[j]:
                c[i, j] = c[i-1, j-1] + 1
            else:
                c[i, j] = max(c[i-1, j], c[i, j-1])

    return c[m, n]
```

---

### TEMPLATE 7: Selezione Attività Greedy (Inizio per Ultimo)

```plaintext
GreedyActivitySelector(s, f, n):
    A = { a_n }  // Selezioniamo l'attività che parte per ultima
    k = n

    for i = n-1 down to 1:
        if f[i] <= s[k]:
            A = A U { a_i }
            k = i

    return A
```
