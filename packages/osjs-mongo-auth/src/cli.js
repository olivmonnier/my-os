const { createConnection, createPassword } = require('./utils');

module.exports = (cfg = {}) => cli => {
  const { url, dbName } = cfg;

  const listUsers = async () => {
    const { db, client } = await createConnection(url, dbName);
    const collection = db.collection('users')

    return new Promise((resolve, reject) => {
      collection.find({}).toArray(function(err, docs) {
        if (err) return reject(err);
        client.close();
        resolve()
      })
    })
  }

  const addUser = async ({ options, args }) => {
    if (!args.username) {
      return Promise.reject('You need to specify --username');
    }

    const user = await findUser(args.username)

    if (user) return Promise.reject('User already exists');

    const collection = db.collection('users');

    return createPassword()
      .then(password => {
        const newDoc = {
          groups: args.groups || 'admin',
          username: args.username,
          name: args.username,
          password
        }
        return collection.insertOne(newDoc)
      })
      .then(() => client.close());
  }

  const pwdUser = async ({ options, args }) => {
    if (!args.username) {
      return Promise.reject('You need to specify --username');
    }

    const user = await findUser(args.username)

    if (!user) return Promise.reject('User not found');

    const collection = db.collection('users');

    return createPassword()
      .then(password => 
        collection.updateOne({ username: args.username }, { $set: { password } })
      )
      .then(() => client.close());
  }

  const removeUser = async ({ options, args }) => {
    if (!args.username) {
      return Promise.reject('You need to specify --username');
    }

    const user = await findUser(args.username);

    if (user) {
      const collection = db.collection('users');

      return collection.deleteOne({ username: args.username })
        .then(() => client.close());
    }
  }

  return {
    'user:list': listUsers,
    'user:add': addUser,
    'user:pwd': pwdUser,
    'user:remove': removeUser
  };
}