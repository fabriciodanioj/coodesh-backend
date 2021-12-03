module.exports = ({ page, perPage }) => {
  perPage = parseInt(perPage) || 6;
  page = page >= 1 ? page : 1;

  return [
    {
      $facet: {
        data: [{ $skip: perPage * (page - 1) }, { $limit: perPage }],
        pagination: [
          {
            $group: {
              _id: null,
              total: { $sum: 1 },
            },
          },
        ],
      },
    },
    { $set: { pagination: { $arrayElemAt: ['$pagination', 0] } }},
    { $set: { 'pagination.page': page }},
    { $set: { 'pagination.perPage': perPage }},
    { $set: { 'pagination.totalPages': { $divide: ['$pagination.total', perPage] } }},
    { $set: { 'pagination.totalPages': { $ceil: '$pagination.totalPages' } }},
    { $unset: 'pagination._id' }
  ];
};
