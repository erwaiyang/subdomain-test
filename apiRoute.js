const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Api home');
});

router.get('/login', (req, res) => {
  res.send('login api');
});

module.exports = router;
