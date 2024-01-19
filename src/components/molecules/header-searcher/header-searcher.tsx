import { Copies } from '@/constants/copies';
import ButtonIcon from '@/components/atoms/button-icon/button-icon';
import { CloudnaryImages } from '@/constants/cloudnary-media';
import styles from './header-searcher.module.css';

export default function HeaderSearcher() {
  return (
    <form className={styles.header__searcher}>
      <input
        className={styles.header__searcher__input}
        autoFocus
        tabIndex={0}
        placeholder={Copies.SEARCH_PLACEHOLDER}
        type='search'
        id='site-search'
        name='q'
      />
      <ButtonIcon
        buttonClick={() => {}}
        buttonClassName={styles.header__searcher__button}
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
