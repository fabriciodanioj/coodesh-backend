const exception = require('../../../middlewares/catchException');

const Article = require('../../../models/Article');
const paginationStage = require('../../../util/aggregate/paginationStages');
const sortStage = require('../../../util/aggregate/sortStage');
const handleEmptyAggregate = require('../../../util/functions/handleEmptyAggregate');

const list = async (req, res) => {
  try {
    const { sort, page, perPage, order, filter } = req.query;

    const query = {
      title: filter,
    };

    const pipeline = [{ $match: query }];

    const articleSortStage = sortStage({ sort, order });
    const articlePaginationStage = paginationStage({ page, perPage });

    pipeline.push(articleSortStage, ...articlePaginationStage);

    let article = await Article.aggregate(pipeline);

    article = handleEmptyAggregate(article[0]);

    return res.status(200).json(article);
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = list;
