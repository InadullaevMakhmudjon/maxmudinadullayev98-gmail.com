function shop(ctx, product) {
  if (!ctx.session.shopping) {
    ctx.session.shopping = [];
  }
  ctx.session.shopping.push(product);
}

export default (ctx, quantity) => {
  const { product, back } = ctx.session;
  if (product && back.length) {
    switch (product.from) {
      case 'somsa':
        shop(ctx, { ...product, quantity });
        back[back.length - 1](ctx);
        break;
      case 'drinks':
        shop(ctx, { ...product, quantity });
        back[back.length - 1](ctx);
        break;
      case 'osh':
        shop(ctx, { ...product, quantity });
        back[back.length - 1](ctx);
        break;
      default:
    }
    ctx.session.state = '';
    back.pop();
  }
};
