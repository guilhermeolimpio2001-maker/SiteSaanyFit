// Scroll reveal
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // stagger children with reveal class
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transitionDelay = (i * 0.08) + 's';
            el.classList.add('visible');
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Active nav highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.top-nav a');
    window.addEventListener('scroll', () => {
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--primary)' : '';
      });
    }, { passive: true });