import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Yellow: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Green: Story = {
  args: {
    label: 'Button',
  },
};

export const Red: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};
