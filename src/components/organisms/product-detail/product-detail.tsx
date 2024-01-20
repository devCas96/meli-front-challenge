import Image from 'next/image';
import styles from './product-detail.module.css';
import { Copies } from '@/constants/copies';
import { IFullItem } from '@/types/types';
import priceByCurrency from '@/utilities/price-by-currency';
import { Locales } from '@/constants/locales';

interface ProductDetailProps {
  product: IFullItem;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <article className={styles.product}>
      <Image src={product.picture} width={680} height={680} alt='productoo' />
      <div className={styles.product__info}>
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
    </article>
  );
}
