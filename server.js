require('dotenv').config('.env');
const { NODE_HOST, NODE_ENV, NODE_PORT = 4000 } = process.env;

const app = require('./src/app');

const jobs = require('./src/jobs');

const getNewArticles = require('./src/workers/getNewArticles');

app.listen(NODE_PORT, () => {
  console.warn(`[API] Server is running at ${NODE_HOST}:${NODE_PORT}`);

  if (NODE_ENV !== 'test') {
    setTimeout(() => {
      getNewArticles();
    }, 10000);

    jobs();
  }
});
