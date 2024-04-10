import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseInput } from './BaseInput';

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  args: {
    onPressEnter: () => fn(),
    isError: false,
    errorText: ''
  },
};