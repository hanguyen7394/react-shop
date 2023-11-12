export const STORAGE = {
  TOKEN: 'token',
};

export const MODAL_TYPES = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export const PAYMENT_METHODS = {
  bank: {
    label: 'Direct bank transfer',
    description:
      'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
  },
  cash: {
    label: 'Cash on delivery',
    description:
      'Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
  },
};

export const SORT_OPTIONS = {
  popularity: {
    value: 'popularity',
    label: 'Most Popular',
    queryObj: { orderBy: undefined, order: undefined },
  },
  pricehight: {
    value: 'pricehight',
    label: 'Price Hight to Low',
    queryObj: { orderBy: 'price', order: '-1' },
  },
  pricelow: {
    value: 'pricelow',
    label: 'Price Low to High',
    queryObj: { orderBy: 'price', order: '1' },
  },
  newest: {
    value: 'newest',
    label: 'Newest',
    queryObj: { orderBy: 'createdAt', order: '-1' },
  },
  rating: {
    value: 'rating',
    label: 'Most Rated',
    queryObj: { orderBy: 'rating', order: '-1' },
  },
};

export const SHIPPING_OPTIONS = [
  {
    label: 'Free Shipping:',
    value: 'free',
    price: 0,
  },
  {
    label: 'Standart:',
    value: 'standart',
    price: 10,
  },
  {
    label: 'Express:',
    value: 'express',
    price: 20,
  },
];
