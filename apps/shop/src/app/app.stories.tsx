import { Story, Meta } from '@storybook/react';
import { App } from './app';

export default {
  component: App,
  title: 'App/App',
} as Meta;

const Template: Story<any> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
