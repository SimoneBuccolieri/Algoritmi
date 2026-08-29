with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

old_target = '#### [ ] 📝 Esercizio C.4.4 (Raccolta Esercizi, Esercizio 14) — `BST(A)` (Costruzione da Array Ordinato)\n> **Stato**: ⏳ **DA SVOLGERE / IN CODA**'
new_target = '#### [x] 📝 Esercizio C.4.4 (Raccolta Esercizi, Esercizio 14) — `BST(A)` (Costruzione da Array Ordinato)\n> **Stato**: ⭐ SVOLTO OGGI (29/08) | **Valutazione Reale**: `9.5/10 — Costruzione BST perfettamente bilanciato in tempo lineare Theta(n) con elemento mediano e Master Theorem Caso 1.`'

if old_target in text:
    text = text.replace(old_target, new_target)
else:
    import re
    text = re.sub(
        r'#### (?:\[.\]\s+)?📝 Esercizio C\.4\.4[^\n]+\n> \*\*Stato\*\*:[^\n]+',
        new_target,
        text
    )

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated C.4.4 successfully!')
