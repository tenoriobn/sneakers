import styled from "styled-components";
import increase from "./icon-increase.svg"
import decrease from "./icon-decrease.svg"
import { useState } from "react";

const ProductPricingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.75rem;
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
`

const Discount = styled.p`
  background-color: ${({theme}) => theme.colors.paleOrange};
  border-radius: .375rem;

  color: ${({theme}) => theme.colors.orange};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .025rem;

  padding: .375rem .625rem;
`

const PriceWithoutDiscount = styled.p`
  color: ${({theme}) => theme.colors.darkGrayishBlue};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .022rem;
  text-decoration: line-through;
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme}) => theme.colors.lightGrayishBlue};
  border-radius: .5rem;

  height: 56px;

  margin-top: 1.5rem;
  padding: 0 1.5rem;
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
`;

const QuantityValue = styled.span`
  color: ${({theme}) => theme.colors.veryDarkBlue};
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: .025rem;
`;

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

      <div>
        <QuantityContainer>
          <QuantityButton $icon={decrease} onClick={decreaseQuantity} />
          <QuantityValue>{quantity}</QuantityValue>
          <QuantityButton $icon={increase} onClick={increaseQuantity} />
        </QuantityContainer>
        <button>Add to cart</button>
      </div>
    </>
  )
}
