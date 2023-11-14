import { FC, memo, SVGProps, VFC } from 'react';

type IconProps = {
  Svg: VFC<SVGProps<SVGSVGElement>>;
  className?: string;
};

export const Icon: FC<IconProps> = memo(({ Svg, className }) => <Svg className={className} />);
