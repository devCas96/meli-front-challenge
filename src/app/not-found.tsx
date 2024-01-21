import ErrorComponent from '@/components/molecules/error/error';
import { FrontErrors } from '@/constants/errors';
import Link from 'next/link';

export default function NotFound() {
  return (
    <ErrorComponent message={FrontErrors.NOT_FOUND}>
      <Link href='/'>Return Home</Link>
    </ErrorComponent>
  );
}
