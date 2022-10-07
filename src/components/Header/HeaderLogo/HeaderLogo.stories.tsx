// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderLogo from "./HeaderLogo";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Header Logo",
  component: HeaderLogo,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#121212",
        },
      ],
    },
  },
} as ComponentMeta<typeof HeaderLogo>;

export const Default: ComponentStory<typeof HeaderLogo> = () => <HeaderLogo />;
