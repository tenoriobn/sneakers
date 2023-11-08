import styled from "styled-components";
import ProductDescription from "./ProductDescription";
import ProductPricing from "./ProductPricing";
import productData from "@/data/productData.json";

const StylizedProductOverviewContainer = styled.section`
  padding: 0 1.5rem;
  margin-bottom: 5.5rem;

  @media (min-width: 992px) {
    margin: 0;
    padding: 0;
    width: 45%;
  }

  @media (min-width: 1200px) {
    width: 444px;
  }
`

export default function ProductOverview() {

  return (
    <>
      {productData.map((product) => (
        <StylizedProductOverviewContainer key={product.id}>
          <ProductDescription productData={product} />
          <ProductPricing productData={product} />
        </StylizedProductOverviewContainer>
      ))}
    </>
  )
}