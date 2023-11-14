import { memo, useState } from 'react';
import { AppLink } from 'components/common/AppLink/AppLink';
import { SidebarItemType } from 'const/sidebarItemList';
import { Icon } from 'components/common/Icon/Icon';
import arrow from 'assetes/svg/arrow_up.svg';
import styles from './SidebarLinkItem.module.scss';

type SidebarLinkItemProps = {
  item: SidebarItemType;
};

export const SidebarLinkItem = memo(({ item }: SidebarLinkItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const children = (
    <>
      <div className={styles.icon}>
        <Icon Svg={item.Icon} />
      </div>
      <span className={styles}>{item.text}</span>
    </>
  );

  return (
    <>
      <div className={styles.item}>
        {item.path ? (
          <AppLink to={item.path} className={styles.link}>
            {children}
          </AppLink>
        ) : (
          children
        )}
        {item.sidebarItemsList && (
          <span onClick={toggleDropdown}>
            <Icon Svg={arrow} className={!isDropdownOpen ? styles.arrowDown : styles.arrowUp} />
          </span>
        )}
      </div>

      {isDropdownOpen && item.sidebarItemsList && (
        <div className={styles.items}>
          {item.sidebarItemsList.map((nestedItem) => (
            <SidebarLinkItem key={nestedItem.text} item={nestedItem} />
          ))}
        </div>
      )}
    </>
  );
});
