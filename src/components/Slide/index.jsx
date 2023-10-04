import styled from 'styled-components';
import Arrows from './arrows';
import { useState } from 'react';
import Thumbnail from '../Thumbnail';

const SlideContainer = styled.div`
  position: relative;

  @media (min-width: 768px) {
    margin-top: 5.75rem;

    width: 444px;
  }
`

const ProductImage = styled.img`
  object-fit: cover;

  height: 300px;
  width: 100%;

  @media (min-width: 425px) {
    height: 350px;
  }
  
  @media (min-width: 768px) {
    border-radius: 1rem;

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