import React, { createContext, useContext, useEffect, useState } from 'react';

const RadioContext = createContext();

const RadioGroup = ({ defaultValue, children, className, onGroupChange }) => {
  const [checkedValue, setCheckedValue] = useState(defaultValue);

  useEffect(() => {
    // console.log('here')
    setCheckedValue(defaultValue || '');
  }, [defaultValue])


  const onRadioChange = (e) => {
    const value = e.target.value;
    setCheckedValue(value);
    onGroupChange?.(value);
  };

  return (
    <RadioContext.Provider value={{ checkedValue, onRadioChange }} className={`radio-group ${className}`}>
      {children}
    </RadioContext.Provider>
  );
};

const RadioItem = ({ children, disabled = false, value }) => {
  const { checkedValue, onRadioChange } = useContext(RadioContext);

  return (
    <div className="custom-control custom-radio">
      <input
        type="radio"
        className="custom-control-input"
        id={value}
        name={value}
        value={value}
        checked={checkedValue === value}
        onChange={onRadioChange}
        disabled={disabled}
      />
      <label className="custom-control-label" htmlFor={value} style={{ cursor: 'pointer' }}>
        {children}
      </label>
    </div>
  );
};

RadioGroup.Item = RadioItem;

export default RadioGroup;
