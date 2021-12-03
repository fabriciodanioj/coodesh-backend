const defaultList = require('./list.schema');

const registerResource = require('./Resource/register.schema');

module.exports = {
  list: defaultList,
  resource: {
    register: registerResource
  },
 
};
