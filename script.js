document.addEventListener('DOMContentLoaded', () => {
  // --- Toggles ---
  const rtlToggle = document.getElementById('rtl-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const htmlTag = document.documentElement;
  const bodyTag = document.body;
  const themeIcon = themeToggle.querySelector('i');

  // Initial State from DOM
  const updateRtlToggleText = () => {
    if (htmlTag.getAttribute('dir') === 'ltr') {
      rtlToggle.textContent = 'LTR';
    } else {
      rtlToggle.textContent = 'RTL';
    }
  };
  updateRtlToggleText(); // Set initial text

  rtlToggle.addEventListener('click', () => {
    if (htmlTag.getAttribute('dir') === 'ltr') {
      htmlTag.setAttribute('dir', 'rtl');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
    }
    updateRtlToggleText();
  });

  themeToggle.addEventListener('click', () => {
    bodyTag.classList.toggle('light-theme');
    if (bodyTag.classList.contains('light-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.querySelector('.nav');
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (nav.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // --- Interactive Mockup Canvas (Removed for Editorial Hero) ---

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        // Close others
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle current
        item.classList.toggle('active');
      });
    }
  });

});
