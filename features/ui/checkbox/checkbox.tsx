import React from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";
import { useState } from "react";

// const [checkstate, setCheckstate] = useState("unchecked");
export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  unchecked = "unchecked",
  checked = "checked",
  partlychecked = "partlychecked",
}

type CheckboxProps = {
  children: React.ReactNode;
  size?: CheckboxSize;
  state?: CheckboxState;
  // onClick?: () => toggleState();
  disabled?: boolean;
};

// export default function toggleState(checkbox) {
//     if checkbox.checkstate === "unchecked" {
//         setCheckstate(checked);
//     } elseif checkbox.checkstate === "partchecked" {

//     }
// }
const CheckboxContainer = styled.div<CheckboxProps>`
  ${(props) => {
    switch (props.size) {
      case CheckboxSize.sm:
        return css`
          display: flex;
          align-items: center;
          color: ${color("gray", 700)};
          font-size: 0.875rem;
          line-height: 1.125rem;
          gap: 8px;
          &:disabled {
            opacity: 0.5;
          }
        `;
      case CheckboxSize.md:
        return css`
          display: flex;
          align-items: center;
          color: ${color("gray", 700)};
          font-size: 1rem;
          line-height: 1.5rem;
          gap: 12px;
          &:disabled {
            opacity: 0.5;
          }
        `;
    }
  }}
`;

const CheckboxSquare = styled.div<CheckboxProps>`
  ${(props) => {
    switch (props.size) {
      case CheckboxSize.sm:
        return css`
          width: 1rem;
          height: 1rem;
          border-radius: 4px;
          font-size: 0.875rem;
          border: 1px solid ${color("gray", 300)};
          &:disabled {
            opacity: 0.5;
          }
        `;
      case CheckboxSize.md:
        return css`
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 6px;
          font-size: 1rem;
          border: 1px solid ${color("gray", 300)};
          &:disabled {
            opacity: 0.5;
          }
        `;
    }
  }}
  ${(props) => {
    switch (props.state) {
      case CheckboxState.unchecked:
        return css`
          &:hover:not(:disabled) {
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 600)};
          }
          &:focused:not(:disabled) {
            background: white;
            border: 1px solid ${color("primary", 300)};
            box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case CheckboxState.checked:
        return css`
          &::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background-image: url("/icons/check-large.svg");
            background-repeat: no-repeat;
            background-size: 0.8em;
            background-position: center center;
          }
          border: 1px solid ${color("primary", 600)};
          background: ${color("primary", 50)};
          &:focused:not(:disabled) {
            box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case CheckboxState.partlychecked:
        return css`
          &&:before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background-image: url("/icons/partcheck-large.svg");
            background-repeat: no-repeat;
            background-size: 0.8em;
            background-position: center center;
          }

          border: 1px solid ${color("primary", 600)};
          background: ${color("primary", 50)};
          &:focused:not(:disabled) {
            box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
    }
  }}
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  state = CheckboxState.unchecked,
  disabled = false,
  size = CheckboxSize.md,

  //onClick,
  children,
}) => (
  <CheckboxContainer
    state={state}
    size={size}
    disabled={disabled}
    // onClick = {onClick}
  >
    <CheckboxSquare
      state={state}
      size={size}
      disabled={disabled}
      // onClick = {onClick}
    >
      {""}
    </CheckboxSquare>
    {children}
  </CheckboxContainer>
);
