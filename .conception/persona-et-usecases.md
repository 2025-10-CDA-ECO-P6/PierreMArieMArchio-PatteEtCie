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

## Use Cases

### Use Case 1 : Accès et consultation du carnet (Secrétaire)

<aside>
Claire utilise l’application plusieurs fois par jour pour retrouver les dossiers des animaux. Elle souhaite un accès instantané à toutes les informations pour gagner du temps et éviter les erreurs.
</aside>

- **Acteur principal :** Claire, secrétaire
- **Objectif :** Accéder rapidement au dossier complet d’un animal
- **Pré-conditions :** L’utilisateur est connecté et a le rôle secrétaire
- **Déclencheur :** Recherche un animal par nom ou propriétaire
- **Scénario principal :**

  1. Claire saisit le nom ou le propriétaire de l’animal
  2. La liste des résultats s’affiche
  3. Claire clique sur l’animal voulu
  4. Le carnet de santé complet apparaît avec historique et vaccins

---

### Use Case 2 : Ajout d’un acte médical (Vétérinaire)

<aside>
Dr. Martin ajoute régulièrement des actes médicaux après chaque consultation. Il a besoin que l’opération soit rapide et fiable pour ne pas perdre de temps avec l’administration.
</aside>

- **Acteur principal :** Dr. Martin, vétérinaire
- **Objectif :** Ajouter un acte médical au carnet de santé
- **Pré-conditions :** L’utilisateur est connecté et a le rôle vétérinaire
- **Déclencheur :** Intervention ou soin réalisé
- **Scénario principal :**

  1. Dr. Martin sélectionne l’animal dans la liste
  2. Il ouvre le carnet de santé
  3. Il clique sur « Ajouter un acte »
  4. Remplit le formulaire avec type, date et description
  5. Valide l’ajout et le carnet est mis à jour

---

### Use Case 3 : Consultation du carnet (Client)

Sophie souhaite vérifier rapidement l’état de santé de ses animaux depuis son smartphone, sans devoir contacter la clinique à chaque fois.

- **Acteur principal :** Sophie, cliente
- **Objectif :** Consulter les informations de ses animaux
- **Pré-conditions :** L’utilisateur est connecté en tant que client
- **Déclencheur :** Souhait de vérifier vaccins ou rendez-vous
- **Scénario principal :**

  1. Sophie se connecte à l’application
  2. Sélectionne son animal
  3. Le carnet de santé en lecture seule s’affiche
  4. Elle peut consulter historique, vaccins et prochaines visites
