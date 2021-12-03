module.exports = (aggregateResults) => {
  if (aggregateResults) return aggregateResults;
  return {
    data: [],
    pagination: {
      total: 0,
      page: 1,
      perPage: 10,
      totalPages: 0,
    },
  };
};
