import styled from "styled-components";
import { Button, ButtonVariant } from "../button";
import { color } from "@styles/theme";

type ModalProps = {
  cancel?: () => void;
};

const PageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(4px);
  text-align: center;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    opacity: 60%;
    background-color: #344054;
  }
`;
const ModalContainer = styled.div`
  box-sixing: border-box;
  margin: 80px auto;
  max-height: calc(100vh - 160px);
  overflow-y: auto;
  z-index: 2;
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
