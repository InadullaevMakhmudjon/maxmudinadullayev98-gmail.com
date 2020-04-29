import selectedQuantity from '../hears/selectedQuantity';

export default (ctx) => {
  const quantity = Number(ctx.update.message.text);
  if (!Number.isNaN(quantity)) {
    selectedQuantity(ctx, quantity);
  }
};
