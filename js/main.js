/* =============================================
   OZ RIOLERINGSWERKEN — main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== GSAP HERO ANIMATIE ===== */
  if (typeof gsap !== 'undefined' && document.querySelector('.hero__band')) {
    gsap.registerPlugin(ScrollTrigger);

    // Laadanimatie (timeline)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero__band',     { x: '-70vw' },                          { x: 0, duration: 0.9 })
      .fromTo('.hero__badge',    { y: 18, opacity: 0 },                   { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
      .fromTo('.hero__title',    { y: 40, opacity: 0 },                   { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
      .fromTo('.hero__subtitle', { y: 30, opacity: 0 },                   { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.hero__ctas',     { y: 20, opacity: 0 },                   { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.hero__card',     { x: '18vw', scale: 0.96, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 0.9 }, '-=0.6');

    // Scroll-exit animatie (pinned hero)
    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
      }
    });
    exitTl
      .to('.hero__band',    { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
      .to('.hero__title',   { y: '-10vh', opacity: 0, ease: 'power2.in' }, 0.7)
      .to('.hero__subtitle',{ y: '-8vh',  opacity: 0, ease: 'power2.in' }, 0.7)
      .to('.hero__card',    { x: '12vw', scale: 0.98, opacity: 0, ease: 'power2.in' }, 0.7)
      .to('.hero__ctas',    { y: '6vh',  opacity: 0, ease: 'power2.in' }, 0.7)
      .to('.hero__badge',   { y: '4vh',  opacity: 0, ease: 'power2.in' }, 0.7);
  }

  /* ===== NAVBAR: sticky + hamburger ===== */
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    // Remove navbar offset when urgency banner has scrolled out of view
    const urgBanner = document.getElementById('urgencyBanner');
    if (urgBanner && !urgBanner.classList.contains('hidden')) {
      document.body.classList.toggle('has-banner', window.scrollY < urgBanner.offsetHeight);
    }
    showBackToTop();
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ===== FADE-IN ANIMATIES ===== */
  const fadeEls = document.querySelectorAll(
    '.dienst-card, .troef, .portfolio__item, .over-ons__stat, .section__header, .review-card, .faq__item'
  );

  fadeEls.forEach(el => el.classList.add('fade-in'));

  const fallbackTimer = setTimeout(() => {
    fadeEls.forEach(el => el.classList.add('visible'));
  }, 800);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });

      const anyVisible = [...fadeEls].some(el => el.classList.contains('visible'));
      if (anyVisible) clearTimeout(fallbackTimer);

    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -10px 0px'
    });

    fadeEls.forEach(el => observer.observe(el));
  }

  /* ===== URGENTIE BANNER ===== */
  const urgencyBanner = document.getElementById('urgencyBanner');
  const urgencyClose  = document.getElementById('urgencyClose');

  if (urgencyBanner) {
    if (localStorage.getItem('urgency-closed') === '1') {
      urgencyBanner.classList.add('hidden');
    } else {
      document.body.classList.add('has-banner');
    }

    if (urgencyClose) {
      urgencyClose.addEventListener('click', () => {
        urgencyBanner.classList.add('hidden');
        document.body.classList.remove('has-banner');
        localStorage.setItem('urgency-closed', '1');
      });
    }
  }

  /* ===== COOKIE BANNER ===== */
  const cookieBanner  = document.getElementById('cookieBanner');
  const cookieAccept  = document.getElementById('cookieAccept');

  if (cookieBanner) {
    if (!localStorage.getItem('cookie-accepted')) {
      setTimeout(() => cookieBanner.classList.add('visible'), 1500);
    }

    if (cookieAccept) {
      cookieAccept.addEventListener('click', () => {
        cookieBanner.classList.remove('visible');
        localStorage.setItem('cookie-accepted', '1');
      });
    }
  }

  /* ===== BACK TO TOP ===== */
  const backToTop = document.getElementById('backToTop');

  function showBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle('visible', window.scrollY > 300);
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== COUNTER ANIMATIE ===== */
  const statEls = document.querySelectorAll('.stat__number[data-count]');

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window && statEls.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statEls.forEach(el => counterObserver.observe(el));
  }

  /* ===== FAQ ACCORDION ===== */
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer   = btn.nextElementSibling;
      const isOpen   = btn.getAttribute('aria-expanded') === 'true';
      const allBtns  = document.querySelectorAll('.faq__question');

      // Sluit alle andere items
      allBtns.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });

      // Toggle huidig item
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  /* ===== BEFORE / AFTER SLIDER ===== */
  const baContainer = document.getElementById('baContainer');
  const baHandle    = document.getElementById('baHandle');

  if (baContainer && baHandle) {
    const afterEl = baContainer.querySelector('.before-after__after');
    let isDragging = false;

    function setSliderPosition(x) {
      const rect = baContainer.getBoundingClientRect();
      let pct = (x - rect.left) / rect.width;
      pct = Math.max(0.02, Math.min(0.98, pct));
      const pctRight = (1 - pct) * 100;
      afterEl.style.clipPath = `inset(0 ${pctRight}% 0 0)`;
      baHandle.style.left = `${pct * 100}%`;
    }

    baContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => { isDragging = false; });
  }

  /* ===== LIGHTBOX ===== */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');
  const portfolioItems = Array.from(document.querySelectorAll('.portfolio__item img'));

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const img = portfolioItems[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % portfolioItems.length;
    openLightbox(currentIndex);
  }

  portfolioItems.forEach((img, index) => {
    img.parentElement.addEventListener('click', () => openLightbox(index));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext)  lightboxNext.addEventListener('click', showNext);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  showPrev();
      if (e.key === 'ArrowRight') showNext();
    }
    if (dienstModal && dienstModal.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
    }
  });

  /* ===== DIENST MODALS ===== */
  const dienstModal   = document.getElementById('dienstModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose    = document.getElementById('modalClose');
  const modalIcon     = document.getElementById('modalIcon');
  const modalTitle    = document.getElementById('modalTitle');
  const modalDesc     = document.getElementById('modalDesc');
  const modalDetails  = document.getElementById('modalDetails');
  const modalCTA      = document.getElementById('modalCTA');

  const modalData = {
    riolering: {
      icon: '<i class="fas fa-water"></i>',
      title: 'Rioleringswerken',
      desc: 'Wij verzorgen de volledige aanleg en het herstel van rioleringen voor zowel particulieren als bedrijven. Van rioolaansluiting tot complete rioleringsplannen — alles conform de geldende normen.',
      details: ['Nieuwe rioolaansluitingen', 'Herstel van beschadigde riolen', 'Camera-inspectie mogelijk', 'Conformiteitsattest na werken', 'Actief in Gent & Oost-Vlaanderen'],
    },
    septisch: {
      icon: '<i class="fas fa-circle-dot"></i>',
      title: 'Septische putten',
      desc: 'Plaatsing van septische putten, coalescentie-afscheiders en infiltratiesystemen. Wij begeleiden u bij de vergunningsaanvraag en zorgen voor een correcte installatie.',
      details: ['Standaard septische putten', 'Compact systemen (IBA)', 'Infiltratieputten & draineerbuizen', 'Vergunningsbegeleiding', 'Vanaf €2.500 incl. plaatsing'],
    },
    grond: {
      icon: '<i class="fas fa-tractor"></i>',
      title: 'Grond- & graafwerken',
      desc: 'Professionele graaf- en grondwerken voor fundaties, leidingen en andere ondergrondse toepassingen. Wij beschikken over moderne machines voor efficiënte uitvoering.',
      details: ['Mini-excavaties voor smalle ruimtes', 'Afgraven & aanvullen', 'Afvoer van grond & puin', 'Verdichting & nivellering', 'Zorgvuldig werken rond bestaande leidingen'],
    },
    leidingen: {
      icon: '<i class="fas fa-pipe-section"></i>',
      title: 'Buizen & leidingen',
      desc: 'Aanleg van water-, gas- en rioolleidingen. Wij werken met kwalitatieve materialen (PVC, PP, PE) en zorgen voor een waterdichte en duurzame verbinding.',
      details: ['Water- & gasleidingen', 'Drainagepijpen & infiltratie', 'Regenwaterrecuperatie', 'PE-lassen & koppelstukken', 'Lekdetectie & herstel'],
    },
    herstellingen: {
      icon: '<i class="fas fa-wrench"></i>',
      title: 'Herstellingen',
      desc: 'Snel en efficiënt herstel van beschadigde leidingen, riolen en drainage. Wij zijn bereikbaar voor dringende interventies en streven ernaar binnen 24 uur ter plaatse te zijn.',
      details: ['Verstopte riolen deblokkeren', 'Gebarsten leidingen herstellen', 'Dringende interventies (24u)', 'Weekendinterventies mogelijk', 'Geen verplaatsingskosten in Gent'],
    },
    tegels: {
      icon: '<i class="fas fa-border-all"></i>',
      title: 'Tegelwerken',
      desc: 'Vakkundige plaatsing van binnen- en buitentegels. Na onze grond- en rioleringswerken zorgen wij ook voor een nette afwerking zodat alles er weer tiptop uitziet.',
      details: ['Terrastegels & opritten', 'Badkamer- & vloertegels', 'Herstel na graafwerken', 'Voegen & waterdichting', 'Nette & snelle afwerking'],
    },
    verwarming: {
      icon: '<i class="fas fa-temperature-half"></i>',
      title: 'Ondergrondse verwarming',
      desc: 'Installatie van vloerverwarmingssystemen voor nieuwe gebouwen en renovaties. Energiezuinig, comfortabel en duurzaam — de ideale combinatie met een warmtepomp.',
      details: ['Elektrische vloerverwarming', 'Hydronische vloerverwarming', 'Thermostaat & regeling', 'Compatibel met warmtepompen', 'Energiepremies mogelijk'],
    },
    algemeen: {
      icon: '<i class="fas fa-hard-hat"></i>',
      title: 'Algemene werken',
      desc: 'Naast onze specialisaties voeren wij ook diverse bouw- en renovatiewerken uit op maat. Neem contact op om te bespreken wat wij voor uw specifiek project kunnen betekenen.',
      details: ['Kleine renovatiewerken', 'Betonwerken & funderingen', 'Omheiningen & afsluitingen', 'Buitenaanleg & verharding', 'Op maat & vrijblijvend advies'],
    },
  };

  function openModal(key) {
    const data = modalData[key];
    if (!data || !dienstModal) return;

    modalIcon.innerHTML    = data.icon;
    modalTitle.textContent = data.title;
    modalDesc.textContent  = data.desc;
    modalDetails.innerHTML = '<ul>' + data.details.map(d => `<li>${d}</li>`).join('') + '</ul>';
    modalCTA.href          = '#contact';
    modalCTA.onclick       = () => closeModal();

    dienstModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!dienstModal) return;
    dienstModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.dienst-card[data-modal]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.modal);
      }
    });
  });

  if (modalClose)    modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  /* ===== CONTACTFORMULIER ===== */
  const contactForm = document.getElementById('contactForm');
  const formStatus  = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Versturen...';
      formStatus.textContent = '';
      formStatus.className = 'form__status';

      try {
        const data = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.textContent = 'Uw aanvraag is verstuurd! We nemen zo snel mogelijk contact op.';
          formStatus.classList.add('success');
          contactForm.reset();
        } else {
          throw new Error('Serverfout');
        }
      } catch {
        formStatus.textContent = 'Er ging iets mis. Probeer het opnieuw of bel ons direct.';
        formStatus.classList.add('error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Verstuur aanvraag';
      }
    });
  }

  /* ===== FOOTER: huidig jaar ===== */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

}); // einde DOMContentLoaded
