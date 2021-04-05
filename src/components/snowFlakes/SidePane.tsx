import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

type SidePaneProps = HTMLAttributes<HTMLDivElement>;

export const SidePane: FC<SidePaneProps> = ({ className = '' }) => {
  console.log('aaa');

  return (
    <div className={clsx('bg-blue-400 h-full w-80', className)}>
      <div>Some Text Here</div>
    </div>
  );
};
