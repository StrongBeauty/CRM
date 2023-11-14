import { FC, SVGProps, VFC } from 'react';
import { Icon } from 'components/common/Icon/Icon';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
  text: string;
  img?: VFC<SVGProps<SVGSVGElement>>;
  className: string;
};

export const Button: FC<ButtonProps> = ({ onClick, img, text, className, ...otherProps }) => {
  return (
    <div onClick={onClick} className={className} {...otherProps}>
      {img && <Icon Svg={img} className={styles.icon} />}
      <span>{text}</span>
    </div>
  );
};
