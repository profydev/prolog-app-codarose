import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonVariant, ButtonSize } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ size, variant }) => (
  <div style={{ padding: 50 }}>
    <Button variant={variant} size={size}>
      Label
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.lg,
  variant: ButtonVariant.inherit,
};
Default.parameters = {
  viewMode: "docs",
};
