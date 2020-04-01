import keyboards from '../keyboards';
import { start as startMessage } from '../messages';

export default (bot) => {
  bot.command('start', (ctx) => {
    ctx.session = {};
    ctx.replyWithHTML(startMessage(ctx.from.first_name), keyboards.start);
  });
};
