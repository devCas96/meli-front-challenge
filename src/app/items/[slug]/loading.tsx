import BreadcrumSkeleton from '@/components/_skeleton/breadcrum/breadcrum.skeleton';
import ProductDetailSkeleton from '@/components/_skeleton/product-detail/product-detail.skeleton';

export default function Loading() {
  return (
    <>
      <BreadcrumSkeleton />
      <ProductDetailSkeleton />
    </>
  );
}
