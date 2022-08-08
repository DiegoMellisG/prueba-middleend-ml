require('dotenv').config({ silent: true });
const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');

const port = process.env.PORT;
app.use(cors());

require('./src/routes')(app); 
app.get('/',(req, res) => res.status(200).send({
    message: 'Middleend Mercado Libre'
  }));

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});