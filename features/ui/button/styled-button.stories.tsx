import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import action from "@storybook/addon-actions";
import { StyledButton, ButtonVariant, ButtonSize } from "./styled-button";

export default {
  title: "UI/Button",
  component: StyledButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = ({ size, variant }) => (
  <div style={{ padding: 50 }}>
    <StyledButton variant={variant} size={size}>
      Label
    </StyledButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  variant: ButtonVariant.primary,
};
Default.parameters = {
  viewMode: "docs",
};
