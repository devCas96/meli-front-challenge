import ButtonIcon from '@/components/atoms/button-icon/button-icon';
import { CloudnaryImages } from '@/constants/cloudnary-media';
import { Copies } from '@/constants/copies';
import { ButtonTypes } from '@/constants/globals';
import Checkers from '@/utilities/checkers';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import styles from './header-searcher.module.css';

export default function HeaderSearcher() {
  const router = useRouter();

  const handleSearchProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $searchInput = e.currentTarget[0] as HTMLInputElement;

    if (!Checkers.checkIsValidString($searchInput.value)) return;

    router.push(`/items?search=${$searchInput.value}`);
  };

  return (
    <form onSubmit={handleSearchProduct} className={styles.header__searcher}>
      <input
        className={styles.header__searcher__input}
        placeholder={Copies.SEARCH_PLACEHOLDER}
        type='search'
        data-testid='input-search'
      />
      <ButtonIcon
        buttonProps={{
          testId: 'search-button',
          ariaLabel: 'Presiona para buscar',
          type: ButtonTypes.SUBMIT,
          onClick: () => {},
          className: styles.header__searcher__button,
        }}
        iconProps={{
          iconAlt: 'Icon search',
          iconWidth: 20,
          iconHeight: 20,
          iconSrc: CloudnaryImages.ICON_SEARCH_X2,
        }}
      />
    </form>
  );
}
