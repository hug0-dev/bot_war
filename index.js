const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/action', (req, res) => {
    res.json({ move: "RIGHT", action: "NONE" });
});

app.listen(port, () => {
  console.log(`Start ${port}`);
});
