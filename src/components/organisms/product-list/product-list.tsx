import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import priceByCurrency from '@/utilities/price-by-currency';
import { IProductsLocal } from '@/types/types';
import { Locales } from '@/constants/locales';
import { CloudnaryImages } from '@/constants/cloudnary-media';
import Icon from '@/components/atoms/icon/icon';
import styles from './product-list.module.css';

interface productListProps {
  products: IProductsLocal;
}

export default function ProductList({ products }: productListProps) {
  return (
    <ol className={styles.products}>
      {products.items.map((product) => (
        <li key={product.id} className={styles.products__item}>
          <Link href={`/items/${product.id}`}>
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
              {product.free_shipping && (
                <Icon
                  iconSrc={CloudnaryImages.ICON_FREE_SHIPPING}
                  iconWidth={20}
                  iconHeight={20}
                  iconAlt='item free shipping'
                />
              )}
            </p>
            <h2>{product.title}</h2>
          </div>
          <span>{product.city}</span>
        </li>
      ))}
    </ol>
  );
}
