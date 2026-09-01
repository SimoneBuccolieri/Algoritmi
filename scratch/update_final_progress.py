import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Tag 3Order (Appello 30 Gennaio 2023)
old_target = r'#### (?:\[.\]\s+)?📝 Esercizio C\.2\.3[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.2.3 (Appello 14 Febbraio 2024 / 30 Gennaio 2023, Esercizio 1 — 10 Punti) — `TriSort` / `3Order`\n> **Stato**: ⭐ SVOLTO OGGI (31/08) | **Valutazione Reale**: `10/10 — Partizione a 3 puntatori su resti modulo 3 in tempo O(n) e spazio O(1) in-place svolta perfettamente al primo colpo.`'
text = re.sub(old_target, new_target, text)

# Tag SearchUnique / Insert con x.min (Appello 24 Gennaio 2022)
b_search_unique = """
#### [x] 📝 Esercizio B.5.2 (Appello 24 Gennaio 2022, Domanda B — 6 Punti) — `SearchUnique(T, k)`
> **Stato**: ⭐ SVOLTO OGGI (31/08) | **Valutazione Reale**: `9.0/10 — Ricerca chiave unica in BST in tempo O(h) con verifica dei sottoalberi.`
*   **Traccia Integrale**:
    Realizzare una funzione `SearchUnique(T, k)` che dato un BST `T` verifica se la chiave `k` è presente in un unico nodo (restituendo il nodo) oppure se è assente/duplicata (restituendo `nil`) in tempo `O(h)`.
"""
if 'SearchUnique' not in text:
    text = text.replace('### 🔹 PATTERN B.6: Teoria Greedy', b_search_unique + '\n---\n\n### 🔹 PATTERN B.6: Teoria Greedy')

# Tag Insert x.min
c_min_insert = """
#### [x] 📝 Esercizio C.3.4 (Appello 24 Gennaio 2022, Esercizio 1 — 9 Punti) — BST con Campo `x.min`
> **Stato**: ⭐ SVOLTO OGGI (31/08) | **Valutazione Reale**: `9.5/10 — Inserimento Insert(T, z) con aggiornamento x.min in tempo O(h) svolto in autonomia.`
*   **Traccia Integrale**:
    Si consideri una variante dei BST nella quale i nodi `x` hanno un campo `x.min` (minimo delle chiavi nel sottoalbero di `x`). Realizzare la procedura `Insert(T, z)` in tempo `O(h)`.
"""
if 'x.min' not in text:
    text = text.replace('### 🔹 PATTERN C.4: Visite e Proprietà', c_min_insert + '\n---\n\n### 🔹 PATTERN C.4: Visite e Proprietà')

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated SILLABO_ESERCIZI_ESAME.md successfully!')
