// ===== Gestion de la Connexion =====
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageEl = document.getElementById('message');

  // Validation basique
  if (!email || !password) {
    showMessage('Veuillez remplir tous les champs.', 'error');
    return;
  }

  if (!validateEmail(email)) {
    showMessage('Adresse email invalide.', 'error');
    return;
  }

  // Simulation d'authentification (à remplacer par un appel API réel)
  if (email && password.length >= 6) {
    showMessage('Connexion réussie! Redirection en cours...', 'success');
    // localStorage.setItem('user', JSON.stringify({ email }));
    // Redirection après 1.5 secondes
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } else {
    showMessage('Email ou mot de passe incorrect.', 'error');
  }
}

// ===== Validation Email =====
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ===== Affichage des Messages =====
function showMessage(msg, type) {
  const messageEl = document.getElementById('message');
  if (messageEl) {
    messageEl.textContent = msg;
    messageEl.className = type;
  }
}

// ===== Charger les Propriétés =====
function loadProperties() {
  const propertiesList = document.getElementById('properties-list');
  if (!propertiesList) return;

  // Données d'exemple
  const properties = [
    {
      id: 1,
      name: 'Appartement Centre-Ville',
      price: '450,000 €',
      location: 'Centre-Ville',
      area: '85 m²'
    },
    {
      id: 2,
      name: 'Maison avec Jardin',
      price: '650,000 €',
      location: 'Banlieue',
      area: '120 m²'
    },
    {
      id: 3,
      name: 'Studio Moderne',
      price: '250,000 €',
      location: 'Centre-Ville',
      area: '35 m²'
    },
    {
      id: 4,
      name: 'Villa Luxe',
      price: '1,200,000 €',
      location: 'Quartier Premium',
      area: '250 m²'
    }
  ];

  propertiesList.innerHTML = '';

  properties.forEach(prop => {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
      <h3>${prop.name}</h3>
      <p><strong>Prix:</strong> ${prop.price}</p>
      <p><strong>Localisation:</strong> ${prop.location}</p>
      <p><strong>Surface:</strong> ${prop.area}</p>
      <button class="btn" onclick="viewDetails(${prop.id})">Plus de détails</button>
    `;
    propertiesList.appendChild(card);
  });
}

// ===== Afficher les Détails =====
function viewDetails(propertyId) {
  alert(`Détails de la propriété ${propertyId} - À implémenter`);
}

// ===== Initialisation au Chargement =====
document.addEventListener('DOMContentLoaded', function() {
  loadProperties();

  // Gestion de l'appui sur Entrée dans les champs de connexion
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

  // Navigation lisse
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// ===== Afficher/Masquer le mot de passe =====
function togglePasswordVisibility(fieldId) {
  const field = document.getElementById(fieldId);
  if (field.type === 'password') {
    field.type = 'text';
  } else {
    field.type = 'password';
  }
}

// ===== Initialiser la Carte (placeholder) =====
function initMap() {
  const mapEl = document.getElementById('map');
  if (mapEl) {
    mapEl.innerHTML = '<p>Carte interactive (Intégration Leaflet/Google Maps à venir)</p>';
  }
}

// Appeler initMap au chargement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMap);
} else {
  initMap();
}
