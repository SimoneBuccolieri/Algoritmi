import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_pattern = r'#### (?:\[.\]\s+)?📝 Esercizio C\.2\.1[^\n]+\n> \*\*Stato\*\*:[^\n]+'
new_target = '#### [x] 📝 Esercizio C.2.1 (Appello 31 Gennaio 2024, Esercizio 1 — 10 Punti) — `Prod(A, k)`\n> **Stato**: ⭐ CONSOLIDATO IL 31/08 | **Valutazione Reale**: `9.5/10 — Prod(A, k) Two Pointers con gestione completa di positivi e negativi in tempo O(n) e spazio O(1) svolto brillantemente.`'

text = re.sub(old_pattern, new_target, text)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.2.1 successfully!')
