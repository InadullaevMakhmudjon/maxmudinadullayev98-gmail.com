import product from '../messages/somsa';
import somsaData from '../data/somsa.json';
import { custom } from '../keyboards/numbers';
import { custom as customBack } from '../keyboards/back';

export default (ctx) => {
  const name = `name_${ctx.session.language}`;
  const info = `info_${ctx.session.language}`;
  const somsa = somsaData.find((element) => element[name] === ctx.match);
  const buttons = custom.concat([customBack(ctx.session.language)]);

  if (somsa) {
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
