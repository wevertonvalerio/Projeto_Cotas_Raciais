const { Pool } = require('pg');

/**
 * Conexão local - via pool de conexões
 */
const pool = new Pool({
    user: 'user-dw2-128',
    host: 'localhost',
    database: 'bd-dw2-128',
    password: 'user-dw2-128',
    port: 5432
})

module.exports = pool;