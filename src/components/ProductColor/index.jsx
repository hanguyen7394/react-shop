import classNames from 'classnames';
import React, { useState, forwardRef, useImperativeHandle } from 'react';

const ProductColor = ({ colors, defaultColor }, ref) => {
  const [colorSelected, setColorSelected] = useState('');

  useImperativeHandle(ref, () => {
    return {
      value: colorSelected,
      reset: () => {
        setColorSelected(defaultColor);
      }
    }
  })

  const _onChangeColor = (color) => {
    setColorSelected(color);
  };

  return (
    <div className="details-filter-row details-row-size">
      <label>Color:</label>
      <div className="product-nav product-nav-dots">
        {colors?.map((colorCode, index) => (
          <div
            key={index}
            className={classNames('product-nav-item', { active: colorSelected === colorCode })}
            style={{ background: colorCode }}
            onClick={() => _onChangeColor(colorCode)}
          >
            <span className="sr-only">Color name</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(ProductColor);
