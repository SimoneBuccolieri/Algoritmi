# GUIDA RICORRENZE

## Page 1
Guida COMPLETA Ricorrenze e Master Theorem
1. MASTER THEOREM (Schema Standard)
Forma Base: T(n) = a·T(n/b) + f(n)
• a ≥ 1 sottoproblemi
• b > 1 fattore riduzione
• f(n) costo combina
3 Casi: Confronta f(n) con n^(log_b(a))
CASO 1: f(n) = O(n^(log_b(a)-ε)) per ε > 0 → T(n) = Θ(n^(log_b(a)))
CASO 2: f(n) = Θ(n^(log_b(a)) · log^k(n)) per k ≥ 0
→ T(n) = Θ(n^(log_b(a)) · log^(k+1)(n))
CASO 3: f(n) = Ω(n^(log_b(a)+ε)) per ε > 0 E condizione regolarità → T(n) = Θ(f(n))
Condizione di Regolarità (CASO 3)
DEVE valere: a·f(n/b) ≤ k·f(n) per qualche k < 1 e n sufficientemente grande
Esempio: T(n) = 4T(n/2) + n²√n
• a=4, b=2, f(n)=n^(5/2)
• n^(log_2(4)) = n²
• f(n) = Ω(n^(2+1/2)) ✓ (CASO 3)
• Verifica regolarità: 4f(n/2) = 4(n/2)^(5/2) = n^(5/2)/√2 ≤ (1/√2)n^(5/2)
• k = 1/√2 < 1 ✓
• Risultato: T(n) = Θ(n^(5/2))
2. METODO DI SOSTITUZIONE
Quando Usarlo
• Master Theorem non applicabile
• Ricorrenze forma non standard
• Vuoi limite preciso
Schema Template
1. Ipotizza T(n) = O(g(n)) e T(n) = Ω(h(n))
2. Dimostra per induzione entrambi i limiti
3. Trova costanti che rendono valide le disuguaglianze
## Page 2
Esempio: T(n) = (1/2)T(n-1) + n
Obiettivo: T(n) = Θ(n)
Limite Superiore T(n) ≤ cn:
Serve: c/2 + 1 ≤ c → c ≥ 2
Limite Inferiore T(n) ≥ dn:
3. ALBERO DELLE RICORRENZE
Quando Usarlo
• Master Theorem non si applica
• Ricorrenze complesse con più termini
• Vuoi visualizzare la struttura
Schema
1. Disegna l'albero di chiamate ricorsive
2. Calcola costo per ogni livello
3. Somma tutti i livelli
4. Stima il risultato finale
Esempio: T(n) = T(n/3) + T(2n/3) + n
Ogni livello costa n, altezza O(log n) → T(n) = O(n log n)
4. RICORRENZE NON STANDARD
Tipo 1: T(n) = T(n-k) + f(n)
Srotola la ricorrenza:T(n) = (1/2)T(n-1) + nT(n) = (1/2)T(n-1) + n
     ≤ (1/2)c(n-1) + n     [ipotesi induttiva]     ≤ (1/2)c(n-1) + n     [ipotesi induttiva]
     = (c/2)(n-1) + n     = (c/2)(n-1) + n
     = (c/2 + 1)n - c/2     = (c/2 + 1)n - c/2
     ≤ cn     ≤ cn
T(n) ≥ n ≥ dn  [banale per d ≤ 1]T(n) ≥ n ≥ dn  [banale per d ≤ 1]
Livello 0:           nLivello 0:           n
Livello 1:       n/3 + 2n/3 = n  Livello 1:       n/3 + 2n/3 = n  
Livello 2:   n/9 + 2n/9 + 2n/9 + 4n/9 = nLivello 2:   n/9 + 2n/9 + 2n/9 + 4n/9 = n
......
## Page 3
Esempio: T(n) = T(n-1) + log n
Tipo 2: Più Termini Ricorsivi
Esempio: T(n) = 3T(n/5) + T(n/6) + n
Non è forma standard MT, usa sostituzione:
Tipo 3: Con Radici
Esempio: T(n) = T(n/2) + T(√n) + n
Cambio variabile: m = log n, S(m) = T(2^m)
5. SOLUZIONI ESATTE (Non Asintotiche)
Schema per Ricorrenze Lineari
T(n) = aT(n-1) + f(n)
Esempio: T(n) = T(n-1) + 2, T(0) = 3
Soluzione esatta: T(n) = 2n + 3
Verifica per Sostituzione
Prova che T(n) = an + b funziona:T(n) = f(n) + f(n-k) + f(n-2k) + ... + T(base)T(n) = f(n) + f(n-k) + f(n-2k) + ... + T(base)
     = Σ(i=0 to n/k) f(n-ik)     = Σ(i=0 to n/k) f(n-ik)
T(n) = log n + log(n-1) + ... + log 1T(n) = log n + log(n-1) + ... + log 1
     = log(n!) = Θ(n log n)     = log(n!) = Θ(n log n)
T(n) ≤ c(3n/5 + n/6) + nT(n) ≤ c(3n/5 + n/6) + n
     = c(23n/30) + n       = c(23n/30) + n  
     = n(23c/30 + 1)     = n(23c/30 + 1)
     ≤ cn se c ≥ 30/7     ≤ cn se c ≥ 30/7
S(m) = S(m/2) + S(m/2) + 2^mS(m) = S(m/2) + S(m/2) + 2^m
     = 2S(m/2) + 2^m     = 2S(m/2) + 2^m
     → S(m) = Θ(m·2^m) = Θ(n log n)     → S(m) = Θ(m·2^m) = Θ(n log n)
T(n) = T(n-1) + 2T(n) = T(n-1) + 2
     = T(n-2) + 2 + 2       = T(n-2) + 2 + 2  
     = T(0) + 2n     = T(0) + 2n
     = 3 + 2n     = 3 + 2n
## Page 4
• T(0) = b = 3 ✓
• T(n) = T(n-1) + 2 = a(n-1) + b + 2 = an + b se a = 2 ✓
6. CASI PARTICOLARI E TRUCCHI
Ricorrenze Esponenziali
T(n) = Σ(k=1 to n-1) T(k)T(n-k)
Dimostra T(n) = Ω(2^n):
Variabili nei Coefficienti
T(n) = nT(n-1) + 1
Quando Master Theorem NON si Applica
1. f(n) oscillante: T(n) = 2T(n/2) + n sin(n)
2. Coefficienti variabili: T(n) = nT(n/2) + n
3. Base variabile: T(n) = T(n-log n) + n
4. Più termini: T(n) = T(n/3) + T(2n/3) + n
Schema di Fallback
1. Prova Master Theorem se forma standard
2. Se non applicabile: metodo sostituzione
3. Se complesso: albero delle ricorrenze
4. Se tutto fallisce: srotola manualmente
7. CHECKLIST RAPIDA
Master TheoremT(n) ≥ Σ(k=1 to n-1) c2^k · c2^(n-k)T(n) ≥ Σ(k=1 to n-1) c2^k · c2^(n-k)
     = c² Σ(k=1 to n-1) 2^n       = c² Σ(k=1 to n-1) 2^n  
     = c²(n-1)2^n ≥ c2^n per c ≥ 1     = c²(n-1)2^n ≥ c2^n per c ≥ 1
T(n) = n[T(n-1)]T(n) = n[T(n-1)]
     = n[(n-1)T(n-2) + 1] + 1     = n[(n-1)T(n-2) + 1] + 1
     = n(n-1)T(n-2) + n + 1     = n(n-1)T(n-2) + n + 1
     = n! + n + (n-1) + ... + 1     = n! + n + (n-1) + ... + 1
     = n! + n(n+1)/2     = n! + n(n+1)/2
## Page 5
 Forma T(n) = aT(n/b) + f(n)? Calcola n^(log_b(a)) Confronta con f(n) Se CASO 3: verifica regolarità
Sostituzione Ipotizza soluzione Prova O e Ω separatamente Trova costanti valide Verifica casi base
Albero Ricorrenze Disegna struttura Calcola costo per livello Conta numero livelli Somma tutto
ERRORE COMUNE: Dimenticare condizione regolarità in CASO 3 MT!