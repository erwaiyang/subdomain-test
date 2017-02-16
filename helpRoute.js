const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Help home');
});

router.get('/category', (req, res) => {
  res.send('help - category');
});

module.exports = router;
