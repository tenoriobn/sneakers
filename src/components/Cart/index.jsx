import product from './image-product-1-thumbnail.jpg';
import deleteIcon from './icon-delete.svg';
import styled from 'styled-components';
import Button from '../Button';
import theme from '../../theme';

const CartContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: .5rem;
  box-shadow: 0px 14px 50px -24px #1d2025;
  box-sizing: border-box;

  position: fixed;
  top: 78px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  padding: 1.25rem 0 2rem 0;

  height: 256px;
  max-width: 360px;
  width: 100%; 

  /* Posicionamento do Cart para versões desktop */
  @media (min-width: 768px){
    left: 74%;
  }

  @media (min-width: 992px){
    left: 60%;
    top: 92px;
    transform: none;
  }

  @media (min-width: 1200px){
    left: 65%;
  }

  transition: opacity 3s ease-in-out;
`

const CartTitle = styled.h2`
  color: ${theme.colors.veryDarkBlue};
  font-size: 1rem;
  font-weight: 700;
  text-align: left;

  padding: 0 1.5rem 1.75rem 1.5rem;
`

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;

  border-top: 1px solid;
  border-color: ${theme.colors.veryLightGray};

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

  height: 50px;
  width: 50px;
`

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .375rem;

  align-items: flex-start;
`

const ProductName = styled.p`
  color: ${theme.colors.darkGrayishBlue};
  font-size: 1rem;
  font-weight: 500;
`

const ProductValue = styled.p`
  color: ${theme.colors.darkGrayishBlue};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: .02rem;

  span {
    color: ${theme.colors.veryDarkBlue};
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
              <ProductImage src={product} alt="Product image" />

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


/*

  Utilizar esse componente no lugar certo

  - Aqui vai pegar via status os dados dinamicamente para preencher `ProductName` e `ProductValue`
  sendo que se for selecionado mais de 3 produtos, deve mostrar o valor de cada item e o valor
  multiplicado pela quantidade.

*/