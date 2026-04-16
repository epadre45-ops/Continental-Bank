import mysql from 'mysql2/promise';

console.log('🔌 [MySQL] Initializing MySQL connection pool');

// Utilisation des variables par défaut typiques pour un développement local WAMP si non spécifiées dans .env
const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'continental_bank',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  namedPlaceholders: true, // Très utile pour passer des objets
  decimalNumbers: true,    // Assure que les DECIMAL sont renvoyés en Nombre et non en String
  // Activation du SSL requise par Aiven et d'autres hosters cloud
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

pool.on('connection', function (connection) {
  console.log('✅ [MySQL] New connection established');
});

export default pool;

/**
 * Exécute une requête SQL et gère les erreurs
 * @param {string} query Requête SQL
 * @param {any[]} params Paramètres de requête
 */
export async function query(sql, params) {
  try {
    const [results, ] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error(`❌ [MySQL] Error executing query: ${sql}`, error);
    throw error;
  }
}
