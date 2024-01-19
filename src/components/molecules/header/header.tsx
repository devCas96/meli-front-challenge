'use client';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import HeaderSearcher from '../header-searcher/header-searcher';
import { CloudnaryImages } from '@/constants/cloudnary-media';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__wrapper}>
      <Link href='/'>
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

export default Header;
