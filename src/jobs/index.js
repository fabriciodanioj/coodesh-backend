const storeNewArticles = require('./storeNewArticles');

function init() {
  storeNewArticles.start();
}

module.exports = init;
