import Icon from '@/components/atoms/icon/icon';
import { CloudnaryImages } from '@/constants/cloudnary-media';
import { Locales } from '@/constants/locales';
import { IProductsLocal } from '@/types/types';
import priceByCurrency from '@/utilities/price-by-currency';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product-list.module.css';

interface Props {
  products: IProductsLocal;
}

export default function ProductList(props: Props) {
  const { products } = props;

  return (
    <ol className={styles.products}>
      {products.items.map((product) => (
        <li key={product.id}>
          <Link
            href={`/items/${product.id}`}
            className={styles.products__item}
            aria-label={`Product - ${product.title} - Price - ${
              product.price.amount
            } - This product ${
              product.free_shipping ? 'has' : 'has not'
            } free shiping - City - ${product.city}`}
          >
            <Image
              className={styles.products__image}
              src={product.picture}
              alt='Picture of the author'
              width={180}
              height={180}
              aria-hidden='true'
            />
            <div className={styles.products__info} aria-hidden='true'>
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
            <span aria-hidden='true'>{product.city}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
