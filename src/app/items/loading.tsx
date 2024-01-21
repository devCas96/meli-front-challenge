import BreadcrumSkeleton from '@/components/organisms/_skeleton/breadcrum/breadcrum.skeleton';
import ProductListSkeleton from '@/components/organisms/_skeleton/product-list/product-list.skeleton';
import { EXTERNAL_API_LIMIT } from '@/constants/globals';

export default function Loading() {
  return (
    <>
      <BreadcrumSkeleton />
      <ProductListSkeleton products={Array(EXTERNAL_API_LIMIT).fill(0)} />
    </>
  );
}
