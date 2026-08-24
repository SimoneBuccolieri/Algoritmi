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
  * Pertanto, T(n) = Theta(n^(log_b(a))) = Theta(n).

---

### 📝 Es A.2: Limite Asintotico Stretto per Ricorrenza a Più Termini
* **Fonte**: Appello 14 Febbraio 2024, Domanda A
* **Problema**: Determinare il limite asintotico stretto per l'equazione di ricorrenza:
  T(n) = 2 T(n/5) + T(n/2) + n
  Dimostrarne la correttezza con il metodo di sostituzione.

#### 1. Intuizione tramite Albero di Ricorrenza
* **Livello 0**: Costo = n
* **Livello 1**: 2 * (n/5) + (n/2) = (2/5 + 1/2) n = (9/10) n
* **Livello 2**: (9/10)^2 n
* **Livello k**: (9/10)^k n
* **Somma dei Livelli**: 
  La somma di tutti i livelli è una serie geometrica di ragione q = 9/10 < 1:
  Sum_{k=0}^{h} (9/10)^k n <= n * Sum_{k=0}^{\infty} (9/10)^k = n * (1 / (1 - 9/10)) = 10 n = O(n).
* Poiché già la radice al livello 0 costa n, vale anche T(n) = Omega(n). Ipotizziamo quindi T(n) = Theta(n).

#### 2. Dimostrazione Formale (Metodo di Sostituzione)

##### A. Limite Superiore: T(n) = O(n)
* **Tesi**: Esistono costanti c > 0 e n_0 >= 1 tali che T(n) <= c * n per ogni n >= n_0.
* **Ipotesi Induttiva**: Assumiamo che T(k) <= c * k valga per tutti i k < n.
* **Passo Induttivo**:
  T(n) = 2 T(n/5) + T(n/2) + n
       <= 2 (c * n / 5) + (c * n / 2) + n      [per ipotesi induttiva]
       = c n (2/5 + 1/2) + n
       = (9/10) c n + n
       = n ((9/10) c + 1)
* **Verifica Disuguaglianza**:
  Vogliamo n ((9/10) c + 1) <= c n, ossia:
  (9/10) c + 1 <= c  =>  1 <= (1/10) c  =>  c >= 10.
  La disuguaglianza è soddisfatta scegliendo c = 10 (o qualunque c >= 10).

##### B. Limite Inferiore: T(n) = Omega(n)
* **Tesi**: Esistono costanti d > 0 e n_0 >= 1 tali che T(n) >= d * n per ogni n >= n_0.
* **Dimostrazione**:
  Poiché i tempi di esecuzione delle chiamate ricorsive T(n/5) e T(n/2) sono >= 0:
  T(n) = 2 T(n/5) + T(n/2) + n >= 0 + 0 + n = 1 * n.
  Quindi il limite inferiore T(n) = Omega(n) è verificato direttamente con d = 1.

#### 3. Conclusione
Essendo T(n) = O(n) e T(n) = Omega(n), concludiamo che **T(n) = Theta(n)**.

---

### 📝 Es A.3: Risoluzione Ricorrenza Master Theorem (Caso 3 con Regolarità)
* **Fonte**: Appello 18 Giugno 2024, Domanda A
* **Problema**: Determinare il limite asintotico stretto per l'equazione di ricorrenza:
  T(n) = 4 T(n/2) + n^3 + 1

#### 1. Analisi dei Parametri del Master Theorem
* `a = 4` (numero di chiamate ricorsive, a >= 1)
* `b = 2` (fattore di riduzione, b > 1)
* `f(n) = n^3 + 1 = Theta(n^3)`
* Termine di confronto: `n^(log_b(a)) = n^(log_2(4)) = n^2`

#### 2. Confronto e Selezione Caso
* Poiché `f(n) = n^3 + 1 = Omega(n^(2 + epsilon))` per `epsilon = 1 > 0`, l'equazione ricade nel **Caso 3** del Master Theorem.

#### 3. Dimostrazione della Condizione di Regolarità
* **Condizione**: `a * f(n/b) <= k * f(n)` per qualche `k < 1` e `n >= n_0`.
* **Calcolo lato sinistro**:
  `4 * f(n/2) = 4 * ((n/2)^3 + 1) = 4 * (n^3 / 8 + 1) = (1/2) n^3 + 4`
* **Verifica disuguaglianza**:
  Vogliamo `(1/2) n^3 + 4 <= k * (n^3 + 1)`.
  Poiché il coefficiente di `n^3` a sinistra è `1/2`, scegliamo un `k` compreso tra `1/2` e `1`, ad esempio **`k = 3/4`**:
  `(1/2) n^3 + 4 <= (3/4) n^3 + 3/4`
  `4 - 3/4 <= (3/4 - 1/2) n^3`
  `13/4 <= (1/4) n^3`
  `13 <= n^3`
  La disuguaglianza `13 <= n^3` è vera per ogni **`n >= 3`**.
* La condizione di regolarità è dunque verificata con `k = 3/4 < 1` e `n_0 = 3`.

#### 4. Conclusione
Essendo verificate le condizioni del Caso 3, concludiamo che **T(n) = Theta(f(n)) = Theta(n^3)**.

---

### 📝 Es A.4: Ordinamento Asintotico di Funzioni e Definizione Omega
* **Fonte**: Appello 2 Luglio 2024, Domanda A
* **Problema**: 
  1. Dare la definizione della notazione Omega, cioè: date due funzioni f(n) e g(n), definire il significato di f(n) = Omega(g(n)).
  2. Ordinare le seguenti 8 funzioni per ordine di grandezza decrescente:
     `2^(2/3 * n)`, `10`, `(1.1)^n`, `n^2`, `sqrt(n)`, `2^n`, `2^(log n)`, `log n`

#### 1. Definizione Formale Notazione Omega
Date due funzioni `f(n)` e `g(n)`, diciamo che `f(n) = Omega(g(n))` se esistono due costanti positive `c > 0` e `n_0 >= 1` tali che:
`f(n) >= c * g(n)` per ogni `n >= n_0`.

#### 2. Ordinamento Decrescente delle Funzioni
Semplificando `2^(log n) = n^1` e confrontando le famiglie di funzioni:
1. `f1(n) = 2^n`  (Esponenziale con base 2)
2. `f2(n) = 2^(2/3 * n) = (2^(2/3))^n ≈ (1.58)^n`  (Esponenziale con base ≈ 1.58)
3. `f3(n) = (1.1)^n`  (Esponenziale con base 1.1)
4. `f4(n) = n^2`  (Polinomiale di grado 2)
5. `f5(n) = 2^(log n) = n`  (Polinomiale di grado 1)
6. `f6(n) = sqrt(n) = n^(1/2)`  (Polinomiale di grado 0.5)
7. `f7(n) = log n`  (Logaritmica)
8. `f8(n) = 10`  (Costante)

Pertanto l'ordinamento decrescente `f1 = Omega(f2), f2 = Omega(f3), ..., f7 = Omega(f8)` è:
`2^n  >  2^(2/3 * n)  >  (1.1)^n  >  n^2  >  2^(log n)  >  sqrt(n)  >  log n  >  10`.

---

### 📝 Es A.5: Definizione O-Grande e Dimostrazione per Sostituzione
* **Fonte**: Appello 19 Settembre 2024, Domanda A
* **Problema**: 
  1. Definire formalmente la classe `O(f(n))`.
  2. Dimostrare con il metodo di sostituzione che l'equazione di ricorrenza `T(n) = T(n-1) + 3n + 1` ha soluzione `T(n) = O(n^2)`.

#### 1. Definizione Formale Notazione O-Grande
Date due funzioni `f(n)` e `g(n)`, diciamo che `f(n) = O(g(n))` se esistono due costanti positive `c > 0` e `n_0 >= 1` tali che:
`f(n) <= c * g(n)` per ogni `n >= n_0`.

#### 2. Dimostrazione per Sostituzione: T(n) = O(n^2)
* **Tesi**: Esistono costanti `c > 0` e `n_0 >= 1` tali che `T(n) <= c * n^2` per ogni `n >= n_0`.
* **Ipotesi Induttiva**: Assumiamo `T(n-1) <= c * (n-1)^2` per tutti i valori minori di `n`.
* **Passo Induttivo**:
  `T(n) = T(n-1) + 3n + 1`
       `<= c * (n-1)^2 + 3n + 1`  [per ipotesi induttiva]
       `= c * (n^2 - 2n + 1) + 3n + 1`
       `= c * n^2 - 2c * n + c + 3n + 1`
       `= c * n^2 - n * (2c - 3) + (c + 1)`
* **Verifica Disuguaglianza**:
  Vogliamo `c * n^2 - n * (2c - 3) + (c + 1) <= c * n^2`, ossia:
  `-n * (2c - 3) + (c + 1) <= 0`  =>  `c + 1 <= n * (2c - 3)`.
  Scegliamo `c = 2`. La disuguaglianza diventa:
  `2 + 1 <= n * (4 - 3)`  =>  `3 <= n`.
  La disuguaglianza è soddisfatta per ogni `n >= 3`.

#### 3. Conclusione
La proprietà `T(n) = O(n^2)` è verificata per induzione con `c = 2` e `n_0 = 3`.

---

### 📝 Es A.6: Definizione Max-Heap e Ricerca Minimo
* **Fonte**: Appello 24 Gennaio 2025, Domanda A
* **Problema**: 
  1. Dare la definizione di max-heap.
  2. Dato un insieme S memorizzato in un min-heap A e in un max-heap B, scrivere un algoritmo `min(A,B)` per trovare il minimo nelle due situazioni:
     (a) ogni elemento di A è <= a ogni elemento di B;
     (b) ogni elemento di B è <= a ogni elemento di A.
  3. Valutarne la complessità nei due casi.

#### 1. Definizione Formale Max-Heap
Un **Max-Heap** è un albero binario quasi completo rappresentato tramite array `A[1..n]` che soddisfa la proprietà di max-heap:
`A[PARENT(i)] >= A[i]` per ogni `i > 1`, dove `PARENT(i) = floor(i/2)`.
Di conseguenza, l'elemento massimo risiede sempre nella radice `A[1]`.

#### 2. Risoluzione dei due casi

##### Caso (a): Ogni elemento di A è <= ad ogni elemento di B
Poiché tutti gli elementi di A sono minori o uguali a quelli di B, il minimo globale risiede in `A`. Trattandosi di un **min-heap**, il minimo risiede nella radice `A[1]`.
* **Pseudocodice**:
  ```plaintext
  min(A, B):
      return A[1]
  ```
* **Complessità**: **Theta(1)** (tempo costante).

##### Caso (b): Ogni elemento di B è <= ad ogni elemento di A
Poiché tutti gli elementi di B sono minori o uguali a quelli di A, il minimo globale risiede in `B`. In un **max-heap**, i valori minori (e quindi il minimo assoluto) risiedono necessariamente nelle foglie, ossia negli indici da `floor(n/2) + 1` a `n`. L'algoritmo deve effettuare una scansione lineare di tali foglie.
* **Pseudocodice**:
  ```plaintext
  min(A, B):
      min_val = B[floor(B.length / 2) + 1]
      for i = floor(B.length / 2) + 2 to B.length:
          if B[i] < min_val:
              min_val = B[i]
      return min_val
  ```
* **Complessità**: Essendoci circa `n/2` foglie da esaminare, la complessità temporale è **Theta(n)** (lineare, dove `n` è il numero di elementi in `B`).

---

### 📝 Es A.7: Risoluzione Ricorrenza Master Theorem (Caso 3)
* **Fonte**: Appello 7 Febbraio 2025, Domanda A
* **Problema**: Determinare la soluzione asintotica dell'equazione di ricorrenza `T(n) = 3 T(n/3) + n^2 + 1`.

#### 1. Parametri del Master Theorem
* `a = 3` (numero di chiamate ricorsive)
* `b = 3` (fattore di riduzione)
* `f(n) = n^2 + 1 = Theta(n^2)`
* Termine di confronto: `n^(log_b a) = n^(log_3 3) = n^1 = n`

#### 2. Selezione del Caso
Poiché `f(n) = n^2 + 1 = Omega(n^(1 + epsilon))` per `epsilon = 1 > 0`, l'equazione ricade nel **Caso 3** del Master Theorem.

#### 3. Dimostrazione della Condizione di Regolarità
* **Condizione**: `a * f(n/b) <= k * f(n)` per qualche `k < 1` e `n >= n_0`.
* **Lato sinistro**: `3 * f(n/3) = 3 * ((n/3)^2 + 1) = 3 * (n^2 / 9 + 1) = (1/3) n^2 + 3`.
* **Verifica disuguaglianza**: Scegliamo `k = 1/2` (compreso tra il coefficiente `1/3` e `1`):
  `(1/3) n^2 + 3 <= (1/2) n^2 + 1/2`  =>  `5/2 <= (1/6) n^2`  =>  `15 <= n^2`.
  La disuguaglianza è soddisfatta per ogni `n >= 4`.
* La condizione di regolarità è verificata con `k = 1/2 < 1` e `n_0 = 4`.

#### 4. Conclusione
Essendo verificate le condizioni del Caso 3, concludiamo che **T(n) = Theta(f(n)) = Theta(n^2)**.

---

### 📝 Es A.8: Definizioni Formali O, Omega e Dimostrazione Proprietà
* **Fonte**: Appello 18 Giugno 2025, Domanda A
* **Problema**: 
  1. Dare la definizione formale delle classi `O(f(n))` e `Omega(f(n))` per una funzione `f(n)`.
  2. Dimostrare che se `f(n) = O(n)` e `g(n) = n^2 - f(n)`, allora `g(n) = Omega(n^2)`.

#### 1. Definizioni Formali
* **Classe `O(f(n))`** (Limite superiore asintotico):
  Date due funzioni `g(n)` e `f(n)`, diciamo che `g(n) = O(f(n))` se esistono due costanti positive `c > 0` e `n_0 >= 1` tali che:
  `g(n) <= c * f(n)` per ogni `n >= n_0`.

* **Classe `Omega(f(n))`** (Limite inferiore asintotico):
  Date due funzioni `g(n)` e `f(n)`, diciamo che `g(n) = Omega(f(n))` se esistono due costanti positive `c > 0` e `n_0 >= 1` tali che:
  `g(n) >= c * f(n)` per ogni `n >= n_0`.

#### 2. Dimostrazione Formale: g(n) = Omega(n^2)
* **Ipotesi**: Poiché `f(n) = O(n)`, per definizione esiste una costante `c_1 > 0` e una soglia `n_1 >= 1` tali che `f(n) <= c_1 * n` per ogni `n >= n_1`.
* **Sostituzione in g(n)**:
  `g(n) = n^2 - f(n) >= n^2 - c_1 * n`
* **Verifica della Condizione di Omega**:
  Vogliamo dimostrare che esiste una costante `c > 0` tale che `g(n) >= c * n^2`.
  Scegliamo `c = 1/2`:
  `n^2 - c_1 * n >= (1/2) * n^2`
  `(1/2) * n^2 >= c_1 * n`
  `(1/2) * n >= c_1`  =>  `n >= 2 * c_1`.
* **Esibizione delle Costanti**:
  Scegliendo `c = 1/2` e `n_0 = max(n_1, 2 * c_1)`, la disuguaglianza `g(n) >= (1/2) * n^2` è soddisfatta per ogni `n >= n_0`.

#### 3. Conclusione
Pertanto, per definizione, la proprietà `g(n) = Omega(n^2)` è formalmente dimostrata.

---

### 📝 Es A.9: Proprietà della Notazione Omega per Somma e Differenza
* **Fonte**: Appello 10 Settembre 2025, Domanda A
* **Problema**: 
  1. Dare la definizione formale della classe `Omega(f(n))`.
  2. Mostrare che se `f(n) = Omega(n^2)` allora `f(n) + g(n) = Omega(n^2 + g(n))` per qualsiasi `g(n) > 0`.
  3. Determinare se vale `f(n) - g(n) = Omega(n^2 - g(n))` oppure fornire un controesempio.

#### 1. Definizione Formale Notazione Omega
Date due funzioni `g(n)` e `f(n)`, diciamo che `g(n) = Omega(f(n))` se esistono due costanti positive `c > 0` e `n_0 >= 1` tali che:
`g(n) >= c * f(n)` per ogni `n >= n_0`.

#### 2. Dimostrazione della Somma: f(n) + g(n) = Omega(n^2 + g(n))
Poiché `f(n) = Omega(n^2)`, esiste una costante `c_1 > 0` tale che `f(n) >= c_1 * n^2` per `n` sufficientemente grande.
Sommando `g(n) > 0` ad entrambi i lati:
`f(n) + g(n) >= c_1 * n^2 + g(n) >= min(c_1, 1) * (n^2 + g(n))`.
Scegliendo la costante `c = min(c_1, 1) > 0`, la proprietà `f(n) + g(n) = Omega(n^2 + g(n))` è formalmente dimostrata.

#### 3. Falsità della Differenza e Controesempio
La proprietà per la differenza è **FALSA**.
* **Controesempio**: 
  Scegliamo `f(n) = (1/2) * n^2` (che è `Omega(n^2)`) e `g(n) = (1/2) * n^2 - 1` (positiva per `n >= 2`).
  - Il termine a sinistra è: `f(n) - g(n) = (1/2) * n^2 - ((1/2) * n^2 - 1) = 1` (costante).
  - Il termine a destra è: `n^2 - g(n) = n^2 - ((1/2) * n^2 - 1) = (1/2) * n^2 + 1` (quadratica).
  Siccome una costante `1` non può essere `Omega((1/2) * n^2 + 1)`, la disuguaglianza non è soddisfatta.

---

### 📝 Es A.10: Ordinamento Asintotico Crescente di Funzioni
* **Fonte**: Appello 20 Gennaio 2026, Domanda A
* **Problema**: 
  1. Dare la definizione formale della notazione `O(f(n))`.
  2. Ordinare le seguenti 8 funzioni per ordine di grandezza crescente:
     `n^(3/2)`, `2^n`, `n * (log n)^2`, `log n`, `0.9^n`, `(log n)^3`, `(1.05)^n`, `n^2 / log n`

#### 1. Definizione Formale Notazione O-Grande
Date due funzioni `g(n)` e `f(n)`, diciamo che `g(n) = O(f(n))` se esistono due costanti positive `c > 0` e `n_0 >= 1` tali che:
`g(n) <= c * f(n)` per ogni `n >= n_0`.

#### 2. Ordinamento Crescente delle Funzioni
Raggruppando le funzioni secondo la gerarchia di crescita asintotica:
1. `f1(n) = 0.9^n`  (Esponenziale con base < 1, tende a 0 per n -> infty)
2. `f2(n) = log n`  (Logaritmica di grado 1)
3. `f3(n) = (log n)^3`  (Logaritmica di grado 3)
4. `f4(n) = n * (log n)^2`  (Polilogaritmica di grado 1)
5. `f5(n) = n^(3/2)`  (Polinomiale di grado 1.5)
6. `f6(n) = n^2 / log n`  (Polinomiale di grado quasi 2)
7. `f7(n) = (1.05)^n`  (Esponenziale con base 1.05)
8. `f8(n) = 2^n`  (Esponenziale con base 2)

Pertanto l'ordinamento crescente `f1 = O(f2), f2 = O(f3), ..., f7 = O(f8)` è:
`0.9^n  <  log n  <  (log n)^3  <  n * (log n)^2  <  n^(3/2)  <  n^2 / log n  <  (1.05)^n  <  2^n`.

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

---

### 📝 Es C.3: Ricerca Tripletta Target A[i] + A[j] = A[k] (Two Pointers)
* **Fonte**: Appello 18 Giugno 2024, Esercizio 1
* **Problema**: Realizzare una procedura `triplet(A)` che dato un array `A[1..n]` di interi verifica se esistono tre indici `i, j, k` tali che `A[i] + A[j] = A[k]`. Fornire lo pseudocodice, motivare la correttezza della soluzione e valutarne la complessità.

#### 1. Pseudocodice
```plaintext
triplet(A):
    n = A.length
    Sort(A)  // Ordina A[1..n] in ordine crescente in tempo O(n log n)

    foreach a in A:
        if check(A, a, 1, n) == True:
            return True
    return False

check(A, target, left, right):
    if left > right:
        return False

    sum = A[left] + A[right]
    if sum == target:
        return True
    else if sum < target:
        return check(A, target, left + 1, right)
    else:
        return check(A, target, left, right - 1)
```

#### 2. Correttezza
* **Tesi**: Se una tripletta `A[i] + A[j] = target` esiste, la procedura `check` a due puntatori su array ordinato la individua senza scartare erroneamente alcuna coppia valida.
* **Mantenimento dell'Invariante**: Poiché l'array `A` è ordinato in senso crescente:
  - Se `A[left] + A[right] < target`, qualsiasi somma con `A[left]` ed elementi a sinistra di `right` sarà strettamente minore di `target`. Di conseguenza l'elemento `A[left]` non può formare alcuna coppia valida con somma `target` nel sottoarray corrente `A[left..right]`, ed è corretto scartarlo incrementando `left`.
  - Analogamente, se `A[left] + A[right] > target`, l'elemento `A[right]` non può formare alcuna coppia valida ed è corretto scartarlo decrementando `right`.
* **Completezza**: Il ciclo `foreach` esamina tutti i possibili elementi `target` di `A`. Per ogni target, la procedura `check` restringe lo spazio di ricerca di uno ad ogni passo senza scartare soluzioni valide. Se `left > right`, la coppia non esiste per quel target. Se la funzione ritorna `False`, non esiste alcuna tripletta nell'array.

#### 3. Complessità
* **Tempo**:
  * L'ordinamento `Sort(A)` richiede tempo **Theta(n log n)**.
  * La funzione `check` esegue al massimo `n` chiamate ricorsive per ciascun valore di `target` (tempo `O(n)`).
  * Il ciclo `foreach` esegue `check` per ciascuno dei `n` elementi dell'array: `n * O(n) = Theta(n^2)`.
  * La complessità temporale complessiva è **Theta(n^2)**.
* **Spazio**:
  * Lo spazio ausiliario è **Theta(n)** per la ricorsione di `check` (o **Theta(1)** se `check` viene scritta in formato iterativo con un ciclo `while`).

---

### 📝 Es C.4: Unione Insiemistica di due Max-Heap senza Duplicati
* **Fonte**: Appello 2 Luglio 2024, Esercizio 1
* **Problema**: 
  1. Realizzare una funzione `union(A1, A2, n)` che dati due max-heap `A1` e `A2` di dimensione `n` senza duplicati interni, restituisce un nuovo max-heap `A` contenente l'unione insiemistica senza duplicati. Valutarne la complessità.
  2. Domanda extra: Qualora il risultato potesse contenere duplicati, ci sarebbero soluzioni più efficienti?

#### 1. Pseudocodice (Soluzione Ottima con Tabella Hash)
```plaintext
union(A1, A2, n):
    A = nuovo array vuoto
    H = nuova Tabella Hash

    // Inserimento degli elementi di A1 (tempo O(n))
    foreach x in A1:
        A.append(x)
        H.insert(x)

    // Inserimento degli elementi di A2 non ancora presenti (tempo O(n))
    foreach y in A2:
        if NOT H.contains(y):
            A.append(y)
            H.insert(y)

    // Riorganizzazione in Max-Heap (tempo O(n))
    BuildMaxHeap(A)

    return A
```

#### 2. Correttezza
* **Unicità**: Poiché `A1` non contiene duplicati per ipotesi, tutti i suoi elementi vengono inseriti nel nuovo array `A`. L'uso della tabella Hash `H` garantisce che un elemento di `A2` venga aggiunto ad `A` se e solo se non è già presente in `A1`. Pertanto `A` conterrà unicamente elementi distinti dell'unione `A1 U A2`.
* **Completezza**: Tutti gli elementi di `A1` sono copiati nel primo ciclo, e tutti gli elementi distinti di `A2` nel secondo. Nessun elemento dell'unione insiemistica viene omesso.
* **Proprietà di Heap**: La chiamata finale `BuildMaxHeap(A)` riorganizza l'array `A` in modo che soddisfi la proprietà di max-heap (`A[PARENT(i)] >= A[i]` per ogni `i > 1`).

#### 3. Complessità
* **Tempo**:
  * Inserimento di `n` elementi di `A1`: `n * O(1) = Theta(n)`.
  * Controllo e inserimento di `n` elementi di `A2`: `n * O(1) = Theta(n)`.
  * Chiamata a `BuildMaxHeap(A)` su al massimo `2n` elementi: **Theta(n)**.
  * La complessità temporale complessiva è **Theta(n)** (lineare).
* **Spazio**:
  * Lo spazio ausiliario è **Theta(n)** per memorizzare la tabella Hash `H` e il nuovo array `A`.

#### 4. Risposta alla Domanda Extra (Con Duplicati)
Se il risultato `A` potesse contenere duplicati, l'algoritmo sarebbe ancora più semplice ed efficiente:
Basterebbe concatenare direttamente `A1` e `A2` in un unico array di dimensione `2n` in tempo `Theta(n)` e applicare `BuildMaxHeap(A)` in tempo `Theta(n)`. La complessità rimarrebbe **Theta(n)** con costante nascosta inferiore e senza bisogno dello spazio ausiliario della tabella Hash!

---

### 📝 Es C.5: Massimo e Merge di BST Completi Memorizzati su Array
* **Fonte**: Appello 19 Settembre 2024, Esercizio 1
* **Problema**: 
  1. Realizzare una funzione `max(T, n)` che determina il massimo di un array `T` di dimensione `n` che memorizza un BST completo.
  2. Realizzare una funzione `merge(T1, T2, k)` che dati due array `T1` e `T2` di dimensione `n` che memorizzano BST completi e una chiave `k` (`T1 < k < T2`), restituisce un array di dimensione `2n + 1` che memorizza il BST completo unito.
  3. Motivare la correttezza delle funzioni e valutarne la complessità.

#### 1. Pseudocodice per `max(T, n)`
```plaintext
max(T, n):
    if n <= 0:
        return NIL

    i = 1  // Si parte dalla radice T[1]
    while (2 * i + 1) <= n:
        i = 2 * i + 1  // Navigazione verso il figlio destro

    return T[i]
```

#### 2. Pseudocodice per `merge(T1, T2, k)`
```plaintext
merge(T1, T2, k):
    n = T1.length
    T = nuovo Array di dimensione (2 * n + 1)
    
    T[1] = k  // k diventa la radice del nuovo BST completo
    
    for i = 1 to n:
        T[2 * i] = T1[i]      // T1 forma il sottoalbero sinistro negli indici pari
        T[2 * i + 1] = T2[i]  // T2 forma il sottoalbero destro negli indici dispari
        
    return T
```

#### 3. Correttezza
* **Correttezza di `max(T, n)`**: Per la proprietà d'ordine dei BST, ogni nodo è strettamente minore di tutti gli elementi del suo sottoalbero destro. Partendo dalla radice `i = 1` e spostando l'indice nel figlio destro `2*i + 1`, la procedura raggiunge la foglia più a destra dell'albero quando `(2*i + 1) > n`. Poiché non esistono ulteriori figli destri, la chiave `T[i]` è il massimo valore contenuto nel BST.
* **Correttezza di `merge(T1, T2, k)`**: Per ipotesi `T1 < k < T2`. Posizionando `T[1] = k`, tutti gli elementi del sottoalbero sinistro `T1` sono minori di `k` e tutti quelli del sottoalbero destro `T2` sono maggiori di `k`. Assegnando `T1[i]` a `T[2*i]` e `T2[i]` a `T[2*i + 1]`, le posizioni relative dei nodi nei rispettivi sottoalberi vengono preservate, producendo un BST completo valido di dimensione `2n + 1`.

#### 4. Complessità
* **Complessità di `max(T, n)`**:
  * **Tempo**: Ad ogni passo la ricerca scende di un livello nell'albero. Poiché un BST completo di `n` elementi ha altezza `floor(log n)`, il ciclo esegue al più `log n` iterazioni. Tempo **Theta(log n)**.
  * **Spazio**: Spazio ausiliario **Theta(1)**.
* **Complessità di `merge(T1, T2, k)`**:
  * **Tempo**: I cicli `for` eseguono una singola scansione di copia degli array `T1` e `T2`, effettuando `2n` operazioni trascurabili in tempo **Theta(n)** (lineare).
  * **Spazio**: Spazio per il nuovo array restituito **Theta(n)**.

---

### 📝 Es C.6: Ricerca Binaria Stabilizzazione Titolo Azionario Split(V)
* **Fonte**: Appello 24 Gennaio 2025, Esercizio 1
* **Problema**: Realizzare un algoritmo Divide et Impera `Split(V)` che dato un array `V[1..n]` trova il minimo indice `i` a partire dal quale il titolo azionario è sempre positivo (`V[j] > 0` per ogni `j >= i`). Se non si stabilizza su valori positivi, restituire `0`. Fornire pseudocodice, correttezza e complessità.

#### 1. Pseudocodice (Soluzione dello Studente)
```plaintext
split(V):
    n = V.length
    if V[n] <= 0:
        return 0  // Impossibile stabilizzarsi se l'ultimo giorno è <= 0
    return fun(V, 1, n)

fun(A, p, r):
    if p > r:
        return 0

    q = floor((p + r) / 2)

    if A[q-1] <= 0 and A[q] > 0 and A[q+1] > 0:
        return q
    if A[q] > 0 and A[q+1] == nil:
        return q
    if A[q] > 0:
        return fun(A, p, q)

    return fun(A, q + 1, r)
```

#### 2. Correttezza
* **Unicità dell'Indice**: Per la proprietà d'andamento del titolo, i valori negativi/oscillanti precedono l'unica sequenza finale di valori strettamente positivi. Se `A[q] > 0` e `A[q-1] <= 0`, l'indice `q` rappresenta esattamente la prima giornata della stabilizzazione positiva.
* **Correttezza della Ricerca Binaria**: 
  - Se `A[q] > 0`, l'eventuale primo giorno di stabilizzazione si trova a sinistra di `q` o coincide con `q`, dunque la chiamata su `[p, q]` mantiene la correttezza.
  - Se `A[q] <= 0`, il titolo non è ancora stabilizzato a `q`, dunque la stabilizzazione può iniziare solo a destra (`[q+1, r]`).
* **Completezza**: Se `V[n] <= 0`, l'algoritmo termina immediatamente restituendo `0`, poiché una sequenza che termina in negativo non soddisfa la condizione di stabilizzazione.

#### 3. Complessità
* **Tempo**: Ad ogni chiamata ricorsiva l'intervallo di ricerca si dimezza (`n/2`). L'equazione di ricorrenza è `T(n) = T(n/2) + Theta(1)`, che per il Master Theorem fornisce tempo **Theta(log n)**.
* **Spazio**: Spazio ausiliario **Theta(log n)** nello stack delle chiamate ricorsive (riducibile a `Theta(1)` mediante versione iterativa).

---

### 📝 Es C.7: Fusione e Ordinamento in In-Place di due Max-Heap SortJoin(A, B, n)
* **Fonte**: Appello 7 Febbraio 2025, Esercizio 1
* **Problema**: Realizzare una procedura `SortJoin(A, B, n)` che dati due array `A[1..2n]` e `B[1..n]` organizzati a max-heap (ciascuno contenente `n` elementi), restituisce in `A` un array completamente ordinato in senso crescente contenente tutti i `2n` elementi in spazio costante `Theta(1)`.

#### 1. Pseudocodice (Soluzione dello Studente)
```plaintext
SortJoin(A, B, n):
    // 1. Copia degli n elementi di B nella seconda metà di A (da n+1 a 2n)
    for i = 1 to n:
        A[n + i] = B[i]

    // 2. Costruzione di un unico Max-Heap di 2n elementi in tempo O(n)
    BuildMaxHeap(A, 2 * n)

    // 3. Ordinamento in loco dell'array A in tempo O(n log n) e spazio O(1)
    HeapSort(A, 2 * n)

    return A
```

#### 2. Correttezza
* **Unione e Compattezza dell'Array**: Il ciclo `for` copia gli `n` elementi di `B` nei restanti `n` slot liberi di `A` (da `n+1` a `2n`). Al termine della copia, `A` contiene tutti ed unicamente i `2n` elementi originari di `A` e `B`.
* **Riorganizzazione in Heap**: La chiamata a `BuildMaxHeap(A, 2n)` ripristina la proprietà di max-heap sull'intero vettore `A`, garantendo che l'elemento massimo risieda in cima alla radice `A[1]`.
* **Ordinamento in Loco**: La procedura `HeapSort(A, 2n)` estrae ciclicamente il massimo in `A[1]`, lo scambia con l'ultima foglia corrente in posizione `i` (con `i` da `2n` a 2) e ripristina il max-heap con `MaxHeapify`. Al termine del ciclo, l'array `A` risulta ordinato in senso crescente.

#### 3. Complessità
* **Tempo**:
  * La copia degli elementi del vettore `B` richiede tempo **Theta(n)**.
  * La chiamata `BuildMaxHeap(A, 2n)` richiede tempo **Theta(n)**.
  * La procedura `HeapSort(A, 2n)` richiede tempo **Theta(n log n)**.
  * La complessità temporale complessiva è dominata dal termine dell'ordinamento: **Theta(n log n)**.
* **Spazio**:
  * L'algoritmo opera esclusivamente sul vettore `A` preallocato senza istanziare alcuna struttura ausiliaria. Lo spazio ausiliario è **Theta(1)** (spazio costante).

---

### 📝 Es C.8: Arricchimento BST per Conteggio Foglie leaves(x) e Inserimento
* **Fonte**: Appello 18 Giugno 2025, Esercizio 1
* **Problema**: Realizzare un arricchimento degli alberi binari di ricerca che permetta di ottenere per ogni nodo `x`, in tempo costante `O(1)`, il numero delle foglie nel sottoalbero radicato in `x`. Indicare i campi aggiuntivi, fornire `leaves(x)` e `insert(T, z)` e valutarne la complessità.

#### 1. Pseudocodice (Soluzione dello Studente)
```plaintext
// 1. Campo aggiuntivo: x.leaves (memorizza il numero di foglie del sottoalbero radicato in x)

// 2. Funzione leaves(x) in O(1)
leaves(x):
    if x == NIL:
        return 0
    return x.leaves

// 3. Procedura insert(T, z)
insert(T, z):
    z.leaves = 1  // Ogni nuova foglia inserita contiene esattamente 1 foglia (se stessa)
    z.left = NIL
    z.right = NIL

    y = NIL
    x = T.root

    // Scendiamo nell'albero incrementando x.leaves++ su tutti gli antenati
    while x != NIL:
        y = x
        x.leaves = x.leaves + 1  // Incremento per l'aggiunta della nuova foglia z

        if z.key < x.key:
            x = x.left
        else:
            x = x.right

    z.p = y
    if y == NIL:
        T.root = z  // Se l'albero era vuoto, z diventa la radice
    else if z.key < y.key:
        y.left = z
    else:
        y.right = z
```

#### 2. Correttezza
* **Inizializzazione del Nuovo Nodo**: Il nodo `z` viene inserito come nuova foglia dell'albero. Poiché un sottoalbero formato da un singolo nodo foglia contiene esattamente 1 foglia (se stesso), l'assegnazione `z.leaves = 1` è corretta.
* **Aggiornamento degli Antenati**: L'inserimento della foglia `z` modifica la conteggio delle foglie di tutti e soli gli antenati giacenti sul cammino dalla radice `T.root` al nodo `z`. Incrementando `x.leaves = x.leaves + 1` durante la discesa del ciclo `while`, l'invariante del numero di foglie risulta preservato per tutti i nodi dell'albero.
* **Correttezza di `leaves(x)`**: L'accesso diretto al campo `x.leaves` restituisce istantaneamente il valore precalcolato.

#### 3. Complessità
* **Tempo**:
  * `leaves(x)`: Tempo **Theta(1)** (accesso in tempo costante).
  * `insert(T, z)`: Il ciclo `while` esegue una discesa lungo l'altezza dell'albero. Tempo **O(h)** dove `h` è l'altezza del BST (`O(log n)` se bilanciato).
* **Spazio**:
  * Spazio ausiliario **Theta(1)** per l'aggiunta del singolo campo `x.leaves`.

---

### 📝 Es C.9: Ricerca del Nodo a Distanza Minima mdist(T, v) in BST
* **Fonte**: Appello 10 Settembre 2025, Esercizio 1
* **Problema**: Realizzare una funzione `mdist(T, v)` che dato un albero binario di ricerca `T` ed una chiave `v`, restituisce il nodo `x` di `T` la cui chiave ha distanza minima da `v` (`|x.key - v|` minimo). Fornire pseudocodice, correttezza e complessità.

#### 1. Pseudocodice (Soluzione dello Studente)
```plaintext
mdist(T, v):
    x = T.root
    if x == NIL:
        return NIL

    best_node = x
    min_dist = abs(x.key - v)

    // Navigazione lungo il cammino di ricerca di v
    while x != NIL:
        // Se troviamo una distanza inferiore, aggiorniamo il miglior candidato
        if abs(x.key - v) < min_dist:
            min_dist = abs(x.key - v)
            best_node = x

        // Se la distanza è 0, il nodo coincide esattamente con v
        if x.key == v:
            return x

        // Navigazione BST
        if v < x.key:
            x = x.left
        else:
            x = x.right

    return best_node
```

#### 2. Correttezza
* **Localizzazione del Nodo più Vicino**: Per le proprietà d'ordine del BST, qualsiasi valore `x.key` a distanza minima da `v` deve necessariamente trovarsi sul cammino di ricerca dalla radice `T.root` al punto in cui verrebbe inserita la chiave `v`. Nessun nodo al di fuori di questo cammino può possedere una chiave più vicina a `v`.
* **Invariante della Ricerca**: Ad ogni iterazione del ciclo `while`, la variabile `best_node` memorizza il nodo con minima distanza `abs(x.key - v)` tra tutti i nodi esaminati dalla radice fino al livello corrente. Al termine del ciclo (quando `x == NIL`), `best_node` è il nodo a distanza minima assoluta nell'intero albero.

#### 3. Complessità
* **Tempo**: Ad ogni passo la ricerca scende di un livello nell'albero. Il ciclo `while` viene eseguito al più `h` volte, dove `h` è l'altezza del BST. Tempo **O(h)** (ovvero **Theta(log n)** se il BST è bilanciato).
* **Spazio**: L'algoritmo è iterativo e utilizza due variabili locali. Spazio ausiliario **Theta(1)** (spazio costante).

---

### 📝 Es C.10: Arricchimento BST Massima Differenza diff(x) e Inserimento
* **Fonte**: Appello 20 Gennaio 2026, Esercizio 1
* **Problema**: Realizzare un arricchimento degli alberi binari di ricerca che consenta di ottenere per ogni nodo `x` dell'albero, in tempo costante `O(1)`, la massima differenza tra chiavi presenti nel sottoalbero radicato in `x`. Indicare i campi aggiuntivi, fornire `diff(x)` e `insert(T, z)` e valutarne la complessità.

#### 1. Pseudocodice (Soluzione dello Studente)
```plaintext
// 1. Campi aggiuntivi: x.min, x.max, x.diff

// 2. Funzione diff(x) in O(1)
diff(x):
    if x == NIL:
        return 0
    return x.diff

// 3. Procedura insert(T, z)
insert(T, z):
    z.min = z.key
    z.max = z.key
    z.diff = 0
    z.left = NIL
    z.right = NIL

    y = NIL
    x = T.root

    // Passo 1: Discesa per posizionare z
    while x != NIL:
        y = x
        if z.key < x.key:
            x = x.left
        else:
            x = x.right

    z.p = y
    if y == NIL:
        T.root = z
    else if z.key < y.key:
        y.left = z
    else:
        y.right = z

    // Passo 2: Risalita a ritroso su tutti gli antenati per aggiornare min, max e diff
    curr = z.p
    while curr != NIL:
        if curr.left != NIL:
            curr.min = curr.left.min
        else:
            curr.min = curr.key

        if curr.right != NIL:
            curr.max = curr.right.max
        else:
            curr.max = curr.key

        curr.diff = curr.max - curr.min
        curr = curr.p  // Risale al padre
```

#### 2. Correttezza
* **Insieme delle Differenze**: In un sottoalbero, la differenza massima tra una coppia di chiavi è data unicamente dalla differenza tra il valore massimo assoluto ed il valore minimo assoluto presenti nel sottoalbero `(Max - Min)`.
* **Mantenimento degli Estremi e Risalita**: Memorizzando `x.min` e `x.max` per ciascun nodo `x`, la procedura `insert` aggiorna `min`, `max` e `diff` su tutti e soli gli antenati dal nodo appena inserito `z` alla radice `T.root`. Poiché il nodo inserito `z` modifica unicamente gli estremi degli antenati giacenti sul suo cammino di discesa, la risalita garantisce la correttezza globale dell'invariante in tutto l'albero.
* **Correttezza di `diff(x)`**: L'accesso diretto al campo `x.diff` restituisce in tempo costante il valore precalcolato.

#### 3. Complessità
* **Tempo**:
  * `diff(x)`: Tempo **Theta(1)**.
  * `insert(T, z)`: Discesa di altezza `h` + Risalita di altezza `h` (`2*h` passi). Tempo **O(h)** (ovvero **Theta(log n)** se il BST è bilanciato).
* **Spazio**:
  * Spazio ausiliario **Theta(1)** per memorizzare i 3 campi ausiliari `x.min`, `x.max`, `x.diff`.

---

## 📂 Gruppo D: Esercizi 2 (Programmazione Dinamica e Algoritmi Greedy)

### 📝 Es D.1: Selezione Attività Greedy con Inizio per Ultimo
* **Fonte**: Appello 31 Gennaio 2024, Esercizio 2
* **Problema**: 
  1. Scrivere un algoritmo greedy iterativo che implementa la scelta greedy di selezionare l'attività che INIZIA PER ULTIMA.
  2. Eseguire l'algoritmo sulle 6 attività con tempi `s = (1,2,3,5,7,10)` e `f = (3,9,10,7,11,12)`.
  3. Dimostrare la proprietà di scelta greedy (dimostrazione per scambio).

#### 1. Pseudocodice (Soluzione dello Studente)
```plaintext
GreedyActivitySelectorInizio(s, f, n):
    A = { a_n }  // Selezioniamo l'attività che inizia per ultima
    lastact = s[n]

    for i = n - 1 down to 1:
        // Se l'attività a_i finisce prima o quando inizia l'ultima attività scelta
        if f[i] <= lastact:
            A = A U { a_i }
            lastact = s[i]

    return A
```

#### 2. Risultato Esecuzione a Mano
Sulle 6 attività date:
- `a_6: [10, 12]` ➔ Selezionata! Insieme `{ a_6 }`, `lastact = 10`.
- `a_5: [7, 11]` ➔ `f_5 = 11 > 10` (Sovrapposta) ➔ Scartata.
- `a_4: [5, 7]` ➔ `f_4 = 7 <= 10` (Compatibile) ➔ Selezionata! Insieme `{ a_6, a_4 }`, `lastact = 5`.
- `a_3: [3, 10]` ➔ `f_3 = 10 > 5` (Sovrapposta) ➔ Scartata.
- `a_2: [2, 9]` ➔ `f_2 = 9 > 5` (Sovrapposta) ➔ Scartata.
- `a_1: [1, 3]` ➔ `f_1 = 3 <= 5` (Compatibile) ➔ Selezionata! Insieme `{ a_6, a_4, a_1 }`.

L'insieme di attività restituito è **`{ a_1, a_4, a_6 }`** (attività con inizi `1, 5, 10`).

#### 3. Dimostrazione della Scelta Greedy (Per Scambio)
* **Tesi**: Esiste una soluzione ottima per il problema di selezione attività che contiene l’attività `a_n` (quella con tempo di inizio massimo).
* **Dimostrazione**:
  - Sia `X` una soluzione ottima qualsiasi per il problema.
  - Se `a_n` appartiene a `X`, la tesi è banalmente verificata.
  - Se `a_n` non appartiene a `X`, sia `a_k` l'attività in `X` che ha il tempo di inizio massimo tra quelle selezionate in `X`.
  - Poiché `a_n` è l'attività con il tempo di inizio massimo assoluto tra tutte le `n` attività, vale `s_n >= s_k`.
  - Sostituendo `a_k` con `a_n` in `X`, otteniamo un nuovo insieme `X' = (X \ {a_k}) U {a_n}`.
  - Poiché `s_n >= s_k`, l'attività `a_n` inizia contemporaneamente o dopo `a_k`, dunque non può sovrapporsi a nessuna attività precedente in `X` che finisce prima di `s_k`.
  - Pertanto `X'` è un insieme di attività tutte compatibili con cardinalità `|X'| = |X|`. Di conseguenza anche `X'` è una soluzione ottima contenente la scelta greedy `a_n`. Q.E.D.

#### 4. Complessità
* **Tempo**: Poiché i tempi di inizio sono già ordinati, il ciclo `for` esegue `n-1` iterazioni di costo costante. Tempo **Theta(n)** (lineare).
* **Spazio**: Spazio ausiliario **Theta(1)** (o `Theta(n)` per memorizzare l'insieme di output).

---

### 📝 Es D.2: Calcolo Memoizzato Ricorrenza ℓ(i,j) su Stringa (con Sommatoria)
* **Fonte**: Appello 14 Febbraio 2024, Esercizio 2 (presente anche in appelli 04/07/2025 e 10/09/2025)
* **Problema**: 
  Data una stringa `X = <x_1, x_2, ..., x_n>`, si consideri la quantità `ℓ(i, j)` definita per `1 <= i <= j <= n`:
  - `ℓ(i, j) = 1` se `i = j`
  - `ℓ(i, j) = 2` se `i = j - 1` e `x_i = x_j`
  - `ℓ(i, j) = 2 + ℓ(i+1, j-1)` se `i < j - 1` e `x_i = x_j`
  - `ℓ(i, j) = sum_{k=i}^{j-1} ( ℓ(i, k) + ℓ(k+1, j) )` se `i < j - 1` e `x_i != x_j`
  
  **(a)** Scrivere una coppia di algoritmi `INITL(X)` e `RECL(X, L, i, j)` per il calcolo memoizzato di `ℓ(1, n)`.
  **(b)** Valutare la complessità in tempo e spazio dell'algoritmo.
  **(c)** Eseguire a mano il calcolo della matrice memoizzata `L` sulla stringa `X = "abba"`.

#### 1. Pseudocodice Ufficiale (Soluzione)
```plaintext
INITL(X):
    n = X.length
    // Matrice (n+1) x (n+1) inizializzata interamente a NIL
    Sia L una matrice di dimensione (n + 1) x (n + 1)
    for i = 1 to n:
        for j = 1 to n:
            L[i][j] = NIL

    return RECL(X, L, 1, n)

RECL(X, L, i, j):
    // 1. Controllo della memoria (MEMOIZATION HIT)
    if L[i][j] != NIL:
        return L[i][j]

    // 2. Calcolo nei 4 rami esatti della ricorrenza
    if i == j:
        L[i][j] = 1
    else if i == j - 1:
        L[i][j] = 2
    else if X[i] == X[j]:
        L[i][j] = 2 + RECL(X, L, i + 1, j - 1)
    else:
        // Caso i < j - 1 e X[i] != X[j]: SOMMATORIA per k da i a j-1
        sum_val = 0
        for k = i to j - 1:
            sum_val = sum_val + RECL(X, L, i, k) + RECL(X, L, k + 1, j)
        L[i][j] = sum_val

    // 3. Ritorno del valore salvato in matrice
    return L[i][j]
```

#### 2. Correttezza e Logica di Memoizzazione
* **Inizializzazione**: `INITL(X)` crea la matrice ausiliaria `L` ponendo ogni casella a `NIL` per segnalare che nessun problema è stato ancora risolto.
* **Controllo Memoization (O(1))**: All'inizio di `RECL(X, L, i, j)`, il controllo `if L[i][j] != NIL` garantisce che se il valore per la sottostringa `X[i..j]` è già stato calcolato in precedenza, viene restituito immediatamente senza effettuare ulteriori chiamate ricorsive.
* **Calcolo della Sommatoria e Salvataggio**: Quando `X[i] != X[j]`, l'algoritmo calcola la somma cumulata dei valori `RECL(i,k) + RECL(k+1,j)` al variare del punto di taglio `k`. Il risultato viene salvato in `L[i][j]`.

#### 3. Complessità
* **Spazio**:
  * La matrice `L` ha dimensione `(n+1) x (n+1)`, occupando uno spazio **Theta(n^2)**.
  * La pila della ricorsione raggiunge al più profondità `n`, occupando uno spazio **O(n)**.
  * Spazio ausiliario totale: **Theta(n^2)**.
* **Tempo**:
  * Vi sono in tutto **O(n^2)** sottoproblemi distinti della forma `(i, j)` con `1 <= i <= j <= n`.
  * Ciascun sottoproblema viene calcolato **una sola volta** (grazie alla memoizzazione).
  * Per i casi con `X[i] == X[j]`, il calcolo interno richiede tempo **O(1)**.
  * Per i casi con `X[i] != X[j]`, il ciclo `for k = i to j - 1` effettua al più `n` iterazioni (costo **O(n)** per quell'istanza).
  * Il tempo di esecuzione complessivo è **O(n^3)**.

#### 4. Esecuzione a Mano sulla stringa X = "abba" (n = 4)
* **Diagonale principale (i = j, lunghezza 1)**:
  * `L[1][1] = 1` ('a')
  * `L[2][2] = 1` ('b')
  * `L[3][3] = 1` ('b')
  * `L[4][4] = 1` ('a')
* **Lunghezza 2 (j = i + 1)**:
  * `L[1][2]`: 'a' != 'b' ➔ `k=1: L[1][1] + L[2][2] = 1 + 1 = 2` ➔ `L[1][2] = 2`
  * `L[2][3]`: 'b' == 'b' e `i = j - 1` ➔ `L[2][3] = 2`
  * `L[3][4]`: 'b' != 'a' ➔ `k=3: L[3][3] + L[4][4] = 1 + 1 = 2` ➔ `L[3][4] = 2`
* **Lunghezza 3 (j = i + 2)**:
  * `L[1][3]`: 'a' != 'b' ➔ Sommatoria `k=1..2`: `(L[1][1]+L[2][3]) + (L[1][2]+L[3][3]) = (1+2) + (2+1) = 3 + 3 = 6` ➔ `L[1][3] = 6`
  * `L[2][4]`: 'b' != 'a' ➔ Sommatoria `k=2..3`: `(L[2][2]+L[3][4]) + (L[2][3]+L[4][4]) = (1+2) + (2+1) = 3 + 3 = 6` ➔ `L[2][4] = 6`
* **Lunghezza 4 (i = 1, j = 4)**:
  * `L[1][4]`: 'a' == 'a' e `j > i + 1` ➔ `2 + RECL(2, 3) = 2 + 2 = 4`

**Matrice L popolata finale:**
```plaintext
     j=1   j=2   j=3   j=4
i=1 [ 1     2     6     4 ]
i=2 [ NIL   1     2     6 ]
i=3 [ NIL  NIL    1     2 ]
i=4 [ NIL  NIL   NIL    1 ]
```
*(Valore restituito da `INITL(X)` = `L[1][4] = 4`)*

---

### 📝 Es D.3: Longest Common Substring (Sottostringa Comune Più Lunga)
* **Fonte**: Appello 18 Giugno 2024, Esercizio 2
* **Problema**: 
  Una *longest common substring* di due stringhe `X` e `Y` di lunghezza `n` è una sottostringa di `X` e `Y` di lunghezza massima.
  **(a)** Determinare la complessità dell'algoritmo esaustivo.
  **(b)** Migliorare l'algoritmo usando la ricerca binaria sulla lunghezza con verificatore in `O(m + n)`.
  **(c)** Progettare un algoritmo di programmazione dinamica bottom-up fornendo la relazione di ricorrenza e lo pseudocodice.

#### 1. Punto (a): Algoritmo Esaustivo (Brute Force)
* **Numero di sottostringhe**: Una stringa di lunghezza `n` possiede `n * (n + 1) / 2 = Theta(n^2)` possibili sottostringhe.
* **Confronto**: Per ciascuna delle `O(n^2)` sottostringhe di `X` (di lunghezza `m`), per verificare se appare in `Y` occorre confrontarla con fino a `n - m + 1` posizioni in `Y`. Ciascun confronto di stringhe di lunghezza `m` richiede `O(m)` verifiche.
* **Complessità esaustiva**: Confrontare ogni sottostringa di `X` con ogni sottostringa di `Y` richiede tempo **O(n^5)** (o **O(n^4)** con ottimizzazioni elementari di confronto).

#### 2. Punto (b): Ottimizzazione con Ricerca Binaria sulla Lunghezza
* **Idea**: Poiché se esiste una sottostringa comune di lunghezza `L`, esistono anche sottostringhe comuni di lunghezza `< L`, la proprietà di esistenza è monotona rispetto alla lunghezza.
* **Ricerca Binaria**: Effettuiamo una ricerca binaria sul valore della lunghezza `L` nell'intervallo `[1, n]`.
* **Verifica a lunghezza L**: Vi sono `n - L + 1` sottostringhe di `X` di lunghezza `L`. Per ciascuna di esse, la funzione ausiliaria determina se è presente in `Y` in tempo `O(L + n) = O(n)`. Il costo per testare una lunghezza `L` è dunque `O(n^2)`.
* **Complessità ottimizzata**: La ricerca binaria compie `O(log n)` tentativi. Tempo totale: **O(n^2 log n)**.

#### 3. Punto (c): Algoritmo di Programmazione Dinamica (Bottom-Up)

##### Definizione dello Stato
Sia `c(i, j)` la lunghezza della più lunga sottostringa comune che **termina esattamente al carattere `x_i` in `X` e `y_j` in `Y`**.

##### Relazione di Ricorrenza
- `c(i, j) = 0` se `i = 0` oppure `j = 0` (casi base con prefissi vuoti)
- `c(i, j) = 1 + c(i-1, j-1)` se `x_i == y_j` (estende la sottostringa comune che terminava in `i-1` e `j-1`)
- `c(i, j) = 0` se `x_i != y_j` (la sottostringa che termina in `i` e `j` si interrompe)

Il risultato finale della Longest Common Substring globale è il valore massimo contenuto nella tabella:
`LCS_max = max_{1 <= i <= n, 1 <= j <= n} c(i, j)`

##### Pseudocodice Bottom-Up
```plaintext
LongestCommonSubstring(X, Y, n):
    Sia c una matrice di dimensione (n + 1) x (n + 1)
    max_len = 0

    // Casi base: riga 0 e colonna 0
    for i = 0 to n:
        c[i][0] = 0
    for j = 0 to n:
        c[0][j] = 0

    // Riempimento della tabella per righe/colonne
    for i = 1 to n:
        for j = 1 to n:
            if X[i] == Y[j]:
                c[i][j] = 1 + c[i - 1][j - 1]
                if c[i][j] > max_len:
                    max_len = c[i][j]
            else:
                c[i][j] = 0

    return max_len
```

#### 4. Complessità dell'Algoritmo DP
* **Tempo**: Due cicli `for` annidati da `1` a `n` compiono `n^2` passi di costo costante `O(1)`. Tempo **Theta(n^2)** (nettamente migliore di `O(n^2 log n)`).
* **Spazio**: La matrice `c` ha dimensione `(n+1) x (n+1)`. Spazio ausiliario **Theta(n^2)** (ottimizzabile a `Theta(n)` conservando solo la riga precedente).

---

### 📝 Es D.4: DP Bottom-Up per Matrice 2D c(i, j) con Calcolo Esatto Prodotti
* **Fonte**: Appello 2 Luglio 2024, Esercizio 2 (presente anche negli appelli 19/09/2024 e 24/01/2025)
* **Problema**: 
  Per `n > 0`, siano dati due vettori a componenti intere `a, b` in `Z^n`. Si consideri la quantità `c(i, j)`, con `0 <= i <= j <= n-1`, definita come segue:
  - `c(i, j) = a_i` se `0 < i <= n-1` e `j = n-1` (caso base: colonna finale)
  - `c(i, j) = b_j` se `i = 0` e `0 <= j <= n-1` (caso base: prima riga)
  - `c(i, j) = c(i-1, j) * c(i, j+1)` se `0 < i <= j < n-1` (caso ricorsivo)

  Si vuole calcolare la quantità `m = max { c(i, j) : 0 <= i <= j <= n-1 }`.
  **(a)** Scrivere un algoritmo iterativo bottom-up per il calcolo di `m`.
  **(b)** Valutare la complessità esatta dell'algoritmo, associando costo unitario ai prodotti tra numeri interi e costo nullo a tutte le altre operazioni.

#### 1. Analisi delle Dipendenze e Ordine di Scansione
Per calcolare la cella `c(i, j)` del caso ricorsivo (`0 < i <= j < n-1`), occorrono due valori già memorizzati:
* `c(i-1, j)`: situato nella **stessa colonna `j`**, ma nella **riga sopra `i-1`**.
  * Dipendenza da SOPRA ➔ le righe devono essere scorse dall'alto verso il basso (`i` da `0` a `n-1`).
* `c(i, j+1)`: situato nella **stessa riga `i`**, ma nella **colonna a destra `j+1`**.
  * Dipendenza da DESTRA ➔ all'interno di ciascuna riga, le colonne devono essere scorse da destra verso sinistra (`j` da `n-1` a `0`).

#### 2. Pseudocodice Bottom-Up
```plaintext
CALCOLA_MASSIMO_MATRICE(a, b, n):
    Sia c una matrice di dimensione n x n

    // 1. Casi Base: Prima riga (i = 0)
    for j = 0 to n - 1:
        c[0][j] = b[j]

    // 2. Casi Base: Ultima colonna (j = n - 1)
    for i = 1 to n - 1:
        c[i][n - 1] = a[i]

    // 3. Riempimento Bottom-Up della matrice (dall'alto in basso, da destra a sinistra)
    for i = 1 to n - 2:
        for j = n - 2 down to i:
            c[i][j] = c[i - 1][j] * c[i][j + 1]

    // 4. Calcolo del massimo assoluto m sulla triangolare superiore (0 <= i <= j <= n - 1)
    m = c[0][0]
    for i = 0 to n - 1:
        for j = i to n - 1:
            if c[i][j] > m:
                m = c[i][j]

    return m
```

#### 3. Correttezza dell'Algoritmo
* **Invariante di Ciclo**: All'inizio dell'iterazione `(i, j)` con `0 < i <= j < n-1`, sia `c[i-1][j]` (calcolato nell'iterazione sulla riga precedente `i-1`) sia `c[i][j+1]` (calcolato nell'iterazione precedente del ciclo `j` sulla colonna a destra) contengono il valore corretto della ricorrenza. Dunque la moltiplicazione `c[i-1][j] * c[i][j+1]` assegna a `c[i][j]` il valore esatto.
* **Completezza**: Il ciclo finale esamina tutte le `n(n+1)/2` celle della regione `0 <= i <= j <= n-1`, garantendo di trovare il massimo valore `m`.

#### 4. Complessità Esatta e Conteggio Prodotti (Punto b)
* **Conteggio Esatto dei Prodotti**:
  * La regione triangolare superiore contiene in totale `n(n+1)/2` celle.
  * Le celle dei casi base che NON compiono alcuna moltiplicazione sono:
    * Prima riga (`i = 0`): `n` celle.
    * Ultima colonna (`j = n-1` con `i > 0`): `n - 1` celle.
    * Totale celle dei casi base: `n + (n - 1) = 2n - 1` celle.
  * Di conseguenza, le celle appartenenti al caso ricorsivo in cui viene eseguita esattamente 1 moltiplicazione sono:
    `n(n+1)/2 - (2n - 1) = (n^2 + n - 4n + 2) / 2 = (n^2 - 3n + 2) / 2 = (n - 1)(n - 2) / 2`.
* **Costo Temporale Esatto**: Assegnando costo unitario a ciascun prodotto e costo nullo alle altre operazioni, il tempo esatto è **`(n - 1)(n - 2) / 2` prodotti**, ossia una complessità **Theta(n^2)**.
* **Spazio Ausiliario**: La matrice `c` richiede uno spazio **Theta(n^2)**.

---

### 📝 Es D.5: DP Bottom-Up 2D su Due Stringhe ℓ(i, j)
* **Fonte**: Appello 24 Gennaio 2025, Esercizio 2
* **Problema**: 
  Date due stringhe `X = <x_1, x_2, ..., x_m>` e `Y = <y_1, y_2, ..., y_n>`, si consideri la quantità `ℓ(i, j)` definita per `0 <= i <= m` e `0 <= j <= n`:
  - `ℓ(i, j) = 1` se `i = 0` oppure `j = 0` (caso base)
  - `ℓ(i, j) = 3 * ℓ(i, j - 1)` se `i, j > 0` e `x_i == y_j` (caso match)
  - `ℓ(i, j) = 2 * ℓ(i - 1, j - 1) - ℓ(i - 1, j)` se `i, j > 0` e `x_i != y_j` (caso mismatch)

  Si vuole calcolare `q = max { ℓ(i, j) : 0 <= i <= m, 0 <= j <= n }`.
  **(a)** Scrivere un algoritmo bottom-up per il calcolo di `q`.
  **(b)** Determinare la complessità esatta dell'algoritmo, supponendo che le uniche operazioni di costo unitario e non nullo siano i confronti tra caratteri (`x_i == y_j`).

#### 1. Pseudocodice Bottom-Up
```plaintext
CALCOLA_QUANTITA_Q(X, Y, m, n):
    Sia L una matrice di dimensione (m + 1) x (n + 1)
    max_val = 1

    // 1. Casi Base: Prima riga (i = 0) e Prima colonna (j = 0)
    for i = 0 to m:
        L[i][0] = 1
    for j = 0 to n:
        L[0][j] = 1

    // 2. Riempimento Bottom-Up della matrice (dall'alto in basso, da sinistra a destra)
    for i = 1 to m:
        for j = 1 to n:
            if X[i] == Y[j]:
                L[i][j] = 3 * L[i][j - 1]
            else:
                L[i][j] = 2 * L[i - 1][j - 1] - L[i - 1][j]

            if L[i][j] > max_val:
                max_val = L[i][j]

    return max_val
```

#### 2. Correttezza dell'Algoritmo
* **Invariante di Ciclo**: All'inizio dell'iterazione `(i, j)`, le tre celle antecedenti necessarie `L[i][j-1]` (sinistra), `L[i-1][j-1]` (diagonale) e `L[i-1][j]` (sopra) sono già state calcolate nelle iterazioni precedenti. Quindi l'assegnamento della ricorrenza calcola il valore esatto di `ℓ(i, j)`.
* **Completezza**: Il confronto continuo `if L[i][j] > max_val` garantisce di individuare il massimo assoluto `q` su tutta la tabella.

#### 3. Complessità Esatta (Punto b)
* **Conteggio Esatto dei Confronti**: Il confronto di caratteri `X[i] == Y[j]` viene eseguito esattamente 1 volta all'interno dei due cicli annidati `i = 1..m` e `j = 1..n`. Il numero totale di confronti effettuati è esattamente **`m * n` confronti**.
* **Complessità Temporale**: **Theta(m * n)** (quadratica se `m = n`).
* **Spazio Ausiliario**: Matrice `L` di dimensione `(m+1) x (n+1)` $\rightarrow$ **Theta(m * n)**.

---

### 📝 Es D.6: Greedy Selezione Attività (Attività che Inizia per Ultima)
* **Fonte**: Appello 7 Febbraio 2025, Esercizio 2 (presente anche in appelli 31/01/2024)
* **Problema**: 
  Siano date `n` attività `a_1, ..., a_n` con vettori `s` ed `f` dei tempi di inizio e fine, già ordinate per tempo di inizio (`0 < s_1 <= s_2 <= ... <= s_n`).
  **(a)** Scrivere un algoritmo greedy iterativo che seleziona l'attività che **INIZIA PER ULTIMA**.
  **(b)** Determinare l'insieme di attività restituito sul seguente insieme di 6 attività: `s = (1, 2, 3, 5, 7, 10)`, `f = (3, 9, 10, 7, 11, 12)`.
  **(c)** Dimostrare la proprietà di scelta greedy (dimostrazione per scambio).

#### 1. Pseudocodice Iterativo
```plaintext
GREEDY_ACTIVITY_SELECTOR_INIZIO(s, f, n):
    act = { a_n }        // Selezioniamo l'attività a_n (quella con tempo di inizio massimo s_n)
    lastinit = s[n]

    for i = n - 1 down to 1:
        if f[i] <= lastinit:
            act = act U { a_i }
            lastinit = s[i]

    return act
```

#### 2. Esecuzione a Mano sulle 6 Attività Date
* `a_6` `[10, 12]` ➔ Selezionata! Insieme `{ a_6 }`, `lastinit = 10`.
* `a_5` `[7, 11]` ➔ `f_5 = 11 > 10` (Sovrapposta) ➔ Scartata.
* `a_4` `[5, 7]` ➔ `f_4 = 7 <= 10` (Compatibile) ➔ Selezionata! Insieme `{ a_6, a_4 }`, `lastinit = 5`.
* `a_3` `[3, 10]` ➔ `f_3 = 10 > 5` (Sovrapposta) ➔ Scartata.
* `a_2` `[2, 9]` ➔ `f_2 = 9 > 5` (Sovrapposta) ➔ Scartata.
* `a_1` `[1, 3]` ➔ `f_1 = 3 <= 5` (Compatibile) ➔ Selezionata! Insieme `{ a_6, a_4, a_1 }`.

Risultato restituito: **`{ a_1, a_4, a_6 }`** (con tempi di inizio `1, 5, 10`).

#### 3. Dimostrazione della Scelta Greedy (Per Scambio)
* **Ipotesi**: Sia `T` una soluzione ottima qualsiasi per il problema di selezione attività.
* **Caso 1**: Se `a_n` appartiene a `T`, la tesi è verificata.
* **Caso 2**: Se `a_n` non appartiene a `T`, sia `a_k` l'attività in `T` con tempo di inizio massimo tra quelle in `T`. Poiché `a_n` è l'attività con tempo di inizio massimo in assoluto tra tutte le `n` attività, vale `s_n >= s_k`.
* **Costruzione**: Definiamo `T' = (T \ {a_k}) U {a_n}`. Poiché `s_n >= s_k`, l'attività `a_n` inizia contemporaneamente o dopo `a_k`, quindi non può sovrapporsi a nessuna attività in `T` che termina prima di `s_k`.
* **Conclusione**: `T'` è formato da attività tutte compatibili e ha cardinalità `|T'| = |T|`. Quindi anche `T'` è una soluzione ottima contenente la scelta greedy `a_n`. Q.E.D.

#### 4. Complessità
* **Tempo**: Poiché i tempi di inizio sono già ordinati, il ciclo compie `n-1` passi di costo O(1) ➔ **Theta(n)**.
* **Spazio**: Spazio ausiliario **Theta(1)**.

---

### 📝 Es D.7: Greedy Scheduling Programmi (Minimizzazione Σ C_j)
* **Fonte**: Appello 18 Giugno 2025, Esercizio 2
* **Problema**: 
  Dati `n` programmi di lunghezza `l_j`, trovare un ordine di esecuzione `sigma` che minimizzi la somma dei tempi di completamento `sum_{j=1}^{n} C_j`.
  **(a)** Progettare un algoritmo greedy iterativo.
  **(b)** Valutare la complessità in tempo e spazio.
  **(c)** Eseguire l'algoritmo a mano su `n = 4` con lunghezze `l = (4, 1, 3, 2)`.

#### 1. Pseudocodice (Scelta Greedy: Shortest Processing Time - SPT)
```plaintext
GREEDY_SCHEDULING_PROGRAMMI(l, n):
    // 1. Scelta Greedy: Ordinare i programmi per lunghezza crescente l_j
    Ordina l in senso crescente in modo che l[1] <= l[2] <= ... <= l[n]

    // 2. Calcolo dei tempi di completamento C[i] e della somma totale
    total_sum = 0
    current_time = 0

    for i = 1 to n:
        current_time = current_time + l[i]
        total_sum = total_sum + current_time

    return total_sum
```

#### 2. Esecuzione a Mano su l = (4, 1, 3, 2)
1. **Ordinamento crescente**: `l' = (1, 2, 3, 4)`
2. **Tempi di completamento singoli `C_i`**:
   - `C_1 = 1`
   - `C_2 = 1 + 2 = 3`
   - `C_3 = 1 + 2 + 3 = 6`
   - `C_4 = 1 + 2 + 3 + 4 = 10`
   - Vettore tempi di completamento: `[1, 3, 6, 10]`
3. **Somma totale dei tempi di completamento**: `Sum C_j = 1 + 3 + 6 + 10 = 20`.

#### 3. Complessità
* **Tempo**: Ordinare `n` lunghezze richiede tempo **Theta(n log n)** (es. con MergeSort o HeapSort). Il ciclo di calcolo della somma richiede tempo **Theta(n)**. Tempo totale: **Theta(n log n)**.
* **Spazio**: Spazio ausiliario **Theta(1)** in-place o **Theta(n)**.

---

### 📝 Es D.8: DP Memoizzata Ricorrenza Matriciale M(i, j) con 3 Prodotti
* **Fonte**: Appello 10 Settembre 2025, Esercizio 2
* **Problema**: 
  Sia `n > 0` un intero. Si consideri la quantità `M(i, j)` definita per `1 <= i <= j <= n`:
  - `M(i, j) = 1` se `i = j`
  - `M(i, j) = 2` se `j = i + 1`
  - `M(i, j) = M(i + 1, j - 1) * M(i + 1, j) * M(i, j - 1)` se `j > i + 1`

  **(a)** Scrivere la coppia di algoritmi `INIT_M(n)` e `REC_M(M, i, j)` per il calcolo memoizzato di `M(1, n)`.
  **(b)** Calcolare il numero esatto `T(n)` di moltiplicazioni tra interi eseguite per il calcolo di `M(1, n)`.

#### 1. Pseudocodice Memoizzato (Top-Down)
```plaintext
INIT_M(n):
    Sia M una matrice di dimensione (n + 1) x (n + 1)
    for i = 1 to n:
        for j = 1 to n:
            M[i][j] = NIL

    return REC_M(M, 1, n)

REC_M(M, i, j):
    // 1. Controllo della memoria (Memoization Hit)
    if M[i][j] != NIL:
        return M[i][j]

    // 2. Calcolo nei 3 rami della ricorrenza con salvataggio in M[i][j]
    if i == j:
        M[i][j] = 1
    else if j == i + 1:
        M[i][j] = 2
    else:
        // Caso j > i + 1: tre chiamate ricorsive e 2 moltiplicazioni
        M[i][j] = REC_M(M, i + 1, j - 1) * REC_M(M, i + 1, j) * REC_M(M, i, j - 1)

    // 3. Ritorno del valore memorizzato
    return M[i][j]
```

#### 2. Complessità Esatta e Conteggio Moltiplicazioni (Punto b)
* **Conteggio Esatto delle Moltiplicazioni**:
  * La regione triangolare superiore contiene in totale `n(n+1)/2` celle distinte.
  * Le celle dei casi base non compiono alcuna moltiplicazione:
    * `i == j`: `n` celle.
    * `j == i + 1`: `n - 1` celle.
    * Totale celle casi base: `n + (n - 1) = 2n - 1` celle.
  * Le celle del caso ricorsivo `j > i + 1` sono: `n(n+1)/2 - (2n - 1) = (n - 1)(n - 2) / 2` celle.
  * Per calcolare il prodotto di 3 termini `a * b * c`, si eseguono **2 moltiplicazioni per cella ricorsiva**.
  * Numero esatto di moltiplicazioni: `T(n) = 2 * [ (n - 1)(n - 2) / 2 ] = (n - 1)(n - 2) = n^2 - 3n + 2`.
* **Complessità Temporale Esatta**: **`n^2 - 3n + 2` moltiplicazioni** ➔ **Theta(n^2)**.
* **Spazio Ausiliario**: Matrice `M` di dimensione `(n+1) x (n+1)` ➔ **Theta(n^2)**.

---

### 📝 Es D.9: Greedy Caricamento File Cloud (Capacità Limitata c)
* **Fonte**: Appello 20 Gennaio 2026, Esercizio 2
* **Problema**: 
  Siano dati `n` file di dimensioni `d_1, ..., d_n` MB e una capacità massima del cloud `c` MB. Caricare il maggior numero possibile di file senza eccedere `c`.
  **(a)** Progettare un algoritmo greedy e valutarne la complessità.
  **(b)** Dimostrare la proprietà di scelta greedy (dimostrazione per scambio).

#### 1. Pseudocodice (Shortest File First)
```plaintext
GREEDY_CLOUD_STORAGE(F, d, c, n):
    Ordina i file in F in base a d in ordine crescente (d[1] <= d[2] <= ... <= d[n])

    file_caricati = {}
    current_size = 0

    for i = 1 to n:
        if current_size + d[i] <= c:
            file_caricati = file_caricati U { f_i }
            current_size = current_size + d[i]
        else:
            break

    return file_caricati
```

#### 2. Dimostrazione della Scelta Greedy (Per Scambio)
* **Tesi**: Esiste una soluzione ottima `S` che contiene il file di dimensione minima `f_1` (`d_1 <= d_j` per ogni `j`).
* **Dimostrazione**: Sia `T` una soluzione ottima qualsiasi per il caricamento file.
  * **Caso 1**: Se `f_1` appartiene a `T`, la tesi è verificata.
  * **Caso 2**: Se `f_1` non appartiene a `T`, sia `f_k` un qualsiasi file in `T`. Poiché `f_1` è il file di dimensione minima in assoluto, vale `d_1 <= d_k`.
  * **Scambio**: Sostituiamo `f_k` con `f_1`: `T' = (T \ {f_k}) U {f_1}`.
  * **Ammissibilità**: `size(T') = size(T) - d_k + d_1 <= size(T) <= c`. Quindi `T'` rispetta il limite `c`.
  * **Conclusione**: Poiché `|T'| = |T|`, anche `T'` è una soluzione ottima contenente `f_1`. Q.E.D.

#### 3. Complessità
* **Tempo**: **Theta(n log n)** per l'ordinamento (es. MergeSort/HeapSort) + **O(n)** per il ciclo.
* **Spazio**: **Theta(1)** in-place o **Theta(n)**.

---

### 📝 Es D.10: DP Memoizzata Ricorrenza ℓ(i, j) con Sommatoria
* **Fonte**: Appello 4 Luglio 2025, Esercizio 2
* **Problema**: 
  Data una stringa `X = <x_1, ..., x_n>`, si consideri `ℓ(i, j)` per `1 <= i <= j <= n`:
  - `ℓ(i, j) = 1` se `i = j`
  - `ℓ(i, j) = 2` se `i = j - 1`
  - `ℓ(i, j) = 2 + ℓ(i + 1, j - 1)` se `i < j - 1` e `x_i == x_j`
  - `ℓ(i, j) = sum_{k=i}^{j-1} ( ℓ(i, k) + ℓ(k + 1, j) )` se `i < j - 1` e `x_i != x_j`

  **(a)** Scrivere `INIT_L(X)` e `REC_L(X, L, i, j)` per il calcolo memoizzato di `ℓ(1, n)`.
  **(b)** Determinare la complessità al caso migliore `T_best(n)` per i confronti tra caratteri.

#### 1. Pseudocodice Memoizzato (Top-Down)
```plaintext
INIT_L(X):
    Sia L una matrice di dimensione (n + 1) x (n + 1)
    for i = 1 to n:
        for j = 1 to n:
            L[i][j] = NIL

    return REC_L(X, L, 1, n)

REC_L(X, L, i, j):
    if L[i][j] != NIL:
        return L[i][j]

    if i == j:
        L[i][j] = 1
    else if i == j - 1:
        L[i][j] = 2
    else if X[i] == X[j]:
        L[i][j] = 2 + REC_L(X, L, i + 1, j - 1)
    else:
        sum_val = 0
        for k = i to j - 1:
            sum_val = sum_val + REC_L(X, L, i, k) + REC_L(X, L, k + 1, j)
        L[i][j] = sum_val

    return L[i][j]
```

#### 2. Complessità al Caso Migliore T_best(n) (Punto b)
* **Condizione di Caso Migliore**: Tutti i caratteri di `X` sono uguali (es. `X = "aaaaa"`). Il controllo `X[i] == X[j]` è sempre vero per `i < j - 1`, perciò non si entra mai nel ciclo `for k`.
* **Conteggio Esatto dei Confronti**: Viene eseguito 1 confronto `X[i] == X[j]` per ogni cella `(i, j)` con `i < j - 1`. Le celle con `i < j - 1` sono `n(n+1)/2 - (2n - 1) = (n - 1)(n - 2) / 2`.
* **Complessità Temporale Caso Migliore**: **`(n - 1)(n - 2) / 2` confronti** ➔ **Theta(n^2)**.
* **Spazio Ausiliario**: Matrice `L` di dimensione `(n+1) x (n+1)` ➔ **Theta(n^2)**.

---

## 📂 Gruppo B: Domande B (Heap, BST base, Huffman, Hash)

### 📝 Es B.1: Tabella Hash con Chaining (Liste di Trabocco) m = 8
* **Fonte**: Appello 31 Gennaio 2024, Domanda B
* **Problema**: 
  Si consideri una tabella hash di dimensione `m = 8`, gestita mediante chaining (liste di trabocco) con funzione di hash `h(k) = k mod m`. 
  Descrivere in dettaglio come avviene l'inserimento della sequenza di chiavi: `13, 10, 33, 21, 8, 26`.

#### 1. Calcoli Passo-Passo della Funzione Hash
* `k = 13` ➔ `h(13) = 13 mod 8 = 5` ➔ Inserito nello slot `5` (Lista: `[13]`).
* `k = 10` ➔ `h(10) = 10 mod 8 = 2` ➔ Inserito nello slot `2` (Lista: `[10]`).
* `k = 33` ➔ `h(33) = 33 mod 8 = 1` ➔ Inserito nello slot `1` (Lista: `[33]`).
* `k = 21` ➔ `h(21) = 21 mod 8 = 5` ➔ Collisione nello slot `5`! Inserito in lista di trabocco.
* `k = 8`  ➔ `h(8) = 8 mod 8 = 0` ➔ Inserito nello slot `0` (Lista: `[8]`).
* `k = 26` ➔ `h(26) = 26 mod 8 = 2` ➔ Collisione nello slot `2`! Inserito in lista di trabocco.

#### 2. Stato Finale della Tabella Hash T[0..7]
- `T[0]`: `8`
- `T[1]`: `33`
- `T[2]`: `26 -> 10`
- `T[3]`: `NIL`
- `T[4]`: `NIL`
- `T[5]`: `21 -> 13`
- `T[6]`: `NIL`
- `T[7]`: `NIL`

#### 3. Complessità
* **Inserimento in Chaining**: Tempo **Theta(1)** per ciascun inserimento.
* **Ricerca (Caso Medio)**: Tempo **Theta(1 + alpha)** dove `alpha = n / m` è il fattore di carico della tabella.

---

### 📝 Es B.2: Codice di Huffman per Alfabeto e Frequenze
* **Fonte**: Appello 14 Febbraio 2024, Domanda B
* **Problema**: 
  Indicare, in forma di albero binario, il codice prefisso ottenuto tramite l'algoritmo di Huffman per l'alfabeto `{a, b, c, d, e, f}` con frequenze `a:11, b:6, c:13, d:35, e:10, f:25`. Spiegare brevemente il processo di costruzione.

#### 1. Passi dell'Algoritmo di Huffman (Estrazione dei 2 Minimi)
* **Insieme Iniziale**: `{b:6, e:10, a:11, c:13, f:25, d:35}`
* **Passo 1**: Unione dei due minimi `b(6)` ed `e(10)` ➔ Nodo `z1` con frequenza `16`.
  * Nodi rimasti: `{a:11, c:13, z1:16, f:25, d:35}`
* **Passo 2**: Unione dei due minimi `a(11)` e `c(13)` ➔ Nodo `z2` con frequenza `24`.
  * Nodi rimasti: `{z1:16, z2:24, f:25, d:35}`
* **Passo 3**: Unione dei due minimi `z1(16)` e `z2(24)` ➔ Nodo `z3` con frequenza `40`.
  * Nodi rimasti: `{f:25, d:35, z3:40}`
* **Passo 4**: Unione dei due minimi `f(25)` e `d(35)` ➔ Nodo `z4` con frequenza `60`.
  * Nodi rimasti: `{z3:40, z4:60}`
* **Passo 5**: Unione degli ultimi due nodi `z3(40)` e `z4(60)` ➔ **Radice dell'Albero (Frequenza Totale 100)**.

#### 2. Codici Prefissi Risultanti (Ramo Sinistro 0, Ramo Destro 1)
- `d` (freq 35): **`11`** (2 bit)
- `f` (freq 25): **`10`** (2 bit)
- `b` (freq 6): **`000`** (3 bit)
- `e` (freq 10): **`001`** (3 bit)
- `a` (freq 11): **`010`** (3 bit)
- `c` (freq 13): **`011`** (3 bit)

#### 3. Complessità
* **Tempo**: **Theta(n log n)** utilizzando un Min-Heap per estrarre `n-1` volte i due nodi di frequenza minima.
* **Spazio**: **Theta(n)** per l'albero di codifica.

---

### 📝 Es B.3: Procedura BuildMaxHeap e Passi Intermedi
* **Fonte**: Appello 18 Giugno 2024, Domanda B
* **Problema**: 
  Dare la definizione di max-heap. Dato l'array `A = [7, 1, 17, 0, 5, 4, 22]`, specificare il max-heap ottenuto applicando `BuildMaxHeap` e descrivere sinteticamente i passi intermedi.

#### 1. Definizione di Max-Heap
Un **Max-Heap** è un albero binario quasi-completo (ovvero completamente riempito a tutti i livelli tranne eventualmente l'ultimo, che è riempito da sinistra a destra) memorizzato su array, in cui per ogni nodo `i` vale la proprietà `A[PARENT(i)] >= A[i]`.

#### 2. Passi Intermedi di BuildMaxHeap su A = [7, 1, 17, 0, 5, 4, 22] (n = 7)
Si parte dal primo nodo non-foglia `i = floor(n / 2) = floor(7 / 2) = 3`:

* **Passo 1 (`i = 3`, nodo `A[3] = 17`)**:
  * Figli: `A[6] = 4`, `A[7] = 22`.
  * `22 > 17` ➔ Scambio `17` e `22`.
  * Array: `[7, 1, 22, 0, 5, 4, 17]`
* **Passo 2 (`i = 2`, nodo `A[2] = 1`)**:
  * Figli: `A[4] = 0`, `A[5] = 5`.
  * `5 > 1` ➔ Scambio `1` e `5`.
  * Array: `[7, 5, 22, 0, 1, 4, 17]`
* **Passo 3 (`i = 1`, nodo `A[1] = 7` - Radice)**:
  * Figli: `A[2] = 5`, `A[3] = 22`.
  * `22 > 7` ➔ Scambio `7` e `22`. Array: `[22, 5, 7, 0, 1, 4, 17]`
  * `MaxHeapify` ricorsivo su `A[3] = 7`: figli `A[6] = 4`, `A[7] = 17`.
  * `17 > 7` ➔ Scambio `7` e `17`.
  * Array finale: **`[22, 5, 17, 0, 1, 4, 7]`**

#### 3. Complessità
* **Tempo**: **Theta(n)** in quanto la somma delle altezze dei sottoalberi converge a un valore lineare.
* **Spazio**: **Theta(1)** ausiliario (operazione eseguita in-place).

---

### 📝 Es B.4: Equazione di Ricorrenza per LCS (Longest Common Subsequence)
* **Fonte**: Appello 2 Luglio 2024, Domanda B
* **Problema**: 
  Date due stringhe `X = <x_1, ..., x_m>` e `Y = <y_1, ..., y_n>`, scrivere la relazione di ricorrenza `c(i, j)` per il calcolo della lunghezza della Longest Common Subsequence.

#### 1. Relazione di Ricorrenza
- `c(i, j) = 0` se `i = 0` oppure `j = 0` (caso base)
- `c(i, j) = 1 + c(i-1, j-1)` se `i, j > 0` e `x_i == y_j` (caso match)
- `c(i, j) = max(c(i-1, j), c(i, j-1))` se `i, j > 0` e `x_i != y_j` (caso mismatch)

#### 2. Spiegazione Logica
* Se uno dei due prefissi è vuoto (`i=0` o `j=0`), la sottosequenza comune ha lunghezza 0.
* Se i caratteri correnti `x_i` e `y_j` coincidono, essi allungano di 1 la LCS dei prefissi precedenti `X[1..i-1]` e `Y[1..j-1]`.
* Se i caratteri differiscono, si sceglie il massimo tra scartare `x_i` (`c(i-1, j)`) oppure scartare `y_j` (`c(i, j-1)`).

---

### 📝 Es B.5: Tabella Hash Indirizzamento Aperto con Doppio Hash m = 7
* **Fonte**: Appello 7 Febbraio 2025, Domanda B
* **Problema**: 
  Si consideri una tabella hash di dimensione `m = 7` a indirizzamento aperto con doppio hash basato su `h1(k) = k mod 7` e `h2(k) = 1 + (k mod 5)`. 
  Funzione di ispezione: `h(k, i) = (h1(k) + i * h2(k)) mod 7`. 
  Descrivere l'inserimento della sequenza di chiavi `10, 20, 34, 35, 48`.

#### 1. Passi degli Inserimenti e Ispezioni
* **`k = 10`**: `h1(10) = 10 mod 7 = 3` ➔ Slot `3` libero ➔ Inserito in `T[3]`.
* **`k = 20`**: `h1(20) = 20 mod 7 = 6` ➔ Slot `6` libero ➔ Inserito in `T[6]`.
* **`k = 34`**: `h1(34) = 6` (Collisione con 20!). `h2(34) = 1 + (34 mod 5) = 5`.
  * `i = 1`: `(6 + 1 * 5) mod 7 = 11 mod 7 = 4` ➔ Slot `4` libero ➔ Inserito in `T[4]`.
* **`k = 35`**: `h1(35) = 35 mod 7 = 0` ➔ Slot `0` libero ➔ Inserito in `T[0]`.
* **`k = 48`**: `h1(48) = 6` (Collisione con 20!). `h2(48) = 1 + (48 mod 5) = 4`.
  * `i = 1`: `(6 + 4) mod 7 = 3` (Occupato da 10)
  * `i = 2`: `(6 + 8) mod 7 = 0` (Occupato da 35)
  * `i = 3`: `(6 + 12) mod 7 = 4` (Occupato da 34)
  * `i = 4`: `(6 + 16) mod 7 = 1` ➔ Slot `1` libero ➔ Inserito in `T[1]`.

#### 2. Stato Finale della Tabella T[0..6]
- `T[0]`: `35`
- `T[1]`: `48`
- `T[2]`: `NIL`
- `T[3]`: `10`
- `T[4]`: `34`
- `T[5]`: `NIL`
- `T[6]`: `20`

#### 3. Complessità
* **Inserimento con Doppio Hash**: Caso medio `O(1 / (1 - alpha))` tentativi dove `alpha = n / m`.
* **Vantaggio del Doppio Hashing**: Elimina il problema dell'agglomerazione secondaria.

---

### 📝 Es B.6: Codice di Huffman per Alfabeto e Frequenze
* **Fonte**: Appello 18 Giugno 2025, Domanda B
* **Problema**: 
  Indicare il codice prefisso ottenuto tramite Huffman per l'alfabeto `{a, b, c, d, e, f}` con frequenze `a:12, b:7, c:14, d:30, e:10, f:27`.

#### 1. Passi dell'Algoritmo di Huffman (Estrazione dei 2 Minimi)
* **Insieme Iniziale**: `{b:7, e:10, a:12, c:14, f:27, d:30}`
* **Passo 1**: Unione dei minimi `b(7)` ed `e(10)` ➔ Nodo `z1` (freq `17`).
* **Passo 2**: Unione dei minimi `a(12)` e `c(14)` ➔ Nodo `z2` (freq `26`).
* **Passo 3**: Unione dei minimi `z1(17)` e `z2(26)` ➔ Nodo `z3` (freq `43`).
* **Passo 4**: Unione dei minimi `f(27)` e `d(30)` ➔ Nodo `z4` (freq `57`).
* **Passo 5**: Unione degli ultimi nodi `z3(43)` e `z4(57)` ➔ **Radice Totale (100)**.

#### 2. Codici Prefissi Risultanti (Sinistra 0, Destra 1)
- `d` (freq 30): **`00`** (2 bit)
- `f` (freq 27): **`01`** (2 bit)
- `b` (freq 7):  **`100`** (3 bit)
- `e` (freq 10): **`101`** (3 bit)
- `a` (freq 12): **`110`** (3 bit)
- `c` (freq 14): **`111`** (3 bit)

#### 3. Complessità
* **Tempo**: **Theta(n log n)** utilizzando un Min-Heap per estrarre `n-1` volte i nodi a frequenza minima.
* **Spazio**: **Theta(n)** per l'albero di codifica.

---

### 📝 Es B.7: Inserimenti Successivi ed ExtractMax su Max-Heap
* **Fonte**: Appello 19 Settembre 2024, Domanda B
* **Problema**: 
  1. Dare la definizione di Max-Heap.
  2. Inserire una alla volta le chiavi `17, 19, 22, 15, 20, 25` in un max-heap inizialmente vuoto.
  3. Eseguire l'operazione `ExtractMax` e mostrare lo heap risultante.

#### 1. Inserimenti Successivi Passo-Passo (Heapify-Up)
* Inserisco `17` ➔ `[17]`
* Inserisco `19` ➔ `[17, 19]` ➔ Scambio con padre ➔ `[19, 17]`
* Inserisco `22` ➔ `[19, 17, 22]` ➔ Scambio con padre ➔ `[22, 17, 19]`
* Inserisco `15` ➔ `[22, 17, 19, 15]` ➔ OK (`17 > 15`)
* Inserisco `20` ➔ `[22, 17, 19, 15, 20]` ➔ Scambio con padre `17` ➔ `[22, 20, 19, 15, 17]`
* Inserisco `25` ➔ `[22, 20, 19, 15, 17, 25]` ➔ Scambio con padre `19` ➔ Scambio con radice `22` ➔ **`[25, 20, 22, 15, 17, 19]`**

#### 2. Operazione ExtractMax
* **Passo A**: Salviamo il massimo `25` e lo sostituiamo con l'ultimo elemento `19`. Riduciamo la dimensione dell'heap a 5. Array temporaneo: `[19, 20, 22, 15, 17]`.
* **Passo B**: Eseguiamo **`MaxHeapify(A, 1)`** alla radice per ripristinare la proprietà dell'heap:
  * Figli di `19`: `A[2] = 20` e `A[3] = 22`.
  * Il figlio più grande è `22`. Scambiamo `19` e `22`.
* **Array Finale**: **`[22, 20, 19, 15, 17]`**

#### 3. Complessità
* **Inserimento `HeapInsert`**: Tempo **O(log n)** per ciascuna chiave.
* **Estrazione `ExtractMax`**: Tempo **O(log n)** per l'esecuzione di `MaxHeapify`.
* **Spazio**: **Theta(1)** ausiliario.

---

### 📝 Es B.8: Teoria Selezione Attività Greedy (GREEDY-SEL) e Controesempi
* **Fonte**: Appello 24 Gennaio 2025, Domanda B
* **Problema**: 
  1. Definire il problema della selezione di attività compatibili.
  2. Descrivere brevemente l'algoritmo ottimo `GREEDY-SEL`.
  3. Fornire un esempio di scelta greedy NON ottima e dimostrarne la non-ottimalità tramite controesempio.

#### 1. Definizione Formale del Problema
* **Input**: Un insieme `S = {a_1, a_2, ..., a_n}` di `n` attività con tempi di inizio `s_i` e fine `f_i` (intervallo `[s_i, f_i)`).
* **Compatibilità**: Due attività `a_i` e `a_j` sono compatibili se non si sovrappongono temporalmente (`s_i >= f_j` oppure `s_j >= f_i`).
* **Obiettivo**: Trovare un sottoinsieme di `S` di **cardinalità massima** di attività mutualmente compatibili.

#### 2. Algoritmo Ottimo GREEDY-SEL
* Ordinare le attività per **tempo di fine crescente** (`f_1 <= f_2 <= ... <= f_n`).
* Selezionare la prima attività `a_1`. Per ogni attività successiva `a_i`, selezionarla se il suo tempo di inizio `s_i` è `>=` al tempo di fine dell'ultima attività selezionata.
* **Complessità**: Tempo **O(n log n)** per l'ordinamento + **O(n)** per la scansione greedy.

#### 3. Esempio di Scelta Greedy NON Ottima (Scelta per Tempo di Inizio Crescente)
* **Strategia Errata**: Selezionare l'attività con tempo di inizio `s_i` più piccolo.
* **Controesempio**:
  * `a_1 = (1, 10)`
  * `a_2 = (2, 3)`
  * `a_3 = (4, 5)`
* **Risultato Greedy**: Seleziona `a_1 = (1, 10)` poiché ha inizio minimo `1`. Cardinalità = **1**.
* **Soluzione Ottima**: Seleziona `{a_2, a_3}` poiché compatibili tra loro. Cardinalità = **2**.
* **Conclusione**: Scegliere per tempo di inizio crescente non restituisce la soluzione ottima.

---

### 📝 Es B.9: Alberi Binari di Ricerca (BST) — Inserimenti e Cancellazione
* **Fonte**: Appello 4 Luglio 2025, Domanda B
* **Problema**: 
  1. Dare la definizione di albero binario di ricerca (BST).
  2. Inserire le chiavi `10, 5, 3, 15, 7, 12` a partire da albero vuoto.
  3. Cancellare la chiave `5` dallo albero risultante.

#### 1. Definizione di BST
Un **Albero Binario di Ricerca (BST)** è un albero binario in cui per ogni nodo `x`:
* Tutte le chiavi nel sottoalbero sinistro `left(x)` sono `<= x.key`.
* Tutte le chiavi nel sottoalbero destro `right(x)` sono `>= x.key`.

#### 2. Costruzione del BST per Inserimenti Successivi
```
       10
     /    \
    5      15
   / \    /
  3   7  12
```

#### 3. Cancellazione della Chiave `5` (Caso 3: Nodo con 2 Figli)
Poiché il nodo `5` possiede 2 figli (`3` e `7`), la procedura `Tree-Delete` lo sostituisce con il suo **Successore in-order** (il minimo nel sottoalbero destro), che è `7`.
* Il nodo `7` prende il posto di `5`.
* Il figlio sinistro `3` rimane agganciato a `7`.

Albero Risultante dopo la cancellazione di `5`:
```
       10
     /    \
    7      15
   /      /
  3      12
```

#### 4. I 3 Casi Generali della Cancellazione (`Tree-Delete`)
1. **Caso 1 (Foglia - 0 figli)**: Si rimuove direttamente il nodo impostando a `NIL` il puntatore del padre.
2. **Caso 2 (1 solo figlio)**: Il figlio unico scavalca il padre (il padre del nodo rimosso punta direttamente al nipote).
3. **Caso 3 (2 figli)**: Si trova il **Successore in-order** `y` (minimo del sottoalbero destro), si sposta `y` al posto del nodo `z`, e si aggiornano i figli.

#### 5. Complessità
* **Inserimento `Tree-Insert`**: Tempo **O(h)** dove `h` è l'altezza dell'albero (**O(log n)** nel caso bilanciato, **O(n)** nel caso peggiore).
* **Cancellazione `Tree-Delete`**: Tempo **O(h)** per la ricerca del successore.
* **Spazio**: **Theta(n)** per l'albero.

---

### 📝 Es B.10: Tabella Hash Indirizzamento Aperto — Ispezione Lineare e DELETED
* **Fonte**: Appello 16 Giugno 2023, Domanda B
* **Problema**: 
  1. Inserire la sequenza `22, 33, 11, 44, 12, 23` in una tabella hash di dimensione `m = 11` con ispezione lineare `h(k, i) = (k mod 11 + i) mod 11`.
  2. Spiegare perché la cancellazione della chiave `33` richiede il valore `DELETED` anziché `NIL`.
  3. Mostrare il comportamento della ricerca di `12` prima e dopo la cancellazione.

#### 1. Inserimenti Passo-Passo
* `k = 22`: `22 mod 11 = 0` ➔ Slot `0` libero ➔ Inserito in `T[0]`.
* `k = 33`: `33 mod 11 = 0` (Occ) ➔ `i = 1`: `(0 + 1) mod 11 = 1` ➔ Inserito in `T[1]`.
* `k = 11`: `11 mod 11 = 0` (Occ) ➔ `i = 1` (Occ) ➔ `i = 2` ➔ Inserito in `T[2]`.
* `k = 44`: `44 mod 11 = 0` (Occ) ➔ `i = 1, 2` (Occ) ➔ `i = 3` ➔ Inserito in `T[3]`.
* `k = 12`: `12 mod 11 = 1` (Occ da 33) ➔ `i = 1` (Occ da 11) ➔ `i = 2` (Occ da 44) ➔ `i = 3`: slot `4` libero ➔ Inserito in `T[4]`.
* `k = 23`: `23 mod 11 = 1` (Occ da 33) ➔ ... ➔ slot `5` libero ➔ Inserito in `T[5]`.

Stato Tabella `T[0..10]`:
- `T[0] = 22`, `T[1] = 33`, `T[2] = 11`, `T[3] = 44`, `T[4] = 12`, `T[5] = 23`, `T[6..10] = NIL`.

#### 2. Importanza della Marcatura DELETED
* La ricerca nell'indirizzamento aperto si arresta quando trova la prima cella `NIL` (assumendo che la chiave non sia presente).
* Se al posto di `33` mettessimo `NIL` in `T[1]`, la ricerca di `12` inizierebbe da `h1(12) = 1`, troverebbe `NIL` e **fallirebbe erroneamente**, ignorando che `12` si trova nello slot `4`.
* Impostando `DELETED`, la ricerca riconosce lo slot rimosso e **continua l'ispezione** negli slot successivi fino a trovare `12` nello slot `4`.

#### 3. Complessità
* **Inserimento/Ricerca**: Tempo medio **O(1 / (1 - alpha))** con `alpha = n / m`.

---
