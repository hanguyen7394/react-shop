export const STORAGE = {
  TOKEN: 'token',
};

export const MODAL_TYPES = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export const PAYMENT_METHOD = {
  atm: 'Chuyển khoản',
  momo: 'Ví điện tử MoMo',
  cash: 'Tiền mặt',
};

export const ROLE = {
  TEACHER: 'Teacher',
  MENTOR: 'Mentor',
};

export const SORT_OPTIONS = {
  popularity: {
    value: 'popularity',
    label: 'Most Popular',
    queryObj: { orderBy: undefined, order: undefined  },
  },
  pricehight: {
    value: 'pricehight',
    label: 'Price Low to High',
    queryObj: { orderBy: 'price', order: -1  },
  },
  pricelow: {
    value: 'pricelow',
    label: 'Price Hight to Low',
    queryObj: { orderBy: 'price', order: 1  },
  },
  newest: {
    value: 'newest',
    label: 'Newest',
    queryObj: { orderBy: 'createdAt', order: -1  },
  },
  rating: {
    value: 'rating',
    label: 'Most Rated',
    queryObj: { orderBy: 'rating', order: -1  },
  },
};
