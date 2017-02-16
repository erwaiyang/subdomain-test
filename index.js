const express = require('express');
const vhost = require('vhost');

const app = express();
const PORT = 3001;

const helpRoute = require('./helpRoute');
app.use('/help', helpRoute);

const apiRoute = require('./apiRoute');
app.use(vhost('api.localhost', apiRoute));

app.get('/', (req, res) => {
  res.send('Home route!');
});

app.get('/dashboard', (req, res) => {
  res.send('This is a dashboard.');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});
