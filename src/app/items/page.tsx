import Breadcrum from '@/components/molecules/breadcrum/breadcrum';
import ErrorComponent from '@/components/molecules/error/error';
import ProductList from '@/components/organisms/product-list/product-list';
import { FrontErrors } from '@/constants/errors';
import ProductServices from '@/services/products';
import { IProductsLocal } from '@/types/types';
import { Metadata } from 'next';

interface Props {
  searchParams: {
    search: string;
  };
}

export const metadata: Metadata = {
  title: 'Meli challenge - Results page',
  description: 'Page with the four products searched by the search bar.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ProductItems(props: Props) {
  const { searchParams } = props;

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
