import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export default (lang) => Markup.keyboard([
  [Markup.button(locale.drinks[lang]), Markup.button(locale.somsa[lang])],
  [Markup.button(locale.shopping[lang])],
]).resize().extra();
