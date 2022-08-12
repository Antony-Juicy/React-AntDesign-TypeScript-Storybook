// import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { KButtonProps } from '../components';
import { KButton } from '../components';
// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   // ArgsTable,
//   Stories,
//   // PRIMARY_STORY,
// } from '@storybook/addon-docs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'KButton',
  component: KButton,
  parameters: {
    docs: {
      description: {
        component: 'some description',
      },
    },
  },
  argTypes: {
    type: { control: { type: 'radio', options: ['primary', 'text', 'default'] } },
    size: { control: { type: 'radio', options: ['small', 'middle', 'large'] } },
  },
} as ComponentMeta<typeof KButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KButton> = (args: any) => <KButton {...args} />;

export const Overview = Template.bind({});
// Overview.argTypes= {
//   type: { control: {type: 'radio', options: ['primary', 'default', 'text']} }
// };

Overview.args = {
  children: 'Button',
  type: 'primary',
  size: 'middle',
  prompt: false,
} as KButtonProps;

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  // ...Overview.args,
  disabled: true,
};

DisabledButton.parameters = {
  docs: {
    description: {
      story: 'Some story description',
    },
  },
};

// ButtonSize.args = {
//   children: 'Button',
//   size: 'middle',
// }

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
