import locale from '../locale/index.json';
import buttons from '../keyboards';
import { ON_COMMENT } from './state.types';

export default (ctx) => {
  const { contact } = ctx.update.message;
  ctx.session.state = ON_COMMENT;
  ctx.session.delivery = {
    contact,
    type: locale[ctx.session.location ? 'courierType' : 'selfType'][ctx.session.language],
  };
  ctx.reply(locale.comment[ctx.session.language], buttons.contact(ctx));
};
