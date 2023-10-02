import { paths } from '@constants';

import styles from './header.module.scss';

export function Header() {
  return (
    <div className={styles['container']}>
      <a href={paths.people}>
        <button>People</button>
      </a>
    </div>
  );
}

export default Header;
