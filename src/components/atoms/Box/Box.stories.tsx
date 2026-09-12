import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Box, { BoxProps } from './Box';
import Title from '@atoms/Title/Title';
import SquareBackground from '@assets/SVG/SquaresBackground';
import Button from '../Button/Button';

export default {
  title: 'Atoms/Box',
  component: Box,
  argTypes: {
    type: { control: 'select', options: ['default', 'glass'] },
    className: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    header: { control: false, table: { disable: true } },
    footer: { control: false, table: { disable: true } },
  },
} as Meta;

const Template: StoryFn<BoxProps> = (args) => (
  <div className='p-3'><Box {...args} /></div>
);

export const Default = Template.bind({});
Default.args = {
  header: <Title size='lg'>Sample title</Title>,
  footer: <Button label='Click me' type='red' onClick={() => console.log('Button clicked')} />,
  children: (
    <p className='mt-2 mb-4 text-gray-600 dark:text-blue-200'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at pellentesque aliquet nisl.
    </p>
  ),
  className: 'w-5/12',
  type: 'default',
};
Default.tags = ['!dev'];

export const GlassBox = () => (
  <div className='p-3 h-full'>
  <div className='relative py-20 h-full w-full rounded-xl overflow-hidden'>
    <div className='h-full w-full absolute top-0 left-0' >
      <SquareBackground />
    </div>
    <div className='relative z-10 items-center justify-center flex h-full w-full'>
      <Box
        type='glass'
        className='w-5/12 p-8 text-white'
        header={<Title size='xxl'>Sample title</Title>}
        footer={<Button label='Click me' type='red' onClick={() => console.log('Button clicked')} />}
      >
        <p className='mt-2 mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at pellentesque aliquet nisl.
        </p>
      </Box>
    </div>
  </div>
  </div>
);
GlassBox.parameters = { controls: { disable: true } };
