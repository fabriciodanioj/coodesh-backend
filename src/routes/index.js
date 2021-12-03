const resource = require('../controllers/Resource');

const routes = (app) => {
  app.use('/resource', resource);
};

module.exports = routes;
