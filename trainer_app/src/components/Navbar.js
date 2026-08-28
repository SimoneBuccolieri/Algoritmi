export function createNavbar(activeTab, onTabChange) {
  const header = document.createElement('header');
  header.innerHTML = `
    <div class="brand">
      <div class="brand-icon">A</div>
      <div class="brand-text">
        <h1>Algoritmi UniPD — Visualizzatore & Trainer d'Esame</h1>
        <p>Prof. Baldan | Università degli Studi di Padova</p>
      </div>
    </div>
    <nav>
      <button class="tab-btn ${activeTab === 'domanda-a' ? 'active' : ''}" data-tab="domanda-a">
        📐 DOMANDA A (Ricorrenze)
      </button>
      <button class="tab-btn ${activeTab === 'sorting' ? 'active' : ''}" data-tab="sorting">
        ✨ SORTING (Merge, Quick, Heap)
      </button>
      <button class="tab-btn ${activeTab === 'heap' ? 'active' : ''}" data-tab="heap">
        🌳 MAX-HEAP
      </button>
      <button class="tab-btn ${activeTab === 'bst' ? 'active' : ''}" data-tab="bst">
        🌴 BST
      </button>
      <button class="tab-btn ${activeTab === 'greedy' ? 'active' : ''}" data-tab="greedy">
        🎯 GREEDY
      </button>
      <button class="tab-btn ${activeTab === 'dp' ? 'active' : ''}" data-tab="dp">
        🧩 DINAMICA (DP)
      </button>
    </nav>
  `;

  header.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      onTabChange(tab);
    });
  });

  return header;
}
