import React, {useState} from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';
import Box from '@atoms/Box/Box';
import Label from '@atoms/Label/Label';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    isActive: { control: 'boolean' },
    className: { control: false, table: { disable: true } },
    onChange: { control: false, table: { disable: true } },
  },
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  isActive: false,
};
Default.tags = ['!dev'];

export const Sizes = () => {
  const [activeSwitches, setActiveSwitches] = useState([false, false, false]);

  const toggleSwitch = (index: number) => {
    const updatedSwitches = activeSwitches.map((_, i) => i === index ? !activeSwitches[i] : activeSwitches[i]);
    setActiveSwitches(updatedSwitches);
  };

  return (
  <>
  <Box className="flex gap-4 items-center">
    <Switch size="sm" />
    <Switch size="md" />
    <Switch size="lg" />
  </Box>

  <Box className="flex gap-4 mt-4">
    <span tabIndex={0} onClick={() => toggleSwitch(0)} className='flex items-center cursor-pointer rounded-full hover:bg-gray-opacity-14 py-1 px-3'>
      <Switch size="sm" isActive={activeSwitches[0]} className='mr-2'/>
      <Label text='Some setting here' type={`${activeSwitches[0] ? 'green' : 'default'}`}/>
    </span>
    <span tabIndex={0} onClick={() => toggleSwitch(1)} className='ml-4 flex items-center cursor-pointer rounded-full hover:bg-gray-opacity-14 py-1 px-3'>
      <Switch size="md" isActive={activeSwitches[1]} className='mr-2'/>
      <Label text='Some setting here'/>
    </span>
    <span tabIndex={0} onClick={() => toggleSwitch(2)} className='ml-4 flex items-center cursor-pointer rounded-full hover:bg-gray-opacity-14 py-1 px-3'>
      <Switch size="lg" isActive={activeSwitches[2]} className='mr-2'/>
      <Label text='Some setting here'/>
    </span>
  </Box>
  </>
  );
};
Sizes.parameters = { controls: { disable: true } };
