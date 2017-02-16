import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Counter from './components/Counter'
import styles from './App.styles'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Counter />
        <Counter />
      </View>
    );
  }
}
