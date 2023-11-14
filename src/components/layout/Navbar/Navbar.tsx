import { memo, FC } from 'react';
import { Icon } from 'components/common/Icon/Icon';
import logo from 'assetes/svg/logo.svg';
import person from 'assetes/svg/person.svg';
import styles from './Navbar.module.scss';

type NavbarProps = {
  isMobile: boolean;
  isShow: boolean;
  setIsShow: (value: boolean) => void;
};

export const Navbar: FC<NavbarProps> = memo(({ isMobile, isShow, setIsShow }) => {
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.block}>
        <div className={isMobile ? styles.button : undefined} onClick={isMobile ? handleClick : undefined}>
          <Icon Svg={logo} />
        </div>
        <span className={styles.text}>Wrench CRM</span>
      </div>
      <div className={styles.block}>
        <Icon Svg={person} />
        <span className={styles.text && styles.hidden}>Имя Фамилия</span>
      </div>
    </header>
  );
});
