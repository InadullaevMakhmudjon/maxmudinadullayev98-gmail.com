import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export default (lang) => [Markup.button(locale.back[lang]), Markup.button(locale.shopping[lang])];
