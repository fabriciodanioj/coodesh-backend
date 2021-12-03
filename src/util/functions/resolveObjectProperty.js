module.exports = function resolve(path, obj) {
  return String(path).split('.').reduce(function(prev, curr) {
      return prev ? prev[curr] : null
  }, obj || self)
}