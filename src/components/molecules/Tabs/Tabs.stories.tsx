import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Tabs from './Tabs';
import Label from '@atoms/Label/Label';
import { Download } from 'react-feather';

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  argTypes: {
    activeTab: { control: 'text' },
    tabs: { control: false, table: { disable: true } },
  },
} as Meta;

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;
const containerClass = 'flex justify-center items-center h-64 border border-blue-200 bg-gray-100 dark:border-none dark:bg-gray-900 dark:text-blue-200';

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { 
      id: '1', 
      label: <Label text="First tab" />, 
      content: (
        <div className={`${containerClass}`}>
          Content for Tab 1
        </div>
      )
    },
    { 
      id: '2', 
      label: <Label text="This is the second tab" items={2} />, 
      content: (
        <div className={`${containerClass}`}>
          Content for Tab 2
        </div>
      ) 
    },
    { 
      id: '3', 
      label: <Label text="Download" icon={<Download size={16} />}/>, 
      content: (
        <div className={`${containerClass}`}>
          Content for Tab 3
        </div>
      ) 
    },
    { 
      id: '4', 
      label: <Label text="Tab as well" items={14}/>, 
      content: (
        <div className={`${containerClass}`}>
          Content for Tab 4
        </div> 
      )
    },
    { 
      id: '5', 
      label: 'Tab 5', 
      content: (
        <div className={`${containerClass}`}>
          Content for Tab 5
        </div>
      ) 
    },
  ],
};
Default.tags = ['!dev'];
