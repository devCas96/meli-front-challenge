import ProductServices from '@/services/products';
import { IFullProductLocal } from '@/types/types';
import ProductDetail from '@/components/organisms/product-detail/product-detail';
import Breadcrum from '@/components/molecules/breadcrum/breadcrum';

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
      <Breadcrum />
      <ProductDetail product={product.item} />
    </>
  );
}
