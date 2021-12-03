module.exports = ({ from, localField }) => {

  const stages = [
    {
      $lookup: {
        from,
        localField,
        foreignField: '_id',
        as: localField,
      },
    },
    { $set: { [localField]: { $arrayElemAt: [`$${localField}`, 0] } }}
  ]

  return stages;
}