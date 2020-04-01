import Markup from 'telegraf/markup';
import locale from '../locale/index.json';

// Markup.button(locale.byPhoneKey[lang])
export default (lang, type) => Markup.keyboard([
  [type ? Markup.contactRequestButton(locale.byPhoneKey[lang]) : Markup.locationRequestButton(locale.byLocationKey[lang])],
  [Markup.button(locale.back[lang])],
]).resize().extra();
