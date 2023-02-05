if (process.env.NODE_ENV !== 'production') {
    module.exports = require('./ludum-dare-badges.dev.js')
  }
  else {
    module.exports = require('./ludum-dare-badges.js')
  }