import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {layout:'centered'},
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Outlined: Story = {
  args:{
    children:'button',
    variant: 'outlined',
  }
};