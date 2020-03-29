
import lang from '../locale/index.json';
import locale from './locale';
import drinks from './drinks';
import somsa from './somsa';
import dataSomsa from '../data/somsa.json';
import dataDrinks from '../data/drinks.json';
import productSomsa from './productSomsa';
import productDrink from './productDrinks';

const toArray = (object) => (object ? Object.keys(object).map((key) => object[key]) : ["🇺🇿 O'zbekcha", '🇷🇺 Русский']);
const arrayFiltered = (object) => toArray(Object.keys(object).filter((key) => (key === 'name' || key === 'name_uz' || key === 'name_ru')).map((key) => object[key]));

const trace = (callBack, ctx) => {
  if (!ctx.session.back) {
    ctx.session.back = [];
  }
  ctx.session.back.push(callBack);
};

export default (bot) => {
  bot.hears(toArray(null), (ctx) => {
    locale(ctx); // Opens main
  });
  bot.hears(toArray(lang.drinks), (ctx) => {
    trace(locale, ctx);
    drinks(ctx);
  });
  bot.hears(toArray(lang.somsa), (ctx) => {
    trace(locale, ctx);
    somsa(ctx);
  });
  bot.hears(
    dataSomsa.map((data) => arrayFiltered(data)).reduce((a, b) => a.concat(b), []),
    (ctx) => {
      trace(somsa, ctx);
      productSomsa(ctx);
    },
  );
  bot.hears(
    dataDrinks.map((drink) => arrayFiltered(drink)).reduce((a, b) => a.concat(b), []),
    (ctx) => {
      trace(drinks, ctx);
      productDrink(ctx);
    },
  );
  bot.hears(toArray(lang.back), (ctx) => {
    const array = ctx.session.back;
    if (array) {
      array[array.length - 1](ctx);
      array.pop();
    }
  });
};
