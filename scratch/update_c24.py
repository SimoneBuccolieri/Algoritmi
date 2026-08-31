import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.2\.4[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.2.4 (Appello 12 Settembre 2022, Esercizio 1 — 10 Punti) — `Diff(A, k)`\n> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `9.5/10 — Two Pointers concordi i=1, j=2 in tempo O(n) e spazio O(1); padroneggiata la distinzione fondamentale tra somma e differenza.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.2.4 successfully!')
