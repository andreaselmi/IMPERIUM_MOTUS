import React from "react";

import { Provider } from "react-redux";

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./Navbar";

export const MockedState = {
  activeSection: "",
};

// eslint-disable-next-line react/prop-types
const Mockstore = ({ activeSectionState, children }: any) => (
  <Provider
    store={configureStore({
      reducer: {
        activeSection: createSlice({
          name: "activeSection",
          initialState: activeSectionState,
          reducers: {
            setActiveSection: (state, action: PayloadAction<string>) => {
              state.activeSection = action.payload;
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  title: "Navbar",
  component: Navbar,
  decorators: [(story) => <>{story()}</>],
  excludeStories: /.*MockedState$/,
  parameters: {
    backgrounds: {
      default: "imperiumFluo",
      values: [
        {
          name: "imperiumFluo",
          value: "#E1FF2C",
        },
      ],
    },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});

Default.decorators = [
  (story) => <Mockstore activeSectionState={MockedState}>{story()}</Mockstore>,
];
