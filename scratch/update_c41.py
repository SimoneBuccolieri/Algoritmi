import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.4\.1[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.4.1 (Appello 15 Luglio 2023, Esercizio 1 — 9 Punti) — `isBalanced(T)`\n> **Stato**: ⭐ CONSOLIDATO IL 30/08 | **Valutazione Reale**: `8.5/10 — isBalanced con sentinella -1 e altezza 1 + max(left, right) in tempo lineare Theta(n) completato con successo.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.4.1 successfully!')
