const express = require('express');
const vhost = require('vhost');

const app = express();
const PORT = 3001;

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Api home');
});

router.get('/login', (req, res) => {
  res.send('login api');
});

app.use(vhost('api.localhost', router));

app.get('/', (req, res) => {
  res.send('Home route!');
});

app.get('/dashboard', (req, res) => {
  res.send('This is a dashboard.');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});
