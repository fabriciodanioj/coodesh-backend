const exception = require('../../../middlewares/catchException');

const Article = require('../../../models/Article');

const register = async (req, res) => {
  try {
    const { body } = req;
    const { ...data } = body;

    const article = await Article.create(data);

    return res.status(201).json(article).end();
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = register;
