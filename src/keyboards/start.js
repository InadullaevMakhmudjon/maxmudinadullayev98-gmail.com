import Markup from 'telegraf/markup';

export default Markup.keyboard([
  [Markup.button("🇺🇿 O'zbekcha"), Markup.button('🇷🇺 Русский')],
]).resize().extra();
