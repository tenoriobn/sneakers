import styled from 'styled-components';
import thumbOne from '../images/image-product-1-thumbnail.jpg';
import thumbTwo from '../images/image-product-2-thumbnail.jpg';
import thumbThree from '../images/image-product-3-thumbnail.jpg';
import thumbFour from '../images/image-product-4-thumbnail.jpg';

const thumbnails = [thumbOne, thumbTwo, thumbThree, thumbFour];

const ListaOfImages = styled.ul`
  display: none;


  @media (min-width: 768px) {
    display: flex;
    gap: 1.75rem;
    list-style: none;

    padding: 0;
  }
`

const StylizedThumbnail = styled.img`
  border-radius: .5rem;
  width: 100%;
`

export default function Thumbnail() {
  return (
    <div>
      <ListaOfImages>
        {thumbnails.map((thumbnail) => ( // Use parênteses para retornar o JSX
          <li key={thumbnail}> {/* Lembre-se de adicionar uma chave única */}
            <StylizedThumbnail src={thumbnail} alt="" />
          </li>
        ))}
      </ListaOfImages>
    </div>
  )
}