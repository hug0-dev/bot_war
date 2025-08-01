const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const getBotAction = require('./bot');

app.get('/action', (req, res) => {
  const action = getBotAction();
  res.json(action);
});

app.listen(port, () => {
  console.log(`Start ${port}`);
});