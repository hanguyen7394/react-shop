import { formatCurrency } from './format';

export const owlCarousels = ($wrap, options) => {
  if ($.fn.owlCarousel) {
    var owlSettings = {
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
      dots: true,
      smartSpeed: 400,
      autoplay: false,
      autoplayTimeout: 15000,
    };
    if (typeof $wrap == 'undefined') {
      $wrap = $('body');
    }
    if (options) {
      owlSettings = $.extend({}, owlSettings, options);
    }

    // Init all carousel
    $wrap.find('[data-toggle="owl"]').each(function () {
      var $this = $(this),
        newOwlSettings = $.extend({}, owlSettings, $this.data('owl-options'));

      $this.owlCarousel(newOwlSettings);
    });
  }
};

export const getSalePrice = (price, discount) => {
  return formatCurrency(price - discount);
};

export const scrollToTop = () => {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    800
  );
};

export const calcRateWidth = (rating) => {
  return `${(100 / 5) * rating}%`;
};

export const removeAccents = (str) => {
  var from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-');

  return str;
};

export const getImageURL = (image) => {
  return `https://cfdshop.hn.ss.bfcplatform.vn/images/product/${image}`;
};
