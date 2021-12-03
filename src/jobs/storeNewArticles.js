const cron = require('node-cron');

module.exports = cron.schedule(
  '*/2 * * * * *',
  () => {
    console.log('running every minute 1, 2, 4 and 5');
  },
  { intervaltimezone: 'America/Sao_Paulo', scheduled: false }
);
