# 📓 ESERCIZI SVOLTI — Algoritmi e Strutture Dati (Prof. Baldan)

Questo file raccoglie tutte le soluzioni degli esercizi degli appelli passati svolti e verificati durante le sessioni di studio. Ogni esercizio segue lo standard formale richiesto all'esame.

---

## 📂 Gruppo A: Domande A (Ricorrenze e Limiti Asintotici)

### 📝 Es A.1: Verifica Ordinamento Array (Divide et Impera)
* **Fonte**: Appello 31 Gennaio 2024, Domanda A
* **Problema**: Realizzare una funzione booleana di tipo divide et impera `Ord(A,p,r)` che verifica se l'array `A[p..r]` è ordinato in senso crescente. Scrivere lo pseudocodice e valutare la complessità con il Master Theorem.

#### 1. Pseudocodice
```plaintext
Ord(A, p, r):
    // Caso base: array con 0 o 1 elemento è banalmente ordinato
    if p >= r:
        return True

    // Divisione del problema in due metà
    q = floor((p + r) / 2)
    
    // Condizione di incollaggio: l'ultimo elemento a sinistra deve essere <= al primo a destra
    if A[q] > A[q+1]:
        return False

    // Risoluzione ricorsiva dei due sottoproblemi
    return Ord(A, p, q) AND Ord(A, q+1, r)
```

#### 2. Correttezza
* **Caso Base**: Se l'intervallo `A[p..r]` ha dimensione n <= 1 (ossia `p >= r`), l'array è banalmente ordinato, e ritorniamo `True`.
* **Passo Induttivo**: Ipotizziamo che l'algoritmo verifichi correttamente la proprietà per intervalli di dimensione inferiore a `n`. L'algoritmo divide l'intervallo `[p..r]` di dimensione `n` in due metà: `[p..q]` di dimensione `floor(n/2)` e `[q+1..r]` di dimensione `ceil(n/2)`. Per ipotesi induttiva, le due chiamate ricorsive determinano correttamente se ciascuna metà è ordinata. L'intero array è ordinato se e solo se la parte sinistra è ordinata, la parte destra è ordinata, e il massimo della metà sinistra è minore o uguale al minimo della metà destra. Poiché le due metà sono ordinate, il massimo a sinistra è `A[q]` e il minimo a destra è `A[q+1]`. Se `A[q] > A[q+1]`, l'array non è ordinato (ritorna `False`). Altrimenti, l'ordinamento complessivo dipende solo dal corretto ordinamento delle due metà, verificato dalle chiamate ricorsive combinate tramite `AND`.

#### 3. Complessità
* **Equazione di Ricorrenza**:
  * T(n) = 2T(n/2) + Theta(1)  per n > 1
  * T(1) = Theta(1)
* **Master Theorem**:
  * `a = 2` (numero di chiamate ricorsive)
  * `b = 2` (dimensione dei sottoproblemi)
  * `f(n) = Theta(1)` (costo per dividere e combinare, che consiste solo in calcoli di indici e un confronto)
  * Confronto: `n^(log_b(a)) = n^(log_2(2)) = n^1 = n`.
  * Poiché `f(n) = Theta(1) = O(n^(1-epsilon))` per `epsilon = 1`, ricadiamo nel **Caso 1** del Master Theorem.
  * Pertanto, `T(n) = Theta(n^(log_b(a))) = Theta(n)`.

---

## 📂 Gruppo C: Esercizi 1 (Divide et Impera e Alberi/BST)

### 📝 Es C.1: Ricerca Prodotto Target (Two Pointers)
* **Fonte**: Appello 31 Gennaio 2024, Esercizio 1
* **Problema**: Realizzare una funzione `Prod(A,k)` che dato un array `A` ordinato in senso crescente e un valore `k >= 0`, verifica se esistono due indici `i` e `j` tali che `k = A[i] * A[j]`. Valutarne la complessità. Adattare la soluzione al caso in cui l'array può contenere elementi negativi.

#### 1. Pseudocodice (Gestione Completa con Negativi)
```plaintext
Prod(A, k):
    if k > 0:
        // Troviamo il punto di separazione tra elementi negativi e non-negativi
        i = 1
        while (i <= A.length AND A[i] < 0):
            i = i + 1
        m = i  // A[m] è il primo elemento >= 0, A[1..m-1] sono negativi

        // Eseguiamo la ricerca separatamente sulla parte positiva e su quella negativa
        return Algpos(A, m, A.length, k) OR Algneg(A, 1, m-1, k)
    else:
        // Se k = 0, basta che esista uno 0 nell'array (che si trova necessariamente nella parte non-negativa)
        return Algpos(A, 1, A.length, k)

Algpos(A, p, n, k):
    left = p
    right = n
    if left > right:
        return False
        
    mol = A[left] * A[right]
    if mol == k:
        return True
    elif mol > k:
        return Algpos(A, left, right-1, k)
    else:
        return Algpos(A, left+1, right, k)

Algneg(A, p, n, k):
    left = p
    right = n
    if left > right:
        return False
        
    mol = A[left] * A[right]
    if mol == k:
        return True
    elif mol < k:
        // Essendo entrambi negativi, per aumentare il prodotto dobbiamo aumentare i valori assoluti
        return Algneg(A, left, right-1, k)
    else:
        // Per diminuire il prodotto dobbiamo diminuire i valori assoluti
        return Algneg(A, left+1, right, k)
```

#### 2. Complessità
* **Tempo**:
  * La ricerca dell'indice `m` richiede una scansione lineare che compie al massimo `n` passaggi: `O(n)`.
  * La funzione `Algpos` ad ogni ricorsione restringe l'intervallo di ricerca di uno, quindi `T(n) = T(n-1) + Theta(1)`, che risolta dà `Theta(n)`.
  * La funzione `Algneg` si comporta allo stesso modo, dando `Theta(n)`.
  * La complessità temporale complessiva è dunque **Theta(n)** (lineare).
* **Spazio**:
  * Lo spazio ausiliario è **Theta(n)** nello stack delle chiamate ricorsive (può essere ridotto a `Theta(1)` scrivendo le funzioni helper in modo iterativo con un ciclo `while`).

---

### 📝 Es C.2: Partizionamento Eredità Equa (Greedy/Sorting)
* **Fonte**: Appello 14 Febbraio 2024, Esercizio 1
* **Problema**: Sviluppare un algoritmo `Split(A,n)` che dato in input l'array `A[1..2n]` e il numero `n`, verifica se le `2n` proprietà possano essere partizionate in `n` coppie, tutte con lo stesso valore complessivo. Valutarne la complessità e dimostrarne la correttezza.

#### 1. Pseudocodice
```plaintext
Split(A, n):
    Sort(A)  // Ordina in loco A[1..2n] in ordine crescente in tempo O(n log n)
    return Check(A, 1, 2*n)

Check(A, p, n):
    sum = A[p] + A[n]
    p = p + 1
    n = n - 1
    while p < n:
        if A[p] + A[n] != sum:
            return False
        p = p + 1
        n = n - 1
    return True
```

#### 2. Correttezza
* **Tesi**: Una partizione valida di `2n` elementi ordinati in coppie di somma costante esiste se e solo se l'accoppiamento simmetrico `A[i] + A[2n - i + 1]` ha somma costante per ogni `i`.
* **Dimostrazione (per Scambio)**: Supponiamo per assurdo che esista una partizione valida di somma `S` in cui il valore minimo `A[1]` non è accoppiato con il valore massimo `A[2n]`. Avremo allora `A[1] + A[j] = S` (con `j < 2n`) e `A[k] + A[2n] = S` (con `k > 1`). Poiché l'array è ordinato, vale `A[1] <= A[k]` e `A[j] <= A[2n]`. L'unico modo per cui `A[1] + A[j] = S` e `A[k] + A[2n] = S` siano entrambe soddisfatte è che valgano le uguaglianze strette `A[1] = A[k]` e `A[j] = A[2n]`. Possiamo quindi scambiare i partner e accoppiare `A[1]` con `A[2n]` e `A[k]` con `A[j]` senza alterare la somma costante `S` di nessuna coppia. Estendendo induttivamente questo ragionamento alle restanti coppie interne, si dimostra che la configurazione simmetrica `(A[i], A[2n - i + 1])` è sempre equivalente a qualsiasi partizione equa esistente. Se tale configurazione fallisce, non esiste alcuna partizione valida.

#### 3. Complessità
* **Tempo**:
  * L'ordinamento `Sort(A)` su un array di `2n` elementi richiede tempo **Theta(n log n)** utilizzando algoritmi ottimi (come MergeSort o HeapSort).
  * La procedura `Check` effettua una singola scansione a due indici che riduce la distanza tra i puntatori di due ad ogni passo. Richiede tempo lineare **Theta(n)**.
  * La complessità temporale complessiva è dominata dal passo di ordinamento: **Theta(n log n)**.
* **Spazio**:
  * Lo spazio ausiliario è **Theta(1)** (se si usa HeapSort per ordinare) o **Theta(n)** (se si usa MergeSort).
