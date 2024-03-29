import styles from './product-list.skeleton.module.css';

interface Props {
  products: number[];
}

export default function ProductListSkeleton(props: Props) {
  const { products } = props;

  return (
    <ol className={styles.products}>
      {products.map((_, index) => (
        <li key={index} className={styles.products__item}>
          <span className={styles.products__image} />
          <div className={styles.products__info}>
            <p className={styles.products__price}>
              <span />
              <span />
            </p>
            <h2 />
          </div>
          <span className={styles.products__city} />
        </li>
      ))}
    </ol>
  );
}
