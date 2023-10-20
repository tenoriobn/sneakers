import styled from 'styled-components';
import Logo from './logo.svg?react'; {/* Svg componente */}
import avatarIcon from './image-avatar.png';
import CloseIcon from './icon-close.svg?react';
import CartIcon from './icon-cart.svg?react';
import MenuIcon from './icon-menu.svg?react';
import MenuItems from './MenuItems';
import { useState } from 'react';
import Cart from '../Cart';
import theme from '@/theme';
import { Link } from 'react-router-dom';

const StylizedHeader = styled.header`
  background-color: ${theme.colors.lightGray};

  padding: 1.25rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: 992px) {
    border-bottom: .0625rem solid;
    border-color: ${theme.colors.veryLightGray};

    padding: 1.75rem 0 2.125rem 0;
  }
`

const StylizedNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StylizedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.$gapMobile || '0'};

  position: relative;

  @media (min-width: 992px) {
    gap: ${props => props.$gapDesktop || '0'};
  }
`;

export const StylizedButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
`;

const StylizedCartIcon = styled(CartIcon)`
  path {
    fill: ${theme.colors.darkGrayishBlue};

    &:hover {
      fill: ${theme.colors.veryDarkBlue};
    }
  }
`

export const StylizedMobileMenu = styled(StylizedButton)`
  z-index: 4;

  @media (min-width: 992px) {
    display: none;
  }
`;

const StylizedLogo = styled(Logo)`
  cursor: pointer;

  &:hover path {
    fill: ${theme.colors.orange};
  }
`

const StylizedAvatar = styled.img`
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
      <StylizedNav>
        <StylizedContainer $gapDesktop="3.5rem">
          <StylizedContainer $gapMobile="1rem">
            <StylizedMobileMenu onClick={toggleMenu}>
              {!isMenuOpen ? <MenuIcon /> : <CloseIcon />}
            </StylizedMobileMenu>

            <Link to={"/"}><StylizedLogo /></Link>
          </StylizedContainer>

          <MenuItems isMenuOpen={isMenuOpen} />
        </StylizedContainer>

        <StylizedContainer $gapMobile="1.375rem" $gapDesktop="2.875rem">
          <StylizedButton onClick={toggleCart}>
            <StylizedCartIcon />
          </StylizedButton>

          {isCartOpen && <Cart />} {/* Ao clicar fora do cart ele também deve fechar */}

          <StylizedAvatar src={avatarIcon} alt="profile picture" />
        </StylizedContainer>
      </StylizedNav>
    </StylizedHeader>
  )
}
