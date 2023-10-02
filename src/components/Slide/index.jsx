import styled from 'styled-components'
import productOne from './images/image-product-1.jpg'
import Arrows from './arrows'
// import productTwo from './images/image-product-2.jpg'
// import productThree from './images/image-product-3.jpg'
// import productFour from './images/image-product-4.jpg'

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
  return (
    <SlideContainer>
      <ProductImage src={productOne} alt="Product photo" />
      <Arrows />
    </SlideContainer>
  )
}
