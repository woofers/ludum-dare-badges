if (process.env.NODE_ENV !== 'production') {
    module.exports = require('./ludum-dare-badges.dev.cjs')
  }
  else {
    module.exports = require('./ludum-dare-badges.cjs')
  }