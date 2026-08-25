export function createGreedyView() {
  const container = document.createElement('div');
  container.className = 'card';

  let activeStrategy = 1;

  const activities = [
    { id: 1, name: 'a1', s: 1, f: 4 },
    { id: 2, name: 'a2', s: 3, f: 5 },
    { id: 3, name: 'a3', s: 0, f: 6 },
    { id: 4, name: 'a4', s: 5, f: 7 },
    { id: 5, name: 'a5', s: 3, f: 8 },
    { id: 6, name: 'a6', s: 5, f: 9 },
    { id: 7, name: 'a7', s: 6, f: 10 },
    { id: 8, name: 'a8', s: 8, f: 11 }
  ];

  function render() {
    container.innerHTML = `
      <div class="card-header">
        <h2 class="card-title">🎯 GREEDY — Activity Selection & Timeline Visualizer</h2>
        <span class="badge-tag">Scelta Ottima Locale</span>
      </div>

      <div class="exam-text-box">
        <div class="exam-text-title">📜 DIMOSTRAZIONE TEORICA — SCELTA GREEDY OTTIMA</div>
        <div>Per selezionare il maggior numero di attività compatibili, l'algoritmo standard ordina le attività per <b>tempo di fine crescente (f_i)</b> oppure per <b>tempo di inizio decrescente (s_i dall'ultima)</b>.</div>
      </div>

      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:20px;">
        <button class="mod-btn ${activeStrategy === 1 ? 'active' : ''}" id="gs-1">📅 Strategia 1: Tempo di Fine Crescente (Activity Selection)</button>
        <button class="mod-btn ${activeStrategy === 2 ? 'active' : ''}" id="gs-2">⏱️ Strategia 2: Scheduling Programmi (Sum C_j)</button>
      </div>

      <!-- GANTT TIMELINE -->
      <div style="background:#060911; border:1px solid var(--border-color); border-radius:12px; padding:20px;">
        <div style="font-size:13px; font-weight:700; color:var(--accent-blue); margin-bottom:14px;">📊 VISUALIZZAZIONE TEMPORALE GANTT</div>
        <div id="gantt-bars" style="display:flex; flex-direction:column; gap:8px;"></div>
      </div>
    `;

    renderGantt();

    container.querySelector('#gs-1').addEventListener('click', () => { activeStrategy = 1; render(); });
    container.querySelector('#gs-2').addEventListener('click', () => { activeStrategy = 2; render(); });
  }

  function renderGantt() {
    const barsContainer = container.querySelector('#gantt-bars');
    if (!barsContainer) return;
    barsContainer.innerHTML = '';

    // Sort by finish time
    const sorted = [...activities].sort((a, b) => a.f - b.f);
    const selected = [];
    let lastF = 0;
    sorted.forEach(act => {
      if (act.s >= lastF) {
        selected.push(act.id);
        lastF = act.f;
      }
    });

    activities.forEach(act => {
      const isSel = selected.includes(act.id);
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '12px';

      const label = document.createElement('div');
      label.style.width = '70px';
      label.style.fontSize = '12px';
      label.style.fontWeight = '700';
      label.style.color = isSel ? 'var(--accent-emerald)' : 'var(--text-muted)';
      label.textContent = `${act.name} [${act.s}, ${act.f}]`;

      const barWrap = document.createElement('div');
      barWrap.style.flex = '1';
      barWrap.style.background = '#0f172a';
      barWrap.style.height = '24px';
      barWrap.style.borderRadius = '4px';
      barWrap.style.position = 'relative';

      const bar = document.createElement('div');
      const leftPct = (act.s / 12) * 100;
      const widthPct = ((act.f - act.s) / 12) * 100;
      bar.style.position = 'absolute';
      bar.style.left = `${leftPct}%`;
      bar.style.width = `${widthPct}%`;
      bar.style.height = '100%';
      bar.style.borderRadius = '4px';
      bar.style.background = isSel ? 'var(--accent-emerald)' : 'rgba(148, 163, 184, 0.2)';
      bar.style.border = isSel ? '1px solid #10b981' : '1px solid #334155';

      barWrap.appendChild(bar);
      row.appendChild(label);
      row.appendChild(barWrap);
      barsContainer.appendChild(row);
    });
  }

  render();
  return container;
}
