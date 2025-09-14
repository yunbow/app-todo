import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FilterButtons } from '../components/molecules/FilterButtons';

const meta: Meta<typeof FilterButtons> = {
  title: 'Molecules/FilterButtons',
  component: FilterButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onFilterChange: action('onFilterChange'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSelected: Story = {
  args: {
    currentFilter: 'all',
  },
};

export const ActiveSelected: Story = {
  args: {
    currentFilter: 'active',
  },
};

export const CompletedSelected: Story = {
  args: {
    currentFilter: 'completed',
  },
};