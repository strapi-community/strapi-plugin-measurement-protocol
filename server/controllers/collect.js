module.exports = ({ strapi }) => ({
  send(ctx) {
    const payload = ctx.request.body;

    if (!payload.client_id) {
      return ctx.badRequest('client_id is required');
    }
    if (!payload.events || !Array.isArray(payload.events)) {
      return ctx.badRequest('events are required');
    }

    strapi
      .plugin('measurement-protocol')
      .service('gtag')
      .send({
        user_id: ctx?.state?.user?.id,
        ...payload,
      });

    return 'OK';
  },
});
