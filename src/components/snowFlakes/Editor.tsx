import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { SequenceEditor } from '../reciepes/SequenceEditor';

type EditorProps = { type?: string } & HTMLAttributes<HTMLDivElement>;

export const Editor: FC<EditorProps> = ({
  className = '',
  type = 'Sequence',
}) => {
  console.log('aaa');
  // TODO: config, file format
  // TODO: form
  // TODO: specify diagram, in considering support, sequence and robustness

  return (
    <div className={clsx('bg-green-400 h-full', className)}>
      {/* switch editor by diagram type */}
      {type === 'Sequence' && <SequenceEditor />}
    </div>
  );
};
