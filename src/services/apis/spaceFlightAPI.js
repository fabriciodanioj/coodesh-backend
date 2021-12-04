const axios = require('axios');

const spaceFlightAPI = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3/',
});

module.exports = spaceFlightAPI;
