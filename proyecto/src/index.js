const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const suma = (a, b) => a + b;

app.get('/', (req, res) => {
  res.send('¡Bienvenido al pipeline CI/CD!');
});

app.get('/suma', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Faltan parámetros' });
  res.json({ resultado: suma(Number(a), Number(b)) });
});

app.get('/saludo', (req, res) => {
  res.send('¡Hola desde /saludo!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = { app, suma };
