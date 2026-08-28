export function createSortingView() {
  const container = document.createElement('div');
  container.className = 'card';

  let currentAlgorithm = 'mergesort';
  let initialArray = [38, 27, 43, 3, 9, 82, 10];
  let trace = [];
  let currentStep = 0;
  let isPlaying = false;
  let playInterval = null;
  let speedMs = 1000;

  const pseudocodeMap = {
    mergesort: [
      { num: 1, text: "MergeSort(A, p, r):" },
      { num: 2, text: "    if p < r:" },
      { num: 3, text: "        q = floor((p + r) / 2)" },
      { num: 4, text: "        MergeSort(A, p, q)" },
      { num: 5, text: "        MergeSort(A, q + 1, r)" },
      { num: 6, text: "        Merge(A, p, q, r)" },
      { num: 7, text: "" },
      { num: 8, text: "Merge(A, p, q, r):" },
      { num: 9, text: "    Crea L = A[p..q]  e  R = A[q+1..r]" },
      { num: 10, text: "    i = 1, j = 1, k = p" },
      { num: 11, text: "    while i <= n1 e j <= n2:" },
      { num: 12, text: "        if L[i] <= R[j]:" },
      { num: 13, text: "            A[k] = L[i]; i++" },
      { num: 14, text: "        else:" },
      { num: 15, text: "            A[k] = R[j]; j++" },
      { num: 16, text: "    Copia rimanenti di L e poi di R" }
    ],
    quicksort: [
      { num: 1, text: "QuickSort(A, p, r):" },
      { num: 2, text: "    if p < r:" },
      { num: 3, text: "        q = Partition(A, p, r)" },
      { num: 4, text: "        QuickSort(A, p, q - 1)" },
      { num: 5, text: "        QuickSort(A, q + 1, r)" },
      { num: 6, text: "" },
      { num: 7, text: "Partition(A, p, r):" },
      { num: 8, text: "    x = A[r]  // Perno/Pivot" },
      { num: 9, text: "    i = p - 1" },
      { num: 10, text: "    for j = p to r - 1:" },
      { num: 11, text: "        if A[j] <= x:" },
      { num: 12, text: "            i = i + 1; scambia A[i] con A[j]" },
      { num: 13, text: "    scambia A[i + 1] con A[r]" },
      { num: 14, text: "    return i + 1" }
    ],
    heapsort: [
      { num: 1, text: "HeapSort(A):" },
      { num: 2, text: "    BuildMaxHeap(A)" },
      { num: 3, text: "    for i = A.length down to 2:" },
      { num: 4, text: "        scambia A[1] con A[i]" },
      { num: 5, text: "        heap_size = heap_size - 1" },
      { num: 6, text: "        MaxHeapify(A, 1)" },
      { num: 7, text: "" },
      { num: 8, text: "MaxHeapify(A, i):" },
      { num: 9, text: "    l = 2*i, r = 2*i + 1" },
      { num: 10, text: "    largest = indice del massimo tra {A[i], A[l], A[r]}" },
      { num: 11, text: "    if largest != i:" },
      { num: 12, text: "        scambia A[i] con A[largest]" },
      { num: 13, text: "        MaxHeapify(A, largest)" }
    ]
  };

  function generateTrace() {
    trace = [];
    const A = [...initialArray];

    trace.push({
      array: [...A],
      line: 1,
      comparing: [],
      swapped: [],
      pivot: -1,
      activeRange: [0, A.length - 1],
      phase: 'init',
      callStack: ['Main'],
      log: 'Stato iniziale dell\'array prima dell\'ordinamento.'
    });

    if (currentAlgorithm === 'mergesort') {
      runMergeSort(A, 0, A.length - 1, ['MergeSort(1, ' + A.length + ')']);
    } else if (currentAlgorithm === 'quicksort') {
      runQuickSort(A, 0, A.length - 1, ['QuickSort(1, ' + A.length + ')']);
    } else if (currentAlgorithm === 'heapsort') {
      runHeapSort(A);
    }

    trace.push({
      array: [...A],
      line: 0,
      comparing: [],
      swapped: [],
      pivot: -1,
      activeRange: [0, A.length - 1],
      phase: 'complete',
      callStack: ['Finito'],
      log: 'Ordinamento completato con successo!'
    });
  }

  function runMergeSort(arr, p, r, stack) {
    trace.push({
      array: [...arr],
      line: 2,
      comparing: [],
      swapped: [],
      pivot: -1,
      activeRange: [p, r],
      phase: 'split',
      callStack: [...stack],
      log: `MergeSort su A[${p+1}..${r+1}]: controllo se p (${p+1}) < r (${r+1})`
    });

    if (p < r) {
      const q = Math.floor((p + r) / 2);
      trace.push({
        array: [...arr],
        line: 3,
        comparing: [],
        swapped: [],
        pivot: -1,
        activeRange: [p, r],
        midPoint: q,
        phase: 'split',
        callStack: [...stack],
        log: `Calcolo punto medio q = ${q+1}. Divido in SX [${p+1}..${q+1}] e DX [${q+2}..${r+1}]`
      });

      const leftStack = [...stack, `MergeSort(${p+1}, ${q+1})`];
      trace.push({
        array: [...arr],
        line: 4,
        comparing: [],
        swapped: [],
        pivot: -1,
        activeRange: [p, q],
        phase: 'split',
        callStack: leftStack,
        log: `Chiamata ricorsiva a Sinistra: A[${p+1}..${q+1}]`
      });
      runMergeSort(arr, p, q, leftStack);

      const rightStack = [...stack, `MergeSort(${q+2}, ${r+1})`];
      trace.push({
        array: [...arr],
        line: 5,
        comparing: [],
        swapped: [],
        pivot: -1,
        activeRange: [q + 1, r],
        phase: 'split',
        callStack: rightStack,
        log: `Chiamata ricorsiva a Destra: A[${q+2}..${r+1}]`
      });
      runMergeSort(arr, q + 1, r, rightStack);

      const mergeStack = [...stack, `Merge(${p+1}, ${q+1}, ${r+1})`];
      trace.push({
        array: [...arr],
        line: 6,
        comparing: [],
        swapped: [],
        pivot: -1,
        activeRange: [p, r],
        phase: 'merge-start',
        callStack: mergeStack,
        log: `Inizio fusione Merge di A[${p+1}..${q+1}] con A[${q+2}..${r+1}]`
      });
      merge(arr, p, q, r, mergeStack);
    }
  }

  function merge(arr, p, q, r, stack) {
    const L = arr.slice(p, q + 1);
    const R = arr.slice(q + 1, r + 1);

    trace.push({
      array: [...arr],
      line: 9,
      comparing: [],
      swapped: [],
      pivot: -1,
      activeRange: [p, r],
      phase: 'merge-arrays',
      L: [...L],
      R: [...R],
      i: 0,
      j: 0,
      k: p,
      callStack: stack,
      log: `Creati mazzi separati: L = [${L.join(', ')}] (SX) e R = [${R.join(', ')}] (DX)`
    });

    let i = 0, j = 0, k = p;

    while (i < L.length && j < R.length) {
      trace.push({
        array: [...arr],
        line: 12,
        comparing: [p + i, q + 1 + j],
        swapped: [],
        pivot: -1,
        activeRange: [p, r],
        phase: 'merge-comparing',
        L: [...L],
        R: [...R],
        i: i,
        j: j,
        k: k,
        callStack: stack,
        log: `Confronto L[${i+1}]=${L[i]} con R[${j+1}]=${R[j]}. Chi è minore?`
      });

      if (L[i] <= R[j]) {
        arr[k] = L[i];
        trace.push({
          array: [...arr],
          line: 13,
          comparing: [],
          swapped: [k],
          pivot: -1,
          activeRange: [p, r],
          phase: 'merge-copy',
          L: [...L],
          R: [...R],
          i: i,
          j: j,
          k: k,
          callStack: stack,
          log: `L[${i+1}] (${L[i]}) <= R[${j+1}] (${R[j]}). Posiziono ${L[i]} in A[${k+1}]. Avanzo i.`
        });
        i++;
      } else {
        arr[k] = R[j];
        const inv = L.length - i;
        trace.push({
          array: [...arr],
          line: 15,
          comparing: [],
          swapped: [k],
          pivot: -1,
          activeRange: [p, r],
          phase: 'merge-inversion',
          L: [...L],
          R: [...R],
          i: i,
          j: j,
          k: k,
          inversions: inv,
          callStack: stack,
          log: `R[${j+1}] (${R[j]}) < L[${i+1}] (${L[i]}): Prendo ${R[j]} in A[${k+1}]. Rilevate ${inv} inversioni cross!`
        });
        j++;
      }
      k++;
    }

    while (i < L.length) {
      arr[k] = L[i];
      trace.push({
        array: [...arr],
        line: 16,
        comparing: [],
        swapped: [k],
        pivot: -1,
        activeRange: [p, r],
        phase: 'merge-copy',
        L: [...L],
        R: [...R],
        i: i,
        j: j,
        k: k,
        callStack: stack,
        log: `Svuoto rimanente da L: A[${k+1}] = ${L[i]}`
      });
      i++;
      k++;
    }

    while (j < R.length) {
      arr[k] = R[j];
      trace.push({
        array: [...arr],
        line: 16,
        comparing: [],
        swapped: [k],
        pivot: -1,
        activeRange: [p, r],
        phase: 'merge-copy',
        L: [...L],
        R: [...R],
        i: i,
        j: j,
        k: k,
        callStack: stack,
        log: `Svuoto rimanente da R: A[${k+1}] = ${R[j]}`
      });
      j++;
      k++;
    }
  }

  function runQuickSort(arr, p, r, stack) {
    trace.push({
      array: [...arr],
      line: 2,
      comparing: [],
      swapped: [],
      pivot: -1,
      activeRange: [p, r],
      phase: 'quick',
      callStack: stack,
      log: `QuickSort su range A[${p+1}..${r+1}]`
    });

    if (p < r) {
      const q = partition(arr, p, r, stack);
      const leftStack = [...stack, `QuickSort(${p+1}, ${q})`];
      runQuickSort(arr, p, q - 1, leftStack);

      const rightStack = [...stack, `QuickSort(${q+2}, ${r+1})`];
      runQuickSort(arr, q + 1, r, rightStack);
    }
  }

  function partition(arr, p, r, stack) {
    const x = arr[r];
    let i = p - 1;

    trace.push({
      array: [...arr],
      line: 8,
      comparing: [],
      swapped: [],
      pivot: r,
      activeRange: [p, r],
      phase: 'partition-init',
      callStack: [...stack, 'Partition'],
      i: i,
      j: p,
      x: x,
      log: `Partition: Scelto Perno A[${r+1}] = ${x}. Indice i inizializzato a ${i+1}.`
    });

    for (let j = p; j < r; j++) {
      trace.push({
        array: [...arr],
        line: 11,
        comparing: [j, r],
        swapped: [],
        pivot: r,
        activeRange: [p, r],
        phase: 'partition-compare',
        callStack: [...stack, 'Partition'],
        i: i,
        j: j,
        x: x,
        log: `Confronto A[${j+1}]=${arr[j]} col Perno ${x}`
      });

      if (arr[j] <= x) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        trace.push({
          array: [...arr],
          line: 12,
          comparing: [],
          swapped: [i, j],
          pivot: r,
          activeRange: [p, r],
          phase: 'partition-swap',
          callStack: [...stack, 'Partition'],
          i: i,
          j: j,
          x: x,
          log: `A[${j+1}] <= ${x}. Avanzo i a ${i+1} e scambio A[${i+1}] con A[${j+1}]`
        });
      }
    }

    [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
    trace.push({
      array: [...arr],
      line: 13,
      comparing: [],
      swapped: [i + 1, r],
      pivot: i + 1,
      activeRange: [p, r],
      phase: 'partition-final',
      callStack: [...stack, 'Partition'],
      i: i + 1,
      x: x,
      log: `Posiziono il Perno ${x} nel suo posto definitivo A[${i+2}] scambiandolo con A[${r+1}]`
    });

    return i + 1;
  }

  function runHeapSort(arr) {
    let heapSize = arr.length;
    trace.push({
      array: [...arr],
      line: 2,
      comparing: [],
      swapped: [],
      pivot: -1,
      activeRange: [0, arr.length - 1],
      phase: 'heap-build',
      callStack: ['BuildMaxHeap'],
      heapSize: heapSize,
      log: `Inizio BuildMaxHeap per trasformare l'array in Max-Heap`
    });

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      maxHeapify(arr, heapSize, i, ['BuildMaxHeap', `MaxHeapify(${i+1})`]);
    }

    for (let i = arr.length - 1; i >= 1; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapSize--;
      trace.push({
        array: [...arr],
        line: 4,
        comparing: [],
        swapped: [0, i],
        pivot: -1,
        activeRange: [0, i - 1],
        phase: 'heap-extract',
        callStack: [`HeapSort (i = ${i+1})`],
        heapSize: heapSize,
        log: `Scambio il massimo A[1]=${arr[i]} in fondo (posizione A[${i+1}]) e riduco heap_size a ${heapSize}`
      });
      maxHeapify(arr, heapSize, 0, [`HeapSort`, `MaxHeapify(radice)`]);
    }
  }

  function maxHeapify(arr, heapSize, i, stack) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < heapSize && arr[l] > arr[largest]) largest = l;
    if (r < heapSize && arr[r] > arr[largest]) largest = r;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      trace.push({
        array: [...arr],
        line: 12,
        comparing: [],
        swapped: [i, largest],
        pivot: -1,
        activeRange: [0, heapSize - 1],
        phase: 'heap-swap',
        callStack: stack,
        heapSize: heapSize,
        log: `Padre A[${i+1}] minore del figlio A[${largest+1}]. Li scambio e continuo la discesa.`
      });
      maxHeapify(arr, heapSize, largest, stack);
    }
  }

  function render() {
    container.innerHTML = `
      <div class="card-header">
        <h2 class="card-title">✨ VISUALIZZATORE INTERATTIVO ALGORITMI DI ORDINAMENTO</h2>
        <span class="badge-tag">Guida Visiva Ufficiale d'Esame</span>
      </div>

      <div class="preset-btn-group">
        <button class="mod-btn ${currentAlgorithm === 'mergesort' ? 'active' : ''}" id="sort-btn-merge">🥞 MERGESORT (e Inversioni)</button>
        <button class="mod-btn ${currentAlgorithm === 'quicksort' ? 'active' : ''}" id="sort-btn-quick">⚡ QUICKSORT (Pivot & Partition)</button>
        <button class="mod-btn ${currentAlgorithm === 'heapsort' ? 'active' : ''}" id="sort-btn-heap">🌳 HEAPSORT (Priority Queue)</button>
      </div>

      <!-- BANNER DI CONTROLLO -->
      <div style="background: rgba(15, 23, 42, 0.95); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <button class="action-btn" id="ctrl-start" style="padding: 8px 14px;">⏮ Inizio</button>
          <button class="action-btn" id="ctrl-prev" style="padding: 8px 14px;">◀ Indietro</button>
          <button class="action-btn" id="ctrl-play" style="padding: 8px 18px; background: linear-gradient(135deg, #10b981, #059669);">▶ Play</button>
          <button class="action-btn" id="ctrl-next" style="padding: 8px 14px;">Avanti ▶</button>
          <button class="action-btn" id="ctrl-end" style="padding: 8px 14px;">Fine ⏭</button>
        </div>
        
        <div style="display: flex; gap: 16px; align-items: center;">
          <div style="font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
            <span>Velocità:</span>
            <input type="range" id="speed-slider" min="150" max="1500" step="50" value="${1650 - speedMs}" style="width: 100px;">
            <span id="speed-text" style="font-family: 'JetBrains Mono', monospace; color: var(--accent-blue);">${speedMs}ms</span>
          </div>
          <button class="action-btn" id="ctrl-shuffle" style="padding: 8px 14px; background: #334155; color: #fff;">🔄 Reset / Mescola</button>
        </div>
      </div>

      <!-- CONTAINER PRINCIPALE A 2 COLONNE -->
      <div style="display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 20px;">
        
        <!-- COLONNA SINISTRA: GRAFICA E VARIABILI -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
          
          <!-- ARRAY PRINCIPALE (A) -->
          <div style="background: #060911; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
              <span style="font-size: 13px; font-weight: 700; color: var(--accent-blue);">📊 ARRAY PRINCIPALE A[1..n]</span>
              <span id="call-stack-badge" style="font-size: 11px; font-family: 'JetBrains Mono', monospace; color: var(--accent-amber); background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); padding: 2px 8px; border-radius: 12px;">Stack: Main</span>
            </div>
            <div id="main-array-visual" style="display: flex; gap: 10px; justify-content: center; align-items: flex-end; min-height: 120px;"></div>
          </div>

          <!-- SEZIONE SPECIALE DINAMICA (Sottoarray L ed R per MergeSort, oppure Zona Partition) -->
          <div id="special-subvisual-card" style="background: #060911; border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-md); padding: 18px; min-height: 140px;">
            <!-- Riempito dinamicamente -->
          </div>

          <!-- LOG ESPLICATIVO DEL PASSO -->
          <div style="background: #090d16; border-left: 4px solid var(--accent-emerald); border-radius: var(--radius-sm); padding: 14px 16px; font-size: 13px; line-height: 1.5; color: #f8fafc;" id="step-log-box">
            In attesa di avvio...
          </div>
        </div>

        <!-- COLONNA DESTRA: PSEUDOCODICE EVIDENZIATO -->
        <div style="display: flex; flex-direction: column;">
          <div style="background: #060911; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px; height: 100%; display: flex; flex-direction: column;">
            <div style="font-size: 13px; font-weight: 700; color: var(--text-main); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <span>📜 PSEUDOCODICE UFFICIALE (Baldan)</span>
            </div>
            <div id="code-container" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.9; overflow-y: auto; flex: 1;"></div>
          </div>
        </div>

      </div>
    `;

    // Listeners
    container.querySelector('#sort-btn-merge').addEventListener('click', () => setAlgorithm('mergesort'));
    container.querySelector('#sort-btn-quick').addEventListener('click', () => setAlgorithm('quicksort'));
    container.querySelector('#sort-btn-heap').addEventListener('click', () => setAlgorithm('heapsort'));

    container.querySelector('#ctrl-start').addEventListener('click', () => gotoStep(0));
    container.querySelector('#ctrl-prev').addEventListener('click', () => prevStep());
    container.querySelector('#ctrl-play').addEventListener('click', () => togglePlay());
    container.querySelector('#ctrl-next').addEventListener('click', () => nextStep());
    container.querySelector('#ctrl-end').addEventListener('click', () => gotoStep(trace.length - 1));
    container.querySelector('#ctrl-shuffle').addEventListener('click', () => shuffleArray());

    const slider = container.querySelector('#speed-slider');
    slider.addEventListener('input', (e) => {
      speedMs = 1650 - parseInt(e.target.value, 10);
      container.querySelector('#speed-text').textContent = `${speedMs}ms`;
      if (isPlaying) {
        pause();
        play();
      }
    });

    updateVisualizer();
  }

  function setAlgorithm(alg) {
    pause();
    currentAlgorithm = alg;
    generateTrace();
    currentStep = 0;
    render();
  }

  function shuffleArray() {
    pause();
    initialArray = [38, 27, 43, 3, 9, 82, 10].sort(() => Math.random() - 0.5);
    generateTrace();
    currentStep = 0;
    updateVisualizer();
  }

  function togglePlay() {
    isPlaying ? pause() : play();
  }

  function play() {
    isPlaying = true;
    const btn = container.querySelector('#ctrl-play');
    if (btn) btn.textContent = '⏸ Pausa';
    playInterval = setInterval(() => {
      if (currentStep < trace.length - 1) {
        nextStep();
      } else {
        pause();
      }
    }, speedMs);
  }

  function pause() {
    isPlaying = false;
    const btn = container.querySelector('#ctrl-play');
    if (btn) btn.textContent = '▶ Play';
    if (playInterval) {
      clearInterval(playInterval);
      playInterval = null;
    }
  }

  function nextStep() {
    if (currentStep < trace.length - 1) {
      currentStep++;
      updateVisualizer();
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      updateVisualizer();
    }
  }

  function gotoStep(step) {
    currentStep = step;
    updateVisualizer();
  }

  function updateVisualizer() {
    const s = trace[currentStep];
    if (!s) return;

    // 1. Aggiorna Log e Stack Badge
    const logBox = container.querySelector('#step-log-box');
    if (logBox) logBox.innerHTML = `<strong>Passo ${currentStep + 1} / ${trace.length}:</strong> ${s.log}`;

    const stackBadge = container.querySelector('#call-stack-badge');
    if (stackBadge && s.callStack) {
      stackBadge.textContent = s.callStack.join(' ➔ ');
    }

    // 2. Render Array Principale A
    const mainBox = container.querySelector('#main-array-visual');
    if (mainBox) {
      mainBox.innerHTML = '';
      const maxVal = Math.max(...initialArray);

      s.array.forEach((val, idx) => {
        const item = document.createElement('div');
        item.style.cssText = `
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 48px;
          transition: all 0.2s ease;
        `;

        const bar = document.createElement('div');
        const height = Math.max(32, (val / maxVal) * 90);
        bar.style.cssText = `
          width: 100%;
          height: ${height}px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 13px;
          color: #fff;
          transition: all 0.2s ease;
        `;

        // Colori in base allo stato
        const inActive = idx >= s.activeRange[0] && idx <= s.activeRange[1];
        if (s.pivot === idx) {
          bar.style.background = 'linear-gradient(135deg, #c084fc, #9333ea)'; // Viola perno
          bar.style.boxShadow = '0 0 12px rgba(192, 132, 252, 0.4)';
        } else if (s.comparing.includes(idx)) {
          bar.style.background = 'linear-gradient(135deg, #fbbf24, #d97706)'; // Giallo confronto
          bar.style.boxShadow = '0 0 12px rgba(251, 191, 36, 0.4)';
        } else if (s.swapped.includes(idx)) {
          bar.style.background = 'linear-gradient(135deg, #34d399, #059669)'; // Verde inserito/scambiato
          bar.style.boxShadow = '0 0 12px rgba(52, 211, 153, 0.4)';
        } else if (inActive) {
          bar.style.background = '#1e293b'; // Attivo nel sottoarray
          bar.style.border = '1px solid #38bdf8';
        } else {
          bar.style.background = '#090d16'; // Inattivo
          bar.style.color = '#475569';
          bar.style.border = '1px solid #1e293b';
        }

        bar.textContent = val;

        const idxLabel = document.createElement('span');
        idxLabel.style.cssText = `font-size: 11px; margin-top: 6px; color: ${inActive ? '#94a3b8' : '#475569'}; font-family: 'JetBrains Mono', monospace;`;
        idxLabel.textContent = `A[${idx + 1}]`;

        item.appendChild(bar);
        item.appendChild(idxLabel);
        mainBox.appendChild(item);
      });
    }

    // 3. Render Card Speciale Dinamica (L & R per Merge, Pointers per Quick, Heap per HeapSort)
    const specialCard = container.querySelector('#special-subvisual-card');
    if (specialCard) {
      if (currentAlgorithm === 'mergesort') {
        if (s.L && s.R) {
          specialCard.innerHTML = `
            <div style="font-size: 12px; font-weight: 700; color: var(--accent-blue); margin-bottom: 12px; display: flex; justify-content: space-between;">
              <span>🥞 MAZZI TEMPORANEI SEPARATI (Durante la procedura Merge)</span>
              <span>Posizione di scrittura: <strong style="color:var(--accent-emerald);">A[${s.k + 1}]</strong></span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              
              <!-- MAZZO L (SX) -->
              <div style="background: rgba(56, 189, 248, 0.05); border: 1px dashed var(--accent-blue); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; color: var(--accent-blue); font-weight: 700; margin-bottom: 8px;">Mazzo Sinistra L[1..${s.L.length}] (i = ${s.i + 1})</div>
                <div style="display: flex; gap: 8px;">
                  ${s.L.map((v, idx) => `
                    <div style="padding: 6px 12px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; ${idx === s.i ? 'background: var(--accent-amber); color: #000; box-shadow: 0 0 8px #fbbf24;' : (idx < s.i ? 'background: #1e293b; color: #475569; text-decoration: line-through;' : 'background: #0f172a; color: #fff; border: 1px solid #334155;')}">
                      ${v}
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- MAZZO R (DX) -->
              <div style="background: rgba(192, 132, 252, 0.05); border: 1px dashed var(--accent-purple); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; color: var(--accent-purple); font-weight: 700; margin-bottom: 8px;">Mazzo Destra R[1..${s.R.length}] (j = ${s.j + 1})</div>
                <div style="display: flex; gap: 8px;">
                  ${s.R.map((v, idx) => `
                    <div style="padding: 6px 12px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 700; ${idx === s.j ? 'background: var(--accent-rose); color: #fff; box-shadow: 0 0 8px #f43f5e;' : (idx < s.j ? 'background: #1e293b; color: #475569; text-decoration: line-through;' : 'background: #0f172a; color: #fff; border: 1px solid #334155;')}">
                      ${v}
                    </div>
                  `).join('')}
                </div>
              </div>

            </div>
            ${s.inversions ? `<div style="margin-top: 10px; font-size: 12px; color: var(--accent-rose); font-weight: 700;">⚠️ Rilevate ${s.inversions} inversioni! L'elemento destro ha saltato tutti gli elementi rimasti a sinistra.</div>` : ''}
          `;
        } else {
          specialCard.innerHTML = `
            <div style="font-size: 12px; color: var(--text-muted); text-align: center; padding: 20px;">
              Fase di Divisione ricorsiva: L'array viene diviso a metà fino a sottoarray di dimensione 1 prima di avviare il Merge.
            </div>
          `;
        }
      } else if (currentAlgorithm === 'quicksort') {
        specialCard.innerHTML = `
          <div style="font-size: 12px; font-weight: 700; color: var(--accent-purple); margin-bottom: 8px;">
            ⚡ ZONA PARTITION: Perno x = <span style="color:#fff; background:var(--accent-purple); padding:2px 8px; border-radius:4px;">${s.x !== undefined ? s.x : 'A[r]'}</span>
          </div>
          <div style="font-size: 12px; color: var(--text-muted); line-height: 1.6;">
            - Elementi da <code>p</code> a <code>i</code> sono <strong>minori o uguali al perno</strong> (zona sinistra).<br>
            - Elementi da <code>i+1</code> a <code>j-1</code> sono <strong>maggiori del perno</strong> (zona destra).<br>
            - Indice di scansione corrente: <strong style="color:var(--accent-amber);">j = ${s.j !== undefined ? s.j + 1 : '-'}</strong> | Limite elementi minori: <strong style="color:var(--accent-emerald);">i = ${s.i !== undefined ? s.i + 1 : '-'}</strong>
          </div>
        `;
      } else if (currentAlgorithm === 'heapsort') {
        specialCard.innerHTML = `
          <div style="font-size: 12px; font-weight: 700; color: var(--accent-emerald); margin-bottom: 8px;">
            🌳 STATO HEAPSORT: Dimensione Heap Attiva = <span style="color:#fff; background:var(--accent-emerald); padding:2px 8px; border-radius:4px;">${s.heapSize !== undefined ? s.heapSize : s.array.length}</span>
          </div>
          <div style="font-size: 12px; color: var(--text-muted); line-height: 1.6;">
            Ad ogni passo, la radice del max-heap (il massimo assoluto) viene scambiata con l'ultimo elemento e congelata. La dimensione dello heap attivo si riduce di 1 e si richiama <code>MaxHeapify(1)</code>.
          </div>
        `;
      }
    }

    // 4. Render Pseudocodice Evidenziato
    const codeBox = container.querySelector('#code-container');
    if (codeBox) {
      codeBox.innerHTML = '';
      const lines = pseudocodeMap[currentAlgorithm];
      lines.forEach(l => {
        const row = document.createElement('div');
        const isActive = l.num === s.line;
        row.style.cssText = `
          padding: 2px 8px;
          border-radius: 4px;
          display: flex;
          gap: 12px;
          ${isActive ? 'background: rgba(56, 189, 248, 0.18); border-left: 3px solid var(--accent-blue); font-weight: 700; color: #fff;' : 'color: #64748b;'}
        `;

        const numSpan = document.createElement('span');
        numSpan.style.cssText = `width: 20px; text-align: right; opacity: 0.5; font-size: 11px;`;
        numSpan.textContent = l.num;

        const textSpan = document.createElement('span');
        textSpan.style.whiteSpace = 'pre';
        textSpan.textContent = l.text;

        row.appendChild(numSpan);
        row.appendChild(textSpan);
        codeBox.appendChild(row);
      });
    }
  }

  generateTrace();
  setTimeout(render, 50);

  return container;
}
