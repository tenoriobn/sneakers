import styled from 'styled-components';
import Arrows from './arrows';
import productOne from './images/image-product-1.jpg';
import productTwo from './images/image-product-2.jpg';
import productThree from './images/image-product-3.jpg';
import productFour from './images/image-product-4.jpg';
import { useState } from 'react';

const imagesSlide = [productOne, productTwo, productThree, productFour];

const SlideContainer = styled.div`
  position: relative;
`

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;

  @media (min-width: 425px) {
    height: 350px;
  }
`

export default function Slide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesSlide.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesSlide.length - 1 : prevIndex - 1
    );
  }

  return (
    <SlideContainer>
      <ProductImage src={imagesSlide[currentImageIndex]} alt="Product photo" />
      <Arrows nextImage={nextImage} previousImage={previousImage} />
    </SlideContainer>
  )
}
