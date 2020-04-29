import contact from './contact';
import location from './location';
import onComment from './comment';
import { ON_COMMENT, ON_QUANTITY } from './state.types';
import onQuantity from './quantity';

function decisions(ctx, next) {
  switch (ctx.session.state) {
    case ON_COMMENT:
      onComment(ctx);
      break;
    case ON_QUANTITY:
      onQuantity(ctx);
      break;
    default:
      next();
  }
}

export default (bot) => {
  bot.on('text', (ctx, next) => decisions(ctx, next));
  bot.on('location', (ctx) => location(ctx));
  bot.on('contact', (ctx) => contact(ctx));
};
