import locale from '../locale/index.json';

const total = (product) => Number(product.quantity) * Number(product.price);

function getProduct(product) {
  return `
${product.name}: 
    ${product.quantity} X ${product.price} = ${total(product)}
`;
}

function getTotal(products) {
  return products.map((product) => total(product)).reduce((a, b) => a + b, 0);
}

export default (lang, fullName, phone, dType, comment, products) => `
${locale.messageCustomer[lang]}: ${fullName}
${locale.messagePhonenumber[lang]}: ${phone}
${locale.messageDelivery[lang]}: ${dType}
${locale.messageComment[lang]}: ${comment}

~~~~~~~~~~~~~~~~~~~
${
  products.map((product) => getProduct(product)).join('')
}
~~~~~~~~~~~~~~~~~~~

${locale.messageSum[lang]}: ${getTotal(products)}
${locale.messageDeliveryPrice[lang]}: Operator siz bilan bog'lanadi. Оператор свяжется с вами
${locale.messageTotal[lang]}: ${getTotal(products)}
`;
