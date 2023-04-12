import Link from "next/link";
import styled from "styled-components";
import { breakpoint, color } from "@styles/theme";

type FooterProps = {
  appVersion: string | undefined;
};

const menuItems = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Community", href: "#" },
];

const FooterNav = styled.nav`
  height: 177px;
  font-size: 16px;
  background: ${color("gray", 50)};
  color: ${color("gray", 500)};
  width: 100%;
  padding: 24px 0px;
  @media (min-width: ${breakpoint("desktop")}) {
    height: 60px;
    padding: 0;
  }
`;

const FooterContainer = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  align-content: center;

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const FooterMenuContainer = styled.ul`
  width: 305px;
  color: ${color("gray", 500)};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    margin-right: 80px;
  }
`;

const VersionNumber = styled.div`
  order: 3;
  color: ${color("gray", 400)};
  @media (min-width: ${breakpoint("desktop")}) {
    order: 0;
    margin-left: 32px;
  }
`;

const FooterButton = styled(Link)`
  color: ${color("gray", 500)};
  background: inherit;
  border: none;
  font-weight: 500;
  text-decoration: none;
`;

const Logo = styled.img`
  display: block;
  width: 23px;
  @media (min-width: ${breakpoint("desktop")}) {
    order: 0;
    margin-right: 30px;
  }
`;
export function Footer({ appVersion }: FooterProps) {
  return (
    <FooterNav>
      <FooterContainer>
        <VersionNumber>Version: {appVersion}</VersionNumber>
        <FooterMenuContainer>
          {menuItems.map((menuItem, index) => (
            <FooterButton key={index} {...menuItem} href={menuItem.href}>
              {menuItem.text}
            </FooterButton>
          ))}
        </FooterMenuContainer>

        <Logo src="/icons/logo-small.svg" />
      </FooterContainer>
    </FooterNav>
  );
}
