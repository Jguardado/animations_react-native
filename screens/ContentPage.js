import React, { Component } from 'react';
import { Header } from 'react-native-elements';
// import SideBar from './SideBar';

import {
  // Platform,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  testing: {
    borderWidth: 1,
    borderColor: '#42b6f4',
    alignContent: 'flex-end',
    backgroundColor: '#fff',
  },
  textContent: {
    // flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#42f4ad',
  },
});

const ContentPage = () => (
  <View style={styles.container}>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
    <Text style={styles.textContent}>
        This is our new page
    </Text>
    <View style={styles.testing}>
      <Button
        onPress={() => console.warn('pressed')}
        title="thats it"
      >
        Press Me!
      </Button>

    </View>
  </View>
);

export default ContentPage;
