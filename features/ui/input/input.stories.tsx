import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  hasError,
  inputIcon,
  labelText,
  errorMessage,
  hintMessage,
  placeholder,
}) => (
  <div>
    <Input
      hintMessage={hintMessage}
      hasError={hasError}
      errorMessage={errorMessage}
      inputIcon={inputIcon}
      labelText={labelText}
      placeholder={placeholder}
    ></Input>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  hasError: false,
  disabled: false,
};
Default.parameters = {
  viewMode: "docs",
};
