<p align="center">
  <img alt="OS.js Logo" src="https://raw.githubusercontent.com/os-js/gfx/master/logo-big.png" />
</p>

[OS.js](https://www.os-js.org/) is an [open-source](https://raw.githubusercontent.com/os-js/OS.js/master/LICENSE) desktop implementation for your browser with a fully-fledged window manager, Application APIs, GUI toolkits and filesystem abstraction.

[![Community](https://img.shields.io/badge/join-community-green.svg)](https://community.os-js.org/)
[![Donate](https://img.shields.io/badge/liberapay-donate-yellowgreen.svg)](https://liberapay.com/os-js/)
[![Donate](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=andersevenrud%40gmail%2ecom&lc=NO&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Support](https://img.shields.io/badge/patreon-support-orange.svg)](https://www.patreon.com/user?u=2978551&ty=h&u=2978551)

# OS.js v3 MongoDB Auth Adapter

This is the MongoDB Auth Adapter for OS.js v3.

To set this up, you need to do the following steps:

1. Set up your database
2. Install
3. Configure Server
5. Configure Client
4. Configure CLI
6. Manage Users

Please see the [OS.js Authentication Guide](https://manual.os-js.org/v3/guide/auth/) for general information.

## Installation

Install the required OS.js module and database driver:

```bash
npm install --save --production @osjs/osjs-mongo-auth
```

### Configure Server

To connect the server with the database authentication module, you'll have to modify your Server bootstrap script.

In your **`src/server/index.js`** file:

```javascript
// In the top of the file load the library
const dbAuth = require('@osjs/osjs-mongo-auth');

// Locate this line in the file and add the following:
osjs.register(AuthServiceProvider, {
  args: {
    adapter: dbAuth.adapter,
    config: {
      url: 'mongodb://localhost:27017',
      dbName: 'osjs'
    }
  }
});
```

> **NOTE:** You have to restart the server after making these changes.

### Configure Client

By default OS.js is set up to log in with the `demo / demo` user for demonstration purposes.

In your **`src/client/config.js`** file:

```javascript
module.exports = {
  public: '/',

  // Either comment out this section, or remove it entirely
  /*
  auth: {
    login: {
      username: 'demo',
      password: 'demo'
    }
  }
  */
};
```

> **NOTE:** You have to rebuild using `npm run build` after making these changes.

### Configure CLI

To get CLI commands to manage users, you'll have to modify your CLI bootstrap script.

In your **`src/cli/index.js`** file:

```javascript
// In the top of the file load the library
const dbAuth = require('@osjs/osjs-mongo-auth');

// Create a database authentication instance
const dbCli = dbAuth.cli({
  // Change this to match your local database server
  url: 'mongodb://localhost:27017',
  dbName: 'osjs'

  // See TypeORM documentation for more settings
});

// Then finally add 'dbCli' to the tasks array
module.exports = {
  discover: [],
  tasks: [dbCli]
};
```

### Manage Users

You can now manage users with ex. `npx osjs-cli <task>`

> The `npx` command comes with npm 5.2 or later, but if you for some reason don't have this you can [install it manually](https://www.npmjs.com/package/npx).
> Or alternatively use `node node_modules/.bin/osjs-cli <task>`

#### Available tasks:

* `user:list` - Lists users
* `user:add --username=STR` - Adds user (as admin)
* `user:add --username=STR --groups=GROUP1,GROUP2` - Adds user with groups
* `user:pwd --username=STR` - Changes user password
* `user:remove --username=STR` - Removes user

Example: `npx osjs-cli user:add --username=anders`.