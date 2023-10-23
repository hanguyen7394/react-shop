import React from 'react';
import { SORT_OPTIONS } from '../../constant/common';
import SelectCustom from '../../components/SelectCustom';

const ProductToolbox = ({ getActiveSort, onChangeSort, products, pagination }) => {
  const activeSort = getActiveSort();
  const _onChangeSort = (e) => {
    const value = e.target.value;
    onChangeSort(value);
  };

  return (
    <div className="toolbox">
      <div className="toolbox-left">
        <div className="toolbox-info">
          Showing{' '}
          <span>
            {products?.length || 0} of {pagination?.total || 0}
          </span>{' '}
          Products{' '}
        </div>
      </div>
      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <SelectCustom
            onChange={_onChangeSort}
            options={[
              SORT_OPTIONS.popularity,
              SORT_OPTIONS.pricehight,
              SORT_OPTIONS.pricelow,
              SORT_OPTIONS.newest,
              SORT_OPTIONS.rating,
            ]}
            defaultValue={SORT_OPTIONS.popularity.value}
            value={activeSort}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductToolbox;
