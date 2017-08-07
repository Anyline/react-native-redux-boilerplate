import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NAVIGATION } from '../../navigator/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const StartScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
        Screen A
    </Text>
    <Text style={styles.instructions}>
        This is great
    </Text>
    <Button
      title="Next"
      onPress={() => {
        navigation.dispatch({ type: NAVIGATION, payload: 'TutorialScreen' });
      }}
    />
  </View>
);

StartScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

StartScreen.navigationOptions = {
  title: 'Start Screen',
};

export default StartScreen;
