import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React from 'react';
import {Provider} from 'react-redux';
import store from 'src/store';

import createNavigator from './routes';

const Routes = createNavigator(false);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
