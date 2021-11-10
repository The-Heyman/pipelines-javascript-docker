'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send("<html> <head>server Response</head><body><h1 style="text-align:center;"> Azure Devops >>> Harness!</h1><p style="text-align:center;">Deployed by Azure DevOps</p></body></html>");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
