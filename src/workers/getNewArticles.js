const { getArticles, getArticlesCount } = require('../services/methods');
const Article = require('../models/Article');

async function getNewArticles() {
  let previousArticlesCount = 0;

  const articlesCount = await getArticlesCount();

  if (previousArticlesCount === 0) {
    const articles = await getArticles(previousArticlesCount, articlesCount);

    for (let article of articles) {
      let { id: spaceFlightId, ...data } = article;

      const articleAlreadyExists = await Article.findOne({ spaceFlightId });

      if (!articleAlreadyExists) {
        const newArticle = new Article({ ...data, spaceFlightId });
        await newArticle.save();
      }
    }

    previousArticlesCount = articlesCount;

    return;
  }
}

module.exports = getNewArticles;
