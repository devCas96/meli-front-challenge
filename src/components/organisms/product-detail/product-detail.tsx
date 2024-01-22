import { Copies } from '@/constants/copies';
import { Locales } from '@/constants/locales';
import { IFullItem } from '@/types/types';
import priceByCurrency from '@/utilities/price-by-currency';
import Image from 'next/image';
import styles from './product-detail.module.css';

interface Props {
  product: IFullItem;
}

export default function ProductDetail(props: Props) {
  const { product } = props;

  return (
    <article className={styles.product}>
      <div className={styles.product__head}>
        <Image
          data-testid='product-image'
          src={product.picture}
          width={680}
          height={680}
          alt={`${product.title} image`}
        />
        <div data-testid='product-info' className={styles.product__info}>
          <p>
            {product.condition} - {product.sold_quantity}{' '}
            {Copies.PRODUCT_DETAIL_SOLD_QUANTITY}
          </p>
          <h1>{product.title}</h1>
          <h2>
            {priceByCurrency(
              product.price.amount,
              product.price.currency,
              Locales.ES_AR
            )}
          </h2>
          <button>{Copies.BUY_BUTTON_TEXT}</button>
        </div>
      </div>
      {product.description && (
        <div data-testid='product-description' className={styles.product__body}>
          <h3>{Copies.PRODUCT_DETAIl_DESCRIPTION_TITLE}</h3>
          <p>{product.description}</p>
        </div>
      )}
    </article>
  );
}
