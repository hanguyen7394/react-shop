import React from 'react';

const SelectCustom = ({ className = '', onChange, value, id, defaultValue, options }) => {
  return (
    <div className={`select-custom ${className}`}>
      <select onChange={onChange} value={value} name={id} id={id} className="form-control">
        {options?.map((option) => (
          <option key={option?.value} value={option?.value} defaultValue={defaultValue === option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCustom;
