// Menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
  
  // Fermer le menu au clic sur un lien
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });

  // Slider automatique
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  
  if (slides.length > 0) {
    function showSlide(n) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      
      if (n >= slides.length) currentSlide = 0;
      if (n < 0) currentSlide = slides.length - 1;
      
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    
    // Afficher le premier slide
    showSlide(currentSlide);
    
    // Auto-rotate tous les 5 secondes
    setInterval(() => {
      currentSlide++;
      showSlide(currentSlide);
    }, 5000);
    
    // Clic sur les dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  }

  // Validation formulaire contact
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs');
        return;
      }
      
      if (!email.includes('@')) {
        alert('Email invalide');
        return;
      }
      
      alert('Merci ! Votre message a été envoyé.');
      contactForm.reset();
    });
  }

  // Filtres propriétés
  const filterButtons = document.querySelectorAll('.filter-btn');
  const propertyCards = document.querySelectorAll('.property-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      propertyCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
