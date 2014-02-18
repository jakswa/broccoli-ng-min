var Filter = require('broccoli-filter')

module.exports = NgMinFilter
NgMinFilter.prototype = Object.create(Filter.prototype)
NgMinFilter.prototype.constructor = NgMinFilter
function NgMinFilter (inputTree, options) {
  if (!(this instanceof NgMinFilter)) return new NgMinFilter(inputTree, options)
  this.inputTree = inputTree
  this.options = options || {}
}

NgMinFilter.prototype.extensions = ['js']
NgMinFilter.prototype.targetExtension = 'js'

NgMinFilter.prototype.processString = function (string) {
  return require('ngmin').annotate(string)
}
