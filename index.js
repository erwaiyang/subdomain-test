const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Home route!');
});

app.get('/dashboard', (req, res) => {
  res.send('This is a dashboard.');
})

app.listen(3001, function () {
  console.log('Listening on port 3001!')
});
