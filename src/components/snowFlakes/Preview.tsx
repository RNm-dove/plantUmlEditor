import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

type EditorProps = HTMLAttributes<HTMLDivElement>;

export const Preview: FC<EditorProps> = ({ className = '' }) => {
  console.log('aaa');

  return (
    <div className={clsx('bg-indigo-400 h-full', className)}>
      <div>Some Text Here</div>
    </div>
  );
};
