import styled from "styled-components"

const CompanyName = styled.h3`
  color: ${({theme}) => theme.colors.orange};
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1013rem;
  
  text-transform: uppercase;

  margin-top: 1.5rem;
`

const ProductName = styled.h2`
  color: ${({theme}) => theme.colors.veryDarkBlue};
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: capitalize;
  
  margin-top: .75rem;
  
  width: 254px;
`

const Description = styled.p`
  color: ${({theme}) => theme.colors.darkGrayishBlue};
  font-size: 15px;
  letter-spacing: -0.004rem;
  line-height: normal;

  margin-top: 1rem;
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
