import styled from 'styled-components';
import IconNext from './icon-next.svg?react';
import IconPrevious from './icon-previous.svg?react';
import theme from '@/theme'

const StylizedSlideIconContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;

  @media (min-width: 992px) {
    display: none;
  }
`

const StylizedIconBackground = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 1rem;

  width: 2.5rem;
  height: 2.5rem;

  .icon__previous, .icon__next {
    width: 9px;
    height: 14px;
  }
`

export default function Arrows({ nextImage, previousImage }) {
  return (
    <StylizedSlideIconContainer>
      <StylizedIconBackground onClick={previousImage}>
        <IconPrevious className="icon__previous" />
      </StylizedIconBackground>
      <StylizedIconBackground onClick={nextImage}>
        <IconNext className="icon__next" />
      </StylizedIconBackground>
    </StylizedSlideIconContainer>
  )
}