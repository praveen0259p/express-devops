const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// testing jenkins integration from github 1 webhooks  
// testing jenkins integration from github 2 webhooks 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
