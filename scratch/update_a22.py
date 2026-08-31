import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio A\.2\.2[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio A.2.2 (Appello 16 Giugno 2023 / 11 Aprile 2019, Domanda 1 — 7 Punti)\n> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `9.0/10 — Sostituzione induttiva T(n) = (1/3)T(n-1) + 3n^2; compresa la maggiorazione con c*n^2 e costanti c=9/2, d=3, n_0=1.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated A.2.2 successfully!')
