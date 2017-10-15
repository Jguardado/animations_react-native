import React, { Component } from 'react';

import {
  // Platform,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  testing: {
    borderWidth: 4,
    borderColor: '#42b6f4',
    alignContent: 'flex-end',
    backgroundColor: '#42b6f4',
  },
});

const ContentPage = () => (
  <View>
    <Text>
        This is our new page
    </Text>
    <Button
      containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, backgroundColor: 'white' }}
      style={{ fontSize: 20, color: 'green' }}
      styleDisabled={{ color: 'red' }}
      onPress={() => console.warn('pressed')}
      title="thats it"
    >
       Press Me!
    </Button>
  </View>
);

export default ContentPage;
