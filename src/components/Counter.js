import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import updateCounter from '../actions/update-counter'
import styles from './Counter.styles'

class Counter extends Component {
  handlePress() {
    const { value, updateCounter } = this.props
    updateCounter(value + 1)
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.handlePress.bind(this)}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.counter}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ counter }) => ({ value: counter })

export default connect(mapStateToProps, { updateCounter })(Counter)
