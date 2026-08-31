import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.3\.1[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.3.1 (Appello 18 Giugno 2025, Esercizio 1 — 10 Punti) — `leaves(x)`\n> **Stato**: ⭐ CONSOLIDATO IL 31/08 | **Valutazione Reale**: `9.5/10 — Arricchimento leaves(x) con definizione locale corretta, CountLeaves in O(1) e manutenzione in O(h); capita al 100% anche la visita ricorsiva O(n).`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.3.1 successfully!')
