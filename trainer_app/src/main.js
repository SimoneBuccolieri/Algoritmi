import './styles/main.css';
import { createNavbar } from './components/Navbar.js';
import { createDomandaAView } from './components/DomandaA/DomandaAView.js';
import { createHeapView } from './components/Heap/HeapView.js';
import { createBSTView } from './components/BST/BSTView.js';
import { createGreedyView } from './components/Greedy/GreedyView.js';
import { createDPView } from './components/DP/DPView.js';
import { createSortingView } from './components/Sorting/SortingView.js';

let activeTab = 'domanda-a';
const app = document.getElementById('app');

function renderApp() {
  app.innerHTML = '';

  const navbar = createNavbar(activeTab, (newTab) => {
    activeTab = newTab;
    renderApp();
  });

  const main = document.createElement('main');

  if (activeTab === 'domanda-a') {
    main.appendChild(createDomandaAView());
  } else if (activeTab === 'sorting') {
    main.appendChild(createSortingView());
  } else if (activeTab === 'heap') {
    main.appendChild(createHeapView());
  } else if (activeTab === 'bst') {
    main.appendChild(createBSTView());
  } else if (activeTab === 'greedy') {
    main.appendChild(createGreedyView());
  } else if (activeTab === 'dp') {
    main.appendChild(createDPView());
  }

  const footer = document.createElement('footer');
  footer.innerHTML = `Algoritmi UniPD — Visualizzatore & Trainer d'Esame Interattivo | Prof. Baldan (UniPD)`;

  app.appendChild(navbar);
  app.appendChild(main);
  app.appendChild(footer);
}

renderApp();
