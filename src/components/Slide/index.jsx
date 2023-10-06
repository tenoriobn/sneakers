import styled from 'styled-components';
import Arrows from './arrows';
import { useState } from 'react';
import Thumbnail from '../Thumbnail';

const SlideContainer = styled.section`
  position: relative;

  width: 100%;

  @media (min-width: 1200px) {
    width: 444px;
  }
`

const ProductImage = styled.img`
  object-fit: cover;

  height: 300px;
  width: 100%;

  @media (min-width: 425px) {
    height: 100%;
  }
  
  @media (min-width: 992px) {
    border-radius: 1rem;
  }

  @media (min-width: 1200px) {
    height: 445px;
    width: 445px;
  }
`

export default function Slide({ slidePhotos = []}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slidePhotos.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slidePhotos.length - 1 : prevIndex - 1
    );
  }

  return (
    <SlideContainer>
      <ProductImage 
        src={slidePhotos[currentImageIndex].productImagePath} 
        alt="Product photo" 
      />
      <Arrows nextImage={nextImage} previousImage={previousImage} />
      <Thumbnail 
        slidePhotos={slidePhotos} 
      />
    </SlideContainer>
  )
}