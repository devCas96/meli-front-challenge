import ProductServices from '@/services/products';
import { IProductsLocal } from '@/types/types';
import ProductList from '@/components/organisms/product-list/product-list';
import Breadcrum from '@/components/molecules/breadcrum/breadcrum';

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
  return (
    <>
      <Breadcrum />
      <ProductList products={products} />
    </>
  );
}
