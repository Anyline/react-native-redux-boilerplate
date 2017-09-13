import React from 'react';
import {AppRegistry, BackHandler, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import AppNavigator from './navigator';

const store = configureStore();

class Kernel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }


  onBackPress = () => {
    //check if Drawer open or not on Home Screen
    if (store.getState().nav.index !== 0) {
      store.dispatch(NavigationActions.back());
      return true;
    } else if (store.getState().nav.routes[0].index !== 1) {
      store.dispatch(NavigationActions.navigate({routeName: 'Start'}));
      return true;
    }
    return false;
  };


  render() {

    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeReduxBoilerplate', () => Kernel);
