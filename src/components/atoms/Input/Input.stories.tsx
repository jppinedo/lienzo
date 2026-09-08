// Input.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DownloadCloud, CheckCircle, GitHub, AlertCircle } from 'react-feather';
import Input, { InputProps } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select', options: ['default', 'red', 'green'] },
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    icon: {
      control: { type: 'object' }, // Updated control type for icon
    },
    iconPosition: {
      control: { type: 'select', options: ['left', 'right'] },
    },
    hint: {
      control: 'text',
    },
    initialValue: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const EditableInput = Template.bind({});
EditableInput.args = {
  type: 'default',
  label: 'Username',
  placeholder: 'Enter your username',
  icon: <GitHub />,
  iconPosition: 'left',
  hint: 'This is a hint for the username input',
  initialValue: 'JohnDoe',
};

export const AllTypes = () => (
  <div className="flex gap-2">
    <Input 
      type="default" 
      label="Default" 
      placeholder="This is a default input" 
      icon={<DownloadCloud />} 
      iconPosition="left" 
      hint='This is a hint for the default input'
    />
    <Input 
      type="green" 
      label="Green" 
      placeholder="This is a green input" 
      icon={<CheckCircle />} 
      iconPosition="right" 
      hint="This Input was successfully validated"
    />
    <Input 
      type="red" 
      label="Red" 
      placeholder="This is a red input" 
      icon={<AlertCircle />} 
      iconPosition="right"
      hint="This Input has an error"
    />
  </div>
);

AllTypes.parameters = {
  controls: {
    disable: true
  }
};