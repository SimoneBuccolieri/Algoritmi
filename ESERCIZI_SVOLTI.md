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









