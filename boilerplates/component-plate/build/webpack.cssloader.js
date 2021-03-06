/* eslint-disable */
exports.cssLoaders = function (options) {
  options = options || {}
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    return ['vue-style-loader', sourceLoader].join('!')
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css', 'stylelint']),
    postcss: generateLoaders(['css', 'stylelint']),
    less: generateLoaders(['css', 'less', 'stylelint']),
    sass: generateLoaders(['css', 'sass?indentedSyntax', 'stylelint']),
    scss: generateLoaders(['css', 'sass', 'stylelint']),
    stylus: generateLoaders(['css', 'stylus', 'stylelint']),
    styl: generateLoaders(['css', 'stylus', 'stylelint'])
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}
