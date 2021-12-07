const { spaceFlightAPI } = require('../apis');

async function getArticles(start, perPage) {
  try {
    const response = await spaceFlightAPI.get(
      `/articles${start ? `?_start=${start}` : ''}${
        perPage ? `?_limit=${perPage}` : ''
      }`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = getArticles;
