const { comparePassword, createConnection } = require('./utils');

module.exports = (core, options = {}) => {
  options = options || {};

  const findUser = async (username) => {
    const { db, client } = await createConnection(url, dbName);
    const collection = db.collection('users')
  
    return collection.findOne({ username })
      .then(doc => {
        client.close();
        return doc;
      });
  }

  return {
    logout: () => Promise.resolve(true),
    login: () => async (req, res) => {
      const { username, password } = req.body;
      const user = await findUser(username);
      
      if (user) {
        return comparePassword(password, user.password)
          .then(result => result ? user : false);
      } else return false;
    }
  }
}