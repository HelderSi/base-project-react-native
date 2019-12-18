import React from 'react';
import './config/ReactotronConfig';
import './config/DevToolsConfig';

import createNavigator from './routes';

const Routes = createNavigator(false);

const App = () => <Routes />;

export default App;
