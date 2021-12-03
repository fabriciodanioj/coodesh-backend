const yup = require('../../lib/yup');

module.exports = yup.object().shape({
  spaceFlightId: yup.number(),
  featured: yup.boolean(),
  title: yup.string().required(),
  url: yup.string().required(),
  imageUrl: yup.string().required(),
  newsSite: yup.string().required(),
  summary: yup.string(),
  publishedAt: yup.string().required(),
  launches: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string(),
    })
  ),
  events: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      provider: yup.string(),
    })
  ),
});
