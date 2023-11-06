import product from './image-product-1-thumbnail.jpg';
import DeleteIcon from './icon-delete.svg?react';
import styled from 'styled-components';
import Button from '../Button';
import theme from '@/theme';
import { StylizedButton } from '../Header';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const StylizedCartContainer = styled.div`
  display: flex;
  flex-direction: column;

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

  min-height: 256px;
  max-width: 360px;
  width: 100%; 

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

const StylizedCartTitle = styled.h2`
  color: ${theme.colors.veryDarkBlue};
  font-size: 1rem;
  font-weight: 700;
  text-align: left;

  padding: 0 1.5rem 1.75rem 1.5rem;
`

const StylizedProductList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  border-top: 1px solid;
  border-color: ${theme.colors.veryLightGray};

  height: inherit;

  padding: 1.5rem 1.5rem 0 1.5rem;
`

const StylizedEmpityParagraph = styled.p`
  align-self: center;
  color: ${theme.colors.darkGrayishBlue};
  font-size: 1rem;
  font-weight: 700;
`

const StylizedItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.625rem;
`

const StylizedProductContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StylizedProductImage = styled.img`
  border-radius: .25rem;
  cursor: pointer;

  height: 50px;
  width: 50px;
`

const StylizedProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .375rem;

  align-items: flex-start;
`

const StylizedProductName = styled.p`
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

const StylizedIconDelete = styled(DeleteIcon)`
  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .5;
  }
`

const StylizedLink = styled(Link)`
  display: flex;
`

export default function Cart() {
  const {addToCart, setAddToCart} = useCartContext();

  const deleteItem = (id) => {
    const updatedCart = addToCart.filter((cartItem) => cartItem.id !==id);
    setAddToCart(updatedCart);
  }

  return (
    <StylizedCartContainer>
      <StylizedCartTitle>Cart</StylizedCartTitle>

      <StylizedProductList>
        {addToCart.length === 0 || addToCart.quantity === 0 ? (
          <StylizedEmpityParagraph>Your cart is empty</StylizedEmpityParagraph> ) : (  
            <>    
              {addToCart.map((cartItem) => (
              <li key={cartItem.id}> {/* Fazer mapeamento para cada objeto/item gerar um li */}
                <StylizedItemContainer>
                  <StylizedProductContainer>
                    <StylizedLink to={'/'}>
                      <StylizedProductImage src={product} alt="Product image" />
                    </StylizedLink>

                    <StylizedProductInfoContainer>
                      <StylizedProductName>{cartItem.productName}</StylizedProductName>
                      <ProductValue>
                        {cartItem.productValue} x {cartItem.quantity} <span>{cartItem.amount}</span>
                      </ProductValue>
                    </StylizedProductInfoContainer>
                  </StylizedProductContainer>

                  <StylizedButton onClick={() => deleteItem(cartItem.id)}>
                    <StylizedIconDelete />
                  </StylizedButton>

                </StylizedItemContainer>
              </li>          
              ))}
              
              <Button>Checkout</Button>
            </>
          )
        }
      </StylizedProductList>
    </StylizedCartContainer>
  )
}


/*

  Utilizar esse componente no lugar certo

  - Aqui vai pegar via status os dados dinamicamente para preencher `StylizedProductName` e `ProductValue`
  sendo que se for selecionado mais de 3 produtos, deve mostrar o valor de cada item e o valor
  multiplicado pela quantidade.

*/