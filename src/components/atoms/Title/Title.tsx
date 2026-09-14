import React from 'react';
import { titleStyles } from './TitleStyles';
import type SizesTypes from '@interfaces/sizes';

export interface TitleProps {
  size?: SizesTypes;
  children: React.ReactNode;
  thikness?: keyof typeof titleStyles.thikness;
  fontFamily?: keyof typeof titleStyles.fontFamily;
  className?: string;
  uppercase?: boolean;
  dot?: boolean;
  dotTone?: keyof typeof titleStyles.dot;
}

declare const TitleTags: Readonly<{
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  h4: 'h4';
  h5: 'h5';
}>;

const Title: React.FC<TitleProps> = ({
  size = 'md',
  children,
  thikness = 'regular',
  fontFamily = 'poppins',
  className,
  uppercase = false,
  dot = false,
  dotTone = 'coral',
}) => {
  const sizeToTag = {
    sm: 'h5',
    md: 'h4',
    lg: 'h3',
    xl: 'h2',
    xxl: 'h1',
  };

  const Tag: keyof typeof TitleTags = sizeToTag[size] as keyof typeof TitleTags;

  const colorClass = uppercase
    ? titleStyles.colorMuted
    : fontFamily === 'playfair'
      ? titleStyles.colorDisplay
      : titleStyles.base;

  const classes = [
    'm-0',
    colorClass,
    titleStyles[size],
    titleStyles.thikness[thikness],
    titleStyles.fontFamily[fontFamily],
    uppercase ? titleStyles.uppercase : '',
    fontFamily === 'playfair' ? titleStyles.playfairTracking : '',
    dot ? titleStyles.withDot : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={classes}
      style={{
        fontFamily: titleStyles.fontFamilyCss[fontFamily],
        fontWeight: titleStyles.thiknessCss[thikness],
      }}
    >
      {dot ? <span className={titleStyles.dot[dotTone]} aria-hidden="true" /> : null}
      {children}
    </Tag>
  );
};

export default Title;
