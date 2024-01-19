import { Suspense } from 'react';
interface SearchParams {
  search: string;
  // Add other properties if needed
}

interface ProductItemsProps {
  searchParams: SearchParams;
}

export default function ProductItems({ searchParams }: ProductItemsProps) {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <h1>{searchParams.search} Items</h1>
    </Suspense>
  );
}
