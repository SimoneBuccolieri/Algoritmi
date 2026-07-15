# 📚 TRACKING.MD — Piano di Studio Algoritmi & Strutture Dati (Baldan)
> **Unico punto di verità** | Aggiornato: 2026-05-11

---

## 🎯 STRUTTURA ESAME
- **Domanda A** (Teoria/Breve)
- **Domanda B** (Teoria/Breve)
- **Esercizio 1** (Algoritmo): Al 90% sarà **BST (Alberi)** o **Divide et Impera**. L'obiettivo è massimizzare la riuscita di questo esercizio.
- **Esercizio 2** (Algoritmo / PD / Greedy)

---

## 📊 SYLLABUS & STATO AVANZAMENTO

| # | Macro-argomento | Stato | Padronanza | Note |
|---|----------------|-------|-----------|------|
| 1 | **Equazioni di Ricorrenza** | ✅ Completato | MT, Sostituzione, Alberi Ricorrenza | Aggiungere: Induzione Forte e Casi Speciali (radici) |
| 2 | **Ricorsione su Alberi** | 🔄 In corso (80%) | BST Visite (mdist), Arricchimenti (leaves, diff) | Mancano: Verifica BST, RBT, Build Heap |
| 3 | **Hashing & Codifica** | ⬜ Da fare | — | Divisione/Moltiplicazione, Open Addressing, Huffman |
| 4 | **Divide et Impera** | ✅ Completato (per Es 1) | Magic Index, Split(V), Ricerca Binaria | Mancano: Pattern array "Due Indici" (Prod/Triplet) |
| 5 | **Programmazione Dinamica** | ⬜ Da fare | — | LCS, LIS, Edit Distance, Matrix Chain, Scansioni Tabelle |
| 6 | **Algoritmi Greedy** | 🔄 In corso (30%) | Selezione Attività Compatibili (e dimostrazione) | Mancano: Varianti Scheduling, File Cloud |
| 7 | **Analisi Ammortizzata** | ⬜ Da fare | — | Metodo Potenziale, Aggregato, Accounting |
| 8 | **Invarianti & Induzione** | ⬜ Da fare | — | Inizializzazione, Mantenimento, Conclusione |

---

## 📈 SESSIONI DI STUDIO

| Data | Argomenti Trattati | Capito ✅ | Difficoltà ❗ | Prossima sessione consigliata |
|------|--------------------|----------|--------------|-------------------------------|
| 2026-05-04 | **Pillar 1**: Master Theorem, Sostituzione. <br> **Pillar 2**: Ricorsione con tuple, Verifica ABR. | MT, Parametri ricorsivi. | Dimostrazioni formali e casi NIL. | Operazioni BST (Successore, Cancellazione). |
| 2026-05-08 | **Pillar 2**: Successore e Cancellazione BST (Completi). <br> Proprietà RBT/Heap. | Logica Successore e Transplant. | Casi 2 e 3 della Cancellazione (subtilités). | RBT Fixup, Heap Build $O(n)$. |
| 2026-05-11 | **Pillar 4**: Divide et Impera (Ricerca Binaria). | Condizioni per array ordinati. | Gestione indici e rami ricorsivi asimmetrici. | Merge/Quick Sort, Inversioni. |
| 2026-05-18 | **Pillars 4, 2, 6**: D&C, BST Arricchiti, Greedy. | Logica scarto D&C; routing BST; Proprietà scelta Greedy. | Gestione ritorni BST; casi limite Greedy. | Programmazione Dinamica (Blocco B). |

---

## 📝 NOTE METODOLOGICHE
- **Complessità Asintotica**: Ogni soluzione deve includere l'analisi $T(n)$.
- **Baldan Style**: Rigore formale, uso dei template `GUIDA_*.txt` e attenzione alle dimostrazioni.
- **Top-Down Logic**: Definire la ricorrenza prima di scrivere lo pseudocodice.
