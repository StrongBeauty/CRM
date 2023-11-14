import { FC } from 'react';
import styles from './List.module.scss';

type ListProps = {
  title: string;
  list: string[];
};

export const List: FC<ListProps> = ({ title, list }) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.title}>{title}</h3>
      <ul>
        {list.map((result) => (
          <li key={result} className={styles.item}>
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};
