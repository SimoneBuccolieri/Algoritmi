export function createBSTView() {
  const container = document.createElement('div');
  container.className = 'card';

  class BSTNode {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

  let root = null;
  [10, 5, 15, 3, 7, 12].forEach(k => root = insertBST(root, k));

  function insertBST(node, key) {
    if (!node) return new BSTNode(key);
    if (key < node.key) node.left = insertBST(node.left, key);
    else if (key > node.key) node.right = insertBST(node.right, key);
    return node;
  }

  function deleteBST(node, key) {
    if (!node) return null;
    if (key < node.key) node.left = deleteBST(node.left, key);
    else if (key > node.key) node.right = deleteBST(node.right, key);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let temp = minValueNode(node.right);
      node.key = temp.key;
      node.right = deleteBST(node.right, temp.key);
    }
    return node;
  }

  function minValueNode(node) {
    let current = node;
    while (current.left) current = current.left;
    return current;
  }

  function render() {
    container.innerHTML = `
      <div class="card-header">
        <h2 class="card-title">🌴 BST — Albero Binario di Ricerca (Proprietà: Sinistra < Padre < Destra)</h2>
        <span class="badge-tag">Appelli Baldan 2024–2026</span>
      </div>

      <div class="exam-text-box">
        <div class="exam-text-title">📜 PROPRIETÀ CHIAVE ED ESERCIZI GUIDATI BST</div>
        <div>Per ogni nodo x: tutte le chiavi nel sottoalbero sinistro sono &lt; x.key e tutte le chiavi nel sottoalbero destro sono &gt; x.key. Nella cancellazione di un nodo con 2 figli, lo si sostituisce con il suo <b>Successore (minimo a destra)</b> o <b>Predecessore (massimo a sinistra)</b>.</div>
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap; margin-bottom:16px;">
        <input type="number" id="bst-input" class="mod-btn" style="width:140px;" placeholder="Chiave...">
        <button class="action-btn" id="bst-insert-btn">Inserisci Nodo</button>
        <button class="action-btn" style="background: linear-gradient(135deg, #dc2626, #ef4444);" id="bst-delete-btn">Cancella Nodo</button>
        <button class="action-btn" style="background: linear-gradient(135deg, #4f46e5, #6366f1);" id="bst-reset-btn">Reset [10,5,15,3,7,12]</button>
      </div>

      <div class="tree-canvas-container">
        <svg id="bst-svg" class="tree-svg" viewBox="0 0 800 360"></svg>
      </div>
    `;

    setTimeout(drawBST, 50);

    container.querySelector('#bst-insert-btn').addEventListener('click', () => {
      const val = parseInt(container.querySelector('#bst-input').value, 10);
      if (!isNaN(val)) {
        root = insertBST(root, val);
        render();
      }
    });

    container.querySelector('#bst-delete-btn').addEventListener('click', () => {
      const val = parseInt(container.querySelector('#bst-input').value, 10);
      if (!isNaN(val)) {
        root = deleteBST(root, val);
        render();
      }
    });

    container.querySelector('#bst-reset-btn').addEventListener('click', () => {
      root = null;
      [10, 5, 15, 3, 7, 12].forEach(k => root = insertBST(root, k));
      render();
    });
  }

  function drawBST() {
    const svg = container.querySelector('#bst-svg');
    if (!svg) return;
    svg.innerHTML = '';
    if (!root) return;

    function renderNode(node, x, y, dx) {
      if (node.left) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x); line.setAttribute('y1', y);
        line.setAttribute('x2', x - dx); line.setAttribute('y2', y + 60);
        line.setAttribute('stroke', '#334155'); line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
        renderNode(node.left, x - dx, y + 60, dx / 1.8);
      }
      if (node.right) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x); line.setAttribute('y1', y);
        line.setAttribute('x2', x + dx); line.setAttribute('y2', y + 60);
        line.setAttribute('stroke', '#334155'); line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
        renderNode(node.right, x + dx, y + 60, dx / 1.8);
      }

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x); circle.setAttribute('cy', y);
      circle.setAttribute('r', '20'); circle.setAttribute('fill', '#0f172a');
      circle.setAttribute('stroke', '#34d399'); circle.setAttribute('stroke-width', '2.5');

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x); text.setAttribute('y', y + 5);
      text.setAttribute('text-anchor', 'middle'); text.setAttribute('fill', '#f8fafc');
      text.setAttribute('font-size', '13px'); text.setAttribute('font-weight', '700');
      text.textContent = node.key;

      g.appendChild(circle); g.appendChild(text); svg.appendChild(g);
    }

    renderNode(root, 400, 50, 160);
  }

  render();
  return container;
}
