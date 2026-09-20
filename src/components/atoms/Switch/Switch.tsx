import React, { useState, useEffect } from 'react';
import {
  switchSize,
  switchOff,
  switchOn,
  switchThumb,
  type SwitchSize,
  type SwitchType,
} from './SwitchStyles';

export interface SwitchProps {
  size?: SwitchSize;
  /** Accent when on. `default` uses gray; chromatic types use Pio accents. */
  type?: SwitchType;
  isActive?: boolean;
  onChange?: (active: boolean) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  size = 'md',
  type = 'default',
  isActive = false,
  onChange,
  className,
}) => {
  const [active, setActive] = useState(isActive);

  const handleOnChange = () => {
    setActive(!active);
    onChange && onChange(!active);
  };

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const sizes = switchSize[size];
  const trackClass = active ? switchOn[type] : switchOff;
  const propClass = className || '';

  return (
    <div
      className={`relative ${sizes.container} rounded-full cursor-pointer ${trackClass} ${propClass}`}
      onClick={handleOnChange}
      role="switch"
      aria-checked={active}
      tabIndex={0}
    >
      <div
        className={`${switchThumb} ${sizes.thumb} ${
          active ? sizes.thumbOn : 'translate-x-0'
        }`}
      />
    </div>
  );
};

export default Switch;
