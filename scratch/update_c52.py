import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.5\.2[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.5.2 (Appello 02 Luglio 2024, Esercizio 1 — 10 Punti) — `Union(A1, A2, n)`\n> **Stato**: ⭐ CONSOLIDATO IL 30/08 | **Valutazione Reale**: `9.5/10 — Union di max-heap in tempo lineare O(n) con BuildMaxHeap; motivato il confronto con HeapInsert O(n log n).`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.5.2 successfully!')
