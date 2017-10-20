import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const exercises = ['bench', 'deadlift', 'squat'];

class Workouts extends Component {
  showExercise(exercise) {
    this.props.navigation.navigate('Movements', { exercise });
  }

  render() {
    return (
      <ScrollView>
        <List>
          {exercises.map(exercise => (
            <ListItem
              key={exercise}
              title={exercise}
              onPress={() => this.showExercise(exercise)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Workouts;
