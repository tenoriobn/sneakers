import styled from 'styled-components';
import logo from './logo.svg';
import avatar from './image-avatar.png';
import menu from './icon-menu.svg';
import cart from './icon-cart.svg';
import MenuItems from './MenuItems';
import { useState } from 'react';
import Cart from '../Cart';
import theme from '../../theme';

const StylizedHeader = styled.header`
  background-color: ${theme.colors.lightGray};

  padding: 1.25rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: 992px) {
    border-bottom: 1px solid;
    border-color: ${theme.colors.veryLightGray};

    padding: 1.75rem 0 2.125rem 0;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.$gapMobile || '0'};

  position: relative;

  @media (min-width: 992px) {
    gap: ${props => props.$gapDesktop || '0'};
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;

  padding: 0;
`;

export const OpenAndCloseIcon = styled(Button)`
  @media (min-width: 992px) {
    display: none;
  }
`;

export const Icon = styled.span`
  display: block;

  background-image: url(${props => props.$icon});
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;
  
  height: ${props => props.$height || '1rem'};
  width: ${props => props.$width || '1rem'};
`;

const Logo = styled.img`
  cursor: pointer;
`

const Avatar = styled.img`
  border: 2px solid transparent;
  border-radius: 50%;

  cursor: pointer;

  overflow: hidden;
  transition: border-color .3s ease-in-out;

  width: 1.5rem;

  &:hover {
    border-color: ${theme.colors.orange};

  }

  @media (min-width: 992px) {
    width: 3.125rem;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <StylizedHeader>
      <Nav>
        <Container $gapDesktop="3.5rem">
          <Container $gapMobile="1rem">
            <OpenAndCloseIcon className="menu-button" onClick={toggleMenu}>
              <Icon $icon={menu} $width="1rem" $height="1rem" />
            </OpenAndCloseIcon>

            <Logo src={logo} alt="sneaker logo" />{/*Ao passar mouse sobre logo muda para a cor orange*/}
          </Container>

          <MenuItems isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </Container>

        <Container $gapMobile="1.375rem" $gapDesktop="2.875rem">
          <Button onClick={toggleCart}>
            <Icon $icon={cart} $width="1.375rem" $height="1.25rem" />
          </Button>

          {isCartOpen && <Cart />} {/* Ao clicar fora do cart ele também deve fechar */}

          <Avatar src={avatar} alt="profile picture" />
        </Container>
      </Nav>
    </StylizedHeader>
  )
}
