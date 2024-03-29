import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = () => <Footer />;
