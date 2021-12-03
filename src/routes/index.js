const resource = require('../controllers/Resource');
const article = require('../controllers/Article');

const routes = (app) => {
  app.use('/resource', resource);
  app.use('/article', article);
  app.use('/', (req, res) =>
    res
      .status(200)
      .send({ msg: 'Fullstack Challenge 2021 🏅 - Space Flight News' })
      .end()
  );
};

module.exports = routes;
