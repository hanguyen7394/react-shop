import moment from 'moment/moment';

export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  return moment(date).format(format);
};
