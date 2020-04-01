import Markup from 'telegraf/markup';
import locale from '../locale/index.json';
import { withOrder } from '../keyboards/back';
import { clear } from '../keyboards/shopping';
import { oneColumn as generator } from '../keyboards/generator';

export default (ctx) => {
  const lang = ctx.session.language;
  const buttons = [withOrder(lang)];
  if (ctx.session.shopping) {
    const names = ctx.session.shopping.map(({ name, quantity }) => `❌ ${name} (${quantity}${locale.unit[lang]})`);
    buttons.push.apply(buttons, [...generator(names)]);
  }
  buttons.push(clear(lang));
  ctx.reply(locale.shopping[lang], Markup.keyboard(buttons).resize().extra());
};
