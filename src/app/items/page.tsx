import ProductServices from '@/services/products';
import { IProductsLocal } from '@/types/types';
import ProductList from '@/components/organisms/product-list/product-list';
import Breadcrum from '@/components/molecules/breadcrum/breadcrum';
import ErrorComponent from '@/components/molecules/error/error';
import { FrontErrors } from '@/constants/errors';

interface SearchParams {
  search: string;
}

interface ProductItemsProps {
  searchParams: SearchParams;
}

export default async function ProductItems({
  searchParams,
}: ProductItemsProps) {
  const products: IProductsLocal = await ProductServices.getProductsByQuery(
    searchParams.search
  );

  if (searchParams.search === '' || searchParams.search === undefined)
    return <ErrorComponent message={FrontErrors.INVALID_ROUTE} />;

  if (products.items.length === 0)
    return <ErrorComponent message={FrontErrors.EMPTY_RESULT} />;

  return (
    <>
      <Breadcrum items={products.categories} />
      <ProductList products={products} />
    </>
  );
}
