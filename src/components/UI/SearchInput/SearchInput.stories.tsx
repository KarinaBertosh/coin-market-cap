import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    onChange: () => fn(),
    isError: false,
    errorText: 'Error: coin not found'
  },
};