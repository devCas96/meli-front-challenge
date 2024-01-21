import ProductServices from '@/services/products';
import { IFullProductLocal } from '@/types/types';
import ProductDetail from '@/components/organisms/product-detail/product-detail';
import Breadcrum from '@/components/molecules/breadcrum/breadcrum';
import ErrorComponent from '@/components/molecules/error/error';
import { FrontErrors } from '@/constants/errors';

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product: IFullProductLocal = await ProductServices.getProductById(
    params.slug
  );

  if (Object.values(product.item || {}).length === 0)
    return <ErrorComponent message={FrontErrors.EMPTY_RESULT} />;

  return (
    <>
      <Breadcrum />
      <ProductDetail product={product.item} />
    </>
  );
}
