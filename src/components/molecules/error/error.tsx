'use client';

import { ReactNode } from 'react';
import styles from './error.module.css';

interface Props {
  message: string;
  children?: ReactNode;
}

export default function ErrorComponent(props: Props) {
  const { children, message } = props;

  return (
    <div className={styles.error} data-testid='error-component'>
      <p className={styles.error__message}>{message}</p>
      {children}
    </div>
  );
}
