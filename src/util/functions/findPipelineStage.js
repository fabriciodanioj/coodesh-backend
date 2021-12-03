module.exports = (pipeline, stageName) => {
  return pipeline.find(stage => Object.keys(stage)[0] === stageName);
}