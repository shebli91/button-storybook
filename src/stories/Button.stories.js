import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "text",
        options: ["red", "blue", "green"],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Text Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Medium Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large Button",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: "red",
  children: "Custom Color Button",
};
