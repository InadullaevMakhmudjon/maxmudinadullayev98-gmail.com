
import lang from '../locale/index.json';
import locale from './locale';
import drinks from './drinks';
import somsa from './somsa';

const toArray = (object) => (object ? Object.keys(object).map((key) => object[key]) : ["🇺🇿 O'zbekcha", '🇷🇺 Русский']);

export default (bot) => {
  bot.hears(toArray(null), (ctx) => {
    locale(ctx);
  });
  bot.hears(toArray(lang.drinks), (ctx) => {
    ctx.session.back = locale;
    drinks(ctx);
  });
  bot.hears(toArray(lang.somsa), (ctx) => {
    ctx.session.back = locale;
    somsa(ctx);
  });
  bot.hears(toArray(lang.back), (ctx) => (ctx.session.back ? ctx.session.back(ctx) : ''));
};
