import moment from 'moment/moment';

export const formatCurrency = (number) => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return currency.format(number).replace(/(\.|,)00$/g, '');
};

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  return moment(date).format(format);
};
