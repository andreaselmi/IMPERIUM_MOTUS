import * as React from "react";
import Button from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      // Custom control type
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Secondary Button",
};
