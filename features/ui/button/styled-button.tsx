import React from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonVariant {
  inherit = "inherit",
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptygray = "emptygray",
  error = "error",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
};

const StyledButtonContainer = styled.button<ButtonProps>`
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  border-radius: ${space(2)};

  ${(props) => {
    switch (props.size) {
      case ButtonSize.sm:
        return css`
          padding: 0.5rem 0.875rem;
          height: 2.25;
          ${textFont("sm", "medium")}
        `;
      case ButtonSize.md:
        return css`
          padding: 0.625rem 1rem;
          height: ${space(10)};
          ${textFont("sm", "medium")}
        `;
      case ButtonSize.lg:
        return css`
          padding: 0.625rem 1.125rem;
          height: 2.75rem;
          ${textFont("md", "medium")}
        `;
      case ButtonSize.xl:
        return css`
          padding: ${space(3, 5)};
          height: ${space(12)};
          ${textFont("md", "medium")}
        `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case ButtonVariant.inherit:
        return css`
          background: inherit;
          display: flex;
          color: white;
          align-items: center;
          align-content: center;
          box-shadow: inherit;
          border: inherit;
          &:hover:not(:disabled) {
            background: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
          }
          &:focused:not(:disabled) {
            background: ${color("primary", 600)};
            border: 1px solid ${color("primary", 600)};
            box-shadow: 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case ButtonVariant.primary:
        return css`
          background: ${color("primary", 600)};
          color: white;
          box-shadow: 0px 1px 2px ${color("gray", 900)};
          border: 1px solid ${color("primary", 600)};
          &:hover:not(:disabled) {
            background: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
          }
          &:focused:not(:disabled) {
            background: ${color("primary", 600)};
            border: 1px solid ${color("primary", 600)};
            box-shadow: 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case ButtonVariant.secondary:
        return css`
          background: ${color("primary", 50)};
          color: ${color("primary", 700)};
          box-shadow: 0px 1px 2px ${color("gray", 900)};
          border: 1px solid ${color("primary", 50)};
          &:hover:not(:disabled) {
            background: ${color("primary", 100)};
            border: 1px solid ${color("primary", 100)};
          }
          &:focused:not(:disabled) {
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            box-shadow: 0px 0px 4px ${color("primary", 100)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case ButtonVariant.gray:
        return css`
          background: white;
          color: ${color("gray", 700)};
          box-shadow: 0px 1px 2px ${color("gray", 900)};
          border: 1px solid ${color("gray", 300)};
          &:hover:not(:disabled) {
            background: ${color("gray", 50)};
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 800)};
          }
          &:focused:not(:disabled) {
            color: white;
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            box-shadow: 0px 0px 4px ${color("gray", 100)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case ButtonVariant.empty:
        return css`
          background: transparent;
          color: ${color("primary", 700)};
          box-shadow: none;
          border: transparent;
          &:hover:not(:disabled) {
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            color: ${color("primary", 700)};
          }
          &:focused:not(:disabled) {
            color: ${color("primary", 700)};

            background: transparent;
            border: transparent;
            box-shadow: none;
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case ButtonVariant.emptygray:
        return css`
          background: white;
          color: ${color("gray", 500)};
          box-shadow: none;
          border: white;
          &:hover:not(:disabled) {
            background: ${color("gray", 50)};
            color: ${color("gray", 600)};
            box-shadow: none;
            border: ${color("gray", 50)};
          }
          &:focused:not(:disabled) {
            background: white;
            color: ${color("gray", 500)};
            box-shadow: none;
            border: white;
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
      case ButtonVariant.error:
        return css`
          background: ${color("error", 600)};
          color: white;
          box-shadow: 0px 1px 2px ${color("gray", 900)};
          border: ${color("error", 600)};
          &:hover:not(:disabled) {
            background: ${color("error", 700)};
            color: white;
            box-shadow: 0px 1px 2px ${color("gray", 900)};
            border: ${color("error", 700)};
          }
          &:focused:not(:disabled) {
            background: ${color("error", 600)};
            color: white;
            box-shadow: 0px 0px 4px ${color("error", 100)};
            border: ${color("error", 600)};
          }
          &:disabled {
            opacity: 0.5;
          }
        `;
    }
  }}
`;

export const StyledButton: React.FC<ButtonProps> = ({
  variant = ButtonVariant.inherit,
  disabled = false,
  size = ButtonSize.lg,
  onClick,
  children,
}) => (
  <StyledButtonContainer
    variant={variant}
    size={size}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButtonContainer>
);

//
