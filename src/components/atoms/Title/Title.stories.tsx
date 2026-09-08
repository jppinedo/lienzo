// Title.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    size: { control: 'select' },
    fontFamily: { control: 'select' },
    thikness: { control: 'select' },
  } as unknown,
} as Meta;

const Template: StoryFn<TitleProps> = (args) => <Title {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  fontFamily: 'lexend',
  thikness: 'regular',
  children: 'Sample Title',
};