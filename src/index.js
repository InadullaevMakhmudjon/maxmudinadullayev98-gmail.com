import Telegraf from 'telegraf';
import session from 'telegraf/session';
import commands from './commands';
import hears from './hears';
import listeners from './listeners';
import handler from './handler';

require('dotenv').config();

const bot = new Telegraf(process.env.TOKEN);

bot.store = new Map();

bot.use(session({ store: bot.store }));
bot.use(handler);

commands(bot);
hears(bot);
listeners(bot);

bot.launch().then(() => {
  console.log('\x1b[34m', 'Launched', '\x1b[0m');
});
