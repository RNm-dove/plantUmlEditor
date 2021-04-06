import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { Editor } from 'components/snowFlakes/Editor';
import { Preview } from 'components/snowFlakes/Preview';
import { Diagram } from 'models/Diagram';

type MainPaneProps = {
  diagram: Diagram;
} & HTMLAttributes<HTMLDivElement>;

export const MainPane: FC<MainPaneProps> = ({ className = '', diagram }) => {
  console.log('aaa');
  // TODO: Manage on diagram in this page
  // information
  // diagram type, diagram description, token

  return (
    <div className={clsx('bg-red-400 flex h-full', className)}>
      <Editor className='flex-1' type='Sequence' diagram={diagram} />
      <Preview className='flex-1' />
    </div>
  );
};
