require('dotenv').config({ silent: true });
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/index')
const port = process.env.PORT;
app.use(cors());

app.get('/',(req, res) => res.status(200).send({
    message: 'Middleend Mercado Libre'
  }));

app.use('/', routes)
// Ruta por defecto para páginas no encontradas
app.use((req, res) => {
  return res.status(404).send({
      status: 'ERROR',
      message: 'Página no encontrada'
  })
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;