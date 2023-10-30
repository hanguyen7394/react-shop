import React from 'react';

const SelectCustom = ({ className = '', onChange, value, id, options }) => {
  return (
    <div className={`select-custom ${className}`}>
      <select onChange={onChange} value={value} name={id} id={id} className="form-control">
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCustom;
