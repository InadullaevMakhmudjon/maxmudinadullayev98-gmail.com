import Markup from 'telegraf/markup';

export const custom = [
  [{ text: '1' }, { text: '2' }, { text: '3' }],
  [{ text: '4' }, { text: '5' }, { text: '6' }],
  [{ text: '7' }, { text: '8' }, { text: '9' }],
];

export default [
  [Markup.button('1'), Markup.button('2'), Markup.button('3')],
  [Markup.button('4'), Markup.button('5'), Markup.button('6')],
  [Markup.button('7'), Markup.button('8'), Markup.button('9')],
];
