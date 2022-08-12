import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { KSelectProps } from '../components/k-select';
import Select from '../components/k-select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: any) => <Select {...args} />;

export const Normal: any = Template.bind({});
Normal.args = {
  options: [
    { label: '我是第一个选项', value: '111' },
    { label: '我是第二个选项', value: '222' },
    { label: '我是第三个选项', value: '333' },
    { label: '我是第四个选项', value: '444' },
  ],
  allowClear: false,
  showSearch: false,
  //   disabled: false,
} as KSelectProps;
