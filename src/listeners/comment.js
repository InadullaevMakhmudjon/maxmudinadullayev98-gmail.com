import locale from '../locale/index.json';
import buttons from '../keyboards';
import message from '../messages/agreement';

const getMessage = (text, lang) => (text == locale.commentKey[lang] ? '' : text);

export default (ctx) => {
  const { delivery, shopping } = ctx.session;
  if (delivery && shopping) {
    delivery.comment = getMessage(ctx.update.message.text, ctx.session.language);
    const { comment, type, contact } = delivery;
    // eslint-disable-next-line camelcase
    const { phone_number, first_name, last_name } = contact;
    // eslint-disable-next-line camelcase
    ctx.session.checkList = message(ctx.session.language, `${first_name} ${last_name}`, phone_number, type, comment, shopping);
    ctx.reply(ctx.session.checkList, buttons.approve(ctx));
  }
};
