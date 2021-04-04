import product from '../messages/somsa';
import dataOsh from '../data/osh.json';
import { custom } from '../keyboards/numbers';
import { count } from '../keyboards';
import { custom as customBack } from '../keyboards/back';
import { ON_QUANTITY } from '../listeners/state.types';

export default (ctx) => {
  const name = `name_${ctx.session.language}`;
  const info = `info_${ctx.session.language}`;
  const osh = dataOsh.find((element) => element[name] === ctx.match);
  const buttons = custom.concat([customBack(ctx.session.language, count(ctx))]);

  if (osh) {
    ctx.session.product = { from: 'osh', name: ctx.match, price: osh.price };
    ctx.session.state = ON_QUANTITY;
    ctx.replyWithPhoto({
      source: osh.image,
    }, {
      caption: product(ctx.session.language, osh[name], osh[info], osh.price),
      parse_mode: 'Markdown',
      reply_markup: {
        keyboard: buttons,
        resize_keyboard: true,
      },
    });
  }
};
