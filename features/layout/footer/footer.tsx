import { Router, useRouter } from "next/router";
import Link from "next/link";
import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Routes } from "@config/routes";
import { Button } from "@features/ui";
import { breakpoint, color, space, zIndex } from "@styles/theme";
import AppVersion from "./AppVersion";

// TODOS
// Need to implement a footer that....
// Takes up full width on small screens
// takes up remainder of width on deskop accounting for the width of the
// sidebar navigation - needs to be aware of collapsed state, or go 'behind'
// the sidebar.

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
export function Footer() {
  return (
    <FooterNav>
      <FooterContainer>
        <VersionNumber>
          <AppVersion />
        </VersionNumber>
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
