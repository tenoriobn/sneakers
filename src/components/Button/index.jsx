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

  color: ${({theme}) => theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .022rem;

  margin-top: 1rem;

  height: 56px;
  width: 100%;

  @media (min-width: 992px) {
    max-width: 272px;
    margin: 0;
  }
`

export default function Button({ children }) {
  return (
    <StylizedButton>{children}</StylizedButton>
  )
}
