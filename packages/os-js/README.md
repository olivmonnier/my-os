<p align="center">
  <img alt="OS.js Logo" src="https://raw.githubusercontent.com/os-js/gfx/master/logo-big.png" />
</p>

# OS.js

[OS.js](https://www.os-js.org/) is an [open-source](https://raw.githubusercontent.com/os-js/OS.js/master/LICENSE) desktop implementation for your browser with a fully-fledged window manager, Application APIs, GUI toolkits and filesystem abstraction.

[![Support](https://img.shields.io/badge/patreon-support-orange.svg)](https://www.patreon.com/user?u=2978551&ty=h&u=2978551)
[![Donate](https://img.shields.io/badge/liberapay-donate-yellowgreen.svg)](https://liberapay.com/os-js/)
[![Donate](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=andersevenrud%40gmail%2ecom&lc=NO&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Community](https://img.shields.io/badge/join-community-green.svg)](https://community.os-js.org/)

This is the OS.js base project that you can use as a template to make your own distributions, installations and do general development.

## Try it yourself

Visit the [official demo](https://demo.os-js.org/v3/) for a preview version. Please note that some features are disabled and might be outdated or unavailable at times.

![ScreenShot](https://www.os-js.org/screenshot.png)

## Requirements

Node 8 (or newer) and any modern web-browser.

## Installation

> OS.js runs on `localhost:8000` by default.

### Demo

You can run a demo using docker without checkout out any source-code:

```
docker run -p 8000:8000 osjs/osjs:v3
```

### Manual

```
# Clone *only* the v3 branch
git clone -b v3 --single-branch https://github.com/os-js/OS.js.git
cd OS.js
```

#### Locally

```
# Install dependencies
npm install

# It's recommended that you keep your dependencies (including OS.js) up-to-date
npm update

# Optionally install extra packages:
# For a list of packages, see https://manual.os-js.org/v3/resource/official/
npm install @osjs/example-application

# Discover installed packages
npm run package:discover
 
# Build your client
npm run build

# Start serving
npm run serve
```

#### Docker

You can also build a Docker image yourself or use docker-compose:

```
cp .env.example .env
docker-compose up
```

## Contribution

* **Become a [Patreon](https://www.patreon.com/user?u=2978551&ty=h&u=2978551)**
* [Contribution Guide](https://github.com/os-js/OS.js/blob/v3/CONTRIBUTING.md)

## Documentation

See the [Official Manuals](https://manual.os-js.org/v3/) for articles, tutorials and guides.

## Links

* [Official Chat](https://gitter.im/os-js/OS.js)
* [Community Forums and Announcements](https://community.os-js.org/)
* [Homepage](https://os-js.org/)
* [Twitter](https://twitter.com/osjsorg) ([author](https://twitter.com/andersevenrud))
* [Google+](https://plus.google.com/b/113399210633478618934/113399210633478618934)
* [Facebook](https://www.facebook.com/os.js.org)
* [Docker Hub](https://hub.docker.com/u/osjs/)
