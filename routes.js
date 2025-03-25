const express = require('express');
const client = require('./db');
const router = express.Router();
router.get('/', (req, res) => {
  res.send({ message: "Server läuft" });
});
router.get('/ranking', async (req, res) => {
  try {
    const { user_id } = req.query;
    const query = user_id
      ? ['SELECT * FROM ranking WHERE user_id = $1', [user_id]]
      : ['SELECT * FROM ranking', []];

    const result = await client.query(...query);
    res.send(result.rows);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post('/ranking', async (req, res) => {
  try {
    const { user_id, character_name, tier } = req.body;

    const exists = await client.query(
      'SELECT 1 FROM ranking WHERE user_id = $1 AND character_name = $2',
      [user_id, character_name]
    );

    if (exists.rowCount) {
      return res.status(400).send({ error: 'Bereits bewertet' });
    }

    const result = await client.query(
      'INSERT INTO ranking (user_id, character_name, tier) VALUES ($1, $2, $3) RETURNING *',
      [user_id, character_name, tier]
    );

    res.send(result.rows[0]);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete('/ranking/:user_id/:character_name', async (req, res) => {
  try {
    const { user_id, character_name } = req.params;

    const result = await client.query(
      'DELETE FROM ranking WHERE user_id = $1 AND character_name = $2 RETURNING *',
      [user_id, character_name]
    );

    if (!result.rowCount) {
      return res.status(404).send({ error: 'Nicht gefunden' });
    }

    res.send({ deleted: result.rows[0] });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
