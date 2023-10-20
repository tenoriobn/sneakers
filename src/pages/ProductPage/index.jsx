import { useState } from "react";
import ProductOverview from "../../components/ProductOverview";
import Slide from "../../components/Slide";
import photos from "../../data/photos.json";

export default function ProductPage() {
  const [productPhotos] = useState(photos);

  return (
    <>
        <Slide slidePhotos={productPhotos} />
        <ProductOverview />
    </>
  )
}
