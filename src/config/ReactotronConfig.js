import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactrotonSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings ({host: X.X.X.X})
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(reactrotonSaga())
    .connect(); // let's connect!
  console.tron = tron;
  tron.clear();
}
