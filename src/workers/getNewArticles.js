const { getArticles, getArticlesCount } = require('../services/methods');
const Article = require('../models/Article');

async function getNewArticles() {
  const articlesCount = await getArticlesCount();

  let test = [];

  const perPage = 500;

  const pages = (articlesCount % perPage) + 1;

  for (let page = 0; page <= pages; page++) {
   
      const articles = await getArticles({ start: page * perPage, perPage });
      articles.forEach((article) => test.push(article));

  }

  console.log(test.length, 'lenght');
}

module.exports = getNewArticles;
