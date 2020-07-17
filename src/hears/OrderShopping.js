import buttons from '../keyboards';
import locale from '../locale/index.json';
import delivery from './delivery';

export default (ctx) => {
  // ctx.reply(locale.order[ctx.session.language], buttons.order(ctx));
  delivery(ctx, 0)
};
