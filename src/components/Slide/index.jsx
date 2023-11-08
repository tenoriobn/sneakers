import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Arrows from './Arrows';
import Thumbnail from '../Thumbnail';
import { useModalZoomContext } from '@/context/ModalZoomContext';
import photos from "@/data/photos.json";

const StylizedSlideContainer = styled.section`
  position: relative;

  width: 100%;

  @media (min-width: 992px) {
    width: ${props => props.$slide === 'ProductPage' ? '45%' : '500px'};
  }

  @media (min-width: 1200px) {
    width: 444px; //550px -> zoom
    width: ${props => props.$slide === 'ProductPage' ? '444px' : '550px'};
  }
`

const StylizedSlideArrowsContainer = styled.div`
  position: relative;
`

const StylizedProductImage = styled.img`
  cursor: pointer;
  object-fit: cover;
  object-position: center center;

  transition: opacity 0.3s ease-in-out;

  height: 300px;
  width: 100%;

  @media (min-width: 425px) {
    height: 100%;
  }
  
  @media (min-width: 992px) {
    border-radius: 1rem;
  }

  @media (min-width: 1200px) {
    height: ${props => props.$slide === 'ProductPage' ? '445px' : '550px'};
    width: ${props => props.$slide === 'ProductPage' ? '445px' : '550px'}; 
  }
`

export default function Slide({ slide }) {
  const [imageOpacity, setImageOpacity] = useState(1); 
  const [slidePhotos = []] = useState(photos);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  const {selectedPhoto, setSelectedPhoto} = useModalZoomContext();
  const [currentImage, setCurrentImage] = useState(slidePhotos[0].productImagePath);

  const changeImage = (newIndex) => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setCurrentImage(slidePhotos[newIndex].productImagePath); 
      setImageOpacity(1);
    }, 300);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % slidePhotos.length;
    changeImage(newIndex);

  };

  const previousImage = () => {
    const newIndex = currentImageIndex === 0 ? slidePhotos.length - 1 : currentImageIndex - 1;
    changeImage(newIndex);
  };

  useEffect(() => {
    if (selectedPhoto && slide === "ModalZoom") {
      const selectedImageIndex = slidePhotos.findIndex((photo) => 
        photo.productImagePath === selectedPhoto.productImagePath);
      
      if (selectedImageIndex !== -1) {
        setCurrentImageIndex(selectedImageIndex);
        setCurrentImage(selectedPhoto.productImagePath); 
        setSelectedPhoto(currentImage)
      }
    }
  }, [selectedPhoto, slidePhotos, setSelectedPhoto, currentImage, slide]);



  return (
    <StylizedSlideContainer $slide={ slide }>
      <StylizedSlideArrowsContainer>
        <StylizedProductImage 
          $slide={ slide }
          src={currentImage} 
          alt={slidePhotos[currentImageIndex].description} 
          style={{ opacity: imageOpacity }}
        />
        <Arrows 
          nextImage={nextImage} 
          previousImage={previousImage} 
          slide={slide} 
        />
      </StylizedSlideArrowsContainer>
      <Thumbnail 
        slidePhotos={slidePhotos} 
        slide={ slide }
      />
    </StylizedSlideContainer>
  )
}