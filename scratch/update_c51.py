import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.5\.1[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.5.1 (Appello 07 Febbraio 2025, Esercizio 1 — 10 Punti) — `SortJoin(A, B, n)`\n> **Stato**: ⭐ CONSOLIDATO IL 30/08 | **Valutazione Reale**: `9.5/10 — SortJoin fusione in-place in tempo O(n log n) e spazio O(1); logica copiatura, BuildMaxHeap ed estrazione Heapsort capita al 100%.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.5.1 successfully!')
