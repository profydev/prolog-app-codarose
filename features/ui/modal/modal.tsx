import styled from "styled-components";
import { Button, ButtonVariant } from "../button";
import { color } from "@styles/theme";
import { useState } from "react";

type ModalProps = {
  cancel?: () => void;
};
const backdropFilterStyle = {
  backdropFilter: "blur(20px)",
};

const PageOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(4px);
  text-align: center;
  &::before {
    content: "";
    height: 100vh;
    width: 100vw;
    opacity: 60%;
    background-color: #344054;
  }
`;
const ModalContainer = styled.div`
  box-sixing: border-box;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  max-width: 400px;
  min-width: 325px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  gap: 16px;
  font-weight: 500;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
`;

const ButtonContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  gap: 16px;
  align-items: stretch;
  text-align: center;
  & > * {
    flex: 1;
    justify-content: center;
  }
`;

const ModalImage = styled.div`
  display: flex;
  margin: 16px 0px;
`;

const MessageText = styled.div`
  color: ${color("gray", 500)};
  font-weight: 400;
  margin-bottom: 16px;
`;

export const Modal: React.FC<ModalProps> = ({ cancel }) => {
  return (
    <PageOverlay>
      <ModalContainer>
        <ModalImage>
          <img src="/icons/mail.svg" width="44px" />
        </ModalImage>
        Contact Us Via Email
        <MessageText>
          Any questions? Send us an email at prolog@profy.dev. We usually answer
          within 24 hours.
        </MessageText>
        <ButtonContainer>
          <Button onClick={cancel} variant={ButtonVariant.gray}>
            Cancel
          </Button>
          <Button
            onClick={() =>
              (window.location.href =
                "mailto:support@prolog-app.com?subject=Support Request: ")
            }
            variant={ButtonVariant.primary}
          >
            Open Email App
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </PageOverlay>
  );
};
