import { Suspense } from 'react';
import ProductServices from '@/services/products';
import { IFullProductLocal } from '@/types/types';

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product: IFullProductLocal = await ProductServices.getProductById(
    params.slug
  );

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <p>{'Breadcrum > breadcrum > breadcrum > Breadcrum > breadcrum '}</p>
      {JSON.stringify(product)}
    </Suspense>
  );
}
