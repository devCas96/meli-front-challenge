import ProductServices from '@/services/products';
import { IFullProductLocal } from '@/types/types';
import ProductDetail from '@/components/organisms/product-detail/product-detail';

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product: IFullProductLocal = await ProductServices.getProductById(
    params.slug
  );
  return (
    <>
      <p>{'Breadcrum > breadcrum > breadcrum > Breadcrum > breadcrum '}</p>
      <ProductDetail product={product.item} />
    </>
  );
}
