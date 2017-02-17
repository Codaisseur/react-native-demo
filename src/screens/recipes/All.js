import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './All.styles'

class All extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>All Recipes</Text>
      </View>
    )
  }
}

export default All
