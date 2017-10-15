/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Landing from './Landing';
import ContentPage from './ContentPage';

const App = StackNavigator({
  Home: { screen: Landing },
  Content: { screen: ContentPage },
});

export default App;
