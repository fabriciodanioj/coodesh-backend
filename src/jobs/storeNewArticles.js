const cron = require('node-cron');
const { getNewArticles } = require('../workers');

module.exports = cron.schedule(
  '0 0 9 * * *',
  async () => {
    await getNewArticles();
  },
  { intervaltimezone: 'America/Sao_Paulo', scheduled: false }
);
