import product from './image-product-1-thumbnail.jpg';
import deleteIcon from './icon-delete.svg';
import styled from 'styled-components';
import Button from '../Button';

const CartContainer = styled.div`
  border-radius: .5rem;
  box-shadow: 0px 14px 50px -24px #1d2025;

  max-width: 360px;
  min-height: 256px;

  width: 100%;


  padding: 1.25rem 0 2rem 0;

  box-sizing: border-box;

  margin-left: .5rem;
  margin-bottom: 5rem;
`

const CartTitle = styled.h2`
  color: ${({theme}) => theme.colors.veryDarkBlue};
  font-size: 1rem;
  font-weight: 700;

  padding: 0 1.5rem 1.75rem 1.5rem;
`

const ProductList = styled.ul`
  border-top: 1px solid;
  border-color: ${({theme}) => theme.colors.veryLightGray};

  padding: 1.5rem 1.5rem 0 1.5rem;
`

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.625rem;
`

const ProductContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ProductImage = styled.img`
  border-radius: .25rem;

  width: 50px;
  height: 50px;
`

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .375rem;
`

const ProductName = styled.p`
  color: ${({theme}) => theme.colors.darkGrayishBlue};
  font-size: 1rem;
  font-weight: 500;
`

const ProductValue = styled.p`
  color: ${({theme}) => theme.colors.darkGrayishBlue};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: .02rem;

  span {
    color: ${({theme}) => theme.colors.veryDarkBlue};
    font-weight: 700;
  }
`

const DeleteIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  padding: 0;

  img {
    width: 14px;
    height: 16px;
  }
`

export default function Cart() {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>

      <ProductList>
        <li>
          <ItemContainer>
            <ProductContainer>
              <ProductImage src={product} alt="" />

              <ProductInfoContainer>
                <ProductName>Fall Limited Edition Sneakers</ProductName>
                <ProductValue>$125 x 3 <span>$375.00</span></ProductValue>
              </ProductInfoContainer>
            </ProductContainer>

            <DeleteIcon><img src={deleteIcon} /></DeleteIcon>
          </ItemContainer>
        </li>

        <Button>Checkout</Button>
      </ProductList>
    </CartContainer>
  )
}
