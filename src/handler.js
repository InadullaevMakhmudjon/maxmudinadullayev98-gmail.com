import message from './messages/errorMessage';

function checker(ctx) {
  if (ctx.session) {
    if (Object.keys(ctx.session).length) return true;
    if (ctx.update.message.text === '/start') return true;
    if (ctx.update.message.text === "🇺🇿 O'zbekcha") return true;
    if (ctx.update.message.text === '🇷🇺 Русский') return true;
  }
  return false;
}

export default (ctx, next) => {
  if (checker(ctx)) {
    next();
  } else {
    ctx.reply(message(true));
  }
};
