import locale from '../locale/index.json';
import keyboards from '../keyboards';

export default (ctx) => {
  if (!ctx.match.includes('⬅️')) {
    ctx.session.language = ctx.match.includes('🇺🇿 ') ? 'uz' : 'ru';
  }
  ctx.reply(locale.message_categories[ctx.session.language], keyboards.main(ctx));
};
