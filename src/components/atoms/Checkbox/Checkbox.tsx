import React, { useState, useEffect } from 'react';
import { Check } from 'react-feather';

export interface CheckboxProps {
  size?: 'sm' | 'md' | 'lg';
  onChange?: (checked: boolean) => void;
  isChecked?: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  size = 'md', 
  onChange, 
  isChecked = false,
  className,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = () => {
    setChecked(!checked);
    onChange && onChange(!checked);
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const sizeClasses = {
    sm: 'h-4 w-4 p-0.5',
    md: 'h-5 w-5 p-1',
    lg: 'h-6 w-6 p-1',
  };

  const bgClass = checked ? 'bg-green' : 'bg-white dark:border dark:border-gray-600 dark:bg-gray-700 border border-gray-100';
  const propClass = className || '';
  const classes = [
    'flex',
    'inline-block',
    'items-center', 
    'justify-center', 
    'rounded', 
    'border-gray-300', 
    'cursor-pointer', 
    'shadow-sm', 
    'outline-none',
  ].join(' ');

  return (
    <div
      className={`${classes} ${bgClass} ${sizeClasses[size]} ${propClass}`}
      onClick={handleOnChange}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
    >
      {checked && <Check className="text-white" />}
    </div>
  );
};

export default Checkbox;