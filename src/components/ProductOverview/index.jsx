import ProductDescription from "./ProductDescription";
import ProductPricing from "./ProductPricing";
import productData from "./productData.json";

export default function ProductOverview() {
  return (
    <section>
      <ProductDescription productData={productData} />
      <ProductPricing productData={productData} />
    </section>
  )
}
