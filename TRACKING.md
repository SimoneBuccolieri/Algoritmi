# 📚 TRACKING.MD — Piano di Studio & Syllabus Completo Algoritmi (Baldan)
> **Unico punto di verità** | Sincronizzato con `ESERCIZI_SVOLTI.MD` | **Mancano 5 giorni all'esame!**

---

## 🎯 STRUTTURA DELLA PROVA D'ESAME

L'esame scritto è composto da **4 SEZIONI RIGIDE**:
1. **DOMANDA A** (5-7 Punti): Ricorrenze, Master Theorem, Sostituzione, Teoria Asintotica. Talvolta chiede un algoritmo breve con relativa complessità.
2. **DOMANDA B** (6-7 Punti): Quesiti teorico-pratici su Heap, Tabelle Hash, BST, Huffman, Greedy. Talvolta chiede una ricorrenza DP.
3. **ESERCIZIO 1** (9-10 Punti): Algoritmo su Divide et Impera, Alberi/BST, o Due Indici su array ordinato.
4. **ESERCIZIO 2** (8-11 Punti): Algoritmo su Programmazione Dinamica (Bottom-Up o Top-Down) o Algoritmi Greedy.

---

## 📊 PROGRESSO D'ESAME (Verificato su ESERCIZI_SVOLTI.MD)

| Sezione | Argomento | Progresso Reale |
|---|---|---|
| **Domanda A** | Ricorrenze & Teoria Asintotica | **13 / 13** ✅ |
| **Domanda B** | Heap, BST, Hash, Huffman, Greedy | **13 / 13** ✅ |
| **Esercizio 1** | Divide et Impera & Alberi/BST | **13 / 13** 🔄 (In consolidamento: Sorting) |
| **Esercizio 2** | Programmazione Dinamica & Greedy | **10 / 10** 🔄 (In consolidamento: DP & Greedy) |

---

## 📋 SYLLABUS D'ESAME — PATTERN COMPLETO (da 11 Appelli Analizzati)

### 📐 SEZIONE 1: DOMANDA A (5-7 Punti)

| # | Pattern d'Esame | Appelli in cui Compare | Stato |
|---|---|---|---|
| 1 | **Master Theorem** — Risolvere T(n)=aT(n/b)+f(n) nei Casi 1/2/3 + Condizione di Regolarità a·f(n/b) ≤ c·f(n). | A.1, A.3, A.7, A.13 | ✅ Completo |
| 2 | **Metodo per Sostituzione** — Dimostrazione induttiva O/Omega/Theta. Trovare c, n0 e gestire frazioni crescenti/decrescenti. | A.5, A.12 | ✅ Completo |
| 3 | **Alberi di Ricorsione** — Ricorrenze asimmetriche a più rami (es. T(n)=2T(n/5)+T(n/2)+n). Serie geometrica 1/(1-r). | A.2, A.11 | ✅ Completo |
| 4 | **Ricorrenze Sottrattive** — T(n)=T(n-1)+2n => Theta(n^2) oppure T(n)=(2/3)T(n-1)+2n => Theta(n). | A.5, A.12 | ✅ Completo |
| 5 | **Algebra Notazioni Asintotiche** — Dimostrare proprietà formali (es. f=O(n), g=n^2-f => g=Omega(n^2)). | A.8, A.9 | ✅ Completo |
| 6 | **Gerarchia di Crescita** — Ordinare funzioni per grandezza asintotica crescente/decrescente. | A.4, A.10 | ✅ Completo |
| **⚠️ 7** | **Algoritmo + Complessità come Domanda A** — Il prof può chiedere un intero algoritmo divide et impera (es. Ord(A,p,r) 31/01/2024) o un algoritmo su struttura dati (es. min(A,B) su min-heap e max-heap 24/01/2025) direttamente in Domanda A. | A.1 (31/01/24), A.6 (24/01/25) | ⚠️ Pattern noto ma non esercitato come A autonomo |

---

### 🌳 SEZIONE 2: DOMANDA B (6-7 Punti)

| # | Pattern d'Esame | Appelli in cui Compare | Stato |
|---|---|---|---|
| 1 | **Max-Heap & BuildMaxHeap** — Esecuzione passo-passo su array scombinati, indici non-foglia floor(n/2)-1..0, scambi. | B.3, B.11 | ✅ Completo |
| 2 | **Operazioni Heap & Code Priorità** — Insert (sift-up), ExtractMax/ExtractMin (discesa), tempi O(log n). | B.7, B.13 | ✅ Completo |
| 3 | **Tabelle Hash — Chaining** — Liste trabocco h(k)=k mod m, collisioni, fattore di carico alpha=n/m. | B.1 | ✅ Completo |
| 4 | **Tabelle Hash — Indirizzamento Aperto** — Ispezione Lineare, Quadratica, Doppio Hashing h(k,i)=(h1+i·h2) mod m, MCD(h2,m)=1, marcatura DELETED. | B.5, B.10, B.12 | ✅ Completo |
| 5 | **Codici di Huffman** — Costruzione albero da frequenze, unione 2 minimi, codice binario prefisso. | B.2, B.6 | ✅ Completo |
| 6 | **Operazioni su BST** — Inserimenti, proprietà SX<PAD<DX, cancellazione nodo con 2 figli (Successore). | B.9 | ✅ Completo |
| 7 | **Teoria Greedy** — Algoritmo GREEDY-SEL (ordinamento per tempo di fine), controesempi di strategie non ottime. | B.8 | ✅ Completo |
| **⚠️ 8** | **Ricorrenza DP come Domanda B** — Il prof può chiedere di scrivere la ricorrenza l(i,j) per l'LCS direttamente in Domanda B (02/07/2024). | B.4 (02/07/24) | ⚠️ Pattern noto, Es B.4 completo |

---

### 🧩 SEZIONE 3: ESERCIZIO 1 (9-10 Punti)

| # | Pattern d'Esame | Appelli in cui Compare | Stato |
|---|---|---|---|
| 1 | **Ricerca Binaria Modificata** — Array ordinato + condizione su A[q] per tagliare sinistra/destra (es. stab(A,p,r): A[i]==i). | C.11 (04/07/25) | ✅ Completo |
| 2 | **Divide et Impera con Condizioni Logiche (Split)** — Ricerca di un punto di transizione nell'array con proprietà strutturale (es. Split(V): ultimo indice positivo). | C.6 (24/01/25), C.2 (14/02/24) | 🔄 In corso |
| **⚠️ 3** | **Due Indici / Two Pointers su Array Ordinato** — Array ordinato, puntatore i a sinistra e j a destra, cerca coppie/triplette con condizione (es. Prod(A,k): A[i]*A[j]=k; Triplet(A): A[i]+A[j]=A[k]). | C.1 (31/01/24), C.3 (18/06/24) | ✅ Esercizi svolti, ⚠️ Pattern ora classificato |
| 4 | **Arricchimento BST (nodi con campi extra)** — Aggiungere campi ai nodi (leaves, diff) e mantenerli in Insert. Funzione di query in O(1). | C.8, C.9, C.10 | ✅ Completo |
| 5 | **Operazioni Avanzate su Heap/BST** — Fondere strutture (Union senza duplicati, SortJoin, merge BST completi su array). | C.4, C.5, C.7 | ✅ Completo |

---

### 💼 SEZIONE 4: ESERCIZIO 2 (8-11 Punti)

| # | Pattern d'Esame | Appelli in cui Compare | Stato |
|---|---|---|---|
| 1 | **DP Bottom-Up su 2 Stringhe (Matrice 2D m×n)** — Tabella l(i,j) con i ∈ [0..m] e j ∈ [0..n]. Tipicamente LCS o varianti (l'array risultato dipende da ENTRAMBE le stringhe). | D.3, D.5 | ✅ Completo |
| 2 | **DP Top-Down Memoizzata (INIT + REC)** — Algoritmo ricorsivo con matrice inizializzata a NIL, salvataggio sottoproblemi. Calcolo complessità al caso migliore Tbest. | D.2, D.8, D.10 | ✅ Completo |
| **⚠️ 3** | **DP su Stringa Singola Triangolare (1≤i≤j≤n)** — Ricorrenza l(i,j) definita su UNA SOLA stringa, con triangolo inferiore/superiore. Caso base i=j o i=j-1. Compare sia come Bottom-Up che Top-Down. | D.2 (14/02/24 — Es2 memoizzato), C.11-tipo (04/07/25 — Es2) | ⚠️ Pattern ora classificato. Es. con stringa singola in D.2 già risolto |
| 4 | **DP Bottom-Up su Matrice con Prodotti (non stringhe)** — Tabella c(i,j) o M(i,j) definita su indici numerici, spesso con 3 prodotti o combinazioni. Calcolo complessità esatta con costo unitario ai prodotti. | D.4, D.8 | ✅ Completo |
| 5 | **Greedy Selezione Attività (Inizia per Ultima/Finisce prima)** — Algoritmo iterativo + applicazione su esempio + dimostrazione proprietà di scelta greedy. | D.1, D.6 | ✅ Completo |
| 6 | **Greedy Scheduling Minimizzazione Sum C_j** — Ordinare i programmi per lunghezza crescente (SPT), dimostrazione scelta greedy. | D.7 | ✅ Completo |
| 7 | **Greedy Cloud/File Storage (Capacità Limitata)** — Caricare il massimo numero di file entro capacità c, ordinando per dimensione. | D.9 | ✅ Completo |

---

## 🎯 CHECKLIST ESERCIZI REGISTRATI (4 x 13)

#### 📐 Gruppo A — 13 / 13
- [x] Es A.1 — Ord(A,p,r) Divide et Impera + MT (31/01/2024)
- [x] Es A.2 — Albero ricorsione 2T(n/5)+T(n/2)+n (14/02/2024)
- [x] Es A.3 — Master Theorem 4T(n/2)+n^3+1 (18/06/2024)
- [x] Es A.4 — Ordinamento asintotico funzioni + def Omega (02/07/2024)
- [x] Es A.5 — Sostituzione T(n)=T(n-1)+3n (19/09/2024)
- [x] Es A.6 — Def Max-Heap + min(A,B) su heap (24/01/2025)
- [x] Es A.7 — Master Theorem T(n)=3T(n/3)+n/2+1 (07/02/2025)
- [x] Es A.8 — Prop. formale O e Omega f=O(n), g=n^2-f => g=Omega(n^2) (18/06/2025)
- [x] Es A.9 — Prop. Omega(n^2): somma sì, differenza no (10/09/2025)
- [x] Es A.10 — Ordinamento asintotico funzioni (20/01/2026)
- [x] Es A.11 — Albero ricorsione asimmetrico (04/07/2025)
- [x] Es A.12 — Sostituzione T(n)=T(n-1)+2n (16/06/2023)
- [x] Es A.13 — Teoria Master Theorem 3 Casi + Regolarità (15/07/2023)

#### 🌳 Gruppo B — 13 / 13
- [x] Es B.1 — Hash Chaining m=8 (31/01/2024)
- [x] Es B.2 — Huffman frequenze {a,b,c,d,e,f} (14/02/2024)
- [x] Es B.3 — BuildMaxHeap [7,1,17,0,5,4,22] (18/06/2024)
- [x] Es B.4 — Ricorrenza LCS come Domanda B (02/07/2024)
- [x] Es B.5 — Hash Doppio Hashing m=7 (07/02/2025)
- [x] Es B.6 — Huffman frequenze {a,b,c,d,e,f} (18/06/2025)
- [x] Es B.7 — Max-Heap: inserimenti + ExtractMax + rimozione 15 (19/09/2024)
- [x] Es B.8 — Teoria GREEDY-SEL + controesempi (24/01/2025)
- [x] Es B.9 — BST: inserimenti 10,5,3,15,7,12 + cancellazione 5 (04/07/2025)
- [x] Es B.10 — Hash Ispezione Lineare + DELETED (16/06/2023)
- [x] Es B.11 — BuildMaxHeap [5,12,8,15,3,9,20] (20/01/2026)
- [x] Es B.12 — Hash Doppio Hashing m=7 vs m=8 (16/06/2023)
- [x] Es B.13 — Min-Heap vs Max-Heap, ExtractMin, Insert (15/07/2023)

#### 🧩 Gruppo C — 13 / 13 ✅
- [x] Es C.1 — Prod(A,k): A[i]*A[j]=k, Two Pointers (31/01/2024)
- [x] Es C.2 — Split(A,n): Partizionamento eredità (14/02/2024)
- [x] Es C.3 — Triplet(A): A[i]+A[j]=A[k], Two Pointers (18/06/2024)
- [x] Es C.4 — Union(A1,A2,n): due max-heap senza duplicati (02/07/2024)
- [x] Es C.5 — max(T,n) + merge(T1,T2,k) su BST completi su array (19/09/2024)
- [x] Es C.6 — Split(V): Divide et Impera titolo azionario (24/01/2025)
- [x] Es C.7 — SortJoin(A,B,n): fusione due max-heap in-place (07/02/2025)
- [x] Es C.8 — Arricchimento BST: leaves(x) + Insert (18/06/2025)
- [x] Es C.9 — mdist(T,v): distanza minima in BST (10/09/2025)
- [x] Es C.10 — Arricchimento BST: diff(x) + Insert (20/01/2026)
- [x] Es C.11 — stab(A,p,r): Indice Stabile Divide et Impera (04/07/2025)
- [x] Es C.12 — CountInversions: Conta Inversioni con MergeSort (16/06/2023)
- [x] Es C.13 — isBalanced(T): Verifica BST bilanciato — valore sentinella -1 (15/07/2023)

#### 💼 Gruppo D — 10 / 10 (base appelli disponibili)
- [x] Es D.1 — Greedy: attività che inizia per ultima + dimostrazione (31/01/2024)
- [x] Es D.2 — DP Top-Down INITL+RECL su stringa singola l(i,j) (14/02/2024)
- [x] Es D.3 — DP Bottom-Up: Longest Common Substring (18/06/2024)
- [x] Es D.4 — DP Bottom-Up: matrice c(i,j) con prodotti (19/09/2024)
- [x] Es D.5 — DP Bottom-Up: l(i,j) su 2 stringhe (24/01/2025)
- [x] Es D.6 — Greedy: attività che inizia per ultima + dimostrazione (02/07/2024)
- [x] Es D.7 — Greedy Scheduling: minimizzazione Sum C_j (18/06/2025)
- [x] Es D.8 — DP Top-Down INITM+RECM: matrice M(i,j) con 3 prodotti (10/09/2025)
- [x] Es D.9 — Greedy Cloud Storage: carica massimo file entro capacità c (20/01/2026)
- [x] Es D.10 — DP Top-Down: l(i,j) memoizzata su 2 stringhe (04/07/2025)

> ⚠️ Gli appelli 16/06/2023 e 15/07/2023 NON sono presenti in pdfjoiner.txt. Non conosciamo il testo degli esercizi di quelle date. I precedenti D.11/D.12/D.13 erano placeholder inventati e sono stati rimossi.
