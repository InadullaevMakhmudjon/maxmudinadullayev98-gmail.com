import product from '../messages/somsa';
import somsaData from '../data/somsa.json';
import { custom } from '../keyboards/numbers';
import { count } from '../keyboards';
import { custom as customBack } from '../keyboards/back';
import { ON_QUANTITY } from '../listeners/state.types';

export default (ctx) => {
  const name = `name_${ctx.session.language}`;
  const info = `info_${ctx.session.language}`;
  const somsa = somsaData.find((element) => element[name] === ctx.match);
  const buttons = custom.concat([customBack(ctx.session.language, count(ctx))]);

  if (somsa) {
    ctx.session.product = { from: 'somsa', name: ctx.match, price: somsa.price };
    ctx.session.state = ON_QUANTITY;
    ctx.replyWithPhoto({
      source: somsa.image,
    }, {
      caption: product(ctx.session.language, somsa[name], somsa[info], somsa.price),
      parse_mode: 'Markdown',
      reply_markup: {
        keyboard: buttons,
        resize_keyboard: true,
      },
    });
  }
};
