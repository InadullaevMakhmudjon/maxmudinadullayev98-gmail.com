import Markup from 'telegraf/markup';
import generate from '../keyboards/generator';
import somsa from '../data/somsa.json';
import keyboards from '../keyboards';
import locale from '../locale/index.json';

export default (ctx) => {
  const name = `name_${ctx.session.language}`;
  const buttons = generate(somsa.map((element) => element[name]));
  buttons.push(keyboards.back(ctx));
  ctx.reply(locale.SelectProduct[ctx.session.language], Markup.keyboard(buttons).resize().extra());
};
