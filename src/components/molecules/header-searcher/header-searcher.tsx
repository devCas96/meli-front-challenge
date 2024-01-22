import ButtonIcon from '@/components/atoms/button-icon/button-icon';
import { Copies } from '@/constants/copies';
import {
  ButtonTypes,
  CLOUDINARY_RESOURCES,
  FormValidations,
} from '@/constants/globals';
import Checkers from '@/utilities/checkers';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import styles from './header-searcher.module.css';

export default function HeaderSearcher() {
  const router = useRouter();
  const { searchIcon } = CLOUDINARY_RESOURCES;

  const handleSearchProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $searchInput = e.currentTarget[0] as HTMLInputElement;

    if (!Checkers.checkIsValidString($searchInput.value)) return;

    router.push(`/items?search=${$searchInput.value}`);
  };

  return (
    <form onSubmit={handleSearchProduct} className={styles.searcher}>
      <input
        className={styles.searcher__input}
        placeholder={Copies.SEARCH_PLACEHOLDER}
        type='search'
        data-testid='input-search'
        maxLength={FormValidations.MAX_LENGTH}
      />
      <ButtonIcon
        buttonProps={{
          testId: 'search-button',
          ariaLabel: 'Presiona para buscar',
          type: ButtonTypes.SUBMIT,
          onClick: () => {},
          className: styles.searcher__button,
        }}
        iconProps={{
          iconAlt: searchIcon.alt,
          iconWidth: searchIcon.width,
          iconHeight: searchIcon.height,
          iconSrc: searchIcon.src,
        }}
      />
    </form>
  );
}
