import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductFilter = ({
  categories,
  currentPriceRange,
  handleChangePriceRange,
  selectedCategories,
  handleChangeCategory,
}) => {
  let rangeTimeout = useRef();
  useEffect(() => {
    var priceSlider = document.getElementById('price-slider');
    if (priceSlider == null) return;

    if (typeof noUiSlider === 'object') {
      noUiSlider.create(priceSlider, {
        start: currentPriceRange,
        connect: true,
        step: 50,
        margin: 200,
        range: {
          min: 0,
          max: 1000,
        },
        tooltips: true,
        format: wNumb({
          decimals: 0,
          prefix: '$',
        }),
      });

      priceSlider.noUiSlider.on('update', function (values) {
        $('#filter-price-range').text(values.join(' - '));
      });

      priceSlider.noUiSlider.on('change', function (values) {
        const range = values.map((item) => item.substring(1));
        if (rangeTimeout) {
          clearTimeout(rangeTimeout);
        }
        rangeTimeout = setTimeout(() => {
          handleChangePriceRange(range);
        }, 500);
      });
    }

    return () => {
      priceSlider.noUiSlider.destroy();
    }
  }, []);

  const _onChangeCategory = (e, idCategory) => {
    if (e.currentTarget.checked) {
      handleChangeCategory([...selectedCategories, idCategory]);
    } else {
      const newCategories = selectedCategories?.filter((id) => id !== idCategory);
      handleChangeCategory(newCategories);
    }
  };

  const _onCleanAll = (e) => {
    e.preventDefault();
    handleChangeCategory([]);
  };

  return (
    <div className="sidebar sidebar-shop">
      <div className="widget widget-clean">
        <label>Filters:</label>
        <Link onClick={_onCleanAll} className="sidebar-filter-clear">
          Clean All
        </Link>
      </div>
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
            Category
          </a>
        </h3>
        <div className="collapse show" id="widget-1">
          <div className="widget-body">
            {categories?.length && (
              <div className="filter-items filter-items-count">
                {categories.map(({ id, name }) => (
                  <div key={id} className="filter-item">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        onChange={(e) => _onChangeCategory(e, id)}
                        className="custom-control-input"
                        id={id}
                        value={id}
                        checked={selectedCategories?.includes(id)}
                      />
                      <label className="custom-control-label" htmlFor={id}>
                        {name}
                      </label>
                    </div>
                    {/* <span className="item-count">3</span> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-5">
            Price
          </a>
        </h3>
        <div className="collapse show" id="widget-2">
          <div className="widget-body">
            <div className="filter-price">
              <div className="filter-price-text">
                Price Range: <span id="filter-price-range" />
              </div>
              <div id="price-slider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
