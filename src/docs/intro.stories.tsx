import React from 'react';
import { Meta } from '@storybook/react';
import Background, {BackgroundProps} from '@atoms/Background/Background';
import LienzoLogo from '@assets/SVG/LienzoLogo';

export default {
  title: 'Intro',
} as Meta;

export const Welcome = () => (
  <Background colors={['#8cc8ba', '#f5f5eb', '#f8b67a', '#f99280', '#f99280']} isHexColors>
    <div className="p-10 max-w-2xl mx-auto bg-pio-bg-light my-12 rounded-xl">
      <LienzoLogo />
      <h1 className="text-4xl font-bold mt-5">Welcome to our Design System</h1>
      <p className="mt-5 text-lg">
        This project uses the principles of Atomic Design, leveraging the power of React for component-based architecture, and Tailwind CSS for utility-first styling. 
        We aim to create a robust, scalable, and consistent design system that makes development faster and easier.
      </p>
    </div>
  </Background>
);