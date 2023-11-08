import styled from 'styled-components';
import theme from '@/theme';
import IconNext from './icon-next.svg?react';
import IconPrevious from './icon-previous.svg?react';

const StylizedSlideIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  position: absolute;
  left: ${props => props.$slide === 'ProductPage' ? '0' : '50%'};
  top: 50%;
  transform: ${props => props.$slide === 'ProductPage' ? 'translateY(-50%)' : 'translate(-50%, -50%)'};
  width: ${props => props.$slide === 'ProductPage' ? '100%' : '115%'};

  @media (min-width: 992px) {
    /* display: ${props => props.$slide}; */
    display: ${props => props.$slide === 'ProductPage' ? 'none' : 'flex'};
  }
`

const StylizedIconBackground = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 1rem;
  width: ${props => props.$slide === 'ProductPage' ? '40px' : '56px'};
  height: ${props => props.$slide === 'ProductPage' ? '40px' : '56px'};

  position: relative;


  .icon__previous, .icon__next {
    width: ${props => props.$slide === 'ProductPage' ? '9px' : '12px'};
    height: ${props => props.$slide === 'ProductPage' ? '14px' : '18px'};

    &:hover {
      path {
        stroke: ${theme.colors.orange};
      }
    }
  }
`

export default function Arrows({ nextImage, previousImage, slide }) {
  return (
    <StylizedSlideIconContainer $slide={slide}>
      <StylizedIconBackground onClick={previousImage} $slide={slide}>
        <IconPrevious className="icon__previous"  />
      </StylizedIconBackground>
      <StylizedIconBackground onClick={nextImage} $slide={slide}>
        <IconNext className="icon__next"  />
      </StylizedIconBackground>
    </StylizedSlideIconContainer>
  )
}