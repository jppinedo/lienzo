import React from 'react';
import {
  boxStyles,
  boxContentArea,
  boxHeader,
  boxContent,
  boxFooter,
} from './BoxStyles';

export interface BoxProps {
  children: React.ReactNode;
  className?: string;
  type?: 'glass' | 'default';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
  children,
  className,
  type = 'default',
  header,
  footer,
}) => {
  if (type === 'glass') {
    return (
      <div className={`${boxStyles.glass} ${className || ''}`}>
        {header != null && <div data-box-header>{header}</div>}
        {children}
        {footer != null && <div data-box-footer>{footer}</div>}
      </div>
    );
  }

  return (
    <div className={`${boxStyles.default} ${className || ''}`}>
      <div data-box-content-area className={boxContentArea}>
        {header != null && (
          <div data-box-header className={boxHeader}>
            {header}
          </div>
        )}
        <div data-box-content className={boxContent}>
          {children}
        </div>
      </div>
      {footer != null && (
        <div data-box-footer className={boxFooter}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Box;
