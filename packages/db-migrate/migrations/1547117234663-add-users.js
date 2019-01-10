'use strict'
require('dotenv').config();
const { service } = require('@myosjs/osjs-mongo-auth');

module.exports.up = function (next) {
  const { addUser } = service;

  addUser(
    process.env.MONGO_URI, 
    process.env.MONGO_DB_NAME
  )('admin', 'admin')
    .then(next);
}

module.exports.down = function (next) {
  next()
}
