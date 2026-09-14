import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'xxl'] },
    fontFamily: { control: 'select', options: ['lexend', 'poppins', 'playfair', 'jakarta'] },
    thikness: { control: 'select', options: ['thin', 'regular', 'bold'] },
    children: { control: 'text' },
    className: { control: 'text' },
    uppercase: { control: 'boolean' },
    dot: { control: 'boolean' },
    dotTone: { control: 'select', options: ['coral', 'teal', 'amber'] },
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

export const Fonts = () => (
  <div className="flex flex-col gap-3">
    <Title fontFamily="lexend">Lexend</Title>
    <Title fontFamily="poppins">Poppins</Title>
    <Title fontFamily="playfair" thikness="bold">
      Playfair Display
    </Title>
    <Title fontFamily="jakarta">Plus Jakarta Sans</Title>
  </div>
);
Fonts.parameters = { controls: { disable: true } };

export const UppercaseWithDot = () => (
  <div className="flex flex-col gap-3">
    <Title uppercase dot dotTone="coral" size="sm" fontFamily="jakarta" thikness="bold">
      Overview
    </Title>
    <Title uppercase dot dotTone="teal" size="sm" fontFamily="jakarta" thikness="bold">
      Scenarios
    </Title>
    <Title uppercase dot dotTone="amber" size="sm" fontFamily="jakarta" thikness="bold">
      Implementation
    </Title>
  </div>
);
UppercaseWithDot.parameters = { controls: { disable: true } };

export const SectionPair = () => (
  <div className="flex flex-col gap-6">
    <div>
      <Title uppercase dot dotTone="coral" size="sm" fontFamily="jakarta" thikness="bold">
        Overview
      </Title>
      <Title fontFamily="playfair" size="xl" thikness="bold">
        Component Description
      </Title>
    </div>
    <div>
      <Title uppercase dot dotTone="teal" size="sm" fontFamily="jakarta" thikness="bold">
        Scenarios
      </Title>
      <Title fontFamily="playfair" size="xl" thikness="bold">
        Common Use Cases
      </Title>
    </div>
  </div>
);
SectionPair.parameters = { controls: { disable: true } };
