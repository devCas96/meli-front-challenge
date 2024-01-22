'use client';

import ErrorComponent from '@/components/molecules/error/error';
import { Copies } from '@/constants/copies';
import { FrontErrors } from '@/constants/errors';
import { BASE_PATH } from '@/constants/globals';
import Link from 'next/link';
import { useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error(props: Props) {
  const { error } = props;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorComponent message={FrontErrors.GENERAL_ERROR}>
      <Link href={BASE_PATH}>{Copies.RETURN_TO_HOME}</Link>
    </ErrorComponent>
  );
}
