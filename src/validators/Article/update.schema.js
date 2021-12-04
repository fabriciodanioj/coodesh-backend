const yup = require('../../lib/yup');

module.exports = yup.object().shape({
  spaceFlightId: yup.number(),
  featured: yup.boolean(),
  title: yup.string(),
  url: yup.string(),
  imageUrl: yup.string(),
  newsSite: yup.string(),
  summary: yup.string(),
  publishedAt: yup.string(),
  launches: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      provider: yup.string(),
    })
  ),
  events: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      provider: yup.string(),
    })
  ),
});
