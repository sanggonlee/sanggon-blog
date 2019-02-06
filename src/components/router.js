import React from 'react';
import { Router as ReachRouter } from '@reach/router';

import Posts from './posts';

const Router = () => (
  <ReachRouter>
    <Posts path="/"/>
  </ReachRouter>
);

export default Router;
