import styled from 'styled-components';
import Next from './icon-next.svg?react';
import Previous from './icon-previous.svg?react';
import theme from '@/theme'

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

export default function Arrows({ nextImage, previousImage }) {
  return (
    <SlideIconContainer>
      <IconBackground onClick={previousImage}>
        <Previous />
      </IconBackground>
      <IconBackground onClick={nextImage}>
        <Next />
      </IconBackground>
    </SlideIconContainer>
  )
}