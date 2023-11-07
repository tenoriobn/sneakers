import styled from "styled-components"
import theme from "@/theme"
import { useCartContext } from "../../../context/CartContext"
import { useEffect } from "react"

const StylizedCompanyName = styled.h3`
  color: ${theme.colors.orange};
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1013rem;
  
  text-transform: uppercase;

  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: .875rem;
    letter-spacing: .0656rem;
  }

  @media (min-width: 1200px) {
    margin-top: 3.75rem;
  }
`

const StylizedProductName = styled.h2`
  color: ${theme.colors.veryDarkBlue};
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: capitalize;
  
  margin-top: .75rem;
  
  width: 254px;

  @media (min-width: 768px) {
    width: auto;
  }

  @media (min-width: 1200px) {
    font-size: 2.75rem;
    letter-spacing: 0.44px;
    line-height: 110.023%;

    margin-top: 1.25rem;
  }
`

const StylizedDescription = styled.p`
  color: ${theme.colors.darkGrayishBlue};
  font-size: 15px;
  letter-spacing: -0.004rem;
  line-height: normal;

  margin-top: 1rem;

  @media (min-width: 1200px) {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 144.023%;

    margin-top: 2.5rem;
  }
`

export default function ProductDescription({ productData }) {
  const {addItem, setAddToCart} = useCartContext();

  useEffect(() => {
    if (addItem === true) {
      setAddToCart(() => ({
        productName: productData.productName,
        id: 1
      }));
    }
  }, [addItem, setAddToCart, productData.productName]);

  return (
    <>
      <StylizedCompanyName>{productData.companyName}</StylizedCompanyName>
      <StylizedProductName>{productData.productName}</StylizedProductName>
      <StylizedDescription>{productData.description}</StylizedDescription>
    </>
  )
}
