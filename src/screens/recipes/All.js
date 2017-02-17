import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../../actions/recipes/fetch'
import Recipe from '../../components/recipes/Recipe'
import { ListView, View, Image, Text } from 'react-native'
import styles from './All.styles'

export class All extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchRecipes()
  }

  renderRecipe(recipe, index) {
    return <Recipe key={ index } { ...recipe } />
  }

  recipeData() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1._id !== r2._id,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    })
    return ds.cloneWithRowsAndSections({ 'All Recipes': this.props.recipes })
  }

  render() {
    console.log(this.props)

    return(
      <ListView ref="recipesList" contentContainerStyle={styles.list}
        dataSource={this.recipeData()}
        enableEmptySections={true}
        renderRow={this.renderRecipe.bind(this)} />
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, { fetchRecipes })(All)
