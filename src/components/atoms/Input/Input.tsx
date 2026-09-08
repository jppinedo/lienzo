import React, { useState } from 'react';
import InputStyles from './InputStyles';

export interface InputProps {
  type: 'default' | 'red' | 'green';
  label: string;
  placeholder?: string;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  hint?: string;
  initialValue?: string;
};

const Input: React.FC<InputProps> = ({ 
  type, 
  label, 
  placeholder = 'Enter your text', 
  icon, 
  iconPosition,
  hint,
  initialValue
 }) => {
  const [value, setValue] = useState(initialValue || '');
  const [isFocused, setIsFocused] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const containerClasses = [
    InputStyles.container,
    (isFocused ? InputStyles[type].focused : 'border-transparent'), 
    iconPosition, 
    InputStyles[type].container
  ].join(' ');

  const inputClasses = [InputStyles.input, InputStyles[type].input].join(' ');

  return (
    <label className={`input ${InputStyles.label}`}>
      {label}
      <div className={containerClasses}>
        {icon && iconPosition === 'left' && ( // icon left
          <div className={`${InputStyles[type].icon} ml-2`}>{icon}</div>
        )}
        <input
          className={inputClasses}
          type="text"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
        />
        {icon && iconPosition === 'right' && ( // icon right
          <div className={`${InputStyles[type].icon} mr-2`}>{icon}</div>
        )}
      </div>
      {hint && <p className={`text-sm ${InputStyles[type].hint}`}>{hint}</p>}
    </label>
  );
};

export default Input;