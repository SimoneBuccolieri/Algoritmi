import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Completed exercises in our sessions and in ESERCIZI_SVOLTI:
# A.1.1 (Appello 18/06/2024), A.1.2 (Appello 07/02/2025), A.2.1 (19/09/2024), A.3.1 (14/02/2024), A.4.1 (18/06/2025), A.4.2 (10/09/2025), A.5.1 (02/07/2024), A.5.2 (20/01/2026), A.6.1 (31/01/2024), A.6.2 (24/01/2025)
# B.1.1 (18/06/2024), B.1.2 (20/01/2026), B.2.1 (07/02/2025), B.2.2 (16/06/2023), B.3.1 (31/01/2024), B.4.1 (14/02/2024), B.4.2 (18/06/2025), B.5.1 (04/07/2025), B.6.1 (24/01/2025)
# C.1.1 (Split), C.1.2 (stab), C.1.3 (Picco triangolare - fatto oggi!), C.2.1 (Prod), C.2.2 (triplet), C.2.3 (TriSort), C.3.1 (leaves), C.3.2 (diff), C.4.1 (isBalanced), C.4.2 (mdist), C.4.3 (Anc/LCA - fatto oggi!), C.5.1 (SortJoin), C.5.2 (Union), C.6.1 (CountInversions)
# D.1.1 (24/01/2025), D.1.2 (18/06/2024 Substring), D.2.1 (14/02/2024 Top-Down l(1,n)), D.3.1 (19/09/2024 c(i,j)), D.3.2 (10/09/2025 M(1,n)), D.6.1 (GreedyLast - fatto oggi!), D.6.2 (18/06/2025 SPT)

completed_set = {
    'A.1.1', 'A.1.2', 'A.2.1', 'A.3.1', 'A.4.1', 'A.4.2', 'A.5.1', 'A.5.2', 'A.6.1', 'A.6.2',
    'B.1.1', 'B.1.2', 'B.2.1', 'B.2.2', 'B.3.1', 'B.4.1', 'B.4.2', 'B.5.1', 'B.6.1',
    'C.1.1', 'C.1.2', 'C.1.3', 'C.2.1', 'C.2.2', 'C.2.3', 'C.3.1', 'C.3.2', 'C.4.1', 'C.4.2', 'C.4.3', 'C.5.1', 'C.5.2', 'C.6.1',
    'D.1.1', 'D.1.2', 'D.2.1', 'D.3.1', 'D.3.2', 'D.6.1', 'D.6.2'
}

def replace_header(m):
    code = m.group(1)
    status = '[x]' if code in completed_set else '[ ]'
    return f'#### {status} 📝 Esercizio {code}'

updated = re.sub(r'#### 📝 Esercizio ([A-D]\.[0-9]\.[0-9])', replace_header, content)

# Add progress summary at top
total = 57
done = len(completed_set)
pct = round((done / total) * 100, 1)

summary_box = f"""## 📊 STATO DI AVANZAMENTO E VALUTAZIONE
* **Esercizi Svolti e Consolidati**: **{done} / {total}** ({pct}%)
* **Giudizio di Preparazione Reale**: **8.5 / 10**
  * *Punti di Forza*: Divide et Impera e Ricerca Binaria, BST e Arricchimenti, Max-Heap, Tabelle Hash Doppio Hashing e Chaining, DP Bottom-Up 2D e Memoizzata Top-Down, Dimostrazioni Greedy.
  * *Margine di Miglioramento (1.5 punti per il 30L)*: DP con parentesizzazione di espressioni, DP con cammino su griglia 2D, B-Alberi teorici e problemi con array a salto (gap).

---
"""

updated = re.sub(r'(# 📚 SILLABO COMPLETO E DEFINITIVO PER L\'ESAME DI ALGORITMI \(Prof\. Baldan\)\n[^\n]+\n[^\n]+\n[^\n]+\n[^\n]+\n\n---\n)', r'\1\n' + summary_box, updated)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(updated)

print(f'Updated SILLABO_ESERCIZI_ESAME.md with {done}/{total} checked ({pct}%)')
