const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Node.js CI/CD pipeline is working!'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;
