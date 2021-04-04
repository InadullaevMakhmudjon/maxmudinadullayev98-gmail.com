
import lang from '../locale/index.json';
import locale from './locale';
import drinks from './drinks';
import somsa from './somsa';
import osh from './osh';
import dataSomsa from '../data/somsa.json';
import dataDrinks from '../data/drinks.json';
import dataOsh from '../data/osh.json';
import productSomsa from './productSomsa';
import productDrink from './productDrinks';
import drinkMenu from './drinkMenu';
import selectedQuantity from './selectedQuantity';
import shopping from './shopping';
import deleteProduct from './deleteProduct';
import order from './OrderShopping';
import delivery from './delivery';
import productOsh from './productOsh';
import * as types from '../listeners/state.types';
import publish from './publish';

require('dotenv').config();

const clear = (ctx, store) => {
  const { language } = ctx.session;
  ctx.session = null;
  store.clear();
  return language;
};

const toArray = (object) => (object ? Object.keys(object).map((key) => object[key]) : ["🇺🇿 O'zbekcha", '🇷🇺 Русский']);
const arrayFiltered = (object) => {
  if (object) {
    const customized = Object.keys(object)
      .filter((key) => (key === 'name' || key === 'name_uz' || key === 'name_ru'))
      .map((key) => object[key]);
    return toArray(customized);
  }
  return 'error';
};

const back = (ctx) => {
  const array = ctx.session.back;
  if (array) {
    switch (ctx.session.state) {
      case types.ON_COMMENT:
        ctx.session.state = '';
        order(ctx);
        break;
      default:
        ctx.session.state = '';
        array[array.length - 1](ctx);
        array.pop();
    }
  }
};

export const trace = (callBack, ctx) => {
  if (!ctx.session.back) {
    ctx.session.back = [];
  }
  ctx.session.back.push(callBack);
};

export default (bot) => {
  // Main
  bot.hears(toArray(null), (ctx) => {
    ctx.session.shopping = null;
    locale(ctx);
  });

  // Drinks
  bot.hears(toArray(lang.drinks), (ctx) => {
    trace(locale, ctx);
    drinks(ctx);
  });

  // Somsa
  bot.hears(toArray(lang.somsa), (ctx) => {
    trace(locale, ctx);
    somsa(ctx);
  });

  // Osh
  bot.hears(toArray(lang.osh), (ctx) => {
    trace(locale, ctx);
    osh(ctx);
  });

  // If any somsa selected
  bot.hears(
    dataSomsa.map((data) => arrayFiltered(data)).reduce((a, b) => a.concat(b), []),
    (ctx) => {
      trace(somsa, ctx);
      productSomsa(ctx);
    },
  );

  // If any osh selected
  bot.hears(
    dataOsh.map((data) => arrayFiltered(data)).reduce((a, b) => a.concat(b), []),
    (ctx) => {
      trace(osh, ctx);
      productOsh(ctx);
    },
  );

  // If any drink menu selected
  bot.hears(
    [...new Set(dataDrinks.map(({ group }) => group))].reduce((a, b) => a.concat(b), []),
    (ctx) => {
      trace(drinks, ctx);
      drinkMenu(ctx);
    },
  );

  // If any drink selected
  bot.hears(
    [...new Set(dataDrinks.map(({ name }) => name))].reduce((a, b) => a.concat(b), []),
    (ctx) => {
      trace(drinks, ctx);
      productDrink(ctx);
    },
  );

  // Shopping
  bot.hears((text) => `${text}`.includes(lang.shopping.uz) || text.includes(lang.shopping.ru),
    (ctx) => {
      trace(locale, ctx);
      shopping(ctx);
    });

  // Clear
  bot.hears(toArray(lang.clear), (ctx) => {
    ctx.session.shopping = null;
    shopping(ctx);
  });

  // Delete product
  bot.hears((text) => `${text}`.includes('❌'), (ctx) => {
    deleteProduct(ctx);
    shopping(ctx);
  });

  // Order
  bot.hears(toArray(lang.order), (ctx) => {
    trace(shopping, ctx);
    order(ctx);
  });

  // Courier type delivery
  bot.hears(toArray(lang.courierType), (ctx) => {
    trace(order, ctx);
    delivery(ctx, 0);
  });

  // Self type delivery
  bot.hears(toArray(lang.selfType), (ctx) => {
    trace(order, ctx);
    delivery(ctx, 1);
  });

  // Approve delivery
  bot.hears(toArray(lang.approve), (ctx) => {
    publish(ctx, bot);
    const language = clear(ctx, bot.store);
    locale(ctx, language);
  });

  // Reject delivery
  bot.hears(toArray(lang.reject), (ctx) => {
    const language = clear(ctx, bot.store);
    locale(ctx, language);
  });

  // Back
  bot.hears(toArray(lang.back), (ctx) => back(ctx));
};

/*
  // If quantity selected
  bot.hears(Array.from(Array(10).keys()).map((el) => el.toString()), (ctx) => {
    selectedQuantity(ctx);
  });
*/
