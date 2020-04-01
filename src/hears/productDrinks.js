import product from '../messages/drink';
import drinkData from '../data/drinks.json';
import { custom } from '../keyboards/numbers';
import { count } from '../keyboards';
import { custom as customBack } from '../keyboards/back';

function shopping(ctx, id) {
  if (!ctx.session.drinks) {
    ctx.session.drinks = [];
  }
  ctx.session.drinks.push(id);
}

export default (ctx) => {
  const drink = drinkData.find(({ name }) => name === ctx.match);
  const buttons = custom.concat([customBack(ctx.session.language, count(ctx))]);

  if (drink) {
    const info = `info_${ctx.session.language}`;
    shopping(ctx, drink.id);
    ctx.session.product = { from: 'drinks', name: ctx.match, price: drink.price };
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
