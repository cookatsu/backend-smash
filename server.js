const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server läuft: http://localhost:${PORT}`);
});