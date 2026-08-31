import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.4\.5[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.4.5 (Appello 04 Luglio 2022, Esercizio 1 — 9 Punti) — `strongBST(T)`\n> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `9.5/10 — Verifica ricorsiva BST in tempo O(n) con intervallo (min, max) dall alto al basso impeccabile.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.4.5 successfully!')
