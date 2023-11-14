import { memo } from 'react';
import { SidebarLinkItem } from './SidebarLinkItem/SidebarLinkItem';
import { sidebarItemsList } from 'const/sidebarItemList';
import styles from './Sidebar.module.scss';

export const Sidebar = memo(() => {
  return (
    <aside className={styles.sidebar}>
      <h3>Меню</h3>
      <div>
        <nav className={styles.items}>
          {sidebarItemsList.map((item) => (
            <SidebarLinkItem key={item.text} item={item} />
          ))}
        </nav>
      </div>
      <div className={styles.overlay}></div>
    </aside>
  );
});
