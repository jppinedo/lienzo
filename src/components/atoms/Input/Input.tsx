import React, { cloneElement, useState } from 'react';
import { RoundedSizes } from '@interfaces/sizes';
import InputStyles, { inputRounded } from './InputStyles';

export interface InputProps {
  type?: 'default' | 'red' | 'green';
  fill?: 'solid' | 'outline' | 'ghost';
  rounded?: RoundedSizes;
  label?: string;
  placeholder?: string;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  hint?: string;
  initialValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  type = 'default',
  fill = 'solid',
  rounded = 'lg',
  label,
  placeholder = 'Enter your text',
  icon,
  iconPosition = 'left',
  hint,
  initialValue,
  value: valueProp,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(initialValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const variant = InputStyles[type][fill];
  const containerClasses = [
    InputStyles.container,
    inputRounded[rounded],
    variant.container,
    isFocused ? variant.focused : variant.unfocused,
  ].join(' ');

  const inputClasses = [InputStyles.input, variant.input].join(' ');

  const sizedIcon = icon && !icon.props.size
    ? cloneElement(icon as React.ReactElement<any>, { size: 18 })
    : icon;

  const iconEl = sizedIcon && (
    <div className={variant.icon}>{sizedIcon}</div>
  );

  const field = (
    <>
      <div className={containerClasses}>
        {iconEl && iconPosition === 'left' && iconEl}
        <input
          className={inputClasses}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
        />
        {iconEl && iconPosition === 'right' && iconEl}
      </div>
      {hint && <p className={`text-sm ${variant.hint}`}>{hint}</p>}
    </>
  );

  if (!label) {
    return <div className="input">{field}</div>;
  }

  return (
    <label className={`input ${InputStyles.label}`}>
      {label}
      {field}
    </label>
  );
};

export default Input;
