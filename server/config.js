module.exports = {
  default: {
    /**
     * The protocol to use.
     *
     * @type {'google-analytics-4'|'universal-analytics'}
     * @default 'google-analytics-4'
     */
    mode: 'google-analytics-4',

    /**
     * Use Measurement Protocol Validation Server.
     *
     * @see https://developers.google.com/analytics/devguides/collection/protocol/ga4/validating-events?client_type=gtag
     * @type {boolean}
     * @default false
     */
    useValidationServer: false,

    apiSecret: '',
    measurementId: '',
  },
  validator(config) {
    if (config.mode !== 'google-analytics-4') {
      throw new Error('only "google-analytics-4" mode is supported');
    }
    if (!config.apiSecret) {
      throw new Error('apiSecret is required');
    }
    if (!config.measurementId) {
      throw new Error('measurementId is required');
    }
  },
};
