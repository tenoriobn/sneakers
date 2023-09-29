import styled from 'styled-components';
import logo from './logo.svg';
import avatar from './image-avatar.png';
import menu from './icon-menu.svg';
import cart from './icon-cart.svg';

const StylizedHeader = styled.header`
  padding: 1.25rem 1.5rem 1.5rem 1.5rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.$gap || '0'};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

const Icon = styled.span`
  display: block;
  background-image: url(${props => props.$icon});
  background-repeat: no-repeat;
  background-position: center;
  width: ${props => props.$width || '1rem'};
  height: ${props => props.$height || '1rem'};
  display: flex;
`;

const Avatar = styled.img`
  width: 1.5rem;
`;

export default function Header() {
  return (
    <StylizedHeader>
      <Nav>
        <Container $gap="1rem">
          <Button>
            <Icon $icon={menu} $width="1rem" $height="1rem"></Icon>
          </Button>

          <img src={logo} alt="sneaker logo" />
        </Container>

        <Container $gap="1.375rem">
          <Button>
            <Icon $icon={cart} $width="1.375rem" $height="1.25rem"></Icon>
          </Button>

          <Avatar src={avatar} alt="profile picture" />
        </Container>
      </Nav>
    </StylizedHeader>
  )
}
