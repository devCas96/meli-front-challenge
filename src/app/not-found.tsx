import ErrorComponent from '@/components/molecules/error/error';
import { Copies } from '@/constants/copies';
import { FrontErrors } from '@/constants/errors';
import { BASE_PATH } from '@/constants/globals';
import Link from 'next/link';

export default function NotFound() {
  return (
    <ErrorComponent message={FrontErrors.NOT_FOUND}>
      <Link href={BASE_PATH}>{Copies.RETURN_TO_HOME}</Link>
    </ErrorComponent>
  );
}
