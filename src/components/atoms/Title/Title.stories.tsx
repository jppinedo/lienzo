import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'xxl'] },
    fontFamily: { control: 'select', options: ['lexend', 'poppins'] },
    thikness: { control: 'select', options: ['thin', 'regular', 'bold'] },
    children: { control: 'text' },
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<TitleProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'sm',
  fontFamily: 'lexend',
  thikness: 'regular',
  children: 'Sample Title',
};
Default.tags = ['!dev'];
