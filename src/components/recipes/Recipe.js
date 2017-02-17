// src/components/recipes/Recipe.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Image, Text, TouchableHighlight } from 'react-native'
import styles from './Recipe.styles'

export class Recipe extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }

  handleNav() {
    console.log('This is where we would nav to the recipe detail page...')
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, photo, liked, likedBy } = this.props

    return(
      <TouchableHighlight underlayColor="#FFFFFF" style={styles.row} onPress={this.handleNav.bind(this)}>
        <View>
          <Image source={{uri: 'https://placehold.it/480/ff3333/ffffff?text=:{)'}} style={styles.thumb} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

// const mapStateToProps = ({ currentUser }) => { return { currentUser }}

export default Recipe
