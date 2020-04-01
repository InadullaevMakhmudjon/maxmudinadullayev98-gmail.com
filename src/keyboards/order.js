import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export default (lang) => Markup.keyboard([
  [Markup.button(locale.courierType[lang])],
  [Markup.button(locale.selfType[lang])],
  [Markup.button(locale.back[lang])],
]).resize().extra();
