import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import styles from './Home.styles'
import navigateTo from '../actions/navigate'

class Home extends Component {
  handleNav() {
    this.props.navigateTo('allRecipes')
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Counter />
        <Counter />
        <Button
          onPress={this.handleNav.bind(this)}
          title="All Recipes"
          color="#841584"
          accessibilityLabel="Go to All Recipes"
        />
      </View>
    );
  }
}

export default connect(null, { navigateTo })(Home)
