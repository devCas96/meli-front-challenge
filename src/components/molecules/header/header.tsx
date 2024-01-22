'use client';

import { CloudnaryImages } from '@/constants/cloudnary-media';
import { BASE_PATH } from '@/constants/globals';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import HeaderSearcher from '../header-searcher/header-searcher';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link href={BASE_PATH}>
          <CldImage
            alt='logo Mercado Libre'
            width='44'
            height='32'
            src={CloudnaryImages.LOGO_X2}
            priority
          />
        </Link>
        <HeaderSearcher />
      </div>
    </header>
  );
}
