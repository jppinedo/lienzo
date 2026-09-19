import React, { CSSProperties } from 'react';
import type { BackgroundProps } from './Background.types';
import { resolveBackgroundColor } from './resolveBackgroundColor';
import './DottedBackground.css';

type DottedBackgroundProps = Omit<BackgroundProps, 'type'>;

const DottedBackground: React.FC<DottedBackgroundProps> = ({
  colors,
  isHexColors,
  children,
  className,
  rounded = false,
  vignette = false,
  vignetteColor,
}) => {
  const fill = colors[0];
  const dot = colors[1] ?? colors[0];
  const vignetteSource = vignetteColor ?? fill;

  const cssVars = {
    '--bg-dotted-fill': resolveBackgroundColor(fill, isHexColors),
    '--bg-dotted-dot': resolveBackgroundColor(dot, isHexColors),
    '--bg-dotted-vignette': resolveBackgroundColor(vignetteSource, isHexColors),
  } as CSSProperties;

  return (
    <div
      className={`bg-dotted ${rounded ? 'rounded-3xl' : ''} ${className || ''}`.trim()}
      style={cssVars}
    >
      <div className="bg-dotted__pattern" aria-hidden="true" />
      {vignette && (
        <div className="bg-dotted__vignette" aria-hidden="true" />
      )}
      {children != null && (
        <div className="bg-dotted__content">{children}</div>
      )}
    </div>
  );
};

export default DottedBackground;
