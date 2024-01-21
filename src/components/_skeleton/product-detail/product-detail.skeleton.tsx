import styles from './product-detail.skeleton.module.css';

export default function ProductDetailSkeleton() {
  return (
    <article className={styles.product}>
      <div className={styles.product__head}>
        <span className={styles.product__image} />
        <div className={styles.product__info}>
          <div className={styles.product__stock} />
          <div className={styles.product__line} />
          <div className={styles.product__line} />
          <div className={styles.product__line} />
          <div className={styles.product__price} />
          <div className={styles.product__button} />
        </div>
      </div>
    </article>
  );
}
