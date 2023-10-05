import styled from "styled-components";
import ProductDescription from "./ProductDescription";
import ProductPricing from "./ProductPricing";
import productData from "./productData.json";

const ProductOverviewContainer = styled.section`
  padding: 0 1.5rem;
  margin-bottom: 5.5rem;
`

export default function ProductOverview() {
  return (
    <ProductOverviewContainer>
      <ProductDescription productData={productData} />
      <ProductPricing productData={productData} />
    </ProductOverviewContainer>
  )
}
