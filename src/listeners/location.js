import buttons from '../keyboards';
import locale from '../locale/index.json';

export default (ctx) => {
  ctx.session.location = ctx.update.message.location;
  ctx.reply(locale.byPhone[ctx.session.language], buttons.delivery(ctx, 1));
};
