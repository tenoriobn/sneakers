import styled from "styled-components";
import { useEffect, useState } from "react";
import theme from "@/theme";
import Button from "../../Button";
import { useCartContext } from "@/context/CartContext";
import IconIncrease from "./icon-increase.svg?react"
import IconDecrease from "./icon-decrease.svg?react"
import CartIcon from "./icon-cart.svg?react"

const StylizedProductPricingContainer = styled.div`
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

const StylizedProductPricingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StylizedProductValue = styled.p`
  color: ${theme.colors.veryDarkBlue};
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: .0788rem;

  @media (min-width: 992px) {
    font-size: 1.875rem;
  }
`

const StylizedDiscount = styled.p`
  background-color: ${theme.colors.paleOrange};
  border-radius: .375rem;

  color: ${theme.colors.orange};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .025rem;

  padding: .375rem .625rem;

  @media (min-width: 992px) {
    letter-spacing: .045rem;
  }
`

const StylizedPriceWithoutDiscount = styled.p`
  color: ${theme.colors.grayishBlue};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .022rem;
  text-decoration: line-through;

  @media (min-width: 992px) {
    letter-spacing: .025rem;

    margin-top: .75rem;
  }
`

const StylizedQuantityControlPanel = styled.div`
  @media (min-width: 992px) {
    display: flex;
    gap: 1rem;

    margin-top: 2.25rem;
  }
`

const StylizedQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${theme.colors.lightGrayishBlue};
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

const StylizedQuantityButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .7;
  }
`;

const QuantityValue = styled.span`
  color: ${theme.colors.veryDarkBlue};
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: .025rem;
`;

const StylizedCartIcon = styled(CartIcon)`
    width: 18px;
    height: 16px;
  path {
    fill: ${theme.colors.white};

  }
`

export default function ProductPricing({ productData }) {

  const {addItem, setAddItem, setAddToCart} = useCartContext();
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCartClick = () => {
    setAddItem(!addItem);
  }

  useEffect(() => {
    const calculatedAmount = parseFloat(productData.productValue.replace(/[^0-9.]/g, '')) * quantity;
    const formattedAmount = '$' + calculatedAmount.toFixed(2);

    if (addItem === true) {
      setAddItem(!addItem);
    
      setAddToCart((prevCart) => [{
        ...prevCart,
        quantity: quantity,
        productValue: productData.productValue,
        amount: formattedAmount,
      }]);
    }
  }, [setAddItem, addItem, setAddToCart, quantity, productData.productValue])

  return (
    <>
      <StylizedProductPricingContainer>
        <StylizedProductPricingWrapper>
          <StylizedProductValue>{productData.productValue}</StylizedProductValue> 
          <StylizedDiscount>{productData.discount}</StylizedDiscount> 
        </StylizedProductPricingWrapper>
        <StylizedPriceWithoutDiscount>{productData.priceWithoutDiscount}</StylizedPriceWithoutDiscount> 
      </StylizedProductPricingContainer>

      <StylizedQuantityControlPanel>
        <StylizedQuantityContainer>
          <StylizedQuantityButton onClick={decreaseQuantity}>
            <IconDecrease />
          </StylizedQuantityButton>
          <QuantityValue>{quantity}</QuantityValue>
          <StylizedQuantityButton onClick={increaseQuantity}>
            <IconIncrease />
          </StylizedQuantityButton>
        </StylizedQuantityContainer>
        
        <Button 
          $margin="1rem" 
          $width="272px" 
          $boxShadow={true}
          handleAddToCartClick={handleAddToCartClick}
        >
          <StylizedCartIcon />
          Add to cart
        </Button>
      </StylizedQuantityControlPanel>
    </>
  )
}
