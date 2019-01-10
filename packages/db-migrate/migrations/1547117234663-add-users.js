'use strict'
require('dotenv').config();
const { service } = require('@myosjs/osjs-mongo-auth');

module.exports.up = function (next) {
  const { addUser } = service;

  addUser(
    process.env.MONGODB_URI, 
    process.env.MONGODB_DB_NAME
  )('admin', 'admin')
    .then(next);
}

module.exports.down = function (next) {
  next()
}
