import buttons from '../keyboards';
import locale from '../locale/index.json';

export default (ctx) => {
  ctx.reply(locale.order[ctx.session.language], buttons.order(ctx));
};
