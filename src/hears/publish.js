export default (ctx, bot) => {
  bot.telegram.sendMessage(process.env.CHAT_ID, ctx.session.checkList);
  if (ctx.session.location) {
    const { latitude, longitude } = ctx.session.location;
    bot.telegram.sendLocation(process.env.CHAT_ID, latitude, longitude);
  }
};
