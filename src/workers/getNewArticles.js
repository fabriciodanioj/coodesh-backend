const { getArticles, getArticlesCount } = require('../services/methods');
const Article = require('../models/Article');

async function getNewArticles() {
  const startTime = Date.now();
  try {
    const docsToInsert = [];

    const articlesCount = await getArticlesCount();

    const articles = await getArticles(false, articlesCount);

    const DBArticles = await Article.find();

    for (let article of articles) {
      let articleAlreadyExists = false;

      if (article.id) {
        articleAlreadyExists = DBArticles.find(
          (item) => item.spaceFlightId === article.id
        );
      }

      if (!articleAlreadyExists) {
        docsToInsert.push({
          ...article,
          spaceFlightId: article.id,
        });
      }
    }

    if (docsToInsert.length > 0) {
      await Article.insertMany(docsToInsert)
        .then((docs) => {})
        .catch((err) => {
          console.log(err);
        });
    }

    console.log('ok');
  } catch (error) {
    console.log(error);
  } finally {
    const duration = (Number(Date.now()) - Number(startTime)) / 1000;
    console.log(duration + 'segundos');
  }
}

module.exports = getNewArticles;
