import ErrorComponent from '@/components/molecules/error/error';
import { FrontErrors } from '@/constants/errors';
import { BASE_PATH } from '@/constants/globals';
import Link from 'next/link';

export default function NotFound() {
  return (
    <ErrorComponent message={FrontErrors.NOT_FOUND}>
      <Link href={BASE_PATH}>Return Home</Link>
    </ErrorComponent>
  );
}
