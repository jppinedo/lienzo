import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CircleSpinner from './CircleSpinner';

export default {
  title: 'Atoms/CircleSpinner',
  component: CircleSpinner,
  argTypes: {
    colorClass: {
      options: ['bg-red', 'bg-yellow', 'bg-green', 'bg-gray-700', 'bg-black'],
      control: { type: 'select' } 
    },
    thickness: {
      control: { type: 'range', min: 0, max: 2.6, step: 0.1 }
    },
    size: { 
      control: { type: 'number' },
    },
  },
} as Meta;


const Template: StoryFn<typeof CircleSpinner> = (args) => {
  const sizeInRem = `${args.size}rem`;
  return <CircleSpinner {...args} size={sizeInRem} />;
};

export const SingleSpinner = Template.bind({});
SingleSpinner.args = {
  colorClass: 'bg-green',
  thickness: 1,
  size: 6,
};

export const MultipleSpinners = () => (
  <div className='flex p-5 gap-3'>
    <CircleSpinner colorClass='bg-red' thickness={0.5} size='4rem' />
    <CircleSpinner colorClass='bg-green' thickness={0.5} size='4rem' />
    <CircleSpinner colorClass='bg-yellow-dark dark:bg-yellow' thickness={0.5} size='4rem' />
    <CircleSpinner colorClass='bg-gray-900 dark:bg-white' thickness={0.5} size='4rem' />
  </div>
)

MultipleSpinners.parameters = {
  controls: {
    disable: true
  }
};