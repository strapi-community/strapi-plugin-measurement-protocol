<div align="center">
<h1>Strapi Measurement Protocol</h1>
	
<p style="margin-top: 0;">Send data to Google Analytics with Measurement Protocol.</p>
	
<p>
  <a href="https://discord.strapi.io">
    <img src="https://img.shields.io/discord/811989166782021633?color=blue&label=strapi-discord" alt="Strapi Discord">
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-measurement-protocol">
    <img src="https://img.shields.io/npm/v/strapi-plugin-measurement-protocol/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-measurement-protocol">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-measurement-protocol" alt="Monthly download on NPM" />
  </a>
</p>
</div>

## Table of Contents <!-- omit in toc -->

- [🚦 Current Status](#-current-status)
- [✨ Features](#-features)
- [🖐 Installation](#-installation)
- [🚚 Usage](#-usage)
- [Contributing](#contributing)
- [License](#license)

## 🚦 Current Status

This package is currently under development and should be consider **ALPHA** in terms of state. I/We are currently accepting contributions and/or dedicated contributors to help develop and maintain this package.

For more information on contributing please see [the contrib message below](#contributing).


## ✨ Features

The Google Analytics Measurement Protocol for Google Analytics 4 allows developers to make HTTP requests to send events directly to Google Analytics servers. This allows developers to measure how users interact with their business from any HTTP-enabled environment. Notably, this makes it easy to measure interactions that happen server-to-server.

[![measurement_protocol_sequence_diagram](https://developers.google.com/analytics/devguides/collection/protocol/ga4/img/mp_sequence_diagram.png)](https://developers.google.com/analytics/devguides/collection/protocol/ga4)


## 🖐 Installation


**Add plugin dependency**
```bash
yarn add strapi-plugin-measurement-protocol
```

**Configure the plugin**

```js
// file: config/plugins.js
module.exports = ({ env }) => ({
  // ...
  "measurement-protocol": {
    config: {
      apiSecret: '',
      measurementId: '',
      useValidationServer: false,
    }
  },
  // ...
}
```

- **apiSecret** - Required. An API SECRET generated in the Google Analytics UI. To create a new secret, navigate to:
> Admin > Data Streams > choose your stream > Measurement Protocol > Create
- **measurementId** - Required. The measurement ID associated with a stream. Found in the Google Analytics UI under:
> Admin > Data Streams > choose your stream > Measurement ID

## 🚚 Usage

Full event list: https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events


### Frontend usage

```js
gtag('event', 'add_payment_info');

gtag('get', 'G-XXXXXXXXX', 'client_id', (clientId) => {
  fetch('https://strapi.example.com/api/measurement-protocol/collect', {
    method: 'POST',
    body: JSON.stringify({
      client_id: clientId, 
      events: [{name: "add_payment_info"}]
    })
  })
  ServerAPI.addCustomerTier();
});
```

> more info: https://developers.google.com/analytics/devguides/collection/protocol/ga4/user-properties?client_type=gtag

### Backend usage

```js
strapi
  .plugin('measurement-protocol')
  .service('gtag')
  .send({
    // payload
  });
```

> full event reference: https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events

## Contributing

I/We are actively looking for contributors, maintainers, and others to help shape this package. As this plugins sole purpose within the Strapi community is to be used by other developers and plugin maintainers to get fast responses time.

If interested please feel free to email the lead maintainer Sacha at: sacha@digisquad.io or ping `stf#3254` on Discord.

## License

See the [LICENSE](./LICENSE.md) file for licensing information.
