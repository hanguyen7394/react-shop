import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailGallery = ({ images }) => {
  useEffect(() => {
    if ($.fn.elevateZoom && !!images?.length) {
      $('#product-zoom').elevateZoom({
        gallery: 'product-zoom-gallery',
        galleryActiveClass: 'active',
        zoomType: 'inner',
        cursor: 'crosshair',
        zoomWindowFadeIn: 400,
        zoomWindowFadeOut: 400,
        responsive: true,
      });

      // On click change thumbs active item
      $('.product-gallery-item').on('click', function (e) {
        e.preventDefault();

        $('#product-zoom-gallery').find('a').removeClass('active');
        $(this).addClass('active');
      });

      var ez = $('#product-zoom').data('elevateZoom');

      // Open popup - product images
      $('#btn-product-gallery').on('click', function (e) {
        if ($.fn.magnificPopup) {
          $.magnificPopup.open(
            {
              items: ez.getGalleryList(),
              type: 'image',
              gallery: {
                enabled: true,
              },
              fixedContentPos: false,
              removalDelay: 600,
              closeBtnInside: false,
            },
            0
          );

          e.preventDefault();
        }
      });
    }

    // Product Gallery - product-gallery.html
    if ($.fn.owlCarousel && $.fn.elevateZoom) {
      var owlProductGallery = $('.product-gallery-carousel');

      owlProductGallery.on('initialized.owl.carousel', function () {
        owlProductGallery.find('.active img').elevateZoom({
          zoomType: 'inner',
          cursor: 'crosshair',
          zoomWindowFadeIn: 400,
          zoomWindowFadeOut: 400,
          responsive: true,
        });
      });

      owlProductGallery.owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        nav: true,
        navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
        dots: false,
        smartSpeed: 400,
        autoplay: false,
        autoplayTimeout: 15000,
        responsive: {
          0: {
            items: 1,
          },
          560: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 3,
          },
        },
      });

      owlProductGallery.on('change.owl.carousel', function () {
        $('.zoomContainer').remove();
      });

      owlProductGallery.on('translated.owl.carousel', function () {
        owlProductGallery.find('.active img').elevateZoom({
          zoomType: 'inner',
          cursor: 'crosshair',
          zoomWindowFadeIn: 400,
          zoomWindowFadeOut: 400,
          responsive: true,
        });
      });
    }

    // Product Gallery Separeted- product-sticky.html
    if ($.fn.elevateZoom) {
      $('.product-separated-item').find('img').elevateZoom({
        zoomType: 'inner',
        cursor: 'crosshair',
        zoomWindowFadeIn: 400,
        zoomWindowFadeOut: 400,
        responsive: true,
      });

      // Create Array for gallery popup
      var galleryArr = [];
      $('.product-gallery-separated')
        .find('img')
        .each(function () {
          var $this = $(this),
            imgSrc = $this.attr('src'),
            imgTitle = $this.attr('alt'),
            obj = { src: imgSrc, title: imgTitle };

          galleryArr.push(obj);
        });

      $('#btn-separated-gallery').on('click', function (e) {
        if ($.fn.magnificPopup) {
          $.magnificPopup.open(
            {
              items: galleryArr,
              type: 'image',
              gallery: {
                enabled: true,
              },
              fixedContentPos: false,
              removalDelay: 600,
              closeBtnInside: false,
            },
            0
          );

          e.preventDefault();
        }
      });
    }

    return () => {
      $('.zoomContainer').remove();
    };
  }, [images]);

  return (
    <div className="product-gallery product-gallery-vertical">
      <div className="row">
        {!!images?.[0] && (
          <figure className="product-main-image">
            <img id="product-zoom" src={images?.[0]} data-zoom-image={images?.[0]} alt="product image" />
            <div id="btn-product-gallery" className="btn-product-gallery">
              <i className="icon-arrows" />
            </div>
          </figure>
        )}
        {!!images?.length && (
          <div id="product-zoom-gallery" className="product-image-gallery">
            {images?.map((image, index) => (
              <Link
                key={index}
                className={classNames('product-gallery-item', { active: index === 0 })}
                data-image={image}
                data-zoom-image={image}
              >
                <img src={image} alt="Product image" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailGallery;
