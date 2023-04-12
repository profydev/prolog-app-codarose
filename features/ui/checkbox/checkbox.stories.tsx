import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, CheckboxSize, CheckboxState } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ size, state }) => (
  <div>
    <Checkbox state={state} size={size}>
      Label
    </Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.md,
  state: CheckboxState.unchecked,
};
Default.parameters = {
  viewMode: "docs",
};
