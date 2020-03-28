import Markup from 'telegraf/markup';
import drinks from '../data/drinks.json';
import locale from '../locale/index.json';
import generator from '../keyboards/generator';
import keyboards from '../keyboards';

export default (ctx) => {
  const buttons = generator(drinks.map(({ name }) => name));
  buttons.push(keyboards.back(ctx));
  ctx.reply(locale.SelectProduct[ctx.session.language], Markup.keyboard(buttons).resize().extra());
};
