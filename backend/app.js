const express = require('express');
const routes = require('./routes');

const app = express();

// Middleware para analisar corretamente o corpo da requisição como JSON
app.use(express.json());

// Rotas
app.use('/api', routes);

const PORT = process.env.PORT || 3001;

// Tratamento de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
