# Prix Immobilier Paris 🏠

Une application web interactive pour visualiser l'évolution des prix immobiliers à Paris par arrondissement depuis Janvier 2020.

## 🌐 Version en ligne

Accédez à l'application directement : [Prix Immobilier Paris](https://demullewie.github.io/prix-immobilier-paris/)

## ✨ Fonctionnalités

- 📊 Visualisation graphique interactive des prix au m²
- 🗺️ Filtrage par arrondissement (1er au 20ème)
- 📈 Statistiques en temps réel :
  - Prix moyen actuel
  - Variation annuelle
  - Tendance du marché
- 📱 Interface responsive (mobile, tablette, desktop)
- 🔄 Mises à jour mensuelles des données

## 🛠️ Technologies utilisées

- HTML5
- CSS3 avec variables personnalisées
- JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) pour les graphiques interactifs
- API Brave Search pour les données immobilières
- Intl.NumberFormat pour le formatage des prix

## 🚀 Installation locale

1. Clonez le dépôt :
```bash
git clone https://github.com/demullewie/prix-immobilier-paris.git
```

2. Ouvrez le fichier `index.html` dans votre navigateur

## ⚙️ Configuration

Pour utiliser l'API Brave Search :

1. Créez un compte sur [Brave Search](https://brave.com/search/)
2. Obtenez un token API sur [Brave Search API](https://brave.com/search/api/)
3. Dans `script.js`, remplacez la valeur de `X-Subscription-Token` par votre token :
```javascript
headers: {
    'Accept': 'application/json',
    'X-Subscription-Token': 'VOTRE-TOKEN-API'
}
```

## 📁 Structure du projet

```
prix-immobilier-paris/
│
├── index.html          # Structure de l'application
├── styles.css         # Styles et mise en page
├── script.js         # Logique de l'application
└── README.md        # Documentation
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Suggestions d'améliorations

- [ ] Ajout de données historiques pour tous les arrondissements
- [ ] Comparaison entre arrondissements
- [ ] Export des données en CSV/PDF
- [ ] Prévisions de tendances
- [ ] Filtres supplémentaires (type de bien, surface...)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à :
- Ouvrir une issue
- Proposer une pull request
- Forker le projet

## 🙏 Remerciements

- [Chart.js](https://www.chartjs.org/) pour la bibliothèque de graphiques
- [Brave Search](https://brave.com/search/) pour l'API de données
- Tous les contributeurs du projet 