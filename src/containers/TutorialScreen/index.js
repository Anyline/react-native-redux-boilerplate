import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';

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

const TutorialScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
        Screen B
    </Text>
    <Text style={styles.instructions}>
        This is Ultimative great
    </Text>
  </View>
);

TutorialScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

TutorialScreen.navigationOptions = {
  title: 'Tutorial Screen',
};

export default TutorialScreen;
