import Breadcrum from '@/components/molecules/breadcrum/breadcrum';
import ErrorComponent from '@/components/molecules/error/error';
import ProductDetail from '@/components/organisms/product-detail/product-detail';
import { FrontErrors } from '@/constants/errors';
import ProductServices from '@/services/products';
import { IFullProductLocal } from '@/types/types';

interface Props {
  params: { slug: string };
}

export default async function ProductDetailPage(props: Props) {
  const { params } = props;

  const product: IFullProductLocal = await ProductServices.getProductById(
    params.slug
  );

  if (Object.values(product.item || {}).length === 0)
    return <ErrorComponent message={FrontErrors.EMPTY_RESULT} />;

  return (
    <>
      <Breadcrum items={product.categories} />
      <ProductDetail product={product.item} />
    </>
  );
}
