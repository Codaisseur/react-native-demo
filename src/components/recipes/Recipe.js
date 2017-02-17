// src/components/recipes/Recipe.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Image, Text } from 'react-native'

export class Recipe extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, photo, liked, likedBy } = this.props

    return(
      <View>
        <Text>
          {title}
        </Text>
        <Image source={{uri: 'https://unsplash.it/480?random'}} style={{width: 100, height: 100}} />
      </View>
    )
  }
}

// const mapStateToProps = ({ currentUser }) => { return { currentUser }}

export default Recipe
