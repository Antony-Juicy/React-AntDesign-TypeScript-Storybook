import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { KInput } from '../components';

export default {
  title: 'KInput',
  component: KInput,
  // subcomponents: { KInput },
  argTypes: {
    size: {
      options: ['large', 'middle'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof KInput>;

const defaultInput: ComponentStory<typeof KInput> = (args: any) => (
  <KInput style={{ width: '200px' }} {...args} />
);

export const Input = defaultInput.bind({});

Input.args = {
  allowClear: false,
  disabled: false,
};

export const WithStoryDescription = defaultInput.bind({});
WithStoryDescription.parameters = {
  docs: {
    description: {
      story: `Some story **markdown** `,
    },
  },
};
