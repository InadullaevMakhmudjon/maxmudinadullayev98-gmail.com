import locale from '../locale/index.json';
import keyboards from '../keyboards';

const getLang = (match, lang) => {
  if (match.includes('🇺🇿 ')) return 'uz';
  if (match.includes('ru ')) return 'ru';
  if (lang) return lang;
  return 'ru';
};

export default (ctx, language) => {
  if (!ctx.match.includes('⬅️')) {
    ctx.session.language = getLang(ctx.match, language);
  }
  ctx.reply(locale.message_categories[ctx.session.language], keyboards.main(ctx));
};
