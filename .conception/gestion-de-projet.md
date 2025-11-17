# Gestion de Projet — Application « Carnet de Santé Digitalisé »

Ce document définit la méthodologie de gestion de projet et le workflow Git pour le développement de l'application, en tenant compte du fait que le projet pourrait être repris par un autre développeur. L’objectif est de garantir clarté, traçabilité et organisation tout au long du développement.

## Organisation des Sprints et Tickets

Le projet sera organisé en sprints. Chaque sprint aura pour objectif de livrer des user stories complètes et testables. L’ensemble des fonctionnalités, corrections et améliorations sera suivi via GitHub Project. Chaque tâche sera représentée par un ticket clair, associé à une user story ou une technical story, et enrichi d’une description complète.

- Labels : type (feature, bug, task), priorité, statut
- Liens vers les branches correspondantes pour assurer la traçabilité
- Backlog centralisé pour suivre toutes les stories et tâches
- Priorisation basée sur la valeur pour l’utilisateur et la faisabilité technique

## Conventions de Commit

Pour assurer un historique clair et compréhensible, le projet utilisera les **Conventional Commits**. Chaque commit précisera s’il s’agit d’une nouvelle fonctionnalité, d’une correction, d’une tâche annexe, de documentation ou de test.

- `feat:` pour une nouvelle fonctionnalité
- `fix:` pour une correction de bug
- `chore:` pour les tâches annexes (mise à jour dépendances, refactoring)
- `docs:` pour les modifications de documentation
- `test:` pour l’ajout ou la modification de tests

Exemple :

```
feat(auth): ajout de la page de connexion
fix(search): correction du filtre par nom d’animal
docs: mise à jour du README
```

## GitFlow et Gestion des Branches

Le projet suivra un workflow GitFlow adapté. La branche `main` contiendra toujours la version stable et déployable, tandis que la branche `develop` centralisera l’intégration des nouvelles fonctionnalités.

- Branches `feature/<nom-feature>` pour chaque nouvelle fonctionnalité
- Branches `hotfix/<nom-fix>` pour corrections urgentes
- Pull Request obligatoire pour merger dans `develop` avec revue et validation
- Merge périodique de `develop` vers `main` après tests et validation

Nommage des branches :

- Feature : `feature/<nom-ticket>` (ex : `feature/login-page`)
- Hotfix : `hotfix/<nom-ticket>` (ex : `hotfix/fix-search`)
- Dev et main : noms fixes `develop`, `main`

## Utilisation de GitHub Project

Le suivi des tâches se fera via GitHub Project.

- Colonnes : Backlog, To Do, In Progress, Review, Done
- Déplacement des tickets selon l’avancement
- Milestones pour gérer les sprints
- Liaison entre tickets et branches pour traçabilité complète
