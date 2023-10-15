import styled from "styled-components"
import theme from "@/theme"

const StylizedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: .875rem;

  background-color: ${theme.colors.orange};
  border: none;
  border-radius: .5rem;
  box-shadow: ${({ $boxShadow }) => $boxShadow ? '0px 14px 14px 4px #FDE3CC' : 'none'};

  box-sizing: border-box;

  cursor: pointer;

  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .022rem;

  margin-top: ${props => props.$margin};

  height: 56px;
  width: 100%;

  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 992px) {
    margin: 0;
  }

  @media (min-width: 1200px) {
    max-width: ${props => props.$width};
  }
`

export default function Button({ $margin, $width, $boxShadow, children }) {
  return (
    <StylizedButton 
      $margin={$margin}
      $boxShadow={$boxShadow}
      $width={$width}
    >
      {children}
    </StylizedButton>
  )
}
