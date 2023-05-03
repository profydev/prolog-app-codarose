import styled, { css } from "styled-components";
import { Routes } from "@config/routes";
import { Button, ButtonVariant } from "@features/ui";
import { Modal } from "features/ui";
import { useState } from "react";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const CenterButtonsContainer = styled.div`
  display: flex;
`;

const IssuesPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      {isModalVisible && (
        <Modal
          cancel={() => setIsModalVisible((isModalVisible) => !isModalVisible)}
        />
      )}
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <CenterButtonsContainer>
          <Button
            variant={ButtonVariant.emptygray}
            onClick={() => (window.location.href = `${Routes.home}`)}
          >
            Home
          </Button>
          <Button
            variant={ButtonVariant.emptygray}
            onClick={() => (window.location.href = `${Routes.products}`)}
          >
            Products
          </Button>
          <Button
            variant={ButtonVariant.emptygray}
            onClick={() => (window.location.href = `${Routes.documentation}`)}
          >
            Documentation
          </Button>
          <Button
            variant={ButtonVariant.emptygray}
            onClick={() => (window.location.href = `${Routes.pricing}`)}
          >
            Pricing
          </Button>
        </CenterButtonsContainer>

        <Button
          variant={ButtonVariant.primary}
          onClick={() => (window.location.href = `${Routes.projects}`)}
        >
          Open Dashboard
        </Button>
      </Header>
      <ContactButton
        onClick={() => setIsModalVisible((isModalVisible) => !isModalVisible)}
      >
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
