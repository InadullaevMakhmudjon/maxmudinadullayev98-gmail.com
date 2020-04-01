import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

const custom = (lang, count) => [{ text: locale.back[lang] }, { text: `${locale.shopping[lang]} ${count}` }];

const withOrder = (lang) => [Markup.button(locale.back[lang]), Markup.button(locale.order[lang])];

const back = (lang, count) => [Markup.button(locale.back[lang]), Markup.button(`${locale.shopping[lang]} ${count}`)];

export { back as default, withOrder, custom };
