import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from 'src/screens/Welcome';
import FunctionalComponent from 'src/components/general/FunctionalComponent';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        FunctionalComponent,
      },
      {
        initialRouteName: userLogged ? 'FunctionalComponent' : 'Welcome',
      },
    ),
  );

export default Routes;
