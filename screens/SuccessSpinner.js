import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Animation from 'lottie-react-native';
import btn from '../assets/button_press.json';

export default class SuccessSpinner extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View>
        <Animation
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: 100,
            height: 100,
          }}
          loop
          source={btn}
        />
        <Text>
          Saving...
        </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#A6207E',
//   },
// });
