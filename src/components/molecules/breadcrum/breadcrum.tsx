import { ICategory } from '@/types/types';
import styles from './breadcrum.module.css';

interface BreadcrumProps {
  items: ICategory[];
}

export default function Breadcrum({ items = [] }: BreadcrumProps) {
  return (
    <div className={styles.breadcrum} data-testid='breadcrum'>
      {items.map((item, index) => {
        const isLastElement = items.length === index + 1;
        return (
          <span
            className={`${styles.breadcrum__item} ${
              isLastElement ? styles['breadcrum__item--highlited'] : ''
            }`}
            key={item.id}
          >
            {item.name}
            {isLastElement ? '' : ' > '}
          </span>
        );
      })}
    </div>
  );
}
