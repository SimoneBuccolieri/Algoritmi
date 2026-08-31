import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.1\.4[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.1.4 (Appello 06 Luglio 2021, Esercizio 1 — 8 Punti) — `missing(A, n)`\n> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `9.5/10 — Ricerca binaria elemento mancante in tempo O(log n); trovata la condizione ottima A[q] < q e caso base p > r.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.1.4 successfully!')
