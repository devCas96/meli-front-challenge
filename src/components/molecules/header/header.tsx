'use client';

import { BASE_PATH, CLOUDINARY_RESOURCES } from '@/constants/globals';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import HeaderSearcher from '../header-searcher/header-searcher';
import styles from './header.module.css';

export default function Header() {
  const { logo } = CLOUDINARY_RESOURCES;
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link href={BASE_PATH}>
          <CldImage
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            src={logo.src}
            priority
          />
        </Link>
        <HeaderSearcher />
      </div>
    </header>
  );
}
