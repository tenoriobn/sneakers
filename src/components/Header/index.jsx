import styled from 'styled-components';
import logo from './logo.svg';
import avatar from './image-avatar.png';
import menu from './icon-menu.svg';
import cart from './icon-cart.svg';
import MenuItems from './MenuItems';
import { useState } from 'react';

const StylizedHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: 992px) {
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

  @media (min-width: 992px) {
    gap: ${props => props.$gapDesktop || '0'};
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
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
  height: ${props => props.$height || '1rem'};
  width: ${props => props.$width || '1rem'};
`;

const Avatar = styled.img`
  width: 1.5rem;

  @media (min-width: 992px) {
    width: 3.125rem;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <StylizedHeader>
      <Nav>
        <Container $gapDesktop="3.5rem">
          <Container $gapMobile="1rem">
            <OpenAndCloseIcon className="menu-button" onClick={toggleMenu}>
              <Icon $icon={menu} $width="1rem" $height="1rem" />
            </OpenAndCloseIcon>

            <img src={logo} alt="sneaker logo" />
          </Container>

          <MenuItems isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </Container>

        <Container $gapMobile="1.375rem" $gapDesktop="2.875rem">
          <Button>
            <Icon $icon={cart} $width="1.375rem" $height="1.25rem" />
          </Button>

          <Avatar src={avatar} alt="profile picture" />
        </Container>
      </Nav>
    </StylizedHeader>
  )
}
