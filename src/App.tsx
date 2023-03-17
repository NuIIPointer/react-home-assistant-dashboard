import React from 'react';
import { createRoot } from 'react-dom/client';

import { Authenticate } from './Authenticate';
import { LivingRoom } from '@areas';


const App: any = () => {
  return <>
    <Authenticate>
      <LivingRoom />
    </Authenticate>
  </>;
};

export default App;