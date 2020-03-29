import product from '../messages/drink';
import drinkData from '../data/drinks.json';
import { custom } from '../keyboards/numbers';
import { custom as customBack } from '../keyboards/back';

export default (ctx) => {
  const drink = drinkData.find(({ name }) => name === ctx.match);
  const buttons = custom.concat([customBack(ctx.session.language)]);

  if (drink) {
    const info = `info_${ctx.session.language}`;
    ctx.replyWithHTML(
      product(ctx.session.language, drink.name, drink[info], drink.price), {
        parse_mode: 'Markdown',
        reply_markup: {
          keyboard: buttons,
          resize_keyboard: true,
        },
      },
    );
  }
};
