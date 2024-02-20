import type { Meta, StoryObj } from '@storybook/react';

import TextField from '../TextField/TextField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   // color: { control: 'color' },
  // },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Standart: Story = {
  args:{
    id:'standart',
    label:'Standart',
    type:'text',
    variant:'standart'
  }
};

export const Outlined: Story = {
    args:{
      id:'outlined',
      label:'Outlined',
      type:'text',
      variant:'outlined'
    }
  };
  
  export const Filled: Story = {
    args:{
      id:'filled',
      label:'Filled',
      type:'text',
      variant:'filled'
    }
  };
  
  export const StandartError: Story = {
    args:{
      id:'standartError',
      label:'Error',
      type:'text',
      variant:'standart',
      error:true
    }
  };
  
  export const OutlinedError: Story = {
    args:{
      id:'outlinedError',
      label:'Error',
      type:'text',
      variant:'outlined',
      error:true,
    }
  };
  
  export const FilledError: Story = {
    args:{
      id:'filledError',
      label:'Error',
      type:'text',
      variant:'filled',
      error:true
    }
  };
  
  export const DefaultInput: Story = {
    args:{
        id:'default',
        label:'Default',
      }
  }
