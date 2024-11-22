"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'admin', // Remplacez par votre utilisateur PostgreSQL
    host: 'localhost', // Hôte de la base de données
    database: 'db', // Nom de la base
    password: 'admin', // Mot de passe PostgreSQL
    port: 5432 // Port par défaut de PostgreSQL
});
const query = (text, params) => {
    return pool.query(text, params);
};
exports.query = query;
