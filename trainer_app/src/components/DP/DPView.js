export function createDPView() {
  const container = document.createElement('div');
  container.className = 'card';

  let currentSubModule = 'lcs'; // 'fib', 'lcs', 'lis'

  const strX = "ALGORITMO";
  const strY = "ALGEBRA";

  function render() {
    container.innerHTML = `
      <div class="card-header">
        <h2 class="card-title">🧩 PROGRAMMAZIONE DINAMICA (DP) — Tabella 2D & Memoizzazione</h2>
        <span class="badge-tag">Sottoproblemi Sovrapposti & Struttura Ottima</span>
      </div>

      <div class="preset-btn-group">
        <button class="mod-btn ${currentSubModule === 'lcs' ? 'active' : ''}" id="dp-mod-lcs">🔤 LCS (Longest Common Subsequence)</button>
        <button class="mod-btn ${currentSubModule === 'fib' ? 'active' : ''}" id="dp-mod-fib">🌱 Fibonacci (Memo vs Bottom-Up)</button>
        <button class="mod-btn ${currentSubModule === 'lis' ? 'active' : ''}" id="dp-mod-lis">📈 LIS (Longest Increasing Subsequence)</button>
      </div>

      <div class="exam-text-box">
        <div class="exam-text-title">📜 EQUAZIONE DI RICORRENZA LCS</div>
        <div>Se <code>X[i] == Y[j]</code> allora <code>c[i,j] = c[i-1,j-1] + 1</code>. Altrimenti <code>c[i,j] = max(c[i-1,j], c[i,j-1])</code>.</div>
      </div>

      <div class="dp-table-wrap">
        <div style="font-size:13px; font-weight:700; color:var(--accent-blue); margin-bottom:12px;">📊 MATRICE DP 2D: c[0..m, 0..n] (X = "${strX}", Y = "${strY}")</div>
        <div id="dp-matrix-container"></div>
      </div>
    `;

    renderLCSMatrix();

    container.querySelector('#dp-mod-lcs').addEventListener('click', () => { currentSubModule = 'lcs'; render(); });
    container.querySelector('#dp-mod-fib').addEventListener('click', () => { currentSubModule = 'fib'; render(); });
    container.querySelector('#dp-mod-lis').addEventListener('click', () => { currentSubModule = 'lis'; render(); });
  }

  function renderLCSMatrix() {
    const matrixBox = container.querySelector('#dp-matrix-container');
    if (!matrixBox) return;

    const m = strX.length;
    const n = strY.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (strX[i - 1] === strY[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    let html = '<table class="dp-table"><thead><tr><th>i\\j</th><th>Ø</th>';
    for (let j = 1; j <= n; j++) {
      html += `<th>${j}<br><small style="color:var(--accent-amber);">${strY[j - 1]}</small></th>`;
    }
    html += '</tr></thead><tbody>';

    for (let i = 0; i <= m; i++) {
      const charX = i === 0 ? 'Ø' : strX[i - 1];
      html += `<tr><th>${i} <small style="color:var(--accent-amber);">${charX}</small></th>`;
      for (let j = 0; j <= n; j++) {
        const val = dp[i][j];
        const isMatch = i > 0 && j > 0 && strX[i - 1] === strY[j - 1];
        const cls = isMatch ? 'done' : '';
        html += `<td class="${cls}">${val}</td>`;
      }
      html += '</tr>';
    }
    html += '</tbody></table>';

    matrixBox.innerHTML = html;
  }

  render();
  return container;
}
