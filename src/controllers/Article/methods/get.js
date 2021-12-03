const exception = require('../../../middlewares/catchException');

const Article = require('../../../models/Article');

const get = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findById(id);

    if (!article) return res.status(404).end();

    return res.status(200).json(article).end();
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = get;
