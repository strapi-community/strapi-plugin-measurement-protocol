const axios = require('axios');
const debug = require('debug')('strapi:strapi-plugin-measurement-protocol');

module.exports = ({ strapi }) => {
  const config = strapi.config.get('plugin.measurement-protocol');
  const client = axios.create({
    baseURL: 'https://www.google-analytics.com',
    params: {
      api_secret: config.apiSecret,
      measurement_id: config.measurementId,
    },
  });

  const endpoint = config.useValidationServer ? '/debug/mp/collect' : '/mp/collect';

  return {
    send(payload) {
      debug('send payload: %o', payload);
      return client
        .post(endpoint, payload, {
          params: {
            api_secret: config.apiSecret,
            measurement_id: config.measurementId,
          },
        })
        .catch((error) => {
          strapi.log.error('[measurement-protocol] failed to send payload');
          debug('error: %o', error);
        });
    },
  };
};
