import styled from "styled-components";
import increase from "./icon-increase.svg"
import decrease from "./icon-decrease.svg"
import cart from "./icon-cart.svg"
import { useState } from "react";
import Button from "../../Button";

const ProductPricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.75rem;

  @media (min-width: 992px) {
    flex-direction: column;
    align-items: flex-start;

    margin-top: 1.875rem;
  }
`

const ProductPricingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ProductValue = styled.p`
  color: ${({theme}) => theme.colors.veryDarkBlue};
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: .0788rem;

  @media (min-width: 992px) {
    font-size: 1.875rem;
  }
`

const Discount = styled.p`
  background-color: ${({theme}) => theme.colors.paleOrange};
  border-radius: .375rem;

  color: ${({theme}) => theme.colors.orange};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .025rem;

  padding: .375rem .625rem;

  @media (min-width: 992px) {
    letter-spacing: .045rem;
  }
`

const PriceWithoutDiscount = styled.p`
  color: ${({theme}) => theme.colors.grayishBlue};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .022rem;
  text-decoration: line-through;

  @media (min-width: 992px) {
    letter-spacing: .025rem;

    margin-top: .75rem;
  }
`

const QuantityControlPanel = styled.div`
  @media (min-width: 992px) {
    display: flex;
    gap: 1rem;

    margin-top: 2.25rem;
  }
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${({theme}) => theme.colors.lightGrayishBlue};
  border-radius: .5rem;
  box-sizing: border-box;

  height: 56px;

  margin-top: 1.5rem;
  padding: 0 1.5rem;

  @media (min-width: 992px) {

    margin: 0;

    width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: 156px;
  }
`

const QuantityButton = styled.button`
  display: block;

  background-color: transparent;
  background-image: url(${props => props.$icon});
  background-position: center;
  background-repeat: no-repeat;

  border: none;

  cursor: pointer;

  height: ${props => props.$height || '1rem'};
  width: ${props => props.$width || '1rem'};

  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .7;
  }
`;

const QuantityValue = styled.span`
  color: ${({theme}) => theme.colors.veryDarkBlue};
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: .025rem;
`;

const ButtonIcon = styled.span`
display: block;

background-image: url(${props => props.$icon});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

border: none;

cursor: pointer;

height: ${props => props.$height || '1rem'};
width: ${props => props.$width || '1rem'};
`

export default function ProductPricing({ productData }) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <ProductPricingContainer>
        <ProductPricingWrapper>
          <ProductValue>{productData.productValue}</ProductValue> {/* Preço */}
          <Discount>{productData.discount}</Discount> {/* Porcentagem de desconto */}
        </ProductPricingWrapper>
        <PriceWithoutDiscount>{productData.priceWithoutDiscount}</PriceWithoutDiscount> {/* Preço anterior sem desconto */}
      </ProductPricingContainer>

      <QuantityControlPanel>
        <QuantityContainer>
          <QuantityButton 
            $icon={decrease} 
            $width="0.875rem" 
            $height="0.375rem"
            onClick={decreaseQuantity} 
          />
          <QuantityValue>{quantity}</QuantityValue>
          <QuantityButton 
            $icon={increase} 
            $width="0.75rem" 
            $height="0.75rem"
            onClick={increaseQuantity} 
          />
        </QuantityContainer>
        <Button $margin="1rem" $width="272px" $boxShadow={true}>
          <ButtonIcon 
            $icon={cart} 
            $width="1.125rem" 
            $height="1rem"
          />
          Add to cart
        </Button>
      </QuantityControlPanel>
    </>
  )
}
