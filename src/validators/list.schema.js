const yup = require('../lib/yup');

module.exports = yup.object().shape({
  page: yup.number().integer().min(1),
  perPage: yup.number().integer().min(1),
  filter: yup.string(),
  sort: yup.string().default('publishedAt'),
  order: yup.string().default('asc'),
});
