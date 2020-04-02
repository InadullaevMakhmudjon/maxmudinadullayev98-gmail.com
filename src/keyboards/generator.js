import Markup from 'telegraf/markup';

export const oneColumn = (names) => names.map((name) => [Markup.button(name)]);

export const twoColumn = (names) => {
  let buttons = [];
  const result = [];
  names.forEach((name) => {
    if (buttons.length === 2) {
      result.push(buttons);
      buttons = [];
    }
    buttons.push(Markup.button(name));
  });
  result.push(buttons);
  return result;
};


export default twoColumn;
