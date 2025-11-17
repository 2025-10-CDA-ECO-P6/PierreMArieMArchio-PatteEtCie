# Technical Stories

## TS1 — Gestion des rôles et permissions

**Description :**
Mettre en place une gestion simple des rôles (secrétaire, vétérinaire, client) pour contrôler l’accès aux fonctionnalités dans l’application.

**Actions techniques :**

- Implémenter la gestion des rôles côté frontend
- Définir les niveaux d’accès pour chaque rôle
- Vérifier l’accès aux pages et actions selon le rôle

**Résumé rapide :**

- Gestion des rôles
- Restriction d’accès côté front
- Vérification sur toutes les actions

---

## TS2 — Structure des fichiers JSON

**Description :**
Définir et structurer les fichiers JSON pour stocker les données des animaux, propriétaires, actes médicaux et vaccins.

**Actions techniques :**

- Créer des schémas JSON : animals.json, owners.json, records.json
- Prévoir la lecture et l’écriture des données depuis le frontend
- Valider les données avant l’écriture pour éviter les erreurs

**Résumé rapide :**

- Schémas JSON définis
- Lecture/écriture côté frontend
- Validation des données

---

## TS3 — Architecture frontend

**Description :**
Mettre en place une architecture frontend modulaire et maintenable pour l’interface web.

**Actions techniques :**

- Organisation par composants (Login, Dashboard, FicheAnimal, ListeAnimaux)
- Services pour la lecture des fichiers JSON
- Navigation claire et responsive

**Résumé rapide :**

- Architecture modulaire
- Composants réutilisables
- Navigation simple

---

## TS4 — Sécurité minimale

**Description :**
Assurer la sécurité minimale dans le frontend pour protéger les accès.

**Actions techniques :**

- Stocker les mots de passe de façon sécurisée côté frontend (hash simulé)
- Gestion simple des sessions utilisateur
- Validation des entrées et contrôle d’accès

**Résumé rapide :**

- Hash mot de passe côté front
- Sessions simulées
- Validation des entrées

---

## TS5 — Système de recherche performant

**Description :**
Permettre une recherche rapide et efficace des animaux selon différents critères, entièrement côté frontend.

**Actions techniques :**

- Filtrage des données JSON en mémoire
- Recherche par nom, ID, espèce, propriétaire
- Résultats instantanés et paginés si nécessaire

**Résumé rapide :**

- Recherche rapide côté frontend
- Multi-critères
- Affichage fluide
