import ProductServices from '@/services/products';
import { IProductsLocal } from '@/types/types';
import ProductList from '@/components/organisms/product-list/product-list';
import styles from './page.module.css';

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
      <p className={styles.breadcrum}>
        {'Breadcrum > breadcrum > breadcrum > Breadcrum > breadcrum '}
      </p>
      <ProductList products={products} />
    </>
  );
}
