module.exports = ({ sort, order }) => {
  return {
    $sort: {
      ...(sort ? { [sort]: order === 'asc' ? 1 : -1 } : { name: 1 }),
    },
  };
};
