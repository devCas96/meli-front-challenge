import Icon from '@/components/atoms/icon/icon';
import { CLOUDINARY_RESOURCES, EXTERNAL_RESOURCES } from '@/constants/globals';
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

  const { resultsImage } = EXTERNAL_RESOURCES;

  const { freeShipingIcon } = CLOUDINARY_RESOURCES;
  return (
    <ol className={styles.products}>
      {products.items.map((product) => {
        //Aria description for entire card
        const ARIA_HELPER = `Product - ${product.title} - Price - ${
          product.price.amount
        } - This product ${
          product.free_shipping ? 'has' : 'has not'
        } free shiping - City - ${product.city}`;

        return (
          <li key={product.id}>
            <Link
              href={`/items/${product.id}`}
              className={styles.products__item}
              aria-label={ARIA_HELPER}
            >
              <Image
                className={styles.products__image}
                src={product.picture}
                alt=''
                width={resultsImage.width}
                height={resultsImage.height}
                aria-hidden='true'
              />
              <div className={styles.products__info} aria-hidden='true'>
                <p className={styles.products__price}>
                  {priceByCurrency(
                    product.price.amount,
                    product.price.currency,
                    Locales.ES_AR
                  )}
                  {product.free_shipping && (
                    <Icon
                      iconSrc={freeShipingIcon.src}
                      iconWidth={freeShipingIcon.width}
                      iconHeight={freeShipingIcon.height}
                      iconAlt={freeShipingIcon.alt}
                    />
                  )}
                </p>
                <h2 className={styles.products__title}>{product.title}</h2>
              </div>
              <span className={styles.products__city} aria-hidden='true'>
                {product.city}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
