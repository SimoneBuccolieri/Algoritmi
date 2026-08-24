# 📚 TRACKING.MD — Piano di Studio Algoritmi & Strutture Dati (Baldan)
> **Unico punto di verità** | Aggiornato: 2026-07-16

---

## 🎯 STRUTTURA ESAME
- **Domanda A** (Teoria/Breve)
- **Domanda B** (Teoria/Breve)
- **Esercizio 1** (Algoritmo): Al 90% sarà **BST (Alberi)** o **Divide et Impera**. L'obiettivo è massimizzare la riuscita di questo esercizio.
- **Esercizio 2** (Algoritmo / PD / Greedy)

---

## 📊 SYLLABUS & STATO AVANZAMENTO (Ripresa da Zero dopo 1 Mese)

| # | Macro-argomento | Stato | Padronanza | Note |
|---|----------------|-------|-----------|------|
| 1 | **Equazioni di Ricorrenza** | 🔄 Ripasso (In corso) | MT, Sostituzione, Alberi Ricorrenza | Aggiungere: Induzione Forte e Casi Speciali (radici) |
| 2 | **Ricorsione su Alberi** | 🔄 Da riprendere | BST Visite (mdist), Arricchimenti (leaves, diff) | Mancano: Verifica BST, RBT, Build Heap |
| 3 | **Hashing & Codifica** | ⬜ Da fare | — | Divisione/Moltiplicazione, Open Addressing, Huffman |
| 4 | **Divide et Impera** | 🔄 Da riprendere | Magic Index, Split(V), Ricerca Binaria | Mancano: Pattern array "Due Indici" (Prod/Triplet) |
| 5 | **Programmazione Dinamica** | ⬜ Da fare | — | LCS, LIS, Edit Distance, Matrix Chain, Scansioni Tabelle |
| 6 | **Algoritmi Greedy** | ⬜ Da fare | Selezione Attività Compatibili (e dimostrazione) | Mancano: Varianti Scheduling, File Cloud |
| 7 | **Analisi Ammortizzata** | ⬜ Da fare | — | Metodo Potenziale, Aggregato, Accounting |
| 8 | **Invarianti & Induzione** | ⬜ Da fare | — | Inizializzazione, Mantenimento, Conclusione |

---

## 🎯 PROGRESSO GRUPPI DI ESERCIZI (10 per Gruppo)

| Gruppo | Descrizione | Stato / Esercizi Guidati (G) e Autonomi (A) | Progresso |
|---|---|---|---|
| **Gruppo A** | **Domande A** (Ricorrenze e Teoria Asintotica) | 🔄 In corso | 10 / 13 |
| **Gruppo B** | **Domande B** (Heap, BST base, Huffman, Hash) | 🔄 In corso (Es B.10 completato) | 10 / 13 |
| **Gruppo C** | **Esercizi 1** (Divide et Impera, Alberi/BST) | 🔄 In corso | 10 / 13 |
| **Gruppo D** | **Esercizi 2** (Programmazione Dinamica e Greedy) | 🔄 In corso | 10 / 13 |

### Liste Dettagliate Esercizi

#### Gruppo A: Domande A (Ricorrenze e Teoria Asintotica)
- [x] **Es A.1 (G)**: Ord(A,p,r) ricorrenza & MT (Appello 31/01/2024)
- [x] **Es A.2 (G)**: Limite asintotico stretto per T(n) = 2T(n/5) + T(n/2) + n (Appello 14/02/2024)
- [x] **Es A.3 (G)**: Risoluzione T(n) = 4T(n/2) + n^3 + 1 (Appello 18/06/2024)
- [x] **Es A.4 (A)**: Ordinamento asintotico di funzioni (Appello 02/07/2024)
- [x] **Es A.5 (A)**: Risoluzione T(n) = T(n-1) + 3n + 1 (Appello 19/09/2024)
- [x] **Es A.6 (A)**: Definizione max-heap & Min(A,B) (Appello 24/01/2025)
- [x] **Es A.7 (A)**: Risoluzione T(n) = 3T(n/3) + n^2 + 1 (Appello 07/02/2025)
- [x] **Es A.8 (A)**: Relazioni asintotiche O e Omega (Appello 18/06/2025)
- [x] **Es A.9 (A)**: Dimostrazione proprietà Omega(n^2) (Appello 10/09/2025)
- [x] **Es A.10 (A)**: Ordinamento asintotico di funzioni (Appello 20/01/2026)
- [ ] **Es A.11 (A)**: Ricorrenza albero 3 rami T(n) = T(n/4) + T(n/2) + T(n/4) + n (Appello 04/07/2025)
- [ ] **Es A.12 (A)**: Risoluzione per sostituzione T(n) = T(n-1) + 2n (Appello 16/06/2023)
- [ ] **Es A.13 (A)**: Master Theorem tre casi e condizioni di regolarità (Appello 15/07/2023)

#### Gruppo B: Domande B (Heap, BST base, Huffman, Hash)
- [x] **Es B.1 (G)**: Tabella hash chaining m=8 (Appello 31/01/2024)
- [x] **Es B.2 (G)**: Codice Huffman alfabeto e frequenze (Appello 14/02/2024)
- [x] **Es B.3 (G)**: BuildMaxHeap su array [7, 1, 17, 0, 5, 4, 22] (Appello 18/06/2024)
- [x] **Es B.4 (A)**: Ricorrenza lunghezze LCS (Appello 02/07/2024)
- [x] **Es B.5 (A)**: Tabella hash indirizzamento aperto doppio hash (Appello 07/02/2025)
- [x] **Es B.6 (A)**: Codice Huffman alfabeto e frequenze (Appello 18/06/2025)
- [x] **Es B.7 (A)**: Inserimenti successivi in max-heap e rimozione ExtractMax (Appello 19/09/2024)
- [x] **Es B.8 (A)**: Teoria GREEDY-SEL e controesempio algoritmo non ottimo (Appello 24/01/2025)
- [x] **Es B.9 (A)**: BST Inserimenti 10,5,3,15,7,12 e Cancellazione nodo 5 (Appello 04/07/2025)
- [x] **Es B.10 (A)**: Tabella hash indirizzamento aperto ispezione lineare e marcatura DELETED (Appello 16/06/2023)
- [ ] **Es B.11 (A)**: Max-heap BuildMaxHeap su array [5, 12, 8, 15, 3, 9, 20] (Appello 20/01/2026)
- [ ] **Es B.12 (A)**: Tabella hash indirizzamento aperto ispezione lineare (Appello 16/06/2023)
- [ ] **Es B.13 (A)**: Min-heap vs Max-heap e Coda con Priorità (Appello 15/07/2023)

#### Gruppo C: Esercizi 1 (Divide et Impera, Alberi/BST)
- [x] **Es C.1 (G)**: Prod(A,k) per A[i]*A[j] = k (Appello 31/01/2024)
- [x] **Es C.2 (G)**: Split(A,n) partizionamento eredità (Appello 14/02/2024)
- [x] **Es C.3 (G)**: Algoritmo triplet(A) per A[i]+A[j]=A[k] (Appello 18/06/2024)
- [x] **Es C.4 (A)**: Union(A1,A2,n) di due max-heap senza duplicati (Appello 02/07/2024)
- [x] **Es C.5 (A)**: Massimo e Merge di BST completi su array (Appello 19/09/2024)
- [x] **Es C.6 (A)**: Split(V) Divide et Impera stabilità titolo (Appello 24/01/2025)
- [x] **Es C.7 (A)**: SortJoin(A,B,n) di due max-heap (Appello 07/02/2025)
- [x] **Es C.8 (A)**: Arricchimento BST leaves(x) e insert (Appello 18/06/2025)
- [x] **Es C.9 (A)**: Distanza minima in BST mdist(T,v) (Appello 10/09/2025)
- [x] **Es C.10 (A)**: Arricchimento BST massima differenza diff(x) e insert (Appello 20/01/2026)
- [ ] **Es C.11 (A)**: Indice Stabile stab(A,n) in array ordinato con Divide et Impera (Appello 04/07/2025)
- [ ] **Es C.12 (A)**: Conta Inversioni inversions(A,n) mediante MergeSort (Appello 16/06/2023)
- [ ] **Es C.13 (A)**: Verifica BST quasi-bilanciato isBalanced(T) (Appello 15/07/2023)

#### Gruppo D: Esercizi 2 (Programmazione Dinamica e Greedy)
- [x] **Es D.1 (G)**: Selezione attività greedy con inizio per ultimo (Appello 31/01/2024)
- [x] **Es D.2 (G)**: Calcolo memoizzato ricorrenza l(i,j) (Appello 14/02/2024)
- [x] **Es D.3 (G)**: Longest Common Substring (Appello 18/06/2024)
- [x] **Es D.4 (A)**: Algoritmo bottom-up per tabella c(i,j) (Appello 02/07/2024)
- [x] **Es D.5 (A)**: Algoritmo bottom-up per ricorrenza due stringhe ℓ(i, j) (Appello 24/01/2025)
- [x] **Es D.6 (A)**: Greedy Selezione Attività con inizio per ultimo (Appello 07/02/2025)
- [x] **Es D.7 (A)**: Greedy Scheduling Programmi sum C_j (Appello 18/06/2025)
- [x] **Es D.8 (A)**: DP Memoizzata Ricorrenza M(i,j) con 3 prodotti (Appello 10/09/2025)
- [x] **Es D.9 (A)**: Greedy Caricamento File Cloud capacità limitata c (Appello 20/01/2026)
- [x] **Es D.10 (A)**: DP Memoizzata Ricorrenza ℓ(i, j) con Sommatoria (Appello 04/07/2025)
- [ ] **Es D.11 (A)**: LIS — Longest Increasing Subsequence (Formulazione DP 1D)
- [ ] **Es D.12 (A)**: DP Zaino 0/1 con capacità W (Formulazione Matriciale V(i,w))
- [ ] **Es D.13 (A)**: Matrix Chain Multiplication m[i,j] (Punti di taglio k)

---

## 📈 SESSIONI DI STUDIO (Storico e Attuali)

| Data | Argomenti Trattati | Capito ✅ | Difficoltà ❗ | Prossima sessione consigliata |
|------|--------------------|----------|--------------|-------------------------------|
| 2026-05-04 | **Pillar 1**: Master Theorem, Sostituzione. <br> **Pillar 2**: Ricorsione con tuple, Verifica ABR. | MT, Parametri ricorsivi. | Dimostrazioni formali e casi NIL. | Operazioni BST (Successore, Cancellazione). |
| 2026-05-08 | **Pillar 2**: Successore e Cancellazione BST (Completi). <br> Proprietà RBT/Heap. | Logica Successore e Transplant. | Casi 2 e 3 della Cancellazione (subtilités). | RBT Fixup, Heap Build O(n). |
| 2026-05-11 | **Pillar 4**: Divide et Impera (Ricerca Binaria). | Condizioni per array ordinati. | Gestione indici e rami ricorsivi asimmetrici. | Merge/Quick Sort, Inversioni. |
| 2026-05-18 | **Pillars 4, 2, 6**: D&C, BST Arricchiti, Greedy. | Logica scarto D&C; routing BST; Proprietà scelta Greedy. | Gestione ritorni BST; casi limite Greedy. | Programmazione Dinamica (Blocco B). |
| 2026-08-04 | **Ripresa Studio**: Risolto Es A.2 (Ricorrenza a più termini). | Albero di ricorrenza e sostituzione per T(n) = 2T(n/5) + T(n/2) + n. | Nessuna, concetto del 9/10 n assimilato. | Prossimo in scaletta: Es A.3 (Ricorrenza MT) o Es C.3 (Algoritmo Triplet). |
| 2026-07-16 | **Riorganizzazione Piano**: Passaggio a 4 Gruppi strutturati come lo scritto (Domanda A, Domanda B, Es 1, Es 2). | Struttura dello scritto d'esame. | Adattamento dello studio agli appelli reali. | Continuare Gruppo A (Es A.2). |
| 2026-08-18 | **Gruppo D**: DP Bottom-Up 2D Matrice e Stringhe (Es D.4 e Es D.5). | Metodo delle Frecce per indici Bottom-Up (`n-2 down to i`). | Memoizzazione e Greedy da approfondire nei prossimi esercizi. | Focus su Greedy (Es D.6, D.7, D.9) e DP Memoizzata (Es D.8, D.10). |

---

## 📝 NOTE METODOLOGICHE
- **Complessità Asintotica**: Ogni soluzione deve includere l'analisi T(n).
- **Baldan Style**: Rigore formale, uso dei template `GUIDA_*.txt` e attenzione alle dimostrazioni.
- **Top-Down Logic**: Definire la ricorrenza prima di scrivere lo pseudocodice.
- **Formattazione**: DIVIETO ASSOLUTO di usare il carattere "$" nei markdown per le espressioni matematiche.
