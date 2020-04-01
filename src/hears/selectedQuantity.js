function shop(ctx, product) {
  if (!ctx.session.shopping) {
    ctx.session.shopping = [];
  }
  ctx.session.shopping.push(product);
}

export default (ctx) => {
  const { product, back } = ctx.session;
  if (product && back.length) {
    switch (product.from) {
      case 'somsa':
        shop(ctx, { ...product, quantity: ctx.match });
        back[back.length - 1](ctx);
        break;
      case 'drinks':
        shop(ctx, { ...product, quantity: ctx.match });
        back[back.length - 1](ctx);
        break;
      default:
    }
    back.pop();
  }
};
