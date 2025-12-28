// ===== DATABASE DE PROPRIÉTÉS =====
const properties = [
  {
    id: 1,
    name: 'Terrain Résidentiel Centre-Ville',
    price: 150000000,
    location: 'Duékoué',
    type: 'terrain',
    area: 500,
    rooms: 0,
    image: '🏞️',
    description: 'Terrain de 500m² idéal pour construction résidence. Bien situé, accessible, viabilisé'
  },
  {
    id: 2,
    name: 'Maison Moderne avec Jardin',
    price: 300000000,
    location: 'Duékoué',
    type: 'house',
    area: 250,
    rooms: 4,
    image: '🏡',
    description: 'Maison moderne 250m² avec jardin, garage, électricité, eau courante'
  },
  {
    id: 3,
    name: 'Terrain Commercial Zone Nord',
    price: 200000000,
    location: 'Duékoué',
    type: 'terrain',
    area: 400,
    rooms: 0,
    image: '🏪',
    description: 'Terrain commercial 400m² parfait pour commerce, boutique ou bureau'
  },
  {
    id: 4,
    name: 'Terrain Agricole Zone Sud',
    price: 80000000,
    location: 'Duékoué',
    type: 'terrain',
    area: 1000,
    rooms: 0,
    image: '🌾',
    description: 'Terrain agricole 1000m² bien situé, terrain plat, eau disponible'
  },
  {
    id: 5,
    name: 'Bureau Climatisé Centre-Ville',
    price: 250000000,
    location: 'Duékoué',
    type: 'commerce',
    area: 200,
    rooms: 3,
    image: '🏢',
    description: 'Bureau professionnel 200m² climatisé, bien équipé, internet'
  },
  {
    id: 6,
    name: 'Terrain Lotissement Certifié',
    price: 120000000,
    location: 'Duékoué',
    type: 'terrain',
    area: 350,
    rooms: 0,
    image: '📋',
    description: 'Terrain 350m² avec papiers en règle, bornage certifié, prêt à construire'
  },
  {
    id: 7,
    name: 'Petite Maison Familiale',
    price: 180000000,
    location: 'Duékoué',
    type: 'house',
    area: 120,
    rooms: 3,
    image: '🏘️',
    description: 'Maison familiale 120m² 3 pièces, cuisine équipée, salle de bain'
  },
  {
    id: 8,
    name: 'Terrain Investissement Zone Est',
    price: 160000000,
    location: 'Duékoué',
    type: 'terrain',
    area: 450,
    rooms: 0,
    image: '💎',
    description: 'Terrain investissement 450m² zone en expansion, très bon potentiel'
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

// ===== DB-ASSISTANT IA CHATBOT =====
class DBAssistant {
  constructor() {
    this.responses = {
      salut: "Bonjour! 👋 Je suis DB-Assistant, l'assistant IA de DB SERVICE IMMOBILIER. Comment puis-je vous aider?",
      hello: "Bonjour! 👋 Je suis DB-Assistant, l'assistant IA de DB SERVICE IMMOBILIER. Comment puis-je vous aider?",
      terrain: "🏞️ Nous avons plusieurs terrains disponibles. Vous cherchez un terrain pour:\n- Habitation\n- Commerce\n- Agriculture\nQuel type vous intéresse?",
      prix: "💰 Nos prix varient selon la taille et la localisation:\n- Petits terrains: 50M-150M FCFA\n- Moyens: 150M-300M FCFA\n- Grands: 300M+ FCFA\nVoulez-vous connaître les détails?",
      paiement: "💳 Nous acceptons:\n- Mobile Money (Orange, MTN, Moov)\n- Carte bancaire (Visa, Mastercard)\n- Virements bancaires\nRendez-vous sur la page Paiement pour effectuer votre transaction.",
      services: "🏢 Nos services:\n1. Immobilier (achat, vente, gestion)\n2. Géomatique (levés, bornage, SIG)\n3. Comptabilité immobilière\n4. Paiement en ligne\n5. Assistance 24h/24",
      contact: "📞 Contactez-nous:\n☎️ Service Client: +225 07 06 48 03 89\n☎️ Direction: +225 07 47 29 65 71\n📧 Email: dbservicesimmobiliers225@gmail.com\n📍 Duékoué, Côte d'Ivoire",
      geometre: "🗺️ Services géomatiques:\n✓ Levés topographiques précis\n✓ Bornage de terrains\n✓ Lotissement et division\n✓ Plans cadastraux\n✓ Exploitation DWG/PDF/Excel",
      achat: "🏠 Vous cherchez à acheter?\n1. Consultez notre catalogue sur la page Propriétés\n2. Visualisez sur la Carte SIG\n3. Contactez-nous pour plus d'infos\n4. Finalisez via paiement sécurisé",
      vente: "💵 Vous voulez vendre votre terrain?\n1. Contactez notre équipe\n2. Nous ferons une évaluation gratuite\n3. Publication sur notre plateforme\n4. Mise en relation avec acheteurs potentiels",
      aide: "🤖 Je peux vous aider avec:\n- Informations sur les propriétés\n- Services offerts\n- Modes de paiement\n- Coordonnées de contact\n- Fonctionnement du site\nQue puis-je faire pour vous?",
      default: "Je ne suis pas sûr de votre question. Pouvez-vous reformuler? Vous pouvez demander: 'terrain', 'prix', 'paiement', 'services', 'contact', 'aide'"
    };
  }

  respond(input) {
    const lower = input.toLowerCase().trim();
    
    // Rechercher les mots-clés
    for (let key of Object.keys(this.responses)) {
      if (lower.includes(key)) {
        return this.responses[key];
      }
    }
    
    return this.responses.default;
  }
}

// Initialiser l'assistant
const assistant = new DBAssistant();

// Créer le widget du chatbot
function initChatbot() {
  // Ajouter le CSS du chatbot
  const chatCSS = `
    .chatbot-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .chatbot-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0b6623 0%, #094d1b 100%);
      border: none;
      color: white;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .chatbot-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
    .chatbot-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
      display: none;
      flex-direction: column;
      overflow: hidden;
    }
    .chatbot-window.active {
      display: flex;
    }
    .chatbot-header {
      background: linear-gradient(135deg, #0b6623 0%, #094d1b 100%);
      color: white;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .chatbot-header h3 {
      margin: 0;
      font-size: 1rem;
    }
    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
    }
    .chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .message {
      padding: 10px 15px;
      border-radius: 8px;
      max-width: 85%;
      word-wrap: break-word;
      font-size: 0.9rem;
      line-height: 1.4;
    }
    .message.bot {
      background: #f0f0f0;
      color: #333;
      align-self: flex-start;
    }
    .message.user {
      background: #0b6623;
      color: white;
      align-self: flex-end;
    }
    .chatbot-input {
      display: flex;
      padding: 15px;
      gap: 10px;
      border-top: 1px solid #eee;
    }
    .chatbot-input input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 10px;
      font-size: 0.9rem;
      outline: none;
    }
    .chatbot-input input:focus {
      border-color: #0b6623;
    }
    .chatbot-input button {
      background: #0b6623;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.3s;
    }
    .chatbot-input button:hover {
      background: #094d1b;
    }
  `;

  // Ajouter le style
  const style = document.createElement('style');
  style.textContent = chatCSS;
  document.head.appendChild(style);

  // Créer le HTML du chatbot
  const chatHTML = `
    <div class="chatbot-widget">
      <button class="chatbot-button" id="chatbot-toggle">🤖</button>
      <div class="chatbot-window" id="chatbot-window">
        <div class="chatbot-header">
          <h3>DB-Assistant IA</h3>
          <button class="close-btn" id="chatbot-close">✕</button>
        </div>
        <div class="chatbot-messages" id="chatbot-messages">
          <div class="message bot">Bonjour! 👋 Je suis DB-Assistant. Comment puis-je vous aider?</div>
        </div>
        <div class="chatbot-input">
          <input type="text" id="chatbot-input" placeholder="Posez une question..." />
          <button id="chatbot-send">Envoyer</button>
        </div>
      </div>
    </div>
  `;

  // Ajouter au DOM
  document.body.insertAdjacentHTML('beforeend', chatHTML);

  // Event listeners
  const toggle = document.getElementById('chatbot-toggle');
  const close = document.getElementById('chatbot-close');
  const send = document.getElementById('chatbot-send');
  const input = document.getElementById('chatbot-input');
  const window = document.getElementById('chatbot-window');
  const messages = document.getElementById('chatbot-messages');

  toggle.addEventListener('click', () => {
    window.classList.toggle('active');
    if (window.classList.contains('active')) {
      input.focus();
    }
  });

  close.addEventListener('click', () => {
    window.classList.remove('active');
  });

  const sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;

    // Ajouter le message utilisateur
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    // Obtenir la réponse
    const response = assistant.respond(text);
    
    // Ajouter la réponse du bot (avec délai)
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'message bot';
      botMsg.textContent = response;
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 500);

    // Vider l'input
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  };

  send.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

// Initialiser le chatbot au chargement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatbot);
} else {
  initChatbot();
}

console.log('DB SERVICE IMMOBILIER chargé avec succès!');
