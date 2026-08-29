import re

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text = f.read()

today_evals = {
    'A.4.1': ('⭐ SVOLTO OGGI (29/08)', '9.5/10 — Dimostrazione algebrica impeccabile, scelta costante c_2=1/2 e soglia n_0 corretta.'),
    'B.2.1': ('⭐ SVOLTO OGGI (29/08)', '9.0/10 — Inserimenti con doppio hashing corretti; compresa e motivata formalmente la regola del coprimo MCD(h2,m)=1.'),
    'C.1.3': ('⭐ SVOLTO OGGI (29/08)', '9.5/10 — Logica di bisezione su picco ottima; equazione di ricorrenza e Master Theorem perfetti Theta(log n).'),
    'C.4.3': ('⭐ SVOLTO OGGI (29/08)', '9.0/10 — Discesa lungo un solo cammino O(h) capita; proprieta di partizione del BST corretta.'),
    'D.1.1': ('⭐ SVOLTO OGGI (29/08)', '9.5/10 — Pseudocodice Bottom-Up corretto al primo colpo con matrice e ricerca del max; conteggio esatto confronti m*n.'),
    'D.6.1': ('⭐ SVOLTO OGGI (29/08)', '9.5/10 — Algoritmo iterativo a ritroso O(n) ottimo; dimostrazione per sostituzione compresa a fondo con la catena f_j <= s_k <= s_n.'),
}

prev_evals = {
    'A.1.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Master Theorem Caso 3 con verifica della condizione di regolarita.'),
    'A.1.2': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Master Theorem Caso 2 con f(n) = Theta(n^(log_b a)).'),
    'A.2.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Sostituzione induttiva T(n-1) + 3n con ricavo delle costanti c e n_0.'),
    'A.3.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Albero di ricorsione con serie geometrica e somma a livello j.'),
    'A.5.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.5/10 — Ordinamento asintotico di 8 funzioni senza errori.'),
    'A.5.2': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.5/10 — Ordinamento asintotico con esponenziali a base < 1 e > 1.'),
    'A.6.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Procedura Ord(A,p,r) Divide et Impera con Master Theorem.'),
    'B.1.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — BuildMaxHeap passo-passo a partire dagli indici non-foglia floor(n/2).'),
    'B.3.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.5/10 — Tabella Chaining con inserimenti e fattore di carico alpha.'),
    'B.4.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.5/10 — Costruzione albero di Huffman ed estrazione codici prefissi.'),
    'B.5.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Inserimento BST e cancellazione nodo a 2 figli con Successore.'),
    'C.1.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '8.5/10 — Split(V) Divide et Impera; sistemato il caso base p==r per evitare loop.'),
    'C.1.2': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — stab(A,p,r) indice stabile in O(log n).'),
    'C.2.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.5/10 — Prod(A,k) Two Pointers in tempo O(n) e spazio O(1).'),
    'C.2.2': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — triplet(A) Three Pointers in O(n^2).'),
    'C.2.3': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '8.5/10 — TriSort a 3 puntatori in tempo O(n); logica capita, da tenere a mente non avanzare mid su scambio high.'),
    'C.3.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Arricchimento leaves(x) con manutenzione in O(h) risalendo.'),
    'C.3.2': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Arricchimento diff(x) = max_key - min_key con Insert.'),
    'C.4.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.5/10 — isBalanced(T) con sentinella -1 e altezza max(left, right) + 1 in Theta(n).'),
    'C.5.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — SortJoin(A,B,n) fusione heap in-place O(n log n).'),
    'C.5.2': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Union(A1,A2,n) max-heap unione in tempo O(n).'),
    'C.6.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '8.5/10 — CountInversions MergeSort con conteggio inversioni cross n1 - i + 1.'),
    'D.1.2': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — Longest Common Substring Bottom-Up con azzeramento a 0 su caratteri diversi.'),
    'D.2.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '8.5/10 — DP Top-Down INIT_L + REC_L memoizzata con calcolo T_best(n).'),
    'D.3.1': ('✅ SVOLTO NELLE SESSIONI PRECEDENTI', '9.0/10 — DP matrice c(i,j) Bottom-Up con calcolo esatto prodotti n*(n-1)/2.'),
}

lines = text.split('\n')
new_lines = []

for line in lines:
    m = re.search(r'#### (?:\[[ x]\]\s+)?📝 Esercizio ([A-D]\.[0-9]+\.[0-9]+)', line)
    if m:
        code = m.group(1)
        if code in today_evals:
            status, note = today_evals[code]
            # Replace header with custom checked tag
            new_lines.append(f'#### [x] 📝 Esercizio {code}' + line.split(code)[-1])
            new_lines.append(f'> **Stato**: {status} | **Valutazione Reale**: `{note}`')
        elif code in prev_evals:
            status, note = prev_evals[code]
            new_lines.append(f'#### [x] 📝 Esercizio {code}' + line.split(code)[-1])
            new_lines.append(f'> **Stato**: {status} | **Valutazione Reale**: `{note}`')
        else:
            new_lines.append(f'#### [ ] 📝 Esercizio {code}' + line.split(code)[-1])
            new_lines.append('> **Stato**: ⏳ **DA SVOLGERE / IN CODA**')
    else:
        # Ignore old status lines if any were written
        if not line.startswith('> **Stato**:'):
            new_lines.append(line)

new_text = '\n'.join(new_lines)
with open('SILLABO_ESERCIZI_ESAME.md', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Updated SILLABO_ESERCIZI_ESAME.md successfully with clean tags!')
