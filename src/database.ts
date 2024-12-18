import { Pool } from 'pg';

const pool = new Pool({
  user: 'admin', // Remplacez par votre utilisateur PostgreSQL
  host: 'db',        // Hôte de la base de données
  database: 'bdd',   // Nom de la base
  password: 'admin', // Mot de passe PostgreSQL
  port: 5432                // Port par défaut de PostgreSQL
});

export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};