### Dictionnaire de données

---

### Table : `user`

| Nom de colonne | Type        | Contraintes                                           | Description                             |
| -------------- | ----------- | ----------------------------------------------------- | --------------------------------------- |
| Id             | VARCHAR(50) | PRIMARY KEY                                           | Identifiant unique de l’utilisateur     |
| email          | VARCHAR(50) | NOT NULL, UNIQUE                                      | Adresse email de l’utilisateur          |
| username       | VARCHAR(50) | NOT NULL                                              | Nom d’utilisateur                       |
| password       | VARCHAR(50) | NULLABLE                                              | Mot de passe                            |
| created_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP                             | Date de création                        |
| updated_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Date de dernière modification           |
| deleted_at     | DATETIME    | NULLABLE                                              | Date de suppression logique             |
| created_by     | VARCHAR(50) | NULLABLE                                              | Référence à l’utilisateur qui a créé    |
| updated_by     | VARCHAR(50) | NULLABLE                                              | Référence à l’utilisateur qui a modifié |

---

### Table : `role`

| Nom de colonne | Type        | Contraintes                                           | Description                 |
| -------------- | ----------- | ----------------------------------------------------- | --------------------------- |
| Id             | VARCHAR(50) | PRIMARY KEY                                           | Identifiant unique du rôle  |
| role_name      | VARCHAR(50) | UNIQUE                                                | Nom du rôle                 |
| created_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP                             | Date de création            |
| updated_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Date de modification        |
| deleted_at     | DATETIME    | NULLABLE                                              | Date de suppression logique |
| created_by     | VARCHAR(50) | NULLABLE                                              | Utilisateur ayant créé      |
| updated_by     | VARCHAR(50) | NULLABLE                                              | Utilisateur ayant modifié   |

---

### Table : `role_user`

| Nom de colonne | Type        | Contraintes                                           | Description                 |
| -------------- | ----------- | ----------------------------------------------------- | --------------------------- |
| Id_user        | VARCHAR(50) | PRIMARY KEY, FOREIGN KEY REFERENCES `user_(Id)`       | Référence à l’utilisateur   |
| Id_role        | VARCHAR(50) | FOREIGN KEY REFERENCES `role(Id)`                     | Référence au rôle           |
| created_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP                             | Date de création            |
| updated_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Date de modification        |
| deleted_at     | DATETIME    | NULLABLE                                              | Date de suppression logique |

---

### Table : `animal`

| Nom de colonne | Type        | Contraintes                                           | Description                       |
| -------------- | ----------- | ----------------------------------------------------- | --------------------------------- |
| Id             | VARCHAR(50) | PRIMARY KEY                                           | Identifiant unique                |
| identification | VARCHAR(50) | UNIQUE                                                | Identification unique de l’animal |
| name           | VARCHAR(50) | NOT NULL                                              | Nom de l’animal                   |
| birth_date     | DATE        | NULLABLE                                              | Date de naissance                 |
| created_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP                             | Date de création                  |
| updated_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Date de modification              |
| deleted_at     | DATETIME    | NULLABLE                                              | Date de suppression logique       |
| created_by     | VARCHAR(50) | NULLABLE                                              | Créateur                          |
| updated_by     | VARCHAR(50) | NULLABLE                                              | Modificateur                      |

---

### Table : `health_record`

| Nom de colonne | Type        | Contraintes                                           | Description                   |
| -------------- | ----------- | ----------------------------------------------------- | ----------------------------- |
| Id             | VARCHAR(50) | PRIMARY KEY                                           | Identifiant unique du dossier |
| notes          | TEXT        | NULLABLE                                              | Notes médicales               |
| created_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP                             | Date de création              |
| updated_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Date de modification          |
| deleted_at     | DATETIME    | NULLABLE                                              | Suppression logique           |
| created_by     | VARCHAR(50) | NULLABLE                                              | Créateur                      |
| updated_by     | VARCHAR(50) | NULLABLE                                              | Modificateur                  |

---

### Table : `medical_action`

| Nom de colonne   | Type        | Contraintes                                           | Description                             |
| ---------------- | ----------- | ----------------------------------------------------- | --------------------------------------- |
| Id               | COUNTER     | PRIMARY KEY                                           | Identifiant unique de l’action médicale |
| date\_           | DATE        | NULLABLE                                              | Date de l’action                        |
| description      | TEXT        | NULLABLE                                              | Description de l’action                 |
| type             | VARCHAR(50) | NULLABLE                                              | Type d’action                           |
| Id_user          | VARCHAR(50) | NOT NULL, FOREIGN KEY REFERENCES `user_(Id)`          | Utilisateur qui effectue l’action       |
| Id_health_record | VARCHAR(50) | NOT NULL, FOREIGN KEY REFERENCES `health_record(Id)`  | Dossier médical associé                 |
| created_at       | DATETIME    | DEFAULT CURRENT_TIMESTAMP                             | Date de création                        |
| updated_at       | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Date de modification                    |
| deleted_at       | DATETIME    | NULLABLE                                              | Suppression logique                     |
| created_by       | VARCHAR(50) | NULLABLE                                              | Créateur                                |
| updated_by       | VARCHAR(50) | NULLABLE                                              | Modificateur                            |

---

### Table : `animal_hr`

| Nom de colonne   | Type        | Contraintes                                             | Description          |
| ---------------- | ----------- | ------------------------------------------------------- | -------------------- |
| Id_health_record | VARCHAR(50) | PRIMARY KEY, FOREIGN KEY REFERENCES `health_record(Id)` | Dossier médical      |
| Id_animal        | VARCHAR(50) | UNIQUE, FOREIGN KEY REFERENCES `animal(Id)`             | Animal associé       |
| created_at       | DATETIME    | DEFAULT CURRENT_TIMESTAMP                               | Date de création     |
| updated_at       | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP   | Date de modification |
| deleted_at       | DATETIME    | NULLABLE                                                | Suppression logique  |

---

### Table : `user_animal_relation`

| Nom de colonne | Type        | Contraintes                                           | Description                       |
| -------------- | ----------- | ----------------------------------------------------- | --------------------------------- |
| Id             | VARCHAR(50) | PRIMARY KEY                                           | Identifiant unique de la relation |
| Id_user        | VARCHAR(50) | PRIMARY KEY, FOREIGN KEY REFERENCES `user_(Id)`       | Utilisateur                       |
| Id_animal      | VARCHAR(50) | NOT NULL, FOREIGN KEY REFERENCES `animal(Id)`         | Animal concerné                   |
| relation_type  | VARCHAR(50) | NULLABLE                                              | Type de relation                  |
| start_date     | DATE        | NULLABLE                                              | Début de la relation              |
| end_date       | DATE        | NULLABLE                                              | Fin de la relation                |
| created_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP                             | Création                          |
| updated_at     | DATETIME    | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Modification                      |
| deleted_at     | DATETIME    | NULLABLE                                              | Suppression logique               |
