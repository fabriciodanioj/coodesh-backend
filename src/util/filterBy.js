module.exports = ({ fields, filter }) => {
  const $or = [];

  fields.forEach((field) => {
    $or.push({ [field]: { $regex: filter, $options: 'i' } });
  });

  return $or;
};
