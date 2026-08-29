with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

import re
old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio D\.2\.1[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio D.2.1 (Appello 14 Febbraio 2024 & Appello 04 Luglio 2025, Esercizio 2 — 9 Punti)\n> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — DP Top-Down INIT_L + REC_L memoizzata su singola stringa impeccabile; caso migliore T_best(n) = Theta(n) motivato a fondo.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated D.2.1 successfully!')
