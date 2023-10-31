import styled from 'styled-components';
import Arrows from './Arrows';
import { useState } from 'react';
import Thumbnail from '../Thumbnail';
import photos from "../../data/photos.json";

const StylizedSlideContainer = styled.section`
  position: relative;

  width: 100%;

  @media (min-width: 992px) {
    width: 45%;
  }

  @media (min-width: 1200px) {
    width: 444px;
  }
`

const StylizedProductImage = styled.img`
  cursor: pointer;
  object-fit: cover;
  object-position: center center;

  transition: opacity 0.3s ease-in-out; // aplica 300ms de transição gerando o fade-out.

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

export default function Slide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Controle das imagens
  const [imageOpacity, setImageOpacity] = useState(1); // Controle da opacidade
  const [slidePhotos = []] = useState(photos);

  const nextImage = () => {
    setImageOpacity(0); // Define a imagem para 0% de opacidade atualizando o estado
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slidePhotos.length); // troca a imagem
      setImageOpacity(1); // Define a nova imagem para 100% de opacidade
    }, 300); // executa as atualizações após 300ms, gerando o fade-in.
  };

  const previousImage = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? slidePhotos.length - 1 : prevIndex - 1
      );
      setImageOpacity(1);
    }, 300);
  }

  return (
    <StylizedSlideContainer>
      <StylizedProductImage 
        src={slidePhotos[currentImageIndex].productImagePath} 
        alt={slidePhotos[currentImageIndex].description} 
        style={{ opacity: imageOpacity }}
      />
      <Arrows nextImage={nextImage} previousImage={previousImage} />
      <Thumbnail 
        slidePhotos={slidePhotos} 
      />
    </StylizedSlideContainer>
  )
}