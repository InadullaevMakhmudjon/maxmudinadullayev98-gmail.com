import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export default (lang, count) => Markup.keyboard([
  [Markup.button(locale.drinks[lang]), Markup.button(locale.somsa[lang])],
  [Markup.button(locale.osh[lang]), Markup.button(`${locale.shopping[lang]} ${count}`)],
]).resize().extra();
