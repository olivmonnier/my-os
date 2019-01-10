const migrate = require('migrate')

migrate.load({
  stateStore: '.migrate'
}, function (err, set) {
  if (err) {
    throw err
  }
  set.up(function (err) {
    if (err) {
      throw err
    }
    console.log('migrations successfully ran')
  })
});