import styled from "styled-components";
import ProductDescription from "./ProductDescription";
import ProductPricing from "./ProductPricing";
import productData from "./productData.json";

const ProductOverviewContainer = styled.section`
  padding: 0 1.5rem;
  margin-bottom: 5.5rem;

  @media (min-width: 992px) {
    padding: 0;
    margin: 0;

    width: 444px;
  }
`

export default function ProductOverview() {
  return (
    <ProductOverviewContainer>
      <ProductDescription productData={productData} />
      <ProductPricing productData={productData} />
    </ProductOverviewContainer>
  )
}


/* 
  - Criar versão desktop
  - Criar estado de foco `hover` e `Box-shadow nos botões (verificar se tem em outros lugares)`
  - Não esquecer de aplicar `transitions` nos elementos para tornar a interação suave na página
  - verificar se existe necessidade de refatorar algo, exceto o `svg component que sera resolvido futuramente`

*/