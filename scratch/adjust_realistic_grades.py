import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's adjust today's exercises (30/08) with honest, strict grades reflecting tutor hints:
# A.2.2: 7.0/10 (richiesta correzione algebrica su c*n^2)
# C.1.5: 7.5/10 (compresa logica A[mid] vs A[r] con aiuto)
# C.1.4: 7.0/10 (trovata condizione A[q] < q dopo correzione sulla media)
# C.2.4: 6.5/10 (richiesta spiegazione puntatori concordi per differenza)
# C.4.5: 7.5/10 (compresa idea intervallo (min,max), sistemato return)
# C.4.2: 6.5/10 (richiesta spiegazione discesa BST)
# D.3.2: 7.5/10 (pseudocodice buono, spiegato conteggio Gauss)

text = re.sub(
    r'(#### \[x\] 📝 Esercizio A\.2\.2[^\n]+\n> \*\*Stato\*\*: [^\n]+\| \*\*Valutazione Reale\*\*:) `[^`]+`',
    r"\1 `7.0/10 — Sostituzione induttiva T(n) = (1/3)T(n-1) + 3n^2; compreso il metodo di maggiorazione dopo correzione sull'impostazione algebrica.`",
    text
)

text = re.sub(
    r'(#### \[x\] 📝 Esercizio C\.1\.5[^\n]+\n> \*\*Stato\*\*: [^\n]+\| \*\*Valutazione Reale\*\*:) `[^`]+`',
    r"\1 `7.5/10 — Ricerca binaria su array ruotato; compresa la regola del confronto A[mid] vs A[r] con supporto.`",
    text
)

text = re.sub(
    r'(#### \[x\] 📝 Esercizio C\.1\.4[^\n]+\n> \*\*Stato\*\*: [^\n]+\| \*\*Valutazione Reale\*\*:) `[^`]+`',
    r"\1 `7.0/10 — Elemento mancante in O(log n); trovata la condizione A[q] < q dopo analisi del controesempio sulla media.`",
    text
)

text = re.sub(
    r'(#### \[x\] 📝 Esercizio C\.2\.4[^\n]+\n> \*\*Stato\*\*: [^\n]+\| \*\*Valutazione Reale\*\*:) `[^`]+`',
    r"\1 `6.5/10 — Two Pointers su differenza; chiarita la regola dei puntatori concordi da sinistra i=1, j=2.`",
    text
)

text = re.sub(
    r'(#### \[x\] 📝 Esercizio C\.4\.5[^\n]+\n> \*\*Stato\*\*: [^\n]+\| \*\*Valutazione Reale\*\*:) `[^`]+`',
    r"\1 `7.5/10 — Verifica strongBST; intuita la propagazione intervallo (min,max), sistemata la chiusura ricorsiva.`",
    text
)

text = re.sub(
    r'(#### \[x\] 📝 Esercizio C\.4\.2[^\n]+\n> \*\*Stato\*\*: [^\n]+\| \*\*Valutazione Reale\*\*:) `[^`]+`',
    r"\1 `6.5/10 — mdist(T,v) su BST; compresa la discesa standard O(h) con tracciamento del minimo scarto.`",
    text
)

text = re.sub(
    r'(#### \[x\] 📝 Esercizio D\.3\.2[^\n]+\n> \*\*Stato\*\*: [^\n]+\| \*\*Valutazione Reale\*\*:) `[^`]+`',
    r"\1 `7.5/10 — DP Top-Down INIT_M + REC_M corretta; spiegata la formula di Gauss per il conteggio esatto delle celle.`",
    text
)

with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(text)

print('Adjusted all grades to strict, realistic evaluations in SILLABO_ESERCIZI_ESAME.md!')
