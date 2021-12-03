const exception = require('../../../middlewares/catchException');

const Article = require('../../../models/Article');

const update = async (req, res) => {
  try {
    const { body, params } = req;

    const { id } = params;
    const { ...data } = body;

    const article = await Article.findByIdAndUpdate(id, data, { new: true });

    return res.status(200).json(article);
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = update;
