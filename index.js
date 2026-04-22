require('dotenv').config(); // Carga las variables del archivo .env
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
// Usa la variable de entorno o el puerto 3000 por defecto
const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

// Configuración usando variables de entorno
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Prueba de conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Error:', err.stack);
  } else {
    console.log('✅ Conexión segura establecida');
  }
});

app.get('/', (req, res) => {
  res.send('Servidor Seguro de Mantra-Backend');
});

app.listen(port, () => {
  console.log(`🚀 Servidor en puerto ${port}`);
});