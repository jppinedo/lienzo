import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  argTypes: {
    colorClass: { control: 'text' },
    size: { control: 'text' },
    thickness: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorClass: 'border-red',
  size: '1rem',
  thickness: '0.2rem',
};

export const RedLarge = Template.bind({});
RedLarge.args = {
  colorClass: 'border-green',
  size: '2rem',
  thickness: '0.4rem',
};