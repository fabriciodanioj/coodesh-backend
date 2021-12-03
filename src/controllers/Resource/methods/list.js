const exception = require('../../../middlewares/catchException');

const Resource = require('../../../models/Resource');
const paginationStage = require('../../../util/aggregate/paginationStages');
const sortStage = require('../../../util/aggregate/sortStage');
const handleEmptyAggregate = require('../../../util/functions/handleEmptyAggregate');

/**
 * @api {get} /resource Listar resource
 * @apiVersion 1.0.0
 * @apiName ListResource
 * @apiGroup Recursos
 *
 * @apiHeader {String} authorization Token de autenticação
 *
 * @apiParam {Number} [page] Pagina
 * @apiParam {Number} [perPage] Itens por pagina, se não informado, retornará todos
 * @apiParam {Boolean} [sort] Configura ordenação do conteúdo
 * @apiParam {String} [filter] Filtrar recursos
 * @apiParam {Boolean} [active] Filtrar apenas por ativos / inativos
 *
 * @apiPermission admin
 */

const list = async (req, res) => {
  try {
    const { active, sort, page, perPage, order, filter } = req.query;

    const query = {};

    const pipeline = [{ $match: query }];

    const resourceSortStage = sortStage({ sort, order });
    const resourcePaginationStage = paginationStage({ page, perPage });

    pipeline.push(resourceSortStage, ...resourcePaginationStage);

    let resource = await Resource.aggregate(pipeline);

    resource = handleEmptyAggregate(resource[0]);

    return res.status(200).json(resource);
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = list;
