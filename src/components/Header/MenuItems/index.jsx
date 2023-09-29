import styled from "styled-components";
import { Button, Icon } from "..";
import close from './icon-close.svg';
import PropTypes from 'prop-types';

const BlurredBackground = styled.div`
  background-color: #00000081;
  position: fixed;
  /* left: 100%; */
  left: ${(props) => (props.$isOpen ? '0' : '-100%')};
  top: 0;
  overflow-x: hidden;
  
  height: 100vh;
  width: 100%;
`

const SideMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  
  position: fixed;
  /* left: 100%; */
  left: ${(props) => (props.$isOpen ? '0' : '-100%')};
  top: 0;
  overflow-x: hidden;
  
  padding: 1.5rem 0 0 1.5rem;
  
  height: 100vh;
  width: 66.67%;

  transition: left 0.3s Ease-Out;

  z-index: 1;
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  list-style: none;
  margin-top: 52px;
  margin-bottom: 0;
  padding: 0;
  `;

const Item = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.veryDarkBlue};
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.09px;

  &:hover {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }
`;

export default function MenuItems({ isOpen, toggleMenu }) {
  return (
    <>
    <BlurredBackground $isOpen={isOpen} onClick={toggleMenu} />
      <SideMenu $isOpen={isOpen}>
        <Button onClick={toggleMenu}>
          <Icon $icon={close} $width="0.84rem" $height="0.84rem" />
        </Button>

        <ItemList>
          <li><Item href="#">Collections</Item></li>
          <li><Item href="#">Men</Item></li>
          <li><Item href="#">Women</Item></li>
          <li><Item href="#">About</Item></li>
          <li><Item href="#">Contact</Item></li>
        </ItemList>
      </SideMenu>
    </>
  )
}

MenuItems.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};