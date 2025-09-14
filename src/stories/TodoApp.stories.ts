import type { Meta, StoryObj } from '@storybook/react';
import { TodoApp } from '../components/organisms/TodoApp';

const meta: Meta<typeof TodoApp> = {
  title: 'Organisms/TodoApp',
  component: TodoApp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};