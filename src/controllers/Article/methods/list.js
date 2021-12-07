const exception = require('../../../middlewares/catchException');

const Article = require('../../../models/Article');
const paginationStage = require('../../../util/aggregate/paginationStages');
const sortStage = require('../../../util/aggregate/sortStage');
const handleEmptyAggregate = require('../../../util/functions/handleEmptyAggregate');

const list = async (req, res) => {
  try {
    const { sort, page, perPage, order, filter } = req.query;

    const pipeline = [];
    /*   
    if (filter) {
      pipeline.push({
        $match: { $or: [{ name: { $regex: filter, $options: 'i' } }] },
      });
    }  */

    const articleSortStage = sortStage({ sort, order });
    const articlePaginationStage = paginationStage({ page, perPage });

    pipeline.push(articleSortStage, ...articlePaginationStage);

    let article = await Article.aggregate(pipeline);

    article = handleEmptyAggregate(article[0]);

    return res.status(200).json(article).end();
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = list;
