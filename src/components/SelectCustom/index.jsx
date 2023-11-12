import React, { forwardRef } from 'react';

const SelectCustom = ({ className = '', onChange, value, id, options }, ref) => {
  return (
    <div className={`select-custom ${className}`}>
      <select onChange={onChange} value={value} name={id} id={id} ref={ref} className="form-control">
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default forwardRef(SelectCustom);
