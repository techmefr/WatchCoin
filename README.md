# WatchCoin

Application React pour suivre les cours et gérer vos cryptomonnaies favorites.

## 📋 Description

WatchCoin est une application web React qui permet aux utilisateurs de:
- Consulter les cours actuels des cryptomonnaies
- Ajouter/supprimer des cryptomonnaies à leurs favoris
- Rechercher des cryptomonnaies spécifiques

L'application utilise l'API CoinMarket pour récupérer les données en temps réel.

## ✨ Fonctionnalités

- **Liste de cryptomonnaies** - Affichage des prix et informations actuelles
- **Système de favoris** - Sauvegarde des cryptos préférées de l'utilisateur
- **Recherche** - Filtrage rapide des cryptomonnaies par nom
- **Design responsive** - Interface adaptée à tous les appareils

## 🛠️ Technologies utilisées

- React 18
- Vite (pour le build et le développement)
- API CoinMarket
- CSS modules
- ESLint

## 🧩 Structure du projet

```
watchcoin/
├── src/
│   ├── components/
│   │   ├── CryptoFavorite.jsx  # Composant d'affichage des favoris
│   │   ├── CryptoItem.jsx      # Composant pour chaque crypto
│   │   ├── CryptoList.jsx      # Liste des cryptomonnaies
│   │   └── SearchBar.jsx       # Barre de recherche
│   ├── assets/                 # Images et ressources
│   ├── App.jsx                 # Composant principal
│   ├── main.jsx                # Point d'entrée
│   ├── index.css               # Styles globaux
│   └── App.css                 # Styles spécifiques à App
├── .env_sample                 # Exemple de fichier d'environnement
├── index.html                  # HTML principal
├── package.json                # Dépendances et scripts
└── vite.config.js              # Configuration de Vite
```

## 💻 Installation

1. Clonez ce dépôt
```bash
git clone git@github.com:techmefr/watchcoin.git
cd watchcoin
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez votre clé API
```bash
cp .env_sample .env
# Éditez le fichier .env avec votre clé API CoinMarket
```

4. Lancez l'application en mode développement
```bash
npm run dev
```

## 🔌 Configuration de l'API

Cette application utilise l'API CoinMarket qui nécessite une clé API.
1. Inscrivez-vous sur [CoinMarketCap](https://coinmarketcap.com/api/)
2. Obtenez votre clé API gratuite
3. Ajoutez-la dans votre fichier `.env` :
```
VITE_API_KEY=votre_clé_api_ici
```

## 🚀 Déploiement

Pour construire l'application pour la production :

```bash
npm run build
```

Les fichiers générés seront disponibles dans le dossier `dist/`.

## 🔍 Fonctionnalités principales

### Système de favoris

```jsx
function CryptoItem({ crypto, isFavorite, toggleFavorite }) {
  return (
    <li>
      <span>
        {crypto.name} ({crypto.symbol}) - {crypto.quote.USD.price}
      </span>
      <div className="love">
        <input
          id={`switch-${crypto.id}`}
          type="checkbox"
          checked={isFavorite}
          onChange={() => toggleFavorite(crypto.id)}
        />
        <label className="love-heart" htmlFor={`switch-${crypto.id}`}>
          {/* Animation du cœur */}
        </label>
      </div>
    </li>
  );
}
```

## 📝 Licence

[MIT](https://choosealicense.com/licenses/mit/)

---

Créé par [Gaëtan Compigni](https://github.com/techmefr)
