'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send("<html> <head>server Response</head><body><h1> Azure Devops >>> Harness! 🤪 <p>Deployed by Azure DevOps</p></h1></body></html>"));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
