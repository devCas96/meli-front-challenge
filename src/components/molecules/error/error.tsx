'use client';

import { ReactNode } from 'react';
import styles from './error.module.css';

interface ErrorComponentProps {
  message: string;
  children?: ReactNode;
}

export default function ErrorComponent({
  children,
  message,
}: ErrorComponentProps) {
  return (
    <div className={styles.error}>
      <p className={styles.error__message}>{message}</p>
      {children}
    </div>
  );
}
