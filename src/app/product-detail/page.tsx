import { Suspense } from "react";
import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductDetailsPage() {
  return (
    <div>
      <h1>Product Details page</h1>
      <Suspense fallback={<p>Loading product details....</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews....</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
