import styled from 'styled-components';
import next from './icon-next.svg';
import previous from './icon-previous.svg';

const SlideIconContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;
`

const IconBackground = styled.div`
  background-color: ${({theme}) => theme.colors.white};
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

  height: .875rem;
  width: .5rem;
`

export default function Arrows() {
  return (
    <SlideIconContainer>
      <IconBackground>
        <IconNext $slideIcon={previous}></IconNext>
      </IconBackground>
      <IconBackground>
        <IconNext $slideIcon={next}></IconNext>
      </IconBackground>
    </SlideIconContainer>
  )
}