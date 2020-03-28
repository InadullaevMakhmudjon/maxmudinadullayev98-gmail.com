import Markup from 'telegraf/markup';

export default (names) => {
  let buttons = [];
  const result = [];
  names.forEach((name) => {
    if (buttons.length === 2) {
      result.push(buttons);
      buttons = [];
    }
    buttons.push(Markup.button(name));
  });
  return result;
};
