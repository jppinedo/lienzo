import React, { useState, useEffect } from 'react';

export interface SwitchProps {
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  onChange?: (active: boolean) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ 
  size = 'md', 
  isActive = false, 
  onChange,
  className
}) => {
  const [active, setActive] = useState(isActive);

  const handleOnChange = () => {
    setActive(!active);
    onChange && onChange(!active);
  };

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const sizeClasses = {
    sm: {
      container: 'h-3 w-6',
      inner: 'h-3 w-3',
    },
    md: {
      container: 'h-4 w-8',
      inner: 'h-4 w-4',
    },
    lg: {
      container: 'h-6 w-12',
      inner: 'h-6 w-6',
    },
  };

  const propClass = className || '';

  return (
    <div
      className={`relative ${sizeClasses[size].container} rounded-full cursor-pointer ${active ? 'bg-green' : 'bg-gray-opacity-30'} ${propClass}`}
      onClick={handleOnChange}
    >
      <div
        className={`absolute top-0 transform transition-transform border border-gray-100 dark:border-none duration-200 ease-in-out ${sizeClasses[size].inner} rounded-full dark:shadow-none bg-white ${active ? 'translate-x-full ' : 'translate-x-0 dark:bg-gray-300'}`}
      />
    </div>
  );
};

export default Switch;