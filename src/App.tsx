import { parseFile } from 'plantuml-parser';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';

import { Diagram } from './models/Diagram';

import { MainPane } from 'components/snowFlakes/MainPane';
import { SidePane } from 'components/snowFlakes/SidePane';
// TODO: get repository

const parsed = parseFile(`${__dirname}/samples/sequence1.puml`);

const App: FC = () => (
  <RecoilRoot>
    <div className='flex h-screen'>
      <SidePane className='flex-shrink-0' />
      <MainPane
        className='flex-grow'
        diagram={
          new Diagram({
            type: 'Sequence',
            path: `${__dirname}/samples/sequence1.puml`,
            tokens: parsed.diagrams,
          })
        }
      />
    </div>
  </RecoilRoot>
);

export default App;
