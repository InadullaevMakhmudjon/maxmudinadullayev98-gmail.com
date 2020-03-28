import Telegraf from 'telegraf';
import session from 'telegraf/session';
import commands from './commands';
import hears from './hears';

const bot = new Telegraf('982165968:AAFvf5OH2iEkdJCt1oT8f0T_1OdRjasGjjY');
bot.use(session());

commands(bot);
hears(bot);

bot.launch().then(() => {
  console.log('\x1b[34m', 'Launched', '\x1b[0m');
});
