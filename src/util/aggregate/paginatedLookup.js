module.exports = (lookupStages) => {

  const stages = [
    { $unwind: '$data' },
    ...lookupStages,
    {
      $group: {
        _id: null,
        data: { $push: '$data' },
        pagination: { $first: '$pagination' },
      },
    },
    { $unset: '_id' },
  ]

  return stages;
}