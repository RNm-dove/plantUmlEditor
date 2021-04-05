import { FC } from 'react';
import { RecoilRoot } from 'recoil';

import { MainPane } from 'components/snowFlakes/MainPane';
import { SidePane } from 'components/snowFlakes/SidePane';

const App: FC = () => (
  <RecoilRoot>
    <div className="flex h-screen">
      <SidePane className="flex-shrink-0" />
      <MainPane className="flex-grow" />
    </div>
  </RecoilRoot>
);

export default App;
