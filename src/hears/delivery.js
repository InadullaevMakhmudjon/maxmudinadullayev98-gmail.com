import buttons from '../keyboards';
import locale from '../locale/index.json';

/**
 * type 0 = courier type buttons
 * type 1 = self type buttons
 */
export default (ctx, type) => {
  ctx.reply(locale[type === 0 ? 'courierType' : 'selfType'][ctx.session.language], buttons.delivery(ctx, type));
};
