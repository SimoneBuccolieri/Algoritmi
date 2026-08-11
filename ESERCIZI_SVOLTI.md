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



