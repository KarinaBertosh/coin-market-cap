import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/UI/Modal/Modal';
import { BaseInput } from '../components/UI/BaseInput/BaseInput';


const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
  args: {
    isModalOpen: true,
    setIsModalOpen: () => console.log(1),    
    title: '',
    children: <BaseInput onPressEnter={() => console.log(1)}
    isError={false}
    errorText={''}/>,
  },
};