'use strict';

module.exports = {
  test: {
    type: 'content-api',
    routes: [
      {
        method: 'POST',
        path: '/collect',
        handler: 'collect.send',
        config: {
          policies: [],
        },
      },
    ],
  },
};
