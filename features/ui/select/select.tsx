import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

const nameData = [
  "Olivia Rhye",
  "Phoenix Baker",
  "Lana Steiner",
  "Demi Wilkinson",
  "Candice Wu",
  "Natali Craig",
  "Drew Cano",
];
type SelectDropdownProps = {
  hasError?: boolean;
  options?: [];
  labelText?: string;
  errorMessage?: string;
  hintMessage?: string;
  placeholder?: string;
  disabled?: boolean;
};

const SelectDropdownContainer = styled.div`
  width: 320px;
`;
const SelectDropdown = styled.div<SelectDropdownProps>`

  position: relative;
  display: block;
  text-align: left;
  margin: 0px;
  padding: 0;
  width: 320px;
  box-sizing: border-box;
  color: ${color("gray", 900)}
  font-size: 1rem;
  line-height: 1.5rem;
  weight: 400;
  margin: 0;
  padding: 0;
  border: 1px solid ${color("gray", 300)};
  height: 44px;
  gap: .5rem;
  padding: 10px 14px;
  background: white;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 1px 2px ${color("gray", 100)};
  &:active:not(:disabled) {
    border: 1px solid ${color("primary", 300)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)}
  }
  &:focused:not(:disabled) {
    border: 1px solid ${color("primary", 300)};
    box-shadow: 0px 0px 0px 4px ${color("primary", 100)}
  }
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
const SelectDropdownButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 44px;
  height: 44px;
  border: none;
  background-color: transparent;
  background-image: url("/icons/chevron-dropdown.svg");
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;
const SelectDropdownList = styled.ul`
  list-style: none;
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  width: 320px;
  margin-top: 0.3rem;
  padding: 0;
  height: fit-content;
  font-size: 1rem;
  background: white;
  box-shadow: 0px 12px 16px -4px ${color("gray", 100)},
    0px 4px 6px -2px ${color("gray", 100)};
  border-radius: 0.5rem;
`;
const SelectDropdownOption = styled.li`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: 400;
  padding: 10px 14px;
  color: ${color("gray", 900)};
  line-height: 1.25rem;
  &:hover {
    background: ${color("primary", 25)};
    background-image: url("/icons/check-large.svg");
    background-position: 290px center;
    background-repeat: no-repeat;
    background-size: 13.33x 9.17px;
  }
`;

const NothingSelected = styled.div`
  color: ${color("gray", 500)};
`;

const Label = styled.div`
  color: ${color("gray", 700)};
  font-size: 0.875rem;
  line-height: 1.25rem;
  weight: 500;
  margin: 0px 0px 6px 0px;
  padding: 0px 0px 0px 0px;
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

export const Select: React.FC<SelectDropdownProps> = ({
  hasError = false,
  options = nameData,
  labelText = "Team member",
  errorMessage = "This is an error message",
  hintMessage = "This is a hint",
  placeholder = "Select team member",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: any) => {
    setOptionSelected(value);
    setIsOpen(false);
  };
  return (
    <SelectDropdownContainer>
      {labelText && <Label>{labelText}</Label>}

      <SelectDropdown hasError={hasError}>
        {optionSelected === "" ? (
          <NothingSelected>{placeholder}</NothingSelected>
        ) : (
          <div>{optionSelected}</div>
        )}
        <SelectDropdownButton onClick={toggleOpen} />
        {isOpen && (
          <SelectDropdownList>
            {options.map((option) => (
              <SelectDropdownOption
                key={option}
                onClick={() => handleSelect(option)}
              >
                {option}
              </SelectDropdownOption>
            ))}
          </SelectDropdownList>
        )}
      </SelectDropdown>
      {hasError && <Error>{errorMessage}</Error>}
      {!hasError && hintMessage && <Hint>{hintMessage}</Hint>}
    </SelectDropdownContainer>
  );
};
