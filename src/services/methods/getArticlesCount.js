const { spaceFlightAPI } = require('../apis');

async function getArticlesCount() {
  try {
    const response = await spaceFlightAPI.get('/articles/count');
    return response.data;
  } catch (error) {
    return error;
  }
}

module.exports = getArticlesCount;
