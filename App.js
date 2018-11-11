/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MyShopping from './src/my-shopping';
import {Provider} from 'react-redux';
import store from './store';





class App extends Component<Props> {
  render() {
    return (
      <Provider store = {store}>

     
        <MyShopping/>
      </Provider>
    );
  }
}

export default App;

