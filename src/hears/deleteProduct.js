function updateProduct(array, name) {
  // eslint-disable-next-line no-restricted-syntax
  for (const i in array) {
    if (array[i].name === name) {
      if ((Number(array[i].quantity) - 1) > 0) {
        // eslint-disable-next-line no-param-reassign
        array[i].quantity = Number(array[i].quantity) - 1;
      } else {
        array.splice(i, 1);
      }
      break;
    }
  }
}

export default (ctx) => {
  const productName = ctx.update.message.text.slice(2).replace(/ *\([^)]*\) */g, '');
  updateProduct(ctx.session.shopping, productName);
  if (!ctx.session.shopping.length) {
    // eslint-disable-next-line no-param-reassign
    ctx.session.shopping = null;
  }
};
