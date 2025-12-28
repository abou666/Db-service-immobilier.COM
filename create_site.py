#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

# Créer les dossiers
os.makedirs('css', exist_ok=True)
os.makedirs('js', exist_ok=True)
os.makedirs('images', exist_ok=True)

# === CSS ===
css_content = """/* ==================== RESET & BASE ==================== */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f8f9fa; }

/* ==================== HEADER & NAV ==================== */
header { background: linear-gradient(135deg, #0066cc 0%, #004999 100%); color: white; padding: 1rem 2rem; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.header-content { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 1.5rem; font-weight: bold; }
.logo a { color: white; text-decoration: none; }
.nav-toggle { display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
nav { display: flex; gap: 2rem; list-style: none; }
nav a { color: white; text-decoration: none; font-weight: 500; transition: opacity 0.3s; }
nav a:hover { opacity: 0.8; }

/* ==================== SLIDER ==================== */
.slider { position: relative; width: 100%; height: 500px; overflow: hidden; background: #000; }
.slide { position: absolute; width: 100%; height: 100%; opacity: 0; transition: opacity 0.8s ease-in-out; display: flex; align-items: center; justify-content: center; background-size: cover; background-position: center; }
.slide.active { opacity: 1; }
.slide-content { text-align: center; color: white; z-index: 10; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
.slide-content h2 { font-size: 3rem; margin-bottom: 1rem; }
.slide-content p { font-size: 1.25rem; margin-bottom: 2rem; }
.slider-controls { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 20; }
.slider-dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.5); cursor: pointer; transition: background 0.3s; }
.slider-dot.active { background: white; }

/* ==================== MAIN CONTENT ==================== */
main { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
section { padding: 4rem 0; border-bottom: 1px solid #eee; }
section:last-child { border-bottom: none; }
h1 { font-size: 2.5rem; color: #0066cc; margin-bottom: 1rem; }
h2 { font-size: 2rem; color: #0066cc; margin-bottom: 1.5rem; text-align: center; }
h3 { font-size: 1.25rem; color: #004999; margin-bottom: 0.5rem; }

/* ==================== CARDS ==================== */
.cards-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
.card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; text-align: center; }
.card:hover { transform: translateY(-5px); box-shadow: 0 8px 12px rgba(0,0,0,0.15); }
.card-icon { font-size: 3rem; margin-bottom: 1rem; }
.card p { color: #666; line-height: 1.8; }

/* ==================== PROPERTIES ==================== */
.property-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem; }
.property-card { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s; }
.property-card:hover { transform: translateY(-5px); }
.property-image { width: 100%; height: 200px; background: linear-gradient(135deg, #0066cc, #004999); display: flex; align-items: center; justify-content: center; font-size: 3rem; }
.property-info { padding: 1.5rem; }
.property-price { font-size: 1.5rem; color: #0066cc; font-weight: bold; margin: 0.5rem 0; }

/* ==================== BUTTONS ==================== */
.btn { display: inline-block; padding: 0.75rem 2rem; background: linear-gradient(135deg, #0066cc 0%, #004999 100%); color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: opacity 0.3s; border: none; cursor: pointer; font-size: 1rem; }
.btn:hover { opacity: 0.85; }
.btn-secondary { background: #6c757d; }

/* ==================== FORMS ==================== */
.form-group { margin-bottom: 1.5rem; }
label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: #333; }
input[type="text"], input[type="email"], input[type="tel"], input[type="date"], select, textarea { width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px; font-family: inherit; font-size: 1rem; transition: border-color 0.3s; }
input[type="text"]:focus, input[type="email"]:focus, input[type="tel"]:focus, input[type="date"]:focus, select:focus, textarea:focus { border-color: #0066cc; outline: none; box-shadow: 0 0 5px rgba(0, 102, 204, 0.3); }
textarea { resize: vertical; min-height: 150px; }

/* ==================== FOOTER ==================== */
footer { background: #1a1a1a; color: white; padding: 3rem 2rem 1rem; margin-top: 4rem; }
.footer-content { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem; }
.footer-section h3 { color: #0066cc; margin-bottom: 1rem; }
.footer-section p, .footer-section a { color: #ccc; text-decoration: none; margin-bottom: 0.5rem; display: block; }
.footer-section a:hover { color: #0066cc; }
.social-icons { display: flex; gap: 1rem; margin-top: 1rem; }
.social-icons a { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #0066cc; border-radius: 50%; color: white; text-decoration: none; font-size: 1.25rem; transition: background 0.3s; }
.social-icons a:hover { background: #004999; }

/* ==================== RESPONSIVE ==================== */
@media (max-width: 768px) {
  .nav-toggle { display: block; }
  nav { display: none; position: absolute; top: 60px; left: 0; right: 0; flex-direction: column; background: #004999; padding: 1rem; gap: 0; }
  nav.active { display: flex; }
  nav a { padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.2); }
  .slider { height: 300px; }
  .slide-content h2 { font-size: 1.5rem; }
  .slide-content p { font-size: 1rem; }
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.5rem; }
  .cards-container, .property-grid { grid-template-columns: 1fr; }
  section { padding: 2rem 0; }
}

@media (max-width: 480px) {
  .header-content { padding: 0; }
  main { padding: 0 1rem; }
  .slider { height: 200px; }
  .slide-content h2 { font-size: 1.25rem; }
  h1 { font-size: 1.5rem; }
}
"""

# === JAVASCRIPT ===
js_content = """// Menu toggle
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
"""

# === INDEX.HTML ===
index_html = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DB SERVICE IMMOBILIER | Immobilier, Géomatique, Comptabilité</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">
                <a href="index.html">🏢 DB SERVICE IMMOBILIER</a>
            </div>
            <button class="nav-toggle">☰</button>
            <nav>
                <a href="index.html">Accueil</a>
                <a href="proprietes.html">Propriétés</a>
                <a href="services.html">Services</a>
                <a href="geometre.html">Géomètre</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>

    <main>
        <!-- SLIDER -->
        <section class="slider">
            <div class="slide active" style="background: linear-gradient(135deg, #0066cc 0%, #004999 100%);">
                <div class="slide-content">
                    <h2>Immobilier de qualité</h2>
                    <p>Trouvez votre propriété idéale en Côte d'Ivoire</p>
                </div>
            </div>
            <div class="slide" style="background: linear-gradient(135deg, #00a86b 0%, #008c4d 100%);">
                <div class="slide-content">
                    <h2>Services de géomatique</h2>
                    <p>Plans, cartographie et localisation géographique</p>
                </div>
            </div>
            <div class="slide" style="background: linear-gradient(135deg, #ff6b35 0%, #d63f16 100%);">
                <div class="slide-content">
                    <h2>Expertise comptable</h2>
                    <p>Gestion financière et comptable professionnelle</p>
                </div>
            </div>
            <div class="slider-controls">
                <span class="slider-dot active"></span>
                <span class="slider-dot"></span>
                <span class="slider-dot"></span>
            </div>
        </section>

        <!-- À PROPOS -->
        <section id="about">
            <h2>À propos de DB SERVICE IMMOBILIER</h2>
            <p style="text-align: center; margin: 1rem 0; color: #666;">
                Depuis plus de 10 ans, nous accompagnons nos clients dans leurs projets immobiliers, géomatiques et comptables.
                Notre équipe de professionnels expérimentés vous garantit un service de qualité et une expertise reconnue.
            </p>
            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🏠</div>
                    <h3>Immobilier</h3>
                    <p>Achat, vente, location de propriétés résidentielles et commerciales. Conseils d'experts pour trouver le bien idéal.</p>
                </div>
                <div class="card">
                    <div class="card-icon">📍</div>
                    <h3>Géomatique</h3>
                    <p>Services de cartographie, localisation GPS, plans d'aménagement et analyses géographiques professionnelles.</p>
                </div>
                <div class="card">
                    <div class="card-icon">💼</div>
                    <h3>Comptabilité</h3>
                    <p>Gestion comptable complète, audit financier, conseils fiscaux pour particuliers et entreprises.</p>
                </div>
            </div>
        </section>

        <!-- PROPRIÉTÉS EN VEDETTE -->
        <section id="featured-properties">
            <h2>Propriétés en vedette</h2>
            <div class="property-grid">
                <div class="property-card">
                    <div class="property-image">🏡</div>
                    <div class="property-info">
                        <h3>Villa résidentielle moderne</h3>
                        <p>Abidjan - Cocody</p>
                        <p style="color: #666; font-size: 0.9rem;">4 chambres • 3 SDB • 250 m²</p>
                        <div class="property-price">25 000 000 FCFA</div>
                        <a href="proprietes.html" class="btn" style="width: 100%; text-align: center;">Voir détails</a>
                    </div>
                </div>
                <div class="property-card">
                    <div class="property-image">🏢</div>
                    <div class="property-info">
                        <h3>Terrain commercial urbain</h3>
                        <p>Abidjan - Plateau</p>
                        <p style="color: #666; font-size: 0.9rem;">500 m² • Zone A • Bien situé</p>
                        <div class="property-price">15 000 000 FCFA</div>
                        <a href="proprietes.html" class="btn" style="width: 100%; text-align: center;">Voir détails</a>
                    </div>
                </div>
                <div class="property-card">
                    <div class="property-image">🏗️</div>
                    <div class="property-info">
                        <h3>Immeuble d'appartements</h3>
                        <p>Abidjan - Marcory</p>
                        <p style="color: #666; font-size: 0.9rem;">6 appartements • Rentable • Sécurisé</p>
                        <div class="property-price">45 000 000 FCFA</div>
                        <a href="proprietes.html" class="btn" style="width: 100%; text-align: center;">Voir détails</a>
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="proprietes.html" class="btn">Voir toutes les propriétés</a>
            </div>
        </section>

        <!-- TÉMOIGNAGES -->
        <section id="testimonials">
            <h2>Témoignages de nos clients</h2>
            <div class="cards-container">
                <div class="card">
                    <p>"DB Service m'a aidé à trouver ma maison de rêve. Service professionnel et rapide."</p>
                    <h3>— Marie Kouamé</h3>
                </div>
                <div class="card">
                    <p>"Excellente expertise en géomatique. Les plans fournis sont très détaillés et précis."</p>
                    <h3>— Ahmed Traoré</h3>
                </div>
                <div class="card">
                    <p>"Équipe comptable très compétente. Ils ont optimisé ma fiscalité efficacement."</p>
                    <h3>— Jean Coulibaly</h3>
                </div>
            </div>
        </section>

        <!-- APPEL À L'ACTION -->
        <section style="text-align: center; padding: 3rem 0; background: linear-gradient(135deg, #0066cc 0%, #004999 100%); color: white; margin: 0 -2rem; padding: 3rem 2rem;">
            <h2 style="color: white; margin-bottom: 1rem;">Vous avez un projet immobilier ?</h2>
            <p style="color: white; margin-bottom: 2rem; font-size: 1.1rem;">Contactez-nous dès aujourd'hui pour discuter de vos besoins</p>
            <a href="contact.html" class="btn">Nous contacter</a>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>DB SERVICE IMMOBILIER</h3>
                <p>Votre partenaire de confiance pour l'immobilier, la géomatique et la comptabilité.</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>📍 Abidjan, Côte d'Ivoire</p>
                <p>📞 +225 XX XX XX XX</p>
                <p>✉️ contact@dbserviceimmobilier.ci</p>
            </div>
            <div class="footer-section">
                <h3>Liens rapides</h3>
                <a href="proprietes.html">Propriétés</a>
                <a href="services.html">Services</a>
                <a href="contact.html">Contact</a>
                <a href="geometre.html">Géomètre</a>
            </div>
            <div class="footer-section">
                <h3>Réseaux sociaux</h3>
                <div class="social-icons">
                    <a href="#" title="Facebook">f</a>
                    <a href="#" title="LinkedIn">in</a>
                    <a href="#" title="WhatsApp">W</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 DB SERVICE IMMOBILIER. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
"""

# === PROPRIETES.HTML ===
proprietes_html = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propriétés | DB SERVICE IMMOBILIER</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">
                <a href="index.html">🏢 DB SERVICE IMMOBILIER</a>
            </div>
            <button class="nav-toggle">☰</button>
            <nav>
                <a href="index.html">Accueil</a>
                <a href="proprietes.html">Propriétés</a>
                <a href="services.html">Services</a>
                <a href="geometre.html">Géomètre</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>

    <main>
        <section style="padding: 2rem 0;">
            <h1>Nos Propriétés à vendre</h1>
            <p style="text-align: center; color: #666; margin-bottom: 2rem;">Découvrez notre sélection de propriétés de qualité en Côte d'Ivoire</p>

            <!-- Filtres -->
            <div style="text-align: center; margin-bottom: 2rem;">
                <button class="btn filter-btn active" data-filter="all">Tous</button>
                <button class="btn filter-btn" data-filter="residential">Résidentiel</button>
                <button class="btn filter-btn" data-filter="commercial">Commercial</button>
                <button class="btn filter-btn" data-filter="terrain">Terrain</button>
            </div>

            <!-- Propriétés -->
            <div class="property-grid">
                <div class="property-card" data-category="residential">
                    <div class="property-image">🏡</div>
                    <div class="property-info">
                        <h3>Villa moderne Cocody</h3>
                        <p>Abidjan - Cocody</p>
                        <p style="color: #666; font-size: 0.9rem;">4 chambres • 3 SDB • 250 m² • Climatisée</p>
                        <div class="property-price">25 000 000 FCFA</div>
                    </div>
                </div>
                <div class="property-card" data-category="commercial">
                    <div class="property-image">🏢</div>
                    <div class="property-info">
                        <h3>Immeuble de bureaux</h3>
                        <p>Abidjan - Plateau</p>
                        <p style="color: #666; font-size: 0.9rem;">5 étages • 1000 m² • Bien situé</p>
                        <div class="property-price">75 000 000 FCFA</div>
                    </div>
                </div>
                <div class="property-card" data-category="terrain">
                    <div class="property-image">📍</div>
                    <div class="property-info">
                        <h3>Terrain commercial</h3>
                        <p>Abidjan - Port-Bouët</p>
                        <p style="color: #666; font-size: 0.9rem;">500 m² • Zone A • Viabilisé</p>
                        <div class="property-price">15 000 000 FCFA</div>
                    </div>
                </div>
                <div class="property-card" data-category="residential">
                    <div class="property-image">🏗️</div>
                    <div class="property-info">
                        <h3>Résidence fermée</h3>
                        <p>Abidjan - Marcory</p>
                        <p style="color: #666; font-size: 0.9rem;">6 appartements • Sécurisée • Parking</p>
                        <div class="property-price">45 000 000 FCFA</div>
                    </div>
                </div>
                <div class="property-card" data-category="residential">
                    <div class="property-image">🏠</div>
                    <div class="property-info">
                        <h3>Maison avec cour</h3>
                        <p>Abidjan - Yopougon</p>
                        <p style="color: #666; font-size: 0.9rem;">3 chambres • 2 SDB • Cour spacieuse</p>
                        <div class="property-price">12 000 000 FCFA</div>
                    </div>
                </div>
                <div class="property-card" data-category="commercial">
                    <div class="property-image">🛍️</div>
                    <div class="property-info">
                        <h3>Local commercial</h3>
                        <p>Abidjan - Treichville</p>
                        <p style="color: #666; font-size: 0.9rem;">300 m² • Grand passage • Idéal magasin</p>
                        <div class="property-price">8 000 000 FCFA</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>DB SERVICE IMMOBILIER</h3>
                <p>Votre partenaire de confiance pour l'immobilier.</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>📍 Abidjan, Côte d'Ivoire</p>
                <p>📞 +225 XX XX XX XX</p>
                <p>✉️ contact@dbserviceimmobilier.ci</p>
            </div>
            <div class="footer-section">
                <h3>Liens</h3>
                <a href="index.html">Accueil</a>
                <a href="contact.html">Contact</a>
                <a href="services.html">Services</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 DB SERVICE IMMOBILIER. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
"""

# === SERVICES.HTML ===
services_html = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services | DB SERVICE IMMOBILIER</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">
                <a href="index.html">🏢 DB SERVICE IMMOBILIER</a>
            </div>
            <button class="nav-toggle">☰</button>
            <nav>
                <a href="index.html">Accueil</a>
                <a href="proprietes.html">Propriétés</a>
                <a href="services.html">Services</a>
                <a href="geometre.html">Géomètre</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>

    <main>
        <section>
            <h1>Nos Services</h1>
            <p style="text-align: center; color: #666; margin-bottom: 2rem;">Nous offrons une gamme complète de services immobiliers, géomatiques et comptables</p>

            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🏠</div>
                    <h3>Achat et Vente</h3>
                    <p>Nous vous accompagnons dans l'achat ou la vente de votre propriété. Négociation, expertise et suivi complet du dossier.</p>
                </div>
                <div class="card">
                    <div class="card-icon">🔑</div>
                    <h3>Location</h3>
                    <p>Gestion locative complète, recherche de locataires, contrats, entretien et suivi des loyers.</p>
                </div>
                <div class="card">
                    <div class="card-icon">📐</div>
                    <h3>Évaluation</h3>
                    <p>Estimation précise de vos biens avec rapport détaillé basé sur les valeurs du marché actuel.</p>
                </div>
                <div class="card">
                    <div class="card-icon">🗺️</div>
                    <h3>Géomatique</h3>
                    <p>Cartographie, plans, localisation GPS et analyses géographiques pour vos projets d'aménagement.</p>
                </div>
                <div class="card">
                    <div class="card-icon">📊</div>
                    <h3>Comptabilité</h3>
                    <p>Gestion comptable, audit financier, conseils fiscaux et déclarations impôts.</p>
                </div>
                <div class="card">
                    <div class="card-icon">⚖️</div>
                    <h3>Conseil juridique</h3>
                    <p>Assistance juridique, rédaction de contrats et suivi des formalités légales.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>DB SERVICE IMMOBILIER</h3>
                <p>Services immobiliers complets et professionnels.</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>📍 Abidjan, Côte d'Ivoire</p>
                <p>📞 +225 XX XX XX XX</p>
                <p>✉️ contact@dbserviceimmobilier.ci</p>
            </div>
            <div class="footer-section">
                <h3>Liens</h3>
                <a href="index.html">Accueil</a>
                <a href="proprietes.html">Propriétés</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 DB SERVICE IMMOBILIER. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
"""

# === CONTACT.HTML ===
contact_html = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | DB SERVICE IMMOBILIER</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">
                <a href="index.html">🏢 DB SERVICE IMMOBILIER</a>
            </div>
            <button class="nav-toggle">☰</button>
            <nav>
                <a href="index.html">Accueil</a>
                <a href="proprietes.html">Propriétés</a>
                <a href="services.html">Services</a>
                <a href="geometre.html">Géomètre</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>

    <main>
        <section style="max-width: 800px;">
            <h1>Nous contacter</h1>
            <p style="text-align: center; color: #666; margin-bottom: 2rem;">Avez une question ? Nous sommes là pour vous aider</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
                <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <h3 style="color: #0066cc; margin-bottom: 1rem;">📍 Adresse</h3>
                    <p>Abidjan, Côte d'Ivoire</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <h3 style="color: #0066cc; margin-bottom: 1rem;">📞 Téléphone</h3>
                    <p>+225 XX XX XX XX</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <h3 style="color: #0066cc; margin-bottom: 1rem;">✉️ Email</h3>
                    <p>contact@dbserviceimmobilier.ci</p>
                </div>
                <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <h3 style="color: #0066cc; margin-bottom: 1rem;">⏰ Horaires</h3>
                    <p>Lun-Ven: 8h00-17h00<br>Sam: 9h00-13h00</p>
                </div>
            </div>

            <form id="contactForm" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2>Formulaire de contact</h2>
                
                <div class="form-group">
                    <label for="name">Nom complet *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">Téléphone</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                
                <div class="form-group">
                    <label for="subject">Sujet *</label>
                    <select id="subject" name="subject" required>
                        <option value="">-- Sélectionnez --</option>
                        <option value="immobilier">Immobilier</option>
                        <option value="geometre">Géomètre</option>
                        <option value="comptabilite">Comptabilité</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                
                <button type="submit" class="btn">Envoyer le message</button>
            </form>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>DB SERVICE IMMOBILIER</h3>
                <p>À votre service pour vos besoins immobiliers.</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>📍 Abidjan, Côte d'Ivoire</p>
                <p>📞 +225 XX XX XX XX</p>
                <p>✉️ contact@dbserviceimmobilier.ci</p>
            </div>
            <div class="footer-section">
                <h3>Liens</h3>
                <a href="index.html">Accueil</a>
                <a href="proprietes.html">Propriétés</a>
                <a href="services.html">Services</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 DB SERVICE IMMOBILIER. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
"""

# === GEOMETRE.HTML ===
geometre_html = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services Géomètre | DB SERVICE IMMOBILIER</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">
                <a href="index.html">🏢 DB SERVICE IMMOBILIER</a>
            </div>
            <button class="nav-toggle">☰</button>
            <nav>
                <a href="index.html">Accueil</a>
                <a href="proprietes.html">Propriétés</a>
                <a href="services.html">Services</a>
                <a href="geometre.html">Géomètre</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>

    <main>
        <section>
            <h1>Services de Géomètre</h1>
            <p style="text-align: center; color: #666; margin-bottom: 2rem;">Expertise en cartographie, localisation et planification géographique</p>

            <div class="cards-container">
                <div class="card">
                    <div class="card-icon">🗺️</div>
                    <h3>Cartographie</h3>
                    <p>Création de cartes détaillées, plans d'aménagement et représentations géographiques pour vos projets.</p>
                </div>
                <div class="card">
                    <div class="card-icon">📍</div>
                    <h3>Localisation GPS</h3>
                    <p>Positionnement précis de biens avec coordonnées GPS et marquage sur cartes interactives.</p>
                </div>
                <div class="card">
                    <div class="card-icon">📐</div>
                    <h3>Plans d'arpentage</h3>
                    <p>Relevés précis de terrains, limites de propriété et plans certifiés pour la légalité.</p>
                </div>
                <div class="card">
                    <div class="card-icon">🏗️</div>
                    <h3>Plans d'aménagement</h3>
                    <p>Conception de plans pour lotissements, bureaux, résidences avec respect des normes.</p>
                </div>
                <div class="card">
                    <div class="card-icon">🌍</div>
                    <h3>SIG & Analyse</h3>
                    <p>Systèmes d'information géographique, analyses spatiales et études d'impact environnemental.</p>
                </div>
                <div class="card">
                    <div class="card-icon">📊</div>
                    <h3>Cadastre & Documents</h3>
                    <p>Assistance pour dossiers cadastraux, certificats de localisation et documents légaux.</p>
                </div>
            </div>

            <section style="margin-top: 3rem; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2>Demandez un devis</h2>
                <p style="color: #666; margin-bottom: 1.5rem;">Contactez-nous pour vos besoins spécifiques en géomatique</p>
                <a href="contact.html?subject=geometre" class="btn">Demander un devis</a>
            </section>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>DB SERVICE IMMOBILIER</h3>
                <p>Expert en géomatique et cartographie.</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>📍 Abidjan, Côte d'Ivoire</p>
                <p>📞 +225 XX XX XX XX</p>
                <p>✉️ contact@dbserviceimmobilier.ci</p>
            </div>
            <div class="footer-section">
                <h3>Liens</h3>
                <a href="index.html">Accueil</a>
                <a href="contact.html">Contact</a>
                <a href="services.html">Services</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 DB SERVICE IMMOBILIER. Tous droits réservés.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
"""

# Écrire tous les fichiers
with open('css/style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_html)

with open('proprietes.html', 'w', encoding='utf-8') as f:
    f.write(proprietes_html)

with open('services.html', 'w', encoding='utf-8') as f:
    f.write(services_html)

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(contact_html)

with open('geometre.html', 'w', encoding='utf-8') as f:
    f.write(geometre_html)

print("✅ Tous les fichiers ont été créés avec succès !")
print("- css/style.css")
print("- js/main.js")
print("- index.html")
print("- proprietes.html")
print("- services.html")
print("- contact.html")
print("- geometre.html")
