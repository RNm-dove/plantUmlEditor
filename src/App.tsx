import React, { FC } from 'react';

import { MainPane } from 'components/snowFlakes/MainPane';
import { SidePane } from 'components/snowFlakes/SidePane';
import './App.css';

const App: FC = () => (
  <div className="App">
    <SidePane />
    <MainPane />
  </div>
);

export default App;
