const recPresets = {
  1: {
    title: "T(n) = T(n-1) + 2n",
    type: "subst",
    context: `<div class="exam-text-title">🎯 COSA STIAMO CERCANDO E COSA STIAMO FACENDO</div>
<div><b>COSA STIAMO CERCANDO:</b> Dimostrare che la ricorrenza sottrattiva <code>T(n) = T(n-1) + 2n</code> ha complessità <b>O(n²)</b> trovando la costante <code>c &gt; 0</code> per cui <code>T(n) &le; c &middot; n²</code>.
<br><b>COSA STIAMO FACENDO:</b> Sostituiamo l'ipotesi induttiva su <code>n-1</code> nell'equazione del testo, sviluppiamo il quadrato algebrico e isoliamo la costante <code>c</code>.</div>`,
    subst: `<div class="rec-step-card">
  <div class="rec-step-title" style="color:var(--accent-amber);">🎯 TESI DA DIMOSTRARE</div>
  <div>Trovare <code>c &gt; 0</code> e <code>n0 &ge; 1</code> tali che <code>T(n) &le; c &middot; n²</code> per ogni <code>n &ge; n0</code>.</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">1️⃣ PASSO 1: Ipotesi Induttiva</div>
  <div>Assumiamo che la tesi valga per la dimensione inferiore <code>(n - 1)</code>:</div>
  <div class="rec-code-badge" style="border-color:rgba(251,191,36,0.4); color:#fbbf24;">T(n - 1) ≤ c · (n - 1)²</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">2️⃣ PASSO 2: Sostituzione nella Ricorrenza</div>
  <div>Sostituiamo la stima dell'ipotesi nell'equazione del testo <code>T(n) = T(n-1) + 2n</code>:</div>
  <div class="rec-code-badge" style="border-color:rgba(52,211,153,0.4); color:#34d399;">T(n) ≤ c · (n - 1)² + 2n</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">3️⃣ PASSO 3: Sviluppo Algebrico</div>
  <div>Sviluppiamo il quadrato del binomio <code>(n-1)² = n² - 2n + 1</code>:</div>
  <div class="rec-code-badge">T(n) ≤ c · (n² - 2n + 1) + 2n
T(n) ≤ c · n² - 2c · n + c + 2n
T(n) ≤ c · n² - (2c - 2) · n + c</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">4️⃣ PASSO 4: Imponiamo ≤ c · n² e Calcoliamo c</div>
  <div>Vogliamo che la stima ottenuta sia <code>≤ c · n²</code>:</div>
  <div class="rec-code-badge" style="border-color:rgba(244,63,94,0.4); color:#f43f5e;">c · n² - (2c - 2) · n + c ≤ c · n²
⇒ - (2c - 2) · n + c ≤ 0
⇒ c ≤ (2c - 2) · n

Scegliendo c = 2:
2 ≤ 2n  (VERIFICATO per ogni n ≥ 1!)</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">5️⃣ PASSO 5: Caso Base (n = 1)</div>
  <div class="rec-code-badge" style="border-color:rgba(52,211,153,0.4); color:#34d399;">T(1) = 1 ≤ 2 · (1)² = 2  (OK!)</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 CONCLUSIONE FORMALE</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = O(n²) dimostrato formalmente per c = 2 e n0 = 1. Q.E.D.</div>
</div>`,
    tree: `<div class="rec-step-card">
  <div class="rec-step-title">🌲 COSTI DEI LIVELLI DELL'ALBERO</div>
  <div class="rec-code-badge">- Livello 0: Costo = 2n
- Livello 1: Costo = 2(n - 1)
- Livello 2: Costo = 2(n - 2)
...
- Livello i: Costo = 2(n - i)</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">📊 SOMMATORIA DEI LIVELLI</div>
  <div class="rec-code-badge">T(n) = Somma_{i=0}^{n-1} 2(n - i)
T(n) = 2 · [n(n + 1) / 2] = n² + n</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO ASINTOTICO STRETTO</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n²)</div>
</div>`
  },
  2: {
    title: "T(n) = (2/3) T(n-1) + 2n",
    type: "subst",
    context: `<div class="exam-text-title">🎯 COSA STIAMO CERCANDO E COSA STIAMO FACENDO</div>
<div><b>COSA STIAMO CERCANDO:</b> Dimostrare che la ricorrenza <code>T(n) = (2/3) T(n-1) + 2n</code> ha limite <b>Theta(n)</b> trovando la costante <code>c &ge; 6</code> per la sostituzione.
<br><b>COSA STIAMO FACENDO:</b> Utilizziamo la serie geometrica di ragione <code>2/3 &lt; 1</code> che fa convergere l'albero a <code>3 * 2n = 6n</code>.</div>`,
    subst: `<div class="rec-step-card">
  <div class="rec-step-title" style="color:var(--accent-amber);">🎯 TESI DA DIMOSTRARE</div>
  <div>Trovare <code>c &gt; 0</code> tale che <code>T(n) &le; c &middot; n</code>.</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">1️⃣ PASSO 1: Ipotesi Induttiva</div>
  <div class="rec-code-badge" style="border-color:rgba(251,191,36,0.4); color:#fbbf24;">T(n - 1) ≤ c · (n - 1)</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">2️⃣ PASSO 2: Sostituzione nella Ricorrenza</div>
  <div class="rec-code-badge" style="border-color:rgba(52,211,153,0.4); color:#34d399;">T(n) ≤ (2/3) · c · (n - 1) + 2n</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">3️⃣ PASSO 3: Sviluppo Algebrico</div>
  <div class="rec-code-badge">T(n) ≤ (2/3)c·n - (2/3)c + 2n
T(n) ≤ [ (2/3)c + 2 ] · n - (2/3)c</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">4️⃣ PASSO 4: Imponiamo ≤ c · n</div>
  <div class="rec-code-badge" style="border-color:rgba(244,63,94,0.4); color:#f43f5e;">[ (2/3)c + 2 ] · n ≤ c · n
⇒ (2/3)c + 2 ≤ c
⇒ 2 ≤ (1/3)c  ⇒  c ≥ 6

Scegliendo c = 6: (2/3)(6) + 2 = 6 ≤ 6 (VERIFICATO!)</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">5️⃣ PASSO 5: Caso Base (n = 1)</div>
  <div class="rec-code-badge" style="border-color:rgba(52,211,153,0.4); color:#34d399;">T(1) = 1 ≤ 6 · 1 = 6 (OK!)</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 CONCLUSIONE FORMALE</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n) dimostrato con c = 6 e n0 = 1. Q.E.D.</div>
</div>`,
    tree: `<div class="rec-step-card">
  <div class="rec-step-title">🌲 COSTI DELL'ALBERO (Serie Geometrica)</div>
  <div class="rec-code-badge">- Livello 0: 2n
- Livello 1: (2/3) · 2(n - 1)
- Livello 2: (2/3)² · 2(n - 2)
...
- Livello i: (2/3)ⁱ · 2(n - i)</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">📊 SOMMA DELLA SERIE (r = 2/3 < 1)</div>
  <div class="rec-code-badge">T(n) ≤ 2n · Somma_{i=0}^{∞} (2/3)ⁱ
Somma = 1 / (1 - 2/3) = 3
⇒ T(n) ≤ 2n · 3 = 6n</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO ASINTOTICO STRETTO</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n)</div>
</div>`
  },
  3: {
    title: "T(n) = 4 T(n/2) + n^3 + 1 (Master Theorem Caso 3)",
    type: "master",
    context: `<div class="exam-text-title">🎯 COSA STIAMO CERCANDO E COSA STIAMO FACENDO</div>
<div><b>COSA STIAMO CERCANDO:</b> Risolvere la ricorrenza <code>T(n) = 4 T(n/2) + n³ + 1</code> con il Master Theorem e verificare la <b>Condizione di Regolarità</b>.
<br><b>COSA STIAMO FACENDO:</b> Calcoliamo <code>n^(log_b a) = n²</code>. Poiché <code>f(n) = n³</code> cresce polinomialmente più veloce di <code>n²</code>, applichiamo il <b>Caso 3 (Radice Domina)</b>.</div>`,
    subst: `<div class="rec-step-card">
  <div class="rec-step-title">1️⃣ PARTE ALGEBRICA (Parametri)</div>
  <div class="rec-code-badge">a = 4,  b = 2,  f(n) = n³ + 1

n^(log_b a) = n^(log_2 4) = n²</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">2️⃣ CONFRONTO (f(n) vs n²)</div>
  <div class="rec-code-badge" style="border-color:rgba(56,189,248,0.4); color:#38bdf8;">f(n) = n³ + 1 = Ω(n^(2 + 1))  ⇒ f(n) cresce più VELOCE di n²!
Siamo nel CASO 3 del Master Theorem.</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">3️⃣ VERIFICA CONDIZIONE DI REGOLARITÀ (Obbligatoria)</div>
  <div>Dobbiamo verificare che esista <code>c &lt; 1</code> tale che <code>a &middot; f(n/b) &le; c &middot; f(n)</code>:</div>
  <div class="rec-code-badge" style="border-color:rgba(244,63,94,0.4); color:#f43f5e;">4 · [ (n/2)³ + 1 ] = 4 · (n³ / 8 + 1) = (1/2) n³ + 4

Vogliamo: (1/2) n³ + 4 ≤ c · (n³ + 1)
Scegliendo c = 3/4 < 1 (per n ≥ 4):
(1/2) n³ + 4 ≤ (3/4) n³ + 3/4  ⇒ (1/4) n³ ≥ 13/4 (VERIFICATO!)</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO FINALE MASTER THEOREM</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n³)</div>
</div>`,
    tree: `<div class="rec-step-card">
  <div class="rec-step-title">🌲 DECRESCITA GEOMETRICA DELL'ALBERO</div>
  <div class="rec-code-badge">- Livello 0 (Radice): n³ + 1
- Livello 1: 4 · [(n/2)³ + 1] = (1/2) n³ + 4
- Livello 2: 16 · [(n/4)³ + 1] = (1/4) n³ + 16</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">📊 SOMMA DEI LIVELLI (Ragione r = 1/2 < 1)</div>
  <div class="rec-code-badge">Costo Totale ≤ (n³ + 1) · [ 1 / (1 - 1/2) ] = 2 n³</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO FINALE</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n³)</div>
</div>`
  },
  4: {
    title: "T(n) = 8 T(n/2) + n^2 (Master Theorem Caso 1)",
    type: "master",
    context: `<div class="exam-text-title">🎯 COSA STIAMO CERCANDO E COSA STIAMO FACENDO</div>
<div><b>COSA STIAMO CERCANDO:</b> Calcolare la complessità per <code>T(n) = 8 T(n/2) + n²</code>.
<br><b>COSA STIAMO FACENDO:</b> Applicare il <b>Caso 1 del Master Theorem (Foglie Dominanti)</b>: <code>n^(log_2 8) = n³</code> domina rispetto a <code>f(n) = n²</code>.</div>`,
    subst: `<div class="rec-step-card">
  <div class="rec-step-title">1️⃣ PARTE ALGEBRICA (Parametri)</div>
  <div class="rec-code-badge">a = 8,  b = 2,  f(n) = n²

n^(log_b a) = n^(log_2 8) = n³</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">2️⃣ CONFRONTO (f(n) vs n³)</div>
  <div class="rec-code-badge" style="border-color:rgba(56,189,248,0.4); color:#38bdf8;">f(n) = n² = O(n^(3 - 1))  ⇒ f(n) cresce più LENTO del numero di foglie n³!
Siamo nel CASO 1 del Master Theorem.</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO FINALE MASTER THEOREM</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n^(log_b a)) = Theta(n³)</div>
</div>`,
    tree: `<div class="rec-step-card">
  <div class="rec-step-title">🌲 CRESCITA GEOMETRICA VERSO LE FOGLIE</div>
  <div class="rec-code-badge">- Livello 0: n²
- Livello 1: 8 · (n/2)² = 2 n²
- Livello 2: 64 · (n/4)² = 4 n²
...
- Livello foglia: 8^(log_2 n) = n³ foglie con costo Theta(1)</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO STRETTO</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n³)</div>
</div>`
  },
  5: {
    title: "T(n) = 2 T(n/2) + n (Master Theorem Caso 2 - MergeSort)",
    type: "master",
    context: `<div class="exam-text-title">🎯 COSA STIAMO CERCANDO E COSA STIAMO FACENDO</div>
<div><b>COSA STIAMO CERCANDO:</b> Risolvere la ricorrenza del MergeSort <code>T(n) = 2 T(n/2) + n</code>.
<br><b>COSA STIAMO FACENDO:</b> Applicare il <b>Caso 2 del Master Theorem (Livelli Bilanciati)</b>: <code>n^(log_2 2) = n</code> pareggia <code>f(n) = n</code>.</div>`,
    subst: `<div class="rec-step-card">
  <div class="rec-step-title">1️⃣ PARTE ALGEBRICA (Parametri)</div>
  <div class="rec-code-badge">a = 2,  b = 2,  f(n) = n

n^(log_b a) = n^(log_2 2) = n¹ = n</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">2️⃣ CONFRONTO (f(n) vs n)</div>
  <div class="rec-code-badge" style="border-color:rgba(56,189,248,0.4); color:#38bdf8;">f(n) = n = Theta(n¹)  ⇒ Pareggio/Stesso ordine di grandezza!
Siamo nel CASO 2 del Master Theorem.</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO FINALE MASTER THEOREM</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n^(log_b a) · log n) = Theta(n log n)</div>
</div>`,
    tree: `<div class="rec-step-card">
  <div class="rec-step-title">🌲 COSTI COSTANTI PER LIVELLO</div>
  <div class="rec-code-badge">- Livello 0: n
- Livello 1: 2 · (n/2) = n
- Livello 2: 4 · (n/4) = n
...
- Ognuno dei log_2(n) livelli ha costo esattamente n!</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO STRETTO</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n log n)</div>
</div>`
  },
  6: {
    title: "T(n) = 2 T(n/5) + T(n/2) + n (Albero Asimmetrico - Appello 14/02/2024)",
    type: "subst",
    context: `<div class="exam-text-title">🎯 COSA STIAMO CERCANDO E COSA STIAMO FACENDO</div>
<div><b>COSA STIAMO CERCANDO:</b> Risolvere la ricorrenza asimmetrica <code>T(n) = 2 T(n/5) + T(n/2) + n</code> e dimostrare <code>T(n) = Theta(n)</code>.
<br><b>COSA STIAMO FACENDO:</b> Calcoliamo la somma delle frazioni dei sotto-problemi <code>2*(1/5) + 1/2 = 9/10 &lt; 1</code>. Poiché <code>9/10 &lt; 1</code>, l'albero decresce come una serie geometrica di ragione <code>9/10</code> che converge alla costante <code>10</code>.</div>`,
    subst: `<div class="rec-step-card">
  <div class="rec-step-title">1️⃣ CALCOLO SOMMA FRAZIONI RAMI</div>
  <div class="rec-code-badge" style="border-color:rgba(56,189,248,0.4); color:#38bdf8;">2 · (1/5) + (1/2) = 4/10 + 5/10 = 9/10 < 1  (Decrescita Geometrica!)</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">2️⃣ DIMOSTRAZIONE PER SOSTITUZIONE (T(n) ≤ c · n)</div>
  <div class="rec-code-badge">Ipotesi: T(k) ≤ c · k per k < n
T(n) ≤ 2 · c · (n/5) + c · (n/2) + n
T(n) ≤ (9/10) c n + n = [ (9/10) c + 1 ] · n</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">3️⃣ IMPONIAMO ≤ c · n PER TROVARE c</div>
  <div class="rec-code-badge" style="border-color:rgba(244,63,94,0.4); color:#f43f5e;">(9/10) c + 1 ≤ c
⇒ 1 ≤ (1/10) c  ⇒  c ≥ 10</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 CONCLUSIONE FORMALE</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n) dimostrato con c = 10 e n0 = 1. Q.E.D.</div>
</div>`,
    tree: `<div class="rec-step-card">
  <div class="rec-step-title">🌲 ALBERO ASIMMETRICO LEVEL-BY-LEVEL</div>
  <div class="rec-code-badge">- Livello 0: n
- Livello 1: 2(n/5) + (n/2) = (9/10) n
- Livello 2: (9/10)² n
...
- Livello i: (9/10)ⁱ n</div>
</div>

<div class="rec-step-card">
  <div class="rec-step-title">📊 SERIE GEOMETRICA (r = 9/10 < 1)</div>
  <div class="rec-code-badge">Somma Totale ≤ n · Somma_{i=0}^{∞} (9/10)ⁱ
Somma geometrica = 1 / (1 - 9/10) = 10
⇒ T(n) ≤ 10 n</div>
</div>

<div class="rec-step-card" style="border-color:var(--accent-emerald); background:rgba(52,211,153,0.1);">
  <div class="rec-step-title" style="color:var(--accent-emerald);">🎯 RISULTATO STRETTO</div>
  <div style="color:var(--accent-emerald); font-weight:700;">T(n) = Theta(n)</div>
</div>`
  }
};

export function createDomandaAView() {
  let currentPresetId = 1;
  const container = document.createElement('div');
  container.className = 'card';

  function renderContent() {
    const data = recPresets[currentPresetId];
    const isMaster = data.type === 'master';

    container.innerHTML = `
      <div class="card-header">
        <h2 class="card-title">📐 DOMANDA A — Ricorrenze, Metodo per Sostituzione & Master Theorem</h2>
        <span class="badge-tag">Appelli Baldan 2024–2026</span>
      </div>

      <div class="exam-text-box">
        <div class="exam-text-title">📜 CALCOLATORE & VISUALIZZATORE INTERATTIVO — GRUPPO A (DOMANDE A)</div>
        <div>Seleziona una delle ricorrenze d'esame dai pulsanti in basso per visualizzare in tempo reale la scomposizione passo-passo a schede colorate.</div>
      </div>

      <!-- CONTEXT CALLOUT BOX -->
      <div class="exam-text-box" style="background: rgba(56,189,248,0.06); border-color: rgba(56,189,248,0.25);">
        ${data.context}
      </div>

      <!-- PRESET BUTTONS -->
      <div class="preset-btn-group">
        <button class="mod-btn ${currentPresetId === 1 ? 'active' : ''}" data-preset="1">✏️ T(n) = T(n-1) + 2n (Sostituzione c=2)</button>
        <button class="mod-btn ${currentPresetId === 2 ? 'active' : ''}" data-preset="2">🌲 T(n) = (2/3)T(n-1) + 2n (Sostituzione c=6)</button>
        <button class="mod-btn ${currentPresetId === 3 ? 'active' : ''}" data-preset="3">👑 T(n) = 4T(n/2) + n^3 + 1 (MT Caso 3)</button>
        <button class="mod-btn ${currentPresetId === 4 ? 'active' : ''}" data-preset="4">🍂 T(n) = 8T(n/2) + n^2 (MT Caso 1)</button>
        <button class="mod-btn ${currentPresetId === 5 ? 'active' : ''}" data-preset="5">⚖️ T(n) = 2T(n/2) + n (MT Caso 2)</button>
        <button class="mod-btn ${currentPresetId === 6 ? 'active' : ''}" data-preset="6">🌿 T(n) = 2T(n/5) + T(n/2) + n (Asimmetrico)</button>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap:16px;">
        <!-- PANEL 1: DIMOSTRAZIONE / MASTER THEOREM CON STEP CARDS -->
        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:12px; padding:16px;">
          <div style="font-size:14px; font-weight:700; color:var(--accent-blue); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
            <span>${isMaster ? '👑 RISOLUZIONE TRAMITE MASTER THEOREM (I 3 Casi)' : '✏️ DIMOSTRAZIONE PER SOSTITUZIONE (Passo-Passo)'}</span>
          </div>
          <div>${data.subst}</div>
        </div>

        <!-- PANEL 2: ALBERO DI RICORSIONE & SERIE GEOMETRICA -->
        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:12px; padding:16px;">
          <div style="font-size:14px; font-weight:700; color:var(--accent-emerald); margin-bottom:14px; display:flex; align-items:center; gap:8px;">
            <span>🌳 ALBERO DI RICORSIONE & SERIE GEOMETRICA</span>
          </div>
          <div>${data.tree}</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.mod-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPresetId = parseInt(btn.getAttribute('data-preset'), 10);
        renderContent();
      });
    });
  }

  renderContent();
  return container;
}
