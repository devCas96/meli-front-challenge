'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ErrorComponent from '@/components/molecules/error/error';
import { FrontErrors } from '@/constants/errors';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorComponent message={FrontErrors.GENERAL_ERROR}>
      <Link href='/'>Return Home</Link>
    </ErrorComponent>
  );
}
