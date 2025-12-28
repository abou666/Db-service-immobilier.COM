# 🏢 DB SERVICE IMMOBILIER - Site Web Professionnel

## 📋 Présentation

Site web complet et responsif pour **DB SERVICE IMMOBILIER**, une entreprise ivoirienne spécialisée dans :
- 🏠 **Immobilier** : Achat, vente, location de propriétés
- 📍 **Géomatique** : Cartographie, plans, localisation GPS
- 💼 **Comptabilité** : Gestion comptable et conseil fiscal

## 🎨 Pages du site

| Page | URL | Description |
|------|-----|-------------|
| **Accueil** | `index.html` | Page principale avec slider, services et propriétés en vedette |
| **Propriétés** | `proprietes.html` | Listing des propriétés avec filtres (Tous, Résidentiel, Commercial, Terrain) |
| **Services** | `services.html` | Détails des 6 services proposés |
| **Géomètre** | `geometre.html` | Services de géomatique et cartographie |
| **Carte** | `carte.html` | Carte interactive Leaflet avec localisation des propriétés |
| **Contact** | `contact.html` | Formulaire de contact fonctionnel |

## ✨ Fonctionnalités

### 🎯 Navigation
- Navigation responsive avec menu mobile toggle
- Menu sticky en haut de page
- Liens internes actifs

### 🖼️ Slider
- Carrousel automatique (5 secondes)
- 3 slides avec dégradés professionnels
- Contrôles manuels (dots)

### 📱 Design Responsive
- Mobile-first approach
- Breakpoints : 768px et 480px
- Grid layout flexible
- Tous les éléments adaptés au mobile

### 📝 Formulaires
- Formulaire contact avec validation JS
- Vérification champs obligatoires
- Validation email
- Message de confirmation

### 🗺️ Carte Interactive
- Leaflet.js (OpenStreetMap)
- Marqueurs propriétés
- Zoom et navigation
- Popups informatifs

### 🎨 Design
- Couleurs : Bleu professionnel (#0066cc) et gris
- Dégradés modernes
- Ombres subtiles
- Transitions fluides
- Hover effects

## 📁 Structure des fichiers

```
├── index.html              # Page d'accueil
├── proprietes.html         # Listing propriétés
├── services.html           # Détails services
├── contact.html            # Formulaire contact
├── geometre.html           # Services géomètre
├── carte.html              # Carte interactive
├── css/
│   └── style.css           # Styles complets et responsive
├── js/
│   └── main.js             # JavaScript interactions
├── images/                 # Assets (SVG, images)
└── README.md               # Cette documentation
```

## 🚀 Fonctionnalités JavaScript

### Menu Mobile
```javascript
// Toggle menu au clic sur le bouton hamburger
// Ferme automatiquement au clic sur un lien
```

### Slider Automatique
```javascript
// Rotation auto tous les 5 secondes
// Navigation manuelle via dots
// Classes active/inactive
```

### Validation Formulaire
```javascript
// Vérification champs obligatoires
// Validation format email
// Message de confirmation
```

### Filtres Propriétés
```javascript
// Filtres : Tous, Résidentiel, Commercial, Terrain
// Affichage/masquage dynamique
// Classe active sur bouton
```

## 🎯 Sections Page Accueil

1. **Header** : Logo + Navigation
2. **Slider** : 3 slides avec dégradés
3. **À propos** : 3 cartes services
4. **Propriétés en vedette** : 3 cartes principales
5. **Témoignages** : 3 avis clients
6. **Appel à l'action** : CTA Contact
7. **Footer** : Info + Liens + Réseaux sociaux

## 💻 Technos utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Flexbox, Grid, Dégradés, Animations
- **JavaScript vanilla** : Pas de dépendances
- **Leaflet.js** : Carte interactive (via CDN)
- **OpenStreetMap** : Tuiles cartes

## ✅ Validations & Accessibilité

- ✅ HTML5 valide
- ✅ Responsive mobile/tablet/desktop
- ✅ Sans erreurs console JavaScript
- ✅ Métadonnées SEO de base
- ✅ Viewport meta tag configuré
- ✅ Charset UTF-8 déclaré

## 🌐 Déploiement GitHub Pages

Le site est automatiquement déployé sur GitHub Pages :
- **Branche** : `main`
- **URL** : https://github.com/abou666/Db-service-immobilier.COM
- **Fichier de configuration** : `.nojekyll` (pour éviter la compilation Jekyll)

## 📝 Notes développement

### Chemins relatifs
- Tous les chemins sont relatifs : `css/style.css`, `js/main.js`
- Compatible GitHub Pages (pas de `/` au début)

### Icônes
- Utilise des émojis Unicode pour les icônes
- Pas de dépendance à Font Awesome ou autre

### Couleurs principales
- **Bleu principal** : `#0066cc`
- **Bleu foncé** : `#004999`
- **Texte** : `#333`
- **Gris clair** : `#f8f9fa`
- **Footer** : `#1a1a1a`

### Fonts
- Police système : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Fallback inclus

## 🔧 Maintenance

### Ajouter une propriété
1. Dupliquer une div `.property-card` dans `proprietes.html`
2. Mettre à jour `data-category` pour les filtres
3. Modifier le contenu (titre, prix, description)

### Mettre à jour les coordonnées
1. Chercher les mentions en bas de chaque page
2. Remplacer le numéro de téléphone
3. Remplacer l'email

### Ajouter des images
1. Placer les images dans le dossier `images/`
2. Referencer dans les pages HTML

## 📞 Support

Pour toute modification ou amélioration, contactez :
- 📧 contact@dbserviceimmobilier.ci
- 📞 +225 XX XX XX XX

---

**Site créé** : Décembre 2025  
**Dernière mise à jour** : Décembre 2025  
**Auteur** : DB SERVICE IMMOBILIER
