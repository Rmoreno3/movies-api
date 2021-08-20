const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/anio:year', (req, res) => {
  let year = req.params.year;

  if (
    (year.length === 4 && year % 4 === 0) ||
    year % 100 === 0 ||
    year % 400 === 0
  ) {
    res.json({
      message: `El año que ingreso fue ${year}`,
      isBicies: `Es año es bisiesto es decir tiene 365 dias`,
    });
  } else {
    res.json({
      message: `El año enviado es ${year} y no es un año valido`,
    });
  }
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
