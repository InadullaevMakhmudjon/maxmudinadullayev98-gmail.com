import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

export const clear = (lang) => [Markup.button(locale.clear[lang])];

export default clear;
