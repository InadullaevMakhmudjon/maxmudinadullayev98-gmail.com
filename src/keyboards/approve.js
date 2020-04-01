import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export default (lang) => Markup.keyboard([
  [Markup.button(locale.reject[lang]), Markup.button(locale.approve[lang])],
]).resize().extra();
