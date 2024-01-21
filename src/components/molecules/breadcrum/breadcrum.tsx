import styles from './breadcrum.module.css';

export default function Breadcrum() {
  return (
    <p tabIndex={4} className={styles.breadcrum}>
      {'Breadcrum > breadcrum > breadcrum > Breadcrum > breadcrum '}
    </p>
  );
}
