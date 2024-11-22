import { Pool } from 'pg';

const pool = new Pool({
  user: 'admin', // Remplacez par votre utilisateur PostgreSQL
  host: 'localhost',        // Hôte de la base de données
  database: 'bdd',   // Nom de la base
  password: 'admin', // Mot de passe PostgreSQL
  port: 5433                // Port par défaut de PostgreSQL
});

export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};