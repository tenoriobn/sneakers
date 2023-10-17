import styled from "styled-components";
import { MobileMenuButton } from "..";
import Close from './icon-close.svg?react';
import theme from "@/theme";
import menuItems from "@/data/menu.json";

const BlurredBackground = styled.div`
  background-color: #00000081;

  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? '0' : '-100%')};
  overflow-x: hidden;
  
  height: 100vh;
  width: 100%;
`

const SideMenu = styled.div`
  background-color: ${theme.colors.white};
  box-sizing: border-box;
  
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? '0' : '-100%')};

  
  padding: 1.5rem 0 0 1.5rem;
  
  height: 100vh;
  width: 66.67%;

  transition: left 0.3s Ease-Out;
  z-index: 1;

  @media (min-width: 992px) {
    background-color: inherit;
    position: relative;
    top: inherit;
    left: inherit;
    padding: 0;
    height: auto;
    width: auto;
  }
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  list-style: none;

  margin: 3.5rem 0 0 0;
  padding: 0;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 1.875rem;

    margin: 0;
  }
`;

const Item = styled.a`
  color: ${theme.colors.veryDarkBlue};
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.09px;
  text-decoration: none;
  padding-bottom: 49px;
  position: relative;
  transition: .3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 4px;
    background-image: linear-gradient(90deg, #ff7d1a, #ff7d1a);
    transition: width 0.3s ease;
    color: red;
  }

  &:hover {
    color: ${theme.colors.darkGrayishBlue};
    transition: color .3s ease-in-out;

    &::after {
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    color: ${theme.colors.darkGrayishBlue};
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.16px;

    &:hover {
    color: ${theme.colors.veryDarkBlue};
  }
  }
`;

const StylizedCloseIcon = styled(Close)`
    width: 16px;
    height: 16px;
`

export default function MenuItems({ isOpen, toggleMenu }) {
  return (
    <>
    <BlurredBackground $isOpen={isOpen} onClick={toggleMenu} />
      <SideMenu $isOpen={isOpen}>
        <MobileMenuButton onClick={toggleMenu}>
          <StylizedCloseIcon />
        </MobileMenuButton>

        <ItemList>
          {menuItems.map((items, index) => (
            <li key={index}><Item href="#">{items.menuItem}</Item></li>
          ))}

        </ItemList>
      </SideMenu>
    </>
  )
}