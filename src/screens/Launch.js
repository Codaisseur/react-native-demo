import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './Launch.styles'
import navigateTo from '../actions/navigate'
import LaunchImage from '../images/bg-launch-screen.png'

class Launch extends Component {
  handleNav() {
    this.props.navigateTo('allRecipes')
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={LaunchImage} />
      </View>
    );
  }
}

export default connect(null, { navigateTo })(Launch)