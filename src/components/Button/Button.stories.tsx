import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
    },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  buttonType: "primary",
  label: "Button",
};

Secondary.args = {
  buttonType: "secondary",
  label: "Button",
};
