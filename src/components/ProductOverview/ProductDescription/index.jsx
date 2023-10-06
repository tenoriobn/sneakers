import styled from "styled-components"

const CompanyName = styled.h3`
  color: ${({theme}) => theme.colors.orange};
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1013rem;
  
  text-transform: uppercase;

  margin-top: 1.5rem;

  @media (min-width: 768px) {
    font-size: .875rem;
    letter-spacing: .0656rem;

    margin-top: 3.75rem;
  }
`

const ProductName = styled.h2`
  color: ${({theme}) => theme.colors.veryDarkBlue};
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: capitalize;
  
  margin-top: .75rem;
  
  width: 254px;

  @media (min-width: 992px) {
    font-size: 2.75rem;
    letter-spacing: 0.44px;
    line-height: 110.023%;

    margin-top: 1.25rem;

    width: auto;
  }
`

const Description = styled.p`
  color: ${({theme}) => theme.colors.darkGrayishBlue};
  font-size: 15px;
  letter-spacing: -0.004rem;
  line-height: normal;

  margin-top: 1rem;

  @media (min-width: 992px) {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 140.023%;

    margin-top: 2.5rem;
  }
`

export default function ProductDescription({ productData }) {
  return (
    <>
      <CompanyName>{productData.companyName}</CompanyName>
      <ProductName>{productData.productName}</ProductName>
      <Description>{productData.description}</Description>
    </>
  )
}
