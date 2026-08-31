import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.2\.3[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.2.3 (Appello 14 Febbraio 2024, Esercizio 1 — 10 Punti) — `Split(A, 2n)` / `TriSort`\n> **Stato**: ⭐ CONSOLIDATO IL 30/08 | **Valutazione Reale**: `9.5/10 — TriSort in-place a 3 puntatori su {0,1,2} in tempo O(n) e spazio O(1) svolto perfettamente in autonomia.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.2.3 successfully!')
