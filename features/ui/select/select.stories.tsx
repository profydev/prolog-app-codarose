import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "clicked " } },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  hasError,
  options,
  labelText,
  errorMessage,
  hintMessage,
  placeholder,
}) => (
  <div>
    <Select
      hintMessage={hintMessage}
      hasError={hasError}
      errorMessage={errorMessage}
      options={options}
      labelText={labelText}
      placeholder={placeholder}
    ></Select>
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
