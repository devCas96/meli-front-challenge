import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import priceByCurrency from '@/utilities/price-by-currency';
import { IProductsLocal } from '@/types/types';
import { Locales } from '@/constants/locales';
import styles from './product-list.module.css';

interface productListProps {
  products: IProductsLocal;
}

export default function ProductList({ products }: productListProps) {
  return (
    <ol className={styles.products}>
      {products.items.map((product) => (
        <li key={product.id} className={styles.products__item}>
          <Link href={'/items/productx'}>
            <Image
              className={styles.products__image}
              src={product.picture}
              alt='Picture of the author'
              width={180}
              height={180}
            />
          </Link>
          <div className={styles.products__info}>
            <p>
              {priceByCurrency(
                product.price.amount,
                product.price.currency,
                Locales.ES_AR
              )}
              <span>icon</span>
            </p>
            <h2>{product.title}</h2>
          </div>
          <span>City</span>
        </li>
      ))}
    </ol>
  );
}
