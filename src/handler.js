import message from './messages/errorMessage';

function checker(ctx) {
  if (ctx.session) {
    if (Object.keys(ctx.session).length) return true;
    if(ctx.update.message
      && ['/start', "🇺🇿 O'zbekcha", '🇷🇺 Русский']
      .includes(ctx.update.message.text)) return true;
  }
  return false;
}

export default (ctx, next) => {
  if (checker(ctx)) {
    next();
  } else {
    try {
      ctx.reply(message(true));
    } catch(error) {
      console.log(error.message);
    }
  }
};
