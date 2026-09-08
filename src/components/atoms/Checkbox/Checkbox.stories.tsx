import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';
import Label from '@components/atoms/Label/Label';
import Box from '@atoms/Box/Box';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'md',
  isChecked: false,
};

const SizesTemplate: StoryFn = () => {
  const [activeChecks, setActiveChecks] = useState([false, false, false]);
  const toggleCheck = (index: number) => {
    const updatedChecks = activeChecks.map((_, i) => i === index ? !activeChecks[i] : activeChecks[i]);
    setActiveChecks(updatedChecks);
  };
  return(
    <div className='p-3'>
    <Box className="flex gap-4 items-center">
      <Checkbox size="sm" isChecked/>
      <Checkbox size="md" isChecked/>
      <Checkbox size="lg" isChecked/>
    </Box>

    <Box className="mt-4 flex gap-4">
      <span tabIndex={0} onClick={() => toggleCheck(0)} className='flex items-center cursor-pointer rounded-full hover:bg-gray-opacity-14 py-1 px-3'>
        <Checkbox size="sm" isChecked={activeChecks[0]} className='mr-2'/>
        <Label text='Checkbox sm'/>
      </span>
      <span tabIndex={0} onClick={() => toggleCheck(1)} className='flex items-center cursor-pointer rounded-full hover:bg-gray-opacity-14 py-1 px-3'>
        <Checkbox size="md" isChecked={activeChecks[1]} className='mr-2'/>
        <Label text='Checkbox md'/>
      </span>
      <span tabIndex={0} onClick={() => toggleCheck(2)} className='flex items-center cursor-pointer rounded-full hover:bg-gray-opacity-14 py-1 px-3'>
        <Checkbox size="lg" isChecked={activeChecks[2]} className='mr-2'/>
        <Label text='Checkbox lg'/>
      </span>
    </Box>
  </div>
  );
}

export const Sizes = SizesTemplate.bind({});
