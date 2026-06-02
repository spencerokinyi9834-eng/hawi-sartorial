// Page Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 500);
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

if (galleryItems.length > 0) {
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.src;
      const title = item.dataset.title;
      lightboxImage.src = src;
      lightboxCaption.textContent = title;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// Testimonial Slider
const testimonialSlider = document.getElementById('testimonialSlider');
if (testimonialSlider) {
  const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((card, i) => {
      card.classList.remove('active');
      if (i === index) {
        card.classList.add('active');
      }
    });
  }

  if (testimonials.length > 1) {
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }
}

// Stats Counter Animation
const statValues = document.querySelectorAll('.stat-value');

const animateCounter = (element) => {
  const target = parseInt(element.dataset.target);
  let current = 0;
  const increment = target / 50;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
};

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      animateCounter(entry.target);
      entry.target.classList.add('animated');
    }
  });
}, observerOptions);

statValues.forEach(value => observer.observe(value));

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formspreeUrl = contactForm.dataset.formspree || 'https://formspree.io/f/your-form-id';

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formMessage.textContent = '✓ Message sent successfully! We will be in touch soon.';
        formMessage.classList.add('show', 'success');
        formMessage.classList.remove('error');
        contactForm.reset();
        setTimeout(() => {
          formMessage.classList.remove('show');
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      formMessage.textContent = '✗ Error sending message. Please try again.';
      formMessage.classList.add('show', 'error');
      formMessage.classList.remove('success');
      setTimeout(() => {
        formMessage.classList.remove('show');
      }, 5000);
    }
  });
}

// Smooth Scroll Behavior for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
    }
  });
});

// Header Scroll Effect
const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 100) {
    header.style.boxShadow = 'var(--shadow-md)';
  } else {
    header.style.boxShadow = 'var(--shadow-sm)';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Keyboard Navigation for Lightbox
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
