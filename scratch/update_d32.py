import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio D\.3\.2[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio D.3.2 (Appello 10 Settembre 2025, Esercizio 2 — 9 Punti)\n> **Stato**: ⭐ SVOLTO OGGI (30/08) | **Valutazione Reale**: `9.5/10 — DP Top-Down INIT_M + REC_M impeccabile; conteggio esatto moltiplicazioni T(n) = (n-1)(n-2) = Theta(n^2) motivato con la matrice triangolare.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated D.3.2 successfully!')
