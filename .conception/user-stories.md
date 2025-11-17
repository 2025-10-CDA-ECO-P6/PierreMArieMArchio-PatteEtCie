# User Stories 

## US1 — Authentification

**En tant que** utilisateur autorisé (secrétaire, vétérinaire, futur client)
**Je veux** pouvoir me connecter à l'application
**Afin de** sécuriser l’accès aux informations médicales et d’accéder à mes fonctionnalités

L’application doit permettre à chaque secrétaire, vétérinaire ou futur client de se connecter via une interface simple et compréhensible. L’objectif est de garantir la sécurité des informations médicales et de s’assurer que seules les personnes autorisées puissent consulter ou modifier les carnets de santé.

**Résumé rapide :**

- Page de connexion
- Vérification des identifiants
- Sécurisation de l’accès
- Messages d’erreur en cas d’échec

**Critères d’acceptation :**

- Given un utilisateur avec des identifiants valides, When il se connecte, Then il accède au tableau de bord.
- Given un utilisateur avec des identifiants invalides, When il se connecte, Then un message d’erreur s’affiche.

---

## US2 — Consultation de la liste des animaux

**En tant que** secrétaire
**Je veux** visualiser et rechercher la liste des animaux
**Afin de** accéder rapidement au dossier d’un animal

La secrétaire doit pouvoir accéder facilement à la liste de tous les animaux suivis par la clinique. Une barre de recherche lui permet de retrouver rapidement un dossier grâce au nom de l’animal, du propriétaire ou à une information simple. L’affichage doit rester clair et fluide, même avec beaucoup d’entrées.

**Résumé rapide :**

- Liste des animaux
- Recherche simple
- Informations essentielles visibles
- Navigation fluide

**Critères d’acceptation :**

- Given la liste des animaux, When la secrétaire saisit un nom, Then la liste est filtrée.
- Given aucun animal correspondant, When la recherche est lancée, Then un message "Aucun résultat" s’affiche.

---

## US3 — Ouverture d’un carnet de santé

**En tant que** vétérinaire
**Je veux** ouvrir la fiche médicale détaillée d’un animal
**Afin de** consulter son historique médical et préparer mes interventions

Le vétérinaire doit pouvoir consulter la fiche complète d’un animal, accessible depuis la liste. Cette fiche rassemble l’historique médical, les vaccins effectués, les visites passées et celles à venir. Les informations doivent être organisées de manière lisible pour faciliter la consultation lors d’une intervention ou d’une préparation de rendez-vous.

**Résumé rapide :**

- Accès à la fiche détaillée
- Historique médical
- Vaccins et visites
- Organisation claire

**Critères d’acceptation :**

- Given un animal dans la liste, When le vétérinaire clique sur son nom, Then la fiche détaillée s’affiche.
- Given la fiche ouverte, When le vétérinaire consulte l’historique, Then toutes les informations sont visibles et correctement organisées.

---

## US4 — Ajout d’un acte médical

**En tant que** vétérinaire
**Je veux** ajouter un acte médical dans le carnet
**Afin de** garder une trace complète et à jour des soins réalisés

Lorsqu’un vétérinaire réalise un soin, un vaccin ou toute autre intervention, il doit pouvoir ajouter facilement un nouvel acte dans le carnet de santé. Le formulaire doit être rapide à compléter tout en permettant de noter les informations essentielles, comme la date, le type d’acte et une éventuelle description.

**Résumé rapide :**

- Ajout d’acte médical
- Formulaire simple
- Mise à jour immédiate

**Critères d’acceptation :**

- Given un animal, When le vétérinaire ajoute un acte avec date et type, Then l’acte apparaît dans l’historique.
- Given des informations manquantes, When le vétérinaire soumet le formulaire, Then un message d’erreur apparaît.

---

## US5 — Mise à jour des informations d’un animal

**En tant que** secrétaire
**Je veux** modifier les informations générales d’un animal
**Afin de** garantir l’exactitude des données dans les dossiers

La secrétaire doit pouvoir améliorer ou corriger les informations générales d’un animal. Cela peut concerner un changement de propriétaire, une correction du nom ou une modification concernant l’identification. L’interface doit être intuitive afin que ces ajustements puissent se faire rapidement.

**Résumé rapide :**

- Modification des infos
- Corrections rapides
- Interface simple

**Critères d’acceptation :**

- Given un animal, When la secrétaire modifie un champ obligatoire et enregistre, Then les changements sont visibles.
- Given un champ vide obligatoire, When la secrétaire enregistre, Then un message d’erreur s’affiche.

---

## US6 — Accès client (évolution)

**En tant que** client
**Je veux** accéder au carnet de santé de mes animaux en lecture seule
**Afin de** consulter facilement leurs informations médicales

Dans une version future, un client pourra se connecter pour consulter uniquement les informations relatives à ses animaux. Cet accès sera strictement en lecture pour éviter toute altération accidentelle ou volontaire des données médicales.

**Résumé rapide :**

- Consultation en lecture seule
- Accès limité aux animaux du client
- Aucune modification possible

**Critères d’acceptation :**

- Given un client avec des animaux, When il se connecte, Then il peut voir les informations mais pas les modifier.
- Given un client sans animaux, When il se connecte, Then la liste est vide et un message informatif est affiché.
