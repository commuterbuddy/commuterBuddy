const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'commuter_buddy',
  password: 'root'
});

pool
  .connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.log(err))

module.exports = pool;