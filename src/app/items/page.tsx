import Image from 'next/image';
import Link from 'next/link';
import ImageDef from '../../../public/180.jpeg';
import styles from './page.module.css';
// import { Suspense } from 'react';
interface SearchParams {
  search: string;
  // Add other properties if needed
}

interface ProductItemsProps {
  searchParams: SearchParams;
}

export default function ProductItems({ searchParams }: ProductItemsProps) {
  return (
    // <Suspense fallback={<p>Loading feed...</p>}>
    <>
      <p className={styles.breadcrum}>
        {'Breadcrum > breadcrum > breadcrum > Breadcrum > breadcrum '}
      </p>
      <ol className={styles.products}>
        <li className={styles.products__item}>
          <Link href={'/items/productx'}>
            <Image
              className={styles.products__image}
              src={ImageDef}
              alt='Picture of the author'
              width={180}
              height={180}
              placeholder='blur'
            />
          </Link>
          <div className={styles.products__info}>
            <p>
              Price
              <span>icon</span>
            </p>
            <h2>Product name</h2>
          </div>
          <span>City</span>
        </li>
        <li className={styles.products__item}>
          <Link href={'/items/productx'}>
            <Image
              className={styles.products__image}
              src={ImageDef}
              alt='Picture of the author'
              width={180}
              height={180}
              placeholder='blur'
            />
          </Link>
          <div className={styles.products__info}>
            <p>
              Price
              <span>icon</span>
            </p>
            <h2>Product name</h2>
          </div>
          <span>City</span>
        </li>
      </ol>
    </>
    // </Suspense>
  );
}
