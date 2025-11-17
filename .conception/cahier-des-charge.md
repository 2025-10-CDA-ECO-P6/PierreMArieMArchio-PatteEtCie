# Cahier des charges fonctionnel

## 1. Contexte

La clinique vétérinaire **Patte & Cie** souhaite remplacer les carnets de santé papier par une interface web permettant de consulter rapidement et efficacement les informations médicales des animaux.

## 2. Objectifs

- Fournir un outil simple et rapide pour accéder aux carnets de santé digitalisés.
- Réduire la perte d’informations et les erreurs (doublons de vaccins, dossiers introuvables…).
- Améliorer l’organisation interne et la communication client.

## 3. Utilisateurs cibles

- **Secrétaires** : Accès aux informations générales, gestion des rendez-vous, mise à jour basique.
- **Vétérinaires** : Accès complet, ajout d’actes médicaux, gestion avancée du dossier.
- **Clients (évolution future)** : Consultation en lecture seule du carnet de santé de leurs animaux.

## 4. Fonctionnalités principales

### 4.1 Authentification

- Connexion par identifiant/mot de passe.
- Différenciation des rôles (secrétaire, vétérinaire, client).
- Sécurité minimale : hash des mots de passe.

### 4.2 Gestion des animaux

- Recherche d’un animal (nom, espèce, propriétaire, ID interne).
- Création d'un carnet de santé
- Consultation du carnet de santé digitalisé.
- Fiche animal contenant :

  - Informations générales (nom, espèce, race, âge, sexe, puce, propriétaire, etc.)
  - Historique médical
  - Vaccins
  - Allergies
  - Dernières visites
  - Prochaines visites programmées

### 4.3 Gestion du carnet de santé

- Ajout d’un acte médical.
- Ajout/modification d’un vaccin.
- Ajout d’observations.
- Mise à jour simple de la fiche animal.

### 4.4 Gestion des fichiers JSON

- Stockage structuré des données (animaux, propriétaires, actes, etc.).
- Lecture et affichage dynamique.
- Option d’évolution vers une API/BDD.

## 5. Évolutions prévues

- **Espace client** : Consultation du carnet de santé, informations personnelles.
- **Mise à jour infos utilisateur** (changement adresse, tel, nom animal…).
- **Notifications automatiques** (rappels vaccins, visites).

## 6. Contraintes techniques

- Application **desktop-first**, avec adaptation ultérieure au mobile.
- Responsive design prévu mais non prioritaire dans la première version.
- Respect d’une maquette UI fournie.
- Code propre, maintenable, architecture simple et claire.
- Séparation backend / frontend même si simple.
- Application web responsive.
- Respect d’une maquette UI fournie.
- Code propre, maintenable, architecture simple et claire.
- Séparation backend / frontend même si simple.

## 7. Livrables

- Interface web fonctionnelle.
- Structure JSON définie.
- Documentation de conception.
