import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Menu, { MenuProps } from './Menu';
import { LabelProps } from '@components/atoms/Label/Label';
import { Home, Inbox, MessageSquare, Settings, User } from 'react-feather';

export default {
  title: 'Molecules/Menu',
  component: Menu,
} as Meta;

const Template: StoryFn<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Menu',
  items: [
    {
      label: { text: 'Home', type: 'default', icon: <Home size={16} />, items: 10 } as LabelProps,
      onClick: () => console.log('Home clicked'),
    },
    {
      label: { text: 'Inbox', type: 'red', icon: <Inbox size={16} />, items: 5 } as LabelProps,
      onClick: () => console.log('Inbox clicked'),
    },
    {
      label: { text: 'Messages', type: 'yellow', icon: <MessageSquare size={16} /> } as LabelProps,
      onClick: () => console.log('Messages clicked'),
    },
    {
      label: { text: 'Settings', type: 'default', icon: <Settings size={16} /> } as LabelProps,
      onClick: () => console.log('Settings clicked'),
    },
    {
      label: { text: 'Profile', type: 'default', icon: <User size={16} /> } as LabelProps,
      onClick: () => console.log('Profile clicked'),
    },
  ],
};