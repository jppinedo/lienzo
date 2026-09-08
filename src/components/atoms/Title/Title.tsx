
import React from 'react';
import { titleStyles } from './TitleStyles';
import type SizesTypes from '@interfaces/sizes';

export interface TitleProps {
  size?: SizesTypes;
  children: React.ReactNode;
  thikness?: 'thin' | 'regular' | 'bold';
  fontFamily?: 'lexend' | 'poppins';
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
  fontFamily = 'poppins'
}) => {

  const sizeToTag = {
    'sm': 'h5',
    'md': 'h4',
    'lg': 'h3',
    'xl': 'h2',
    'xxl': 'h1',
  };

  const Tag: keyof typeof TitleTags = sizeToTag[size] as keyof typeof TitleTags;

  const classes = `${titleStyles.base} ${titleStyles[size]} font-${thikness} font-${fontFamily}`;

  return (
    <Tag className={classes}>
        {children}
    </Tag>
  );
};

export default Title;