import Markup from 'telegraf/markup';
import drinks from '../data/drinks.json';
import locale from '../locale/index.json';
import generator from '../keyboards/generator';
import keyboards from '../keyboards';

export default (ctx) => {
  // eslint-disable-next-line max-len
  const buttons = generator(drinks.filter(({ group }) => group === ctx.match).map(({ name }) => name));
  buttons.push(keyboards.back(ctx));
  ctx.reply(locale.SelectProduct[ctx.session.language], Markup.keyboard(buttons).resize().extra());
};
