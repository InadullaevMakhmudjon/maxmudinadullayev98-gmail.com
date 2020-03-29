import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export const custom = (lang) => [{ text: locale.back[lang] }, { text: locale.shopping[lang] }];

export default (lang) => [Markup.button(locale.back[lang]), Markup.button(locale.shopping[lang])];
