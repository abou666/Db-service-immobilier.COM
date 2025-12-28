// ===== DATABASE DE PROPRIÉTÉS =====
const properties = [
  {
    id: 1,
    name: 'Appartement Luxe Centre-Ville',
    price: 450000,
    location: 'Paris',
    type: 'apartment',
    area: 85,
    rooms: 3,
    image: '🏢',
    description: 'Bel appartement au cœur de Paris avec vue dégagée'
  },
  {
    id: 2,
    name: 'Maison Familiale avec Jardin',
    price: 650000,
    location: 'Banlieue',
    type: 'house',
    area: 120,
    rooms: 4,
    image: '🏡',
    description: 'Grande maison parfaite pour une famille'
  },
  {
    id: 3,
    name: 'Studio Moderne Centre',
    price: 250000,
    location: 'Paris',
    type: 'studio',
    area: 35,
    rooms: 1,
    image: '🏠',
    description: 'Petit studio confortable et bien équipé'
  },
  {
    id: 4,
    name: 'Villa Luxe Quartier Premium',
    price: 1200000,
    location: 'Paris',
    type: 'villa',
    area: 250,
    rooms: 5,
    image: '🏰',
    description: 'Magnifique villa avec piscine et jardin privé'
  },
  {
    id: 5,
    name: 'Appartement 2 Pièces Banlieue',
    price: 320000,
    location: 'Banlieue',
    type: 'apartment',
    area: 65,
    rooms: 2,
    image: '🏢',
    description: 'Appartement idéal pour jeune couple ou petit ménage'
  },
  {
    id: 6,
    name: 'Maison Ancienne Charme',
    price: 550000,
    location: 'Province',
    type: 'house',
    area: 150,
    rooms: 4,
    image: '🏡',
    description: 'Maison de caractère à rénover en province'
  },
  {
    id: 7,
    name: 'Studio Quartier Étudiant',
    price: 180000,
    location: 'Paris',
    type: 'studio',
    area: 25,
    rooms: 1,
    image: '🏠',
    description: 'Studio parfait pour étudiant ou jeune actif'
  },
  {
    id: 8,
    name: 'Villa Moderne avec Vue Mer',
    price: 950000,
    location: 'Province',
    type: 'villa',
    area: 200,
    rooms: 4,
    image: '🏰',
    description: 'Superbe villa moderne avec terrasse et piscine'
  }
];

// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', function() {
  // Charger les propriétés
  loadFeaturedProperties();
  loadAllProperties();
  
  // Gestion du formulaire de contact
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // Gestion du formulaire newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletter);
  }

  // Gestion du formulaire de connexion
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  if (emailField && passwordField) {
    [emailField, passwordField].forEach(field => {
      field.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          login();
        }
      });
    });
  }

  // Navigation mobile
  setupMobileMenu();
});

// ===== CHARGER LES PROPRIÉTÉS EN VEDETTE =====
function loadFeaturedProperties() {
  const featured = document.getElementById('featured-list');
  if (!featured) return;

  const featuredProps = properties.slice(0, 3);
  featured.innerHTML = '';

  featuredProps.forEach(prop => {
    const card = createPropertyCard(prop);
    featured.appendChild(card);
  });
}

// ===== CHARGER TOUTES LES PROPRIÉTÉS =====
function loadAllProperties() {
  const listContainer = document.getElementById('properties-list');
  if (!listContainer) return;

  listContainer.innerHTML = '';
  displayProperties(properties, listContainer);
}

// ===== AFFICHER LES PROPRIÉTÉS =====
function displayProperties(propsToDisplay, container) {
  if (propsToDisplay.length === 0) {
    container.innerHTML = '<p style="text-align: center; padding: 40px;">Aucune propriété ne correspond à vos critères.</p>';
    return;
  }

  propsToDisplay.forEach(prop => {
    const card = createPropertyCard(prop);
    container.appendChild(card);
  });
}

// ===== CRÉER UNE CARTE PROPRIÉTÉ =====
function createPropertyCard(prop) {
  const card = document.createElement('div');
  card.className = 'property-card';
  card.innerHTML = `
    <div class="property-image">${prop.image}</div>
    <div class="property-content">
      <h3>${prop.name}</h3>
      <div class="property-price">${prop.price.toLocaleString('fr-FR')} €</div>
      <div class="property-details">
        <p>📍 ${prop.location}</p>
        <p>📐 ${prop.area} m² | 🛏️ ${prop.rooms} pièce(s)</p>
        <p style="color: #666; font-size: 0.9rem;">${prop.description}</p>
      </div>
      <button onclick="viewPropertyDetails(${prop.id})" class="btn btn-primary" style="width: 100%;">Voir détails</button>
    </div>
  `;
  return card;
}

// ===== FILTRER LES PROPRIÉTÉS =====
function applyFilters() {
  const typeFilter = document.getElementById('type-filter');
  const priceFilter = document.getElementById('price-filter');
  const locationFilter = document.getElementById('location-filter');

  if (!typeFilter || !priceFilter || !locationFilter) return;

  const type = typeFilter.value;
  const price = priceFilter.value;
  const location = locationFilter.value;

  let filtered = properties.filter(prop => {
    let typeMatch = !type || prop.type === type;
    let locationMatch = !location || prop.location === location;
    let priceMatch = true;

    if (price) {
      const [min, max] = price.split('-').map(p => parseInt(p));
      if (max) {
        priceMatch = prop.price >= min && prop.price <= max;
      } else {
        priceMatch = prop.price >= min;
      }
    }

    return typeMatch && locationMatch && priceMatch;
  });

  const listContainer = document.getElementById('properties-list');
  if (listContainer) {
    displayProperties(filtered, listContainer);
  }
}

// ===== RÉINITIALISER LES FILTRES =====
function resetFilters() {
  const typeFilter = document.getElementById('type-filter');
  const priceFilter = document.getElementById('price-filter');
  const locationFilter = document.getElementById('location-filter');

  if (typeFilter) typeFilter.value = '';
  if (priceFilter) priceFilter.value = '';
  if (locationFilter) locationFilter.value = '';

  loadAllProperties();
}

// ===== AJOUTER LES EVENT LISTENERS POUR LES FILTRES =====
document.addEventListener('DOMContentLoaded', function() {
  const typeFilter = document.getElementById('type-filter');
  const priceFilter = document.getElementById('price-filter');
  const locationFilter = document.getElementById('location-filter');

  if (typeFilter) typeFilter.addEventListener('change', applyFilters);
  if (priceFilter) priceFilter.addEventListener('change', applyFilters);
  if (locationFilter) locationFilter.addEventListener('change', applyFilters);
});

// ===== VOIR LES DÉTAILS D'UNE PROPRIÉTÉ =====
function viewPropertyDetails(propertyId) {
  const prop = properties.find(p => p.id === propertyId);
  if (prop) {
    alert(`
📌 ${prop.name}
💰 Prix: ${prop.price.toLocaleString('fr-FR')} €
📍 Localisation: ${prop.location}
📐 Surface: ${prop.area} m²
🛏️ Pièces: ${prop.rooms}

${prop.description}

Pour plus d'informations, contactez-nous!
📞 +33 1 23 45 67 89
📧 info@dbservices-immobiliers.fr
    `);
  }
}

// ===== GESTION DE LA CONNEXION =====
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageEl = document.getElementById('message');

  if (!email || !password) {
    showMessage('Veuillez remplir tous les champs.', 'error');
    return;
  }

  if (!validateEmail(email)) {
    showMessage('Adresse email invalide.', 'error');
    return;
  }

  if (password.length < 6) {
    showMessage('Le mot de passe doit contenir au moins 6 caractères.', 'error');
    return;
  }

  // Simulation d'authentification
  showMessage('Connexion réussie! Redirection en cours...', 'success');
  localStorage.setItem('user', JSON.stringify({ email }));
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
}

// ===== VALIDATION EMAIL =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ===== AFFICHER LES MESSAGES =====
function showMessage(msg, type) {
  const messageEl = document.getElementById('message');
  if (messageEl) {
    messageEl.textContent = msg;
    messageEl.className = type;
  }
}

// ===== GESTION DU FORMULAIRE DE CONTACT =====
function handleContactForm(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const messageEl = document.getElementById('form-message');

  // Simulation de l'envoi
  messageEl.textContent = 'Envoi du message...';
  messageEl.classList.remove('success', 'error');
  messageEl.style.display = 'block';

  setTimeout(() => {
    messageEl.textContent = 'Merci! Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.';
    messageEl.classList.add('success');
    form.reset();
  }, 1000);
}

// ===== GESTION DU FORMULAIRE NEWSLETTER =====
function handleNewsletter(e) {
  e.preventDefault();
  
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value;

  if (!validateEmail(email)) {
    alert('Veuillez entrer une adresse email valide.');
    return;
  }

  alert(`Merci! L'adresse ${email} a été ajoutée à notre newsletter.`);
  form.reset();
}

// ===== MENU MOBILE =====
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.style.display = 'none';
      });
    });
  }
}

// ===== SCROLL LISSE POUR LES ANCRES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== ANIMATIONS À L'ENTRÉE EN VUE =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.property-card, .service-card, .testimonial-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

console.log('Site Db Services Immobiliers chargé avec succès!');
