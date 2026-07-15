# GUIDA PROGRAMMAZIONE DINAMICA

## Page 1
Guida Completa: Programmazione Dinamica e Algoritmi Greedy
del Corso
PARTE I - PROGRAMMAZIONE DINAMICA
Schema Generale della DP nel Vostro Corso
Ricetta Standard per ogni Problema DP
1. Caratterizzare la struttura di una soluzione ottima s* in funzione di soluzioni ottime s₁*, ..., sₖ* di
sottoistanze di taglia inferiore
2. Determinare relazione di ricorrenza del tipo c(s*) = f(c(s₁*), ..., c(sₖ*))
3. Calcolare C(S)* utilizzando la ricorrenza in modalità bottom-up (iterativo) oppure memoizzando il
codice D&C
4. Mantenere informazioni strutturali aggiuntive per ricostruire S* (opzionale)
Pattern di Scansione delle Tabelle
Tutti gli algoritmi DP del corso seguono pattern di scansione specifici:
• Row Major: Per righe, da sinistra a destra
• Column Major: Per colonne, dall'alto al basso
• Reverse Column Major: Colonne decrescenti, righe crescenti
• Reverse Row Major: Righe decrescenti, colonne decrescenti
• Diagonal: Per diagonali parallele alla principale
Regola Fondamentale: I costi sono sempre dati da una percorrenza inversa della matrice rispetto al
senso di andata.
Casi Base Standard per Ricorrenze DP
• i=0, j=0 : Il costo è sempre 0
• Indice oltrepassa grandezza input: Si pone a +∞
• Indice arriva a taglia input (n-1) o 0: È una costante
• i,j > 0 ma X[i] = X[j] : Si ha min/max degli indici calcolati
• i,j > 0 ma X[i] ≠ X[j] : Si ha min/max + soluzione ottima calcolata
Tipologie Complete di Esercizi DP del Corso
1. Problemi su Stringhe - LCS (Longest Common Subsequence)
Sottostruttura Ottima: Z = LCS(Xᵢ, Yⱼ) dove:
## Page 2
• Se xᵢ = yⱼ: Z termina con xᵢ = yⱼ e Z' = LCS(Xᵢ₋₁, Yⱼ₋₁)
• Se xᵢ ≠ yⱼ: Z è la più lunga tra LCS(X', Y) e LCS(X, Y')
Ricorrenza sui Costi:
Algoritmo Bottom-Up:
Calcolo Esatto Costi:
• Inizializzazione: 2n operazioni
• Ciclo principale: mn confronti + mn operazioni di assegnamento
• Costo Totale: T(n) = 2n + 2mn = O(mn)
Algoritmo Memoizzato (più efficiente in alcuni casi):L[i,j] = |LCS(Xᵢ, Yⱼ)|L[i,j] = |LCS(Xᵢ, Yⱼ)|
L[i,j] = {L[i,j] = {
    0                           se i=0 o j=0    0                           se i=0 o j=0
    L[i-1,j-1] + 1             se i,j > 0 e xᵢ = yⱼ      L[i-1,j-1] + 1             se i,j > 0 e xᵢ = yⱼ  
    max(L[i-1,j], L[i,j-1])    se i,j > 0 e xᵢ ≠ yⱼ    max(L[i-1,j], L[i,j-1])    se i,j > 0 e xᵢ ≠ yⱼ
}}
python
LCS_LENGTHLCS_LENGTH ((XX,, Y Y))::
    m     m == length length((XX)),, n  n == length length((YY))
forfor i  i ==00 to m to m:: L L[[ii,,00]]==00
forfor j  j ==00 to n to n:: L L[[00,,jj]]==00
        
forfor i  i ==11 to m to m::
forfor j  j ==11 to n to n::
ifif X X[[ii]]==== Y Y[[jj]]::
                L                L [[ii,,jj]]== L L[[ii--11,,jj--11]]++11
elseelse::
                L                L [[ii,,jj]]==maxmax((LL[[ii--11,,jj]],, L L[[ii,,jj--11]]))
        
returnreturn L L[[mm,,nn]]
## Page 3
2. Problemi su Stringhe - LIS (Longest Increasing Subsequence)
Strengthening del Problema: Calcoliamo LIS(Xᵢ) = più lunga IS di Xᵢ che termina proprio con Xᵢ
Ricorrenza sui Costi:
Algoritmo Bottom-Up:
Calcolo Esatto Costi: T(n) = Σᵢ₌₂ⁿ Σⱼ₌₁ⁱ⁻¹ 1 = Σᵢ₌₂ⁿ (i-1) = (n-1)n/2 = O(n²)
3. Edit Distance
Ricorrenza sui Costi:python
LCS_MEMOLCS_MEMO ((XX,, Y Y,, i i,, j j,, memo memo))::
ifif memo memo[[ii,,jj]]!=!=--11::returnreturn memo memo[[ii,,jj]]
        
ifif i  i ====00oror j  j ====00::
        memo        memo [[ii,,jj]]==00
elifelif X X[[ii]]==== Y Y[[jj]]::
        memo        memo [[ii,,jj]]==11++ LCS_MEMO LCS_MEMO ((XX,, Y Y,, i i--11,, j j--11,, memo memo))
elseelse::
        memo        memo [[ii,,jj]]==maxmax((LCS_MEMOLCS_MEMO ((XX,, Y Y,, i i--11,, j j,, memo memo)),,
                        LCS_MEMO                        LCS_MEMO ((XX,, Y Y,, i i,, j j--11,, memo memo))))
        
returnreturn memo memo[[ii,,jj]]
L[i] = lunghezza della LIS di X[1..i] che termina con X[i]L[i] = lunghezza della LIS di X[1..i] che termina con X[i]
L[i] = 1 + max{L[j] : j < i e X[j] < X[i]}L[i] = 1 + max{L[j] : j < i e X[j] < X[i]}
     = 1 se non esiste tale j     = 1 se non esiste tale j
python
LIS_LENGTHLIS_LENGTH ((XX))::
    n     n == length length((XX))
forfor i  i ==11 to n to n:: L L[[ii]]==11,, prev prev[[ii]]== NULL NULL
        
forfor i  i ==22 to n to n::
forfor j  j ==11 to i to i--11::
ifif X X[[jj]]<< X X[[ii]]andand L L[[jj]]++11>> L L[[ii]]::
                L                L [[ii]]== L L[[jj]]++11
                prev                prev [[ii]]== j j
        
returnreturnmaxmax((LL[[1.1...nn]]))
## Page 4
4. Problemi su Matrici - Catena di Moltiplicazioni
Esempio Tipo dal Vostro Corso: Ricorrenza c(i,j) definita per 1 ≤ i,j ≤ n:
Algoritmo con Scansione Reverse Column-Major:
Calcolo Esatto Moltiplicazioni: T(n) = Σⱼ₌₁ⁿ⁻¹ Σᵢ₌₂ⁿ 2 = Σⱼ₌₁ⁿ⁻¹ 2(n-1) = 2(n-1)²
5. Shortest Path su Griglia
Problema Tipo: Cammino minimo da (1,1) a (n,n) con costi u[i,j] (up) e r[i,j] (right).
Ricorrenza:e(i,j) = edit distance tra X[1..i] e Y[1..j]e(i,j) = edit distance tra X[1..i] e Y[1..j]
e(i,j) = {e(i,j) = {
    j                                        se i=0    j                                        se i=0
    i                                        se j=0      i                                        se j=0  
    e(i-1,j-1)                              se i,j>0 e xᵢ=yⱼ    e(i-1,j-1)                              se i,j>0 e xᵢ=yⱼ
    1 + min(e(i-1,j), e(i,j-1), e(i-1,j-1)) altrimenti    1 + min(e(i-1,j), e(i,j-1), e(i-1,j-1)) altrimenti
}}
c(i,j) = {c(i,j) = {
    aⱼ                                  se i=1, 1≤j≤n    aⱼ                                  se i=1, 1≤j≤n
    aₙ₊₁₋ᵢ                              se j=n, 1<i≤n      aₙ₊₁₋ᵢ                              se j=n, 1<i≤n  
    c(i-1,j) · c(i,j+1) · c(i-1,j+1)   altrimenti    c(i-1,j) · c(i,j+1) · c(i-1,j+1)   altrimenti
}}
python
COMPUTE_CCOMPUTE_C ((AA))::
    n     n == length length((AA))
# Inizializzazione casi base# Inizializzazione casi base
forfor i  i ==11 to n to n::
        c        c [[11,,ii]]== a a[[ii]]
        c        c [[ii,,nn]]== a a[[nn++11--ii]]
        
# Scansione reverse column-major# Scansione reverse column-major
forfor j  j == n n--11 downto  downto 11::
forfor i  i ==22 to n to n::
            c            c [[ii,,jj]]== c c[[ii--11,,jj]]** c c[[ii,,jj++11]]** c c[[ii--11,,jj++11]]
        
returnreturn c c[[nn,,11]]
## Page 5
Algoritmo con Scansione Reverse Row-Major:
6. Problemi con Massimo/Minimo
Esempio: Calcolare M = max{c(i,j) : 0 ≤ i ≤ j ≤ n-1} dove:
Pattern di Risoluzione DP
Identificazione Dipendenze
Per ogni ricorrenza, identificare le dipendenze tra indici per determinare l'ordine di scansione corretto.
Scelta della ScansioneC[i,j] = costo minimo da (i,j) a (n,n)C[i,j] = costo minimo da (i,j) a (n,n)
C[i,j] = {C[i,j] = {
    0                                    se i=n e j=n    0                                    se i=n e j=n
    C[i+1,j] + u[i,j]                   se j=n, i<n    C[i+1,j] + u[i,j]                   se j=n, i<n
    C[i,j+1] + r[i,j]                   se i=n, j<n    C[i,j+1] + r[i,j]                   se i=n, j<n
    min(C[i+1,j] + u[i,j],              altrimenti    min(C[i+1,j] + u[i,j],              altrimenti
        C[i,j+1] + r[i,j])        C[i,j+1] + r[i,j])
}}
python
MIN_PATHMIN_PATH ((uu,, r r,, n n))::
    C    C[[nn,,nn]]==00
# Inizializzazione bordi# Inizializzazione bordi
forfor j  j == n n--11 downto  downto 11:: C C[[nn,,jj]]== C C[[nn,,jj++11]]++ r r[[nn,,jj]]
forfor i  i == n n--11 downto  downto 11:: C C[[ii,,nn]]== C C[[ii++11,,nn]]++ u u[[ii,,nn]]
        
# Riempimento tabella# Riempimento tabella
forfor i  i == n n--11 downto  downto 11::
forfor j  j == n n--11 downto  downto 11::
            C            C [[ii,,jj]]==minmin((CC[[ii++11,,jj]]++ u u[[ii,,jj]],, C C[[ii,,jj++11]]++ r r[[ii,,jj]]))
        
returnreturn C C[[11,,11]]
c(i,j) = {c(i,j) = {
    aᵢ           se 0<i≤n-1 e j=n-1    aᵢ           se 0<i≤n-1 e j=n-1
    bⱼ           se i=0 e 0≤j≤n-1      bⱼ           se i=0 e 0≤j≤n-1  
    c(i-1,j) · c(i,j+1)   se 0<i≤j<n-1    c(i-1,j) · c(i,j+1)   se 0<i≤j<n-1
}}
## Page 6
• Reverse Column-Major: quando dipende da (i-1,j), (i,j+1), (i-1,j+1)
• Reverse Row-Major: quando dipende da (i+1,j), (i,j+1)
• Diagonal: quando dipende da celle su diagonali precedenti
Calcolo Esatto dei Costi
Sempre richiesto negli esami. Per doppi cicli annidati:
PARTE II - ALGORITMI GREEDY
Template di Base: Selezione Attività
Problema: Date n attività con tempi [sᵢ,fᵢ], selezionare massimo numero di attività compatibili.
Strategia Greedy: Scegliere sempre l'attività con tempo di fine minore.
Algoritmo Template:
Dimostrazione Proprietà Greedy:
1. Cut & Paste: Ogni soluzione ottima può essere trasformata per contenere la scelta greedy
2. Sottostruttura Ottima: Il problema residuo mantiene la struttura ottima
Complessità: O(n) se già ordinato, O(n log n) con ordinamento
Tipologie Complete di Greedy del Vostro Corso
1. Scheduling di Programmi
Problema: n programmi con lunghezze lⱼ, minimizzare Σⱼ₌₁ⁿ Cⱼ(σ) dove Cⱼ(σ) è tempo di completamento.
Strategia Greedy: Ordinare per lunghezza crescente.Σᵢ₌ₐᵇ Σⱼ₌f(i)ᵍ⁽ⁱ⁾ costo_operazioneΣᵢ₌ₐᵇ Σⱼ₌f(i)ᵍ⁽ⁱ⁾ costo_operazione
python
GREEDY_ACTIVITY_SELECTORGREEDY_ACTIVITY_SELECTOR ((ss,, f f))::
    n     n == length length((ss))
    A     A =={{a₁a₁}}# Prima attività (tempo fine minore)# Prima attività (tempo fine minore)
    last     last ==11
        
forfor i  i ==22 to n to n::
ifif s s[[ii]]>=>= f f[[lastlast]]::
            A             A == A ∪  A ∪ {{aᵢaᵢ}}
            last             last == i i
    
returnreturn A A
## Page 7
Dimostrazione: Se abbiamo σ* ottima con programma di lunghezza minima non primo, possiamo
scambiare ottenendo σ' con costo ≤ costo(σ*).
2. Metric Matching on the Line
Problema: Assegnare n client a n server minimizzando Σᵢ|cᵢ - sⱼ|.
Strategia Greedy: Assegnare primo client (sinistro) al primo server (sinistro).
Algoritmo:
Dimostrazione: Qualsiasi "incrocio" nelle assegnazioni aumenta il costo totale.
3. Copertura di Punti con Intervalli
Problema: Dato insieme X di punti sulla retta, coprire tutti con minimo numero di intervalli di lunghezza
unitaria.
Strategia Greedy: Porre intervallo [x₁, x₁+1] dove x₁ è il punto più a sinistra non coperto.
Algoritmo:python
METRIC_MATCHINGMETRIC_MATCHING ((SS,, C C))::
    n     n == C C..lengthlength
    A     A ==[[CC[[11]]-- S S[[11]]]]# Prima assegnazione# Prima assegnazione
    last     last ==11
        
forfor i  i ==22 to n to n::
forfor j  j ==11 to n to n--11::
ifif C C[[ii]]-- S S[[jj]]>> C C[[lastlast]]-- S S[[lastlast]]++11::
                last                 last == i i
                A                 A == A ∪  A ∪ [[CC[[ii]]-- S S[[jj]]]]
        
returnreturn A A
python
INTERVAL_COVERINTERVAL_COVER ((XX))::
    Ordina X     Ordina X inin ordine crescente ordine crescente
    I     I == ∅ ∅
        
whilewhile X ≠ ∅ X ≠ ∅::
        x₁         x₁ ==minmin((XX))
        I         I == I ∪  I ∪ {{[[x₁x₁,, x₁ x₁++11]]}}
        X         X == X \  X \ {{x ∈ X x ∈ X :: x ≤ x₁ x ≤ x₁++11}}
        
returnreturn I I
## Page 8
Dimostrazione Cut & Paste: Se soluzione ottima I* contiene [a,a+1] con a < x₁, possiamo sostituire con
[x₁,x₁+1] ottenendo soluzione equivalente.
4. Esempi di Greedy Non Ottimi
Attività per Durata Minima:
Controesempio: a₁(0,2), a₂(1,3), a₃(2,4), a₄(0,10)
• Algoritmo sceglie {a₁,a₂,a₃}
• Ottimo è {a₄}
5. Problemi con Monete
Problema: Dato valore n, selezionare minimo numero di monete con valori 50, 20, 1.
Algoritmo Greedy:
Dimostrazione: Per n = 60, greedy restituisce 11 monete (non ottimo). Soluzione ottima: 3 monete da
20.
Dimostrazione Standard per Greedy
Schema Cut & Pastepython
NON_OTTIMO_ATTIVITANON_OTTIMO_ATTIVITA ((ss,, f f))::
whilewhile esistono attività disponibili esistono attività disponibili ::
        scegli attività i con durata minima         scegli attività i con durata minima ((fᵢ fᵢ -- sᵢ sᵢ))
        A         A == A ∪  A ∪ {{aᵢaᵢ}}
        rimuovi attività incompatibili con i        rimuovi attività incompatibili con i
returnreturn A A
python
GREEDY_MONETEGREEDY_MONETE ((nn))::
    monete     monete ==[[5050,,2020,,11]]
    soluzione     soluzione ==[[]]
        
forfor valore  valore inin monete monete::
whilewhile n  n >=>= valore valore::
            soluzione            soluzione ..appendappend((valorevalore))
            n             n -=-= valore valore
        
returnreturn soluzione soluzione
## Page 9
1. Supporre esistenza soluzione ottima I* che non contiene scelta greedy
2. Costruire soluzione I' sostituendo elemento di I* con scelta greedy
3. Dimostrare che |I'| ≤ |I*| e I' ammissibile
4. Concludere che I' è ottima e contiene scelta greedy
Sottostruttura Ottima
Dimostrare che rimosso la scelta greedy, il problema residuo mantiene struttura ottima.
PARTE III - CONFRONTO E DECISIONE
Quando Usare DP
• Sottoproblemi sovrapposti
• Sottostruttura ottima
• Scelte locali ottime non garantiscono optimum globale
• Problema di ottimizzazione
Quando Usare Greedy
• Proprietà di scelta greedy dimostrabile
• Sottostruttura ottima
• Scelte locali ottime conducono all'optimum globale
• Efficienza prioritaria
Strategia di Risoluzione Esami
Per DP
1. Identificare sottostruttura ottima
2. Scrivere ricorrenza sui costi
3. Determinare ordine di scansione dalle dipendenze
4. Implementare algoritmo bottom-up
5. Calcolare costo esatto con sommatorie
Per Greedy
1. Proporre strategia greedy
2. Scrivere algoritmo
3. Dimostrare proprietà greedy con cut & paste
4. Dimostrare sottostruttura ottima
5. Calcolare complessità
Tipici Errori da Evitare
## Page 10
• DP: Scansione errata della tabella, calcolo sbagliato dei costi
• Greedy: Dimostrazione incompleta, controesempi ignorati
• Entrambi: Sottostruttura ottima non verificata
Questa guida copre tutti i pattern e tipologie di esercizi DP e Greedy del vostro corso, con particolare
attenzione ai metodi di calcolo esatto dei costi e alle dimostrazioni richieste negli esami.