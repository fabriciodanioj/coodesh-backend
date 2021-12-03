const defaultList = require('./list.schema');

const registerResource = require('./Resource/register.schema');
const registerArticle = require('./Article/register.schema');

module.exports = {
  list: defaultList,
  resource: {
    register: registerResource,
  },
  article: {
    register: registerArticle,
  },
};
