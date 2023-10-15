import React, { useEffect } from 'react';
import { scrollToTop } from '../../utils/common';

const ScrollTopButton = () => {
  useEffect(() => {
    var $scrollTop = $('#scroll-top');

    $(window).on('load scroll', function () {
      if ($(window).scrollTop() >= 400) {
        $scrollTop.addClass('show');
      } else {
        $scrollTop.removeClass('show');
      }
    });

    $scrollTop.on('click', function (e) {
      scrollToTop();
      e.preventDefault();
    });
  }, []);

  return (
    <button id="scroll-top" title="Back to Top">
      <i className="icon-arrow-up" />
    </button>
  );
};

export default ScrollTopButton;
