export function createHeapView() {
  const container = document.createElement('div');
  container.className = 'card';

  let currentArray = [7, 1, 17, 0, 5, 4, 22];

  function render() {
    container.innerHTML = `
      <div class="card-header">
        <h2 class="card-title">🌳 MAX-HEAP & HEAPSORT — Visualizzatore Albero SVG</h2>
        <span class="badge-tag">Padre >= Figli</span>
      </div>

      <div class="exam-text-box">
        <div class="exam-text-title">📜 GUIDA INTERATTIVA — OPERAZIONI SU MAX-HEAP</div>
        <div>Modifica gli elementi dell'array o usa le funzioni guidate per visualizzare la struttura ad albero binario quasi completo.</div>
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap; margin-bottom:16px;">
        <input type="text" id="heap-input" class="mod-btn" style="width:240px; text-align:left;" value="${currentArray.join(', ')}">
        <button class="action-btn" id="heap-reset-btn">Reset Array</button>
        <button class="action-btn" style="background: linear-gradient(135deg, #059669, #10b981);" id="heap-build-btn">BuildMaxHeap()</button>
        <button class="action-btn" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);" id="heap-sort-btn">HeapSort()</button>
      </div>

      <div class="tree-canvas-container">
        <svg id="heap-svg" class="tree-svg" viewBox="0 0 800 360"></svg>
      </div>

      <div style="margin-top:14px; font-size:13px; color:var(--text-muted);">
        Stato dell'Array: <code style="color:var(--accent-blue); font-weight:700;">[${currentArray.join(', ')}]</code>
      </div>
    `;

    setTimeout(drawTree, 50);

    container.querySelector('#heap-reset-btn').addEventListener('click', () => {
      const val = container.querySelector('#heap-input').value;
      currentArray = val.split(',').map(x => parseInt(x.trim(), 10)).filter(x => !isNaN(x));
      render();
    });

    container.querySelector('#heap-build-btn').addEventListener('click', () => {
      // Build max heap logic
      for (let i = Math.floor(currentArray.length / 2) - 1; i >= 0; i--) {
        maxHeapify(currentArray, currentArray.length, i);
      }
      render();
    });

    container.querySelector('#heap-sort-btn').addEventListener('click', () => {
      // Heap sort logic
      let n = currentArray.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) maxHeapify(currentArray, n, i);
      for (let i = n - 1; i > 0; i--) {
        [currentArray[0], currentArray[i]] = [currentArray[i], currentArray[0]];
        maxHeapify(currentArray, i, 0);
      }
      render();
    });
  }

  function maxHeapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      maxHeapify(arr, n, largest);
    }
  }

  function drawTree() {
    const svg = container.querySelector('#heap-svg');
    if (!svg) return;
    svg.innerHTML = '';
    const n = currentArray.length;
    if (n === 0) return;

    const coords = [];
    const startY = 50, levelH = 75;

    for (let i = 0; i < n; i++) {
      const level = Math.floor(Math.log2(i + 1));
      const posInLevel = i - (Math.pow(2, level) - 1);
      const totalInLevel = Math.pow(2, level);
      const x = (800 / (totalInLevel + 1)) * (posInLevel + 1);
      const y = startY + level * levelH;
      coords.push({ x, y });
    }

    // Lines
    for (let i = 0; i < n; i++) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', coords[i].x); line.setAttribute('y1', coords[i].y);
        line.setAttribute('x2', coords[left].x); line.setAttribute('y2', coords[left].y);
        line.setAttribute('stroke', '#334155'); line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
      }
      if (right < n) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', coords[i].x); line.setAttribute('y1', coords[i].y);
        line.setAttribute('x2', coords[right].x); line.setAttribute('y2', coords[right].y);
        line.setAttribute('stroke', '#334155'); line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
      }
    }

    // Nodes
    for (let i = 0; i < n; i++) {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', coords[i].x); circle.setAttribute('cy', coords[i].y);
      circle.setAttribute('r', '20'); circle.setAttribute('fill', '#0f172a');
      circle.setAttribute('stroke', '#38bdf8'); circle.setAttribute('stroke-width', '2.5');

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', coords[i].x); text.setAttribute('y', coords[i].y + 5);
      text.setAttribute('text-anchor', 'middle'); text.setAttribute('fill', '#f8fafc');
      text.setAttribute('font-size', '13px'); text.setAttribute('font-weight', '700');
      text.textContent = currentArray[i];

      g.appendChild(circle); g.appendChild(text); svg.appendChild(g);
    }
  }

  render();
  return container;
}
