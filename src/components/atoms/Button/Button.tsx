import React, {cloneElement} from "react";
import { buttonStyles, iconStyles } from "./ButtonStyles";
import './Button.css';

export interface ButtonProps {
  label?: string;
  onClick: () => void;
  ariaLabel?: string;
  mode?: 'default' | 'tool';
  type?: 'default' | 'red' | 'green' | 'yellow';
  fill?: 'solid' | 'outline' | 'ghost';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  ariaLabel, 
  mode = 'default',
  type = 'default', 
  fill = 'solid',
  icon,
  iconPosition = 'left'
}) => {
  const modeStyles = buttonStyles.mode[mode];
  const styles = buttonStyles[type][fill];

  const getIconSized = (size: string) => {
    return React.isValidElement(icon) && !icon.props.size
      ? cloneElement(icon as React.ReactElement<any>, { size })
      : icon;
  }

  const ButtonDefault = () => {
    let sizedIcon;
    if(icon) sizedIcon = getIconSized('18');
    const iconMargin = iconPosition === 'left' ? 'mr-2' : 'ml-2';
    const iconEl = <span className={`${iconMargin} ${iconStyles[type]}`}>{sizedIcon}</span>;

    return (
      <>
        {icon && iconPosition === 'left' && iconEl}
        {label && label}
        {icon && iconPosition === 'right' && iconEl}
      </>
    );
  }

  const ButtonTool = () => {
    let sizedIcon;
    if(icon) sizedIcon = getIconSized('32');
    const styles = iconStyles[type][fill];
    const iconEl = <span className={styles}>{sizedIcon}</span>;
    return (
      <>
        {icon && iconPosition === 'top' && iconEl}
        {label && label}
        {icon && iconPosition === 'bottom' && iconEl}
      </>
    );
  }
  return (
    <button
        className={`lz-button-${mode} ${modeStyles} ${styles}`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
    {mode === 'tool' ? (
      <ButtonTool />
    ) : (
      <ButtonDefault />
    )}
    </button>
  );
  
}

export default Button;