import locale from '../locale/index.json';

export default (lang, name, info, price) => `
*${locale.name[lang]}*: ${name}
*${locale.info[lang]}*: ${info}
*${locale.price[lang]}*: ${price}

${locale.desc[lang]}
`;
