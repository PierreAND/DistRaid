# DistRaid

**Système de gestion de loot DKP pour guildes de raid**

DistRaid est un outil web de gestion de loot pour les guildes de raid dans World of Warcraft (ou tout MMO similaire), basé sur le système **DKP** (Dragon Kill Points).

🔗 [distraid.fr](https://www.distraid.fr) · 📦 [GitHub](https://github.com/PierreAND/DistRaid)

---

## Le problème

Dans un raid de 20+ joueurs, quand un boss meurt et drop un loot, comment décider qui le reçoit de manière juste ? Sans système automatisé, c'est le chaos : favoritisme, frustrations, drama.

## La solution

DistRaid automatise la distribution du loot via le système **DKP** — un mécanisme d'équité où les joueurs accumulent des points en participant régulièrement aux raids, et les dépensent pour obtenir du loot.

### Côté Joueur

- Parcourir la liste des boss et visualiser les loots disponibles
- Ajouter les loots désirés à sa **wishlist**
- Accumuler des points en participant régulièrement aux raids

### Côté Admin (Raid Lead)

- Vue d'ensemble des candidats par loot avec leur nombre de points
- Attribution du loot au joueur le plus méritant en un clic
- Déduction automatique des points après attribution

### Principe d'équité

Celui qui vient le plus souvent sans rien recevoir monte en points et devient prioritaire. Le système garantit une distribution juste et transparente sur le long terme.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | **Angular** |
| Backend | **NestJS** |
| ORM / Base de données | **Prisma** |
| Conteneurisation | **Docker** |
| Reverse Proxy | **Traefik** |

---

## Prérequis

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) et Docker Compose
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Installation

```bash
# Cloner le repo
git clone https://github.com/PierreAND/DistRaid.git
cd DistRaid
```

### Avec Docker (recommandé)

```bash
docker compose up -d
```

### En local (développement)

```bash
# Backend
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev

# Frontend
cd frontend
npm install
ng serve
```

---

## Architecture

```
DistRaid/
├── frontend/          # Application Angular
├── backend/           # API NestJS
│   ├── prisma/        # Schéma & migrations Prisma
│   └── src/
│       ├── modules/   # Modules métier (boss, loot, wishlist, DKP…)
│       └── common/    # Guards, interceptors, utils
├── docker-compose.yml # Orchestration des services
└── traefik/           # Configuration du reverse proxy
```

---

## Fonctionnalités

- **Gestion des boss** — liste des boss avec leurs loots associés
- **Wishlist** — chaque joueur déclare les items qu'il convoite
- **Système DKP** — accumulation et dépense de points automatisée
- **Attribution de loot** — interface admin pour distribuer les drops
- **Historique** — suivi complet des attributions passées

---

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request sur le [dépôt GitHub](https://github.com/PierreAND/DistRaid).

---

## Licence

Ce projet est open source. Consultez le fichier `LICENSE` pour plus de détails.
