import styled from 'styled-components';
import { useModalZoomContext } from '@/context/ModalZoomContext';

const StylizedImageList = styled.ul`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    gap: 1.75rem;
    list-style: none;

    margin-top: 2rem;
    padding: ${props => props.$slide === 'ProductPage' ? '0' : '0 50px 0 50px'};
  }

  @media (min-width: 1200px) {
    justify-content: inherit;

  }
`

const StylizedThumbnail = styled.img`
  border-radius: .5rem;
  cursor: pointer;
  width: 100%;

  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .7;
  }
`

export default function Thumbnail({ slidePhotos, slide }) {
  const { setSelectedPhoto} = useModalZoomContext();

  return (
    <div>
      <StylizedImageList $slide={slide} >
        {slidePhotos.map((thumbnail) => (
          <li key={thumbnail.id} onClick={() => setSelectedPhoto(thumbnail)}>
            <StylizedThumbnail $slide={slide} src={thumbnail.thumbnailPath} alt={thumbnail.description} />
          </li>
        ))}
      </StylizedImageList>
    </div>
  )
}

/*
  Criar as seguintes funcionalidades:
  1º - ao passar o mouse por cima dos `thumbnails` substituir a imagem grande pela que está no foco
  2º - ao clicar em um dos `thumbnails` expandir a imagem do thumbnails com carrossel e thumbnails em baixo*
  3º - a imagem atual expandida tera seu respectivo thumbnail esmaecido.
  4º - o botão deve fechar a imagem expandida (assim como o estado de foco).*
  5º - Ao passar mouse por cima da imagem, oferecer zoom


  !IMPORTANTE, RESOLVER PRIMEIRO: As imagens com extensão `SVG` devem ser utilizada como componente
  então devo refatorar a forma como estou utilizando ela, talvez ajude a aplicar o `hover` nelas.
*/