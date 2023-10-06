import styled from "styled-components"

const StylizedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: .875rem;

  background-color: ${({theme}) => theme.colors.orange};
  border: none;
  border-radius: .5rem;
  box-sizing: border-box;

  cursor: pointer;

  color: ${({theme}) => theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .022rem;

  margin-top: 1rem;

  height: 56px;
  width: 100%;

  box-shadow: 0px 14px 14px 4px #FDE3CC;

  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 992px) {
    margin: 0;
  }

  @media (min-width: 1200px) {
    max-width: 272px;
  }
`

export default function Button({ children }) {
  return (
    <StylizedButton>{children}</StylizedButton>
  )
}
