# 📔 APPUNTI DI TEORIA — Algoritmi

## 1. Master Theorem (La "Ricetta")
Si usa per risolvere equazioni di ricorrenza nella forma: **T(n) = a * T(n / b) + f(n)**.

### I Protagonisti:
- **Lottatore 1 (Fondo)**: n elevato alla (logaritmo in base b di a).
- **Lottatore 2 (Superficie)**: f(n).

### I 3 Casi con Esempi:

#### **Caso 1: Vince il Fondo**
L'algoritmo spende la maggior parte del tempo nelle chiamate ricorsive.
- **Esempio (Domanda 1)**: T(n) = 4T(n/2) + n log n
  - a=4, b=2 => n^(log_2 4) = **n²**
  - f(n) = n log n
  - Poiché n² cresce più di n log n, il fondo vince.
  - **Risultato: T(n) = Theta(n²)**

#### **Caso 2: Il Pareggio**
Il lavoro è distribuito equamente. Si moltiplica f(n) per log n (il numero di livelli).
- **Esempio (Merge Sort)**: T(n) = 2T(n/2) + n
  - a=2, b=2 => n^(log_2 2) = **n**
  - f(n) = **n**
  - C'è un pareggio perfetto (n vs n).
  - **Risultato: T(n) = Theta(n log n)**

#### **Caso 3: Vince la Superficie**
Il grosso del lavoro viene fatto alla radice. Richiede la verifica di regolarità.
- **Esempio (Domanda 10)**: T(n) = T(4n/5) + n/2 + log n
  - a=1, b=5/4 => n^(log_1.25 1) = **1**
  - f(n) = n/2 + log n (Tipo Lineare)
  - Siccome n > 1, la superficie vince.
  - **Risultato: T(n) = Theta(n)**
  - *Verifica Regolarità*: f(4n/5) <= k * f(n) => (2n/5 + log 4n/5) < k(n/2 + log n). Ok per k=0.9.

---

## 2. La Scala del Potere (Crescita Funzioni)
Dal più debole al più forte:
1. **Costante**: 1
2. **Logaritmica**: log n
3. **Lineare**: n
4. **Linearitmica**: n * log n
5. **Polinomiale**: n² , n³ ...
6. **Esponenziale**: 2ⁿ

---

## 3. Kit di Sopravvivenza Matematica (Logaritmi)
1. **log(a / b) = log(a) - log(b)**
2. **log(a * b) = log(a) + log(b)**
3. **log(n^k) = k * log(n)**
4. **Scambio Magico**: n^(log_b a) = a^(log_b n)

---

## 4. Metodo della Sostituzione (Induzione)
Si usa quando il Master Theorem non è applicabile.
- **Esempio (Domanda 6)**: T(n) = 3T(n/5) + T(n/6) + n
- **Esempio (Domanda 6)**: T(n) = 3T(n/5) + T(n/6) + n
  - **Somma pesi**: 3/5 + 1/6 = 23/30.
  - **La Regola d'oro**:
    - Se Somma Pesi < 1: Il "fondo" vale n^p con p < 1. Vince f(n)=n. -> **Theta(n)**.
    - Se Somma Pesi = 1: Il "fondo" vale n. Se f(n)=n, è pareggio. -> **Theta(n log n)**.
    - Se Somma Pesi > 1: Il "fondo" vale n^p con p > 1. Vince il fondo. -> **Theta(n^p)**.
  - In questo caso (23/30 < 1), ipotizziamo **Theta(n)**.
  - **Limite Inferiore (Omega)**: Dimostriamo T(n) >= cn.
    - (23/30)cn + n >= cn  => n >= cn(7/30) => **c <= 30/7**.
  - **Limite Superiore (O)**: Dimostriamo T(n) <= dn.
    - (23/30)dn + n <= dn  => n <= dn(7/30) => **d >= 30/7**.
  - **Conclusione**: T(n) = Theta(n).

---

## 5. Ricorsione su Alberi (Template e Casi Studio)

### Il Template "Tupla"
Si usa per far "risalire" più informazioni dai figli al padre.
```text
funzione(x)
  if x == NIL return (valori_neutri)
  (ris_S) = funzione(x.left)
  (ris_D) = funzione(x.right)
  // elabora ris_S e ris_D per creare il tuo risultato
  return (tupla_risultato)
```

### Casi Studio:

**1. Somma Massima Radice-Foglia (Domanda 26)**
```text
calc(x)
  if x == NIL return 0
  return x.key + max(calc(x.left), calc(x.right))
```

**2. Verifica BST (isABR) - Metodo Top-Down**
```text
check(x, min, max)
  if x == NIL return true
  if (x.key <= min OR x.key >= max) return false
  return check(x.left, min, x.key) AND check(x.right, x.key, max)
```


**3. isSumHeap (Visita base)**
```text
isSumHeap(x)
  if x == NIL return true
  s = 0
  if x.left != NIL s += x.left.key
  if x.right != NIL s += x.right.key
  return (x.key >= s) AND isSumHeap(x.left) AND isSumHeap(x.right)
```

---

## 6. Operazioni BST (Dettaglio)

### TR-SUCCESSOR(x)
Trova il nodo con la chiave minima tra quelle maggiori di `x.key`.
**Complessità**: $O(h)$ dove $h$ è l'altezza.
```text
TR-SUCCESSOR(x)
  if x.right != NIL
    return TR-MINIMUM(x.right)
  y = x.p
  while y != NIL and x == y.right
    x = y
    y = y.p
  return y
```

### TR-DELETE(T, z) - I 3 Casi
1. **Z non ha figli**: Si elimina z e si mette NIL al padre.
2. **Z ha un solo figlio**: Il figlio di z sale al posto di z.
3. **Z ha due figli**: 
   - Si trova il successore `y` di `z`.
   - `y` prenderà il posto di `z`.
   - Se `y` non è figlio diretto di `z`, bisogna prima gestire il sottoalbero di `y`.

#### Funzione d'appoggio: TRANSPLANT(T, u, v)
Sostituisce il sottoalbero che ha radice nel nodo `u` con il sottoalbero che ha radice nel nodo `v`.
```text
TRANSPLANT(T, u, v)
  if u.p == NIL
    T.root = v
  else if u == u.p.left
    u.p.left = v
  else
    u.p.right = v
  if v != NIL
    v.p = u.p
```

---

## 6. Proprietà Strutture Dati (Cheatsheet)

| Struttura | Proprietà Chiave | Ordinamento | Altezza (Pessimo) |
| :--- | :--- | :--- | :--- |
| **BST** | sx <= radice <= dx | In-order | $O(n)$ |
| **RBT** | 5 Regole (Rosso/Nero) | In-order | $O(\log n)$ |
| **Heap** | Padre >= Figli (Max) | Nessuno | $O(\log n)$ |

### Le 5 Regole RBT:
1. Ogni nodo è **Rosso** o **Nero**.
2. La **Radice** è **Nera**.
3. Le foglie (**NIL**) sono **Nere**.
4. Un nodo **Rosso** ha solo figli **Neri**.
5. **Black-height**: ogni cammino nodo->foglia ha lo stesso numero di neri.

---

## 7. Arricchimento Strutture Dati (Augmentation)

È la tecnica preferita di Baldan negli ultimi appelli. Si tratta di aggiungere campi ai nodi per rispondere a query in $O(1)$.

### Teorema dell'Arricchimento
Un campo `f` può essere mantenuto durante `INSERT` e `DELETE` senza aumentare la complessità asintotica se `f` in un nodo `x` può essere calcolato usando solo:
1. Informazioni in `x` (es. `x.key`).
2. Informazioni nei **figli** di `x` (`x.left.f` e `x.right.f`).

### Pattern Modifica INSERT:
1. **Discesa**: Mentre cerchi il posto dove inserire `z`, aggiorna i campi dei nodi che attraversi (es. incrementa `x.size`).
2. **Inserimento**: Inizializza i campi di `z` (es. `z.size = 1`, `z.h = 1`).
3. **Risalita (Fixup)**: Risali dal padre di `z` verso la radice per aggiornare campi che dipendono dall'altezza (es. `x.h = 1 + max(x.left.h, x.right.h)`).

### Esempi Comuni:
- `x.size`: Numero di nodi nel sottoalbero.
- `x.h`: Altezza del sottoalbero.
- `x.sum`: Somma delle chiavi nel sottoalbero.
- `x.max_gap`: Differenza massima tra chiavi nel sottoalbero.
