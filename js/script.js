/* ============================================
   EAGLE DECO - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initFormValidation();
  initSmoothScroll();
  initLazyLoading();
  initCardAnimations();
});

/* ============================================
   LAZY LOADING
   ============================================ */

function initLazyLoading() {
  const images = document.querySelectorAll('img[src*="unsplash"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.transition = 'opacity 0.4s ease-in-out';
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('mobile-open');
      
      // Animate hamburger
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = nav.classList.contains('mobile-open') ? 'rotate(45deg) translate(8px, 8px)' : '';
      spans[1].style.opacity = nav.classList.contains('mobile-open') ? '0' : '1';
      spans[2].style.transform = nav.classList.contains('mobile-open') ? 'rotate(-45deg) translate(7px, -7px)' : '';
      
      // Add smooth transition
      spans.forEach(span => {
        span.style.transition = 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      });
    });

    // Close menu when link clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('mobile-open');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      });
    });
  }
}

/* ============================================
   FORM VALIDATION
   ============================================ */

function initFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validation
      if (!name) {
        showError('name', 'Le nom est obligatoire');
        return;
      }
      
      if (!email || !isValidEmail(email)) {
        showError('email', 'Email invalide');
        return;
      }
      
      if (!phone) {
        showError('phone', 'Le téléphone est obligatoire');
        return;
      }
      
      if (!message || message.length < 10) {
        showError('message', 'Le message doit contenir au moins 10 caractères');
        return;
      }
      
      // Clear errors
      clearErrors();
      
      // Submit (en vraie production, il faudrait une API backend)
      submitForm(name, email, phone, message);
    });
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.style.borderColor = '#e74c3c';
  field.style.animation = 'shake 0.4s ease-in-out';
  
  let errorDiv = field.parentElement.querySelector('.error-message');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.style.animation = 'fadeIn 0.3s ease-in-out';
    field.parentElement.appendChild(errorDiv);
  }
  errorDiv.textContent = message;
}

function clearErrors() {
  const fields = ['name', 'email', 'phone', 'message'];
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.style.borderColor = '';
      const errorDiv = field.parentElement.querySelector('.error-message');
      if (errorDiv) errorDiv.remove();
    }
  });
}

function submitForm(name, email, phone, message) {
  // Afficher un message de succès
  const form = document.getElementById('contact-form');
  const successMessage = document.createElement('div');
  successMessage.style.padding = '1rem';
  successMessage.style.marginBottom = '1rem';
  successMessage.style.backgroundColor = '#27ae60';
  successMessage.style.color = 'white';
  successMessage.style.borderRadius = '5px';
  successMessage.style.animation = 'slideInUp 0.4s ease-in-out';
  successMessage.textContent = 'Merci ! Votre message a été envoyé. Nous vous contacterons très bientôt.';
  
  form.insertBefore(successMessage, form.firstChild);
  
  // Reset form
  form.reset();
  
  // Retirer le message après 5 secondes
  setTimeout(() => {
    successMessage.style.animation = 'fadeOut 0.3s ease-in-out';
    setTimeout(() => successMessage.remove(), 300);
  }, 5000);
  
  // En production, envoyer les données à un serveur
  console.log('Form submission:', { name, email, phone, message });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ============================================
   CARD ANIMATIONS ON SCROLL
   ============================================ */

function initCardAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Animer les cards au scroll
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(card);
  });

  // Animer les sections au scroll
  document.querySelectorAll('section').forEach(section => {
    const observer2 = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });
    
    observer2.observe(section);
  });
}
