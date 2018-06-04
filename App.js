/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import A from './src/components/A';
import B from './src/components/B';
import C from './src/components/C';

import { generateComponent } from './src/helpers/generate-components';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        {generateComponent(<A />)}
        {generateComponent(<B />)}
        {generateComponent(<C />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
