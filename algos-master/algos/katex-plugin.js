'use strict'

const katex = require('katex')

const katexReplace = (match, group) => katex.renderToString(group)

const convertToKatex = files => {
  for (let path in files) {
    if (path.search('\.md$') !== -1) {
      const file = files[path]
      const replaced =
        file.contents.toString('utf8')
          .replace(/\n\$\$([^\$]+)\$\$\n/g, '<div class="katex-block">$$$ $1 $$$</div>')
          .replace(/\$\$([^\$]+)\$\$/g, katexReplace)
      file.contents = new Buffer(replaced, 'utf8')
    }
  }
}

module.exports = { convertToKatex }
