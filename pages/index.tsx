import styled from "styled-components";
import { Routes } from "@config/routes";
import { Button, ButtonVariant } from "@features/ui";
import { Modal } from "features/ui";
import { useState } from "react";
import { Hero } from "../features/ui/hero";
import { LandingPageData, HeroSection, SectionTypes } from "@api/data.types";

export const getStaticProps = async () => {
  const res = await fetch("https://prolog-api.profy.dev/content-page/home/");
  const data = await res.json();

  return {
    props: { data },
  };
};

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
  position: fixed;
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

const HomePage = ({ data }: { data: LandingPageData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const hero = data.sections.find(
    (section) => section.sectionType === SectionTypes.hero
  ) as HeroSection;

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
      <Hero
        title={hero.title}
        description={hero.subtitle}
        image={hero.image.src}
      />

      <ContactButton
        onClick={() => setIsModalVisible((isModalVisible) => !isModalVisible)}
      >
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default HomePage;
