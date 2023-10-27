import styled from "styled-components";
import ProductDescription from "./ProductDescription";
import ProductPricing from "./ProductPricing";
import productData from "./productData.json";

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


/* 
  - Criar versão desktop
  - Criar estado de foco `hover` e `Box-shadow nos botões (verificar se tem em outros lugares)`
  - Não esquecer de aplicar `transitions` nos elementos para tornar a interação suave na página
  - verificar se existe necessidade de refatorar algo, exceto o `svg component que sera resolvido futuramente`

*/