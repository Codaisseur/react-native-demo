import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../../actions/recipes/fetch'
import Recipe from '../../components/recipes/Recipe'
import { ScrollView, Image, Text } from 'react-native'

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

  render() {
    console.log(this.props)

    return(
      <ScrollView>
        { this.props.recipes.map(this.renderRecipe.bind(this)) }
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, { fetchRecipes })(All)
