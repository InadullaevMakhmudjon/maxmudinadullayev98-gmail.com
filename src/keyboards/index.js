import start from './start';
import main from './main';
import back from './back';

export default {
  start,
  main: (ctx) => main(ctx.session.language),
  back: (ctx) => back(ctx.session.language),
};
