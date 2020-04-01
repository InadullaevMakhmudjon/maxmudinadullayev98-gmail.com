import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export default (ctx, lang) => Markup.keyboard([
  [Markup.button(locale.commentKey[lang])],
  [Markup.button(locale.back[lang])],
]).resize().extra();
