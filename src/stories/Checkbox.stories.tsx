import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { KCheckboxProps } from '../components/k-checkbox';
import Checkbox from '../components/k-checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: any) => <Checkbox {...args} />;

export const Indeterminate: any = Template.bind({});
Indeterminate.args = {
  checked: false,
  disabled: false,
  children: 'I am a Checkbox',
  indeterminate: false,
} as KCheckboxProps;
