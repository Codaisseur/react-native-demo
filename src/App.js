import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import styles from './App.styles'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  handlePress() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log(this.state.counter)

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.handlePress.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.counter}>
          {this.state.counter}
        </Text>
      </View>
    );
  }
}
