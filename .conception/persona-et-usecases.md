# Personas et Use Cases — Application « Carnet de Santé Digitalisé »

## Personas

### Persona 1 — Claire, secrétaire vétérinaire

Claire a 28 ans, secrétaire dans une clinique vétérinaire. Elle doit gérer les dossiers animaux, organiser les rendez-vous et assurer le suivi des informations médicales. Elle jongle avec des carnets papier et de nombreux documents éparpillés, ce qui ralentit son travail et provoque parfois des erreurs.

- Objectifs : Accéder rapidement aux dossiers animaux, mettre à jour les informations, organiser les rendez-vous.
- Frustrations : Carnets papier éparpillés, perte de temps à chercher les dossiers.
- Outils actuels : Logiciel de gestion simple, tableurs.
- Attentes : Interface claire, recherche rapide, mise à jour facile.
- Niveau technique : Moyen.
- Opportunités : Fluidifier le suivi des animaux, réduire les erreurs.
- Contrainte : Doit pouvoir utiliser l’application rapidement sans formation longue.

---

### Persona 2 — Dr. Martin, vétérinaire

Dr. Martin a 42 ans et est vétérinaire senior. Il consulte et soigne plusieurs animaux par jour, doit préparer les interventions et suivre l’historique médical. Il se heurte souvent à des informations manquantes ou à des doublons de vaccins.

- Objectifs : Consulter rapidement les carnets, ajouter des actes médicaux, préparer les interventions.
- Frustrations : Informations manquantes, doublons, lenteur d’accès aux dossiers.
- Outils actuels : Carnets papier, logiciels vétérinaires simples.
- Attentes : Interface rapide et fiable, visibilité complète sur l’historique.
- Niveau technique : Bon.
- Opportunités : Réduction des doublons, préparation efficace des soins.
- Contrainte : Interface doit être simple pour ne pas perdre de temps.

---

### Persona 3 — Sophie, cliente

Sophie a 34 ans et possède plusieurs animaux domestiques. Elle souhaite suivre la santé de ses animaux, mais dépend actuellement de la clinique pour obtenir des informations complètes.

- Objectifs : Suivre la santé de ses animaux, consulter les rendez-vous et vaccins.
- Frustrations : Ne peut pas voir l’historique complet, dépend de la clinique.
- Outils actuels : Smartphone, mails, appels.
- Attentes : Accès simple aux informations, lecture seule.
- Niveau technique : Moyen.
- Opportunités : Suivi indépendant et régulier.
- Contrainte : Doit être intuitive et rapide à consulter.

---

# Use Cases

## Use Case 1 : Connexion à l’application (Tous utilisateurs)

Tous les utilisateurs doivent pouvoir accéder facilement et en toute sécurité à l’application. Que ce soit pour une secrétaire, un vétérinaire ou un client, la connexion doit être simple, rapide et fiable, afin de garantir l’accès aux fonctionnalités et aux données appropriées pour chaque rôle.

- **Acteur principal :** Utilisateur (secrétaire / vétérinaire / client)
- **Objectif :** Se connecter à l’application
- **Pré-conditions :** L’utilisateur possède un compte actif
- **Déclencheur :** Arrivée sur la page de connexion
- **Scénario principal :**

  1. L’utilisateur saisit son identifiant et mot de passe
  2. Le système vérifie les informations
  3. L’utilisateur est redirigé vers l’accueil adapté à son rôle

---

## Use Case 2 : Création d’un client (Secrétaire)

Lorsqu’un nouveau propriétaire arrive à la clinique, la secrétaire doit pouvoir enregistrer rapidement ses informations pour que le suivi des animaux soit correct et complet. La création du client permet ensuite de lier les animaux et gérer les carnets de santé associés.

- **Acteur principal :** Claire, secrétaire
- **Objectif :** Ajouter un nouveau client dans la base
- **Pré-conditions :** Claire est connectée avec un rôle secrétaire
- **Déclencheur :** Demande d’enregistrement d’un nouveau propriétaire
- **Scénario principal :**

  1. Claire ouvre le module “Clients”
  2. Clique sur “Créer un client”
  3. Remplit les informations (nom, adresse, contact…)
  4. Valide
  5. Le client est ajouté avec un identifiant unique

---

## Use Case 3 : Rechercher un animal (Secrétaire / Vétérinaire)

Pour retrouver rapidement un animal dans la base, l’utilisateur doit pouvoir effectuer une recherche simple et efficace. Cela permet d’accéder à son carnet de santé ou de modifier ses informations si nécessaire.

- **Acteur principal :** Secrétaire ou vétérinaire
- **Objectif :** Trouver rapidement l’animal recherché
- **Pré-conditions :** L’utilisateur est connecté
- **Déclencheur :** L’utilisateur saisit un nom ou propriétaire
- **Scénario principal :**

  1. L’utilisateur saisit un nom dans la barre de recherche
  2. La liste filtrée apparaît
  3. L’utilisateur sélectionne l’animal souhaité
  4. Il peut soit afficher le carnet, soit modifier la fiche si son rôle le permet

---

## Use Case 4 : Accès au carnet de santé d’un animal (Secrétaire / Vétérinaire)

Lorsqu’un animal est sélectionné, l’utilisateur a besoin de visualiser toutes les informations médicales et historiques pour préparer les interventions ou répondre aux questions des clients.

- **Acteur principal :** Secrétaire
- **Objectif :** Consulter le carnet de santé
- **Pré-conditions :** L’animal a été trouvé via la recherche
- **Déclencheur :** Sélection d’un animal
- **Scénario principal :**

  1. L’utilisateur clique sur l’animal
  2. Le carnet complet s’affiche
  3. Il consulte historique, vaccins et actes

---

## Use Case 5 : Modifier la fiche d’un animal (Secrétaire)

La secrétaire doit pouvoir corriger ou mettre à jour les informations de l’animal pour garantir que le suivi soit exact et à jour.

- **Acteur principal :** Secrétaire
- **Objectif :** Modifier les informations de l’animal
- **Pré-conditions :** L’utilisateur dispose des droits
- **Déclencheur :** Ouverture de la fiche d’un animal
- **Scénario principal :**

  1. Claire clique sur “Modifier”
  2. Modifie les champs nécessaires
  3. Valide
  4. Le système sauvegarde les modifications

---

## Use Case 6 : Recherche d’un client (Secrétaire)

Pour consulter ou gérer les animaux d’un propriétaire, la secrétaire doit pouvoir rechercher rapidement le client et accéder à ses informations et à celles de ses animaux.

- **Acteur principal :** Secrétaire
- **Objectif :** Rechercher un client
- **Pré-conditions :** Le client existe
- **Déclencheur :** Claire saisit un nom dans la barre de recherche client
- **Scénario principal :**

  1. Claire saisit un nom
  2. La liste des clients correspondants s’affiche
  3. Elle sélectionne un client
  4. Les animaux liés apparaissent

---

## Use Case 7 : Création d’un animal (Secrétaire)

Lorsqu’un nouvel animal arrive à la clinique, la secrétaire doit pouvoir l’ajouter facilement et automatiquement créer son carnet de santé, tout en le liant à son propriétaire.

- **Acteur principal :** Secrétaire
- **Objectif :** Ajouter un animal lié à un propriétaire
- **Pré-conditions :** Le client est déjà créé
- **Déclencheur :** Ajout d’un nouvel animal pour un client
- **Scénario principal :**

  1. Claire ouvre la fiche du client
  2. Clique sur “Ajouter un animal”
  3. Remplit les informations de l’animal
  4. Valide
  5. Le système crée automatiquement le carnet de santé associé

---

## Use Case 8 : Suppression d’un animal (Secrétaire / Vétérinaire)

Il peut arriver qu’un animal doive être supprimé de la base. Le système doit alors effacer toutes les données associées de manière sécurisée et fiable.

- **Acteur principal :** Secrétaire et vétérinaire
- **Objectif :** Supprimer un animal
- **Pré-conditions :** L’animal existe
- **Déclencheur :** L’utilisateur clique sur “Supprimer”
- **Scénario principal :**

  1. L’utilisateur ouvre la fiche de l’animal
  2. Clique sur “Supprimer”
  3. Confirme l’action
  4. Le système supprime l’animal et son carnet de santé

---

## Use Case 9 : Suppression d’un client (Secrétaire)

Pour garantir la conformité et la cohérence des données, la suppression d’un client entraîne automatiquement la suppression de tous les animaux associés et de leurs carnets de santé.

- **Acteur principal :** Secrétaire
- **Objectif :** Supprimer un client et ses animaux
- **Pré-conditions :** Le client existe
- **Déclencheur :** Suppression demandée
- **Scénario principal :**

  1. Claire ouvre la fiche du client
  2. Clique sur “Supprimer le client”
  3. Le système demande confirmation
  4. Tous les animaux du client et leurs carnets sont supprimés

---

## Use Case 10 : Ajout d’un acte médical (Vétérinaire)

Pour assurer un suivi précis de la santé des animaux, le vétérinaire doit pouvoir enregistrer chaque acte médical directement dans le carnet de santé.

- **Acteur principal :** Vétérinaire
- **Objectif :** Ajouter un acte médical
- **Pré-conditions :** L’animal existe et son carnet est accessible
- **Déclencheur :** Fin d’une consultation ou intervention
- **Scénario principal :**

  1. Dr. Martin ouvre le carnet
  2. Clique sur “Ajouter un acte”
  3. Remplit la date, le type d’acte et une description
  4. Valide
  5. Le système met automatiquement à jour le carnet

---

## Use Case 11 : Consultation du carnet (Client)

Les clients doivent pouvoir consulter rapidement et en toute sécurité l’état de santé de leurs animaux, directement depuis l’application, afin de suivre les rendez-vous et vaccins sans devoir contacter la clinique.

- **Acteur principal :** Cliente
- **Objectif :** Consulter les informations médicales en lecture seule
- **Pré-conditions :** Sophie est connectée en tant que cliente
- **Déclencheur :** Sélection d’un animal
- **Scénario principal :**

  1. Elle se connecte
  2. Accède à la liste de ses animaux
  3. Sélectionne un animal
  4. Le carnet s’affiche en lecture seule
  5. Elle consulte historique, vaccins et visites
