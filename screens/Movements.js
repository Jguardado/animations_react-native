import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Movements extends Component {
  render() {
    const { exercise } = this.props.navigation.state.params;
    return (
      <View>
        <Text>
          Movements
        </Text>
        <Text>
          {exercise}
        </Text>
      </View>
    );
  }
}
export default Movements;
