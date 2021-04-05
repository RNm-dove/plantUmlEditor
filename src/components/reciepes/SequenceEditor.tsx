import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

type SequenceEditorProps = HTMLAttributes<HTMLDivElement>;

export const SequenceEditor: FC<SequenceEditorProps> = ({ className = '' }) => {
  console.log('aaa');

  return (
    <div className={clsx(className)}>
      <div>Sequence Editor</div>
    </div>
  );
};
