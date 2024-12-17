# Beers Dictionary API

## Description

API de référencement des bières artisanales et de leurs brasseries. Cette API permet de gérer les bières, les brasseries et les utilisateurs, ainsi que leurs interactions.

## Prérequis

- Node.js
- Docker
- PostgreSQL

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/2024-devops-alt-dist/Zytho-api-rest-nathan.git
    cd Zytho-api-rest-nathan
    ```

2. Installez les dépendances :
    ```sh
    npm install
    ```

3. Configurez la base de données PostgreSQL avec Docker :
    ```sh
    docker-compose up -d
    ```

4. Initialisez la base de données :
    ```sh
    docker exec -i api-rest-db-1 psql -U admin -d bdd < db-scripts/create.sql
    docker exec -i api-rest-db-1 psql -U admin -d bdd < db-scripts/insert.sql
    ```

## Démarrage

Pour démarrer le serveur en mode développement :
```sh
npm run dev
 ```

 ----------------------------------------------------------

### Le serveur sera accessible à l'adresse http://localhost:3004.

## Documentation de l'API


### Routes de l'API

### Bières

GET /api/v1/beers : Récupérer la liste des bières

POST /api/v1/beers : Ajouter une nouvelle bière

PUT /api/v1/beers/:id : Mettre à jour une bière existante

DELETE /api/v1/beers/:id : Supprimer une bière

GET /api/v1/beers/:id : Récupérer les détails d'une bière par ID


### Brasseries

GET /api/v1/breweries : Récupérer la liste des brasseries

POST /api/v1/breweries : Ajouter une nouvelle brasserie

PUT /api/v1/breweries/:id : Mettre à jour une brasserie existante

DELETE /api/v1/breweries/:id : Supprimer une brasserie

GET /api/v1/breweries/:id : Récupérer les détails d'une brasserie par ID


### Utilisateurs

GET /api/v1/users : Récupérer la liste des utilisateurs

POST /api/v1/users : Ajouter un nouvel utilisateur

PUT /api/v1/users/:id : Mettre à jour un utilisateur existant

DELETE /api/v1/users/:id : Supprimer un utilisateur

GET /api/v1/users/:id : Récupérer les détails d'un utilisateur par ID

## Visualisation Swagger 

http://localhost:3004/api-docs/

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.



## Licence

Ce projet est sous licence MIT.
