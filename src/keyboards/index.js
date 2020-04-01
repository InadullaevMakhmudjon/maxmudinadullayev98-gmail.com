import start from './start';
import main from './main';
import back from './back';
import order from './order';
import delivery from './delivery';
import contact from './contact';
import approve from './approve';

export const count = (ctx) => (ctx.session.shopping
  ? `(${ctx.session.shopping.reduce((a, b) => a + Number(b.quantity), 0)})`
  : '');

export default {
  start,
  main: (ctx) => main(ctx.session.language, count(ctx)),
  back: (ctx) => back(ctx.session.language, count(ctx)),
  order: (ctx) => order(ctx.session.language),
  delivery: (ctx, type) => delivery(ctx.session.language, type),
  contact: (ctx) => contact(ctx, ctx.session.language),
  approve: (ctx) => approve(ctx.session.language),
};
