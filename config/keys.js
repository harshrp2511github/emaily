if (process.env.NODE_ENV === 'production') {
  //product
  module.exports = require('./prod');
} else {
  //dev
  module.exports = require('./dev');
}
