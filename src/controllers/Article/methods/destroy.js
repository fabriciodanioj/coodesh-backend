const exception = require('../../../middlewares/catchException');

const Article = require('../../../models/Article');

const destroy = async (req, res) => {
  try {
    const { params } = req;

    const { id } = params;

    await Article.findByIdAndDelete(id);

    return res.status(200).end();
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = destroy;
