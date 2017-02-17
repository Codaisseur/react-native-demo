import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './Launch.styles'
import fetchRecipes from '../actions/recipes/fetch'
import LaunchImage from '../images/bg-launch-screen.png'
import Tomato from '../images/tomato.png'

class Launch extends Component {
  componentWillMount() {
    console.log("Hellooooooo")
    this.props.fetchRecipes()
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={LaunchImage} />
        <View style={styles.overlay}>
          <Image style={styles.icon} source={Tomato} />
        </View>
      </View>
    );
  }
}

export default connect(null, { fetchRecipes })(Launch)
