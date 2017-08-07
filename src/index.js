import React from 'react';
import { AppRegistry, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppNavigator from './navigator';

import { BACK_BUTTON } from './navigator/constants';

const store = configureStore();
class Kernel extends React.Component {
  componentDidMount() {
    this.sub = BackHandler.addEventListener(
      'backPress',
      () => store.dispatch({ type: BACK_BUTTON, payload: NavigationActions.back() }),
    );
  }

  componentWillUnmount() {
    this.sub.remove();
  }


  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('anylineDocumentScannerExample', () => Kernel);
