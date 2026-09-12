import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  argTypes: {
    colorClass: {
      control: {
        type: 'select',
        labels: {
          'border-red': 'Red',
          'border-green': 'Green',
          'border-yellow': 'Yellow',
          'border-gray-700': 'Gray',
          'border-black': 'Black',
        },
      },
      options: ['border-red', 'border-green', 'border-yellow', 'border-gray-700', 'border-black'],
    },
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
Default.tags = ['!dev'];

export const RedLarge = Template.bind({});
RedLarge.args = {
  colorClass: 'border-green',
  size: '2rem',
  thickness: '0.4rem',
};
RedLarge.parameters = { controls: { disable: true } };
