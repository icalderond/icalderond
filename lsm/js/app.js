(function () {
  'use strict';

  const DOM = {
    searchInput: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    searchStatus: document.getElementById('search-status'),
    categoriesList: document.getElementById('categories-list'),
    signsGrid: document.getElementById('signs-grid'),
    modalOverlay: document.getElementById('modal-overlay'),
    modal: document.querySelector('.modal'),
    modalTitle: document.getElementById('modal-title'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.getElementById('modal-close'),
  };

  let allSigns = [];
  let activeCategory = null;
  let searchTerm = '';
  let debounceTimer = null;

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function getCategories(signs) {
    const cats = [...new Set(signs.map(s => s.category))];
    cats.sort((a, b) => a.localeCompare(b, 'es'));
    return cats;
  }

  function renderCategories(signs, signsToUse) {
    const cats = getCategories(signsToUse);
    const allCats = getCategories(signs);
    let html = '';

    html += `<button type="button" class="category__btn${activeCategory === null ? ' category__btn--active' : ''}" data-category="" role="tab" aria-selected="${activeCategory === null}">Todas</button>`;

    cats.forEach(cat => {
      const hasAny = allCats.includes(cat);
      const isActive = activeCategory === cat;
      html += `<button type="button" class="category__btn${isActive ? ' category__btn--active' : ''}" data-category="${cat}" role="tab" aria-selected="${isActive}"${!hasAny ? '' : ''}>${cat}</button>`;
    });

    DOM.categoriesList.innerHTML = html;

    DOM.categoriesList.querySelectorAll('.category__btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const cat = this.dataset.category || null;
        activeCategory = cat;
        applyFilters();
      });
    });
  }

  function renderCards(signs) {
    if (signs.length === 0) {
      DOM.signsGrid.innerHTML = `
        <div class="empty-state" role="status">
          <div class="empty-state__icon">🔎</div>
          <p class="empty-state__text">No se encontraron señas que coincidan con tu búsqueda.</p>
          <p class="empty-state__text" style="font-size:0.9rem;margin-top:4px;">Intenta con otras palabras como "saludo", "comer" o "familia".</p>
        </div>
      `;
      return;
    }

    let html = '';
    signs.forEach(s => {
      const tagHtml = s.tags.slice(0, 4).map(t => `<span class="sign-card__tag">${escHtml(t)}</span>`).join('');
      html += `
        <div class="sign-card" role="listitem" tabindex="0" data-id="${s.id}" aria-label="${escHtml(s.word)}: ${escHtml(s.description)}">
          <div class="sign-card__emoji" aria-hidden="true">${s.emoji}</div>
          <div class="sign-card__body">
            <span class="sign-card__category">${escHtml(s.category)}</span>
            <span class="sign-card__word">${escHtml(s.word)}</span>
            <p class="sign-card__desc">${escHtml(s.description)}</p>
            <div class="sign-card__tags" aria-hidden="true">${tagHtml}</div>
          </div>
        </div>
      `;
    });

    DOM.signsGrid.innerHTML = html;

    DOM.signsGrid.querySelectorAll('.sign-card').forEach(card => {
      const open = () => openModal(parseInt(card.dataset.id, 10));
      card.addEventListener('click', open);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  function getFilteredSigns() {
    let filtered = [...allSigns];

    const term = normalize(searchTerm);
    if (term) {
      filtered = filtered.filter(s =>
        normalize(s.word).includes(term) ||
        s.tags.some(t => normalize(t).includes(term))
      );
    }

    if (activeCategory) {
      filtered = filtered.filter(s => s.category === activeCategory);
    }

    return filtered;
  }

  function applyFilters() {
    const filtered = getFilteredSigns();

    const total = allSigns.length;
    const shown = filtered.length;
    const msg = searchTerm || activeCategory
      ? `Mostrando ${shown} de ${total} seña${total !== 1 ? 's' : ''}`
      : `${total} seña${total !== 1 ? 's' : ''} disponibles`;
    DOM.searchStatus.textContent = msg;

    renderCards(filtered);
    renderCategories(allSigns, filtered);
  }

  function handleSearchInput() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchTerm = DOM.searchInput.value;
      DOM.searchClear.hidden = !searchTerm;
      applyFilters();
    }, 200);
  }

  function clearSearch() {
    DOM.searchInput.value = '';
    DOM.searchInput.focus();
    searchTerm = '';
    DOM.searchClear.hidden = true;
    applyFilters();
  }

  function openModal(id) {
    const sign = allSigns.find(s => s.id === id);
    if (!sign) return;

    DOM.modalTitle.textContent = sign.word;
    DOM.modalBody.innerHTML = `
      <div class="modal__emoji" aria-hidden="true">${sign.emoji}</div>
      <div class="modal__category">${escHtml(sign.category)}</div>
      <div class="modal__detail-label">¿Cómo se realiza la seña?</div>
      <p class="modal__detail">${escHtml(sign.description)}</p>
      <div class="modal__detail-label">Etiquetas relacionadas</div>
      <div class="modal__tags">${sign.tags.map(t => `<span class="modal__tag">${escHtml(t)}</span>`).join('')}</div>
    `;

    DOM.modalOverlay.hidden = false;
    DOM.modal.hidden = false;

    requestAnimationFrame(() => {
      DOM.modalOverlay.classList.add('modal-overlay--open');
    });

    document.body.style.overflow = 'hidden';
    DOM.modalClose.focus();
  }

  function closeModal() {
    DOM.modalOverlay.classList.remove('modal-overlay--open');
    document.body.style.overflow = '';

    setTimeout(() => {
      DOM.modalOverlay.hidden = true;
      DOM.modal.hidden = true;
    }, 200);
  }

  function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function onKeyDown(e) {
    if (e.key === 'Escape' && !DOM.modalOverlay.hidden) {
      closeModal();
    }
  }

  async function init() {
    try {
      const res = await fetch('data/signs.json');
      if (!res.ok) throw new Error('Error al cargar datos');
      allSigns = await res.json();

      applyFilters();

      DOM.searchInput.addEventListener('input', handleSearchInput);
      DOM.searchClear.addEventListener('click', clearSearch);
      DOM.modalClose.addEventListener('click', closeModal);
      DOM.modalOverlay.addEventListener('click', e => {
        if (e.target === DOM.modalOverlay) closeModal();
      });
      document.addEventListener('keydown', onKeyDown);

    } catch (err) {
      DOM.signsGrid.innerHTML = `
        <div class="empty-state" role="alert">
          <div class="empty-state__icon">⚠️</div>
          <p class="empty-state__text">Error al cargar el catálogo. Intenta recargar la página.</p>
        </div>
      `;
      DOM.searchStatus.textContent = 'Error de conexión';
    }
  }

  init();
})();
