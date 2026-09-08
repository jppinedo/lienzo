// Label.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';
import { Archive, Camera, Clock, Gift } from 'react-feather';

const icons = {
  Archive: <Archive />,
  Camera: <Camera />,
  Clock: <Clock />,
  Gift: <Gift />,
};

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    className: { control: 'text' },
    items: { control: 'number' },
    icon: { control: { type: 'select', options: Object.keys(icons) } },
    type: { control: { type: 'select', options: ['default', 'red', 'yellow', 'green'] } },
    text: { control: 'text' },
  },
} as Meta;

type LabelPropsString = Omit<LabelProps, 'icon'> & { icon: keyof typeof icons };

const Template: StoryFn<LabelPropsString> = (args) => {
  const icon: React.ReactElement = icons[args.icon];
  return <Label {...args} icon={icon} />;
};

export const CustomizableLabel = Template.bind({});
CustomizableLabel.args = {
  className: '',
  items: 1,
  icon: 'Archive',
  type: 'default',
  text: 'Label',
};

export const AllColors = () => (
  <>
  <div className='flex gap-6 mb-8'>
    <Label className="" text="Default text here" />
    <Label className="" type="red" text="Some of the red" />
    <Label className="" type="yellow" text="Why not yellow" />
    <Label className="" type="green" text="Green is life" />
  </div>
  <div className="flex gap-6 mb-8">
    <Label className="" items={3} text="Default text here" />
    <Label className="" items={7} type="red" text="Some of the red" />
    <Label className="" items={13} type="yellow" text="Why not yellow" />
    <Label className="" items={50} type="green" text="Green is life" />
  </div>
  <div className="flex gap-6 mb-8">
    <Label className="" icon={<Archive />} text="Default text here" />
    <Label className="" icon={<Camera />} type="red" text="Some of the red" />
    <Label className="" icon={<Clock />} type="yellow" text="Why not yellow" />
    <Label className="" icon={<Gift />} type="green" text="Green is life" />
  </div>
  <div className="flex gap-6 mb-8">
    <Label className="" icon={<Archive />} items={3} text="Default text here" />
    <Label className="" icon={<Camera />} items={7} type="red" text="Some of the red" />
    <Label className="" icon={<Clock />} items={13} type="yellow" text="Why not yellow" />
    <Label className="" icon={<Gift />} items={50} type="green" text="Green is life" />
  </div>
  </>
);

AllColors.parameters = {
  controls: {
    disable: true
  }
};