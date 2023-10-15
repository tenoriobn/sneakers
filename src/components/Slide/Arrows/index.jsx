import styled from 'styled-components';
import next from './icon-next.svg';
import previous from './icon-previous.svg';
import theme from '../../../theme';

const SlideIconContainer = styled.div`
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

const IconBackground = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 1rem;

  width: 2.5rem;
  height: 2.5rem;
`

const IconNext = styled.span`
  display: block;
  background-image: url(${props => props.$slideIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;

  height: .875rem;
  width: .5rem;
`

export default function Arrows({ nextImage, previousImage }) {
  return (
    <SlideIconContainer>
      <IconBackground onClick={previousImage}>
        <IconNext $slideIcon={previous}></IconNext>
      </IconBackground>
      <IconBackground onClick={nextImage}>
        <IconNext $slideIcon={next}></IconNext>
      </IconBackground>
    </SlideIconContainer>
  )
}