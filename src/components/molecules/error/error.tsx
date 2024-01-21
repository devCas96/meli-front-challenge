import styles from './error.module.css';

interface ErrorComponentProps {
  message: string;
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <div className={styles.error}>
      <p className={styles.error__message}>{message}</p>
    </div>
  );
}
