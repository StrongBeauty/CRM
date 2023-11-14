import { Suspense, useEffect, useState } from 'react';
import { Loader } from 'components/common/Loader/Loader';
import { Navbar } from 'components/layout/Navbar/Navbar';
import { AppRouter } from 'routing/AppRouter';
import { Sidebar } from 'components/layout/Sidebar/Sidebar';
import styles from './App.module.scss';

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      const value = window.innerWidth <= 768;
      setIsMobile(value);
      setIsShow(!value);
    };
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.app}>
        <Navbar isMobile={isMobile} isShow={isShow} setIsShow={setIsShow} />
        <div className={styles.page}>
          {(!isMobile || isShow) && <Sidebar />}
          <div className={styles.content}>
            <AppRouter />
          </div>
        </div>
      </div>
    </Suspense>
  );
};
