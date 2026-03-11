// ── DETAIL OVERLAY refs ─────────────────────────────────────────────
const overlay = document.getElementById('detailOverlay');
const detailImg = document.getElementById('detailImg');
const detailTitle = document.getElementById('detailTitle');
const detailDesc = document.getElementById('detailDesc');
const backBtn = document.getElementById('detailBack');

function openDetail(card) {
    detailImg.src = card.dataset.image || '';
    detailImg.alt = card.dataset.title || '';
    detailTitle.textContent = card.dataset.title || '';
    detailDesc.textContent = card.dataset.description || '';

    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-open');
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

backBtn.addEventListener('click', closeDetail);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeDetail();
    }
});

// ── UNIFORM HOVER SCALE ─────────────────────────────────────────────
const TARGET_LONG = 220; // px — target for the longest side

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const w = card.offsetWidth;
        const h = card.offsetHeight;
        const maxDim = Math.max(w, h);
        const scale = TARGET_LONG / maxDim;
        card.style.transform = `scale(${scale.toFixed(4)})`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });

    card.addEventListener('click', () => {
        openDetail(card);
    });
});

// ── CATEGORY FILTERING ──────────────────────────────────────────────
const navLinks = document.querySelectorAll('.identity-nav a[data-filter]');
const cards = document.querySelectorAll('.card[data-category]');

function showAll() {
    navLinks.forEach(l => l.classList.remove('active'));
    cards.forEach(card => {
        card.classList.remove('hidden');
        card.style.transform = 'scale(1)';
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation(); // don't bubble to document listener

        // Clicking the active filter again → show all
        if (link.classList.contains('active')) {
            showAll();
            return;
        }

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const filter = link.dataset.filter;
        cards.forEach(card => {
            if (card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
                card.style.transform = 'scale(1)';
            }
        });
    });
});

// Click anywhere outside the nav → show all (only when detail is closed)
document.addEventListener('click', e => {
    if (overlay.classList.contains('is-open')) return;
    if (!e.target.closest('.identity-nav')) {
        showAll();
    }
});
