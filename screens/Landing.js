import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Animation from 'lottie-react-native';
import anim from '../assets/soda_loader.json';
import btn from '../assets/button_press.json';

export default class Landing extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View className={styles.spinner}>
          <Animation
            ref={(animation) => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80,
            }}
            loop
            source={anim}
          />
        </View>
        <Button
          title="Go to Content Page"
          color="#ffffff"
          onPress={() => navigate('Content')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b6f4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  button: {
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  spinner: {
    top: 0,
  },
});
