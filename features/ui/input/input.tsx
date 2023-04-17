import React from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

type InputProps = {
  hasError?: boolean;
  disabled?: boolean;
  labelText?: string;
  placeholder?: string;
  errorMessage?: string;
  hintMessage?: string;
  inputIcon?: string;
};
const InputContainer = styled.div`
  width: 320px;
  display: block;
`;
const DynamicInputBox = styled.div<InputProps>`
  position: relative;
  align-items: center;
  text-align: left;
  margin: 0px;
  padding: 0;
  width: 320px;
  box-sizing: border-box;
  color: ${color("gray", 900)};
  border: 1px solid ${color("gray", 300)};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  height: 44px;
  gap: 0.5rem;
  padding: 10px 14px;
  background: white;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 1px 2px ${color("gray", 100)};
  &:active {
    border: 1px solid ${color("primary", 300)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
  }
  &:focused {
    border: 1px solid ${color("primary", 300)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
  }
  ${(props) =>
    props.disabled &&
    css`
      color: ${color("gray", 500)};
      background: ${color("gray", 50)};
      border: 1px solid ${color("gray", 300)};
      box-shadow: none;
      &:active {
        border: 1px solid ${color("gray", 300)};
        box-shadow: none;
      }
      &:focused {
        border: 1px solid ${color("gray", 300)};
        box-shadow: none;
      }
    `};

  ${(props) =>
    props.hasError &&
    css`
      border: 1px solid ${color("error", 300)};
      &:active:not(:disabled) {
        border: 1px solid ${color("error", 300)};
        box-shadow: 0px 0px 0px 4px ${color("error", 100)};
      }
      &:focused:not(:disabled) {
        border: 1px solid ${color("error", 300)};
        box-shadow: 0px 0px 0px 4px ${color("error", 100)};
      }
    `};
`;

const DynamicInput = styled.input<InputProps>`
  width: 320px;
  position: absolute;
  left: 14px;
  bottom: 11px;
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  ${(props) =>
    props.inputIcon &&
    props.inputIcon.length > 0 &&
    css`
      left: 35px;
    `};
`;

const InputErrorIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 44px;
  height: 44px;
  border: none;
  background-color: transparent;
  background-image: url("/icons/error-icon.svg");
  background-repeat: no-repeat;
  background-position: center center;
`;

const InputIcon = styled.div<InputProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 44px;
  height: 44px;
  border: none;
  background-color: transparent;
  background-image: url(${(props) => props.inputIcon});
  background-repeat: no-repeat;
  background-position: center center;
`;

const NothingAdded = styled.div`
  color: ${color("gray", 500)};
`;
const Hint = styled.div`
  color: ${color("gray", 500)};
  font-size: 0.875rem;
  line-height: 1.25rem;
  weight: 400;
  margin: 0;
  padding: 6px 0px 0px 0px;
`;

const Error = styled.div`
  color: ${color("error", 500)};
  font-size: 0.875rem;
  line-height: 1.25rem;
  weight: 400;
  margin: 0;
  padding: 6px 0px 0px 0px;
`;

const Label = styled.div`
  color: ${color("gray", 700)};
  font-size: 0.875rem;
  line-height: 1.25rem;
  weight: 500;
  margin: 0px 0px 6px 0px;
  padding: 0px 0px 0px 0px;
`;

export const Input: React.FC<InputProps> = ({
  hasError = false,
  inputIcon = "/icons/email.svg",
  labelText = "Email",
  disabled = false,
  hintMessage = "This is a hint to help the user.",
  errorMessage = "This is an error message.",
  placeholder = "olivia@untitledui.com",
}) => {
  return (
    <InputContainer>
      {labelText && <Label>{labelText}</Label>}
      <DynamicInputBox disabled={disabled} hasError={hasError}>
        {inputIcon && <InputIcon inputIcon={inputIcon}></InputIcon>}
        <DynamicInput
          inputIcon={inputIcon}
          disabled={disabled}
          placeholder={placeholder}
        />
        {hasError && <InputErrorIcon></InputErrorIcon>}
      </DynamicInputBox>
      {hasError && <Error>{errorMessage}</Error>}
      {!hasError && hintMessage && <Hint>{hintMessage}</Hint>}
    </InputContainer>
  );
};
