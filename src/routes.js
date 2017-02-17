import Launch from './screens/Launch'
import Home from './screens/Home'
import AllRecipes from './screens/recipes/All'

module.exports = [
  { name: 'launch', title: 'All Recipes', index: 0, leftButton: null, rightButton: null, component: Launch },
  { name: 'recipes', title: 'All Recipes', index: 1, leftButton: null, rightButton: null, component: Home },
  { name: 'allRecipes', title: 'All Recipes', index: 2, leftButton: null, rightButton: null, component: AllRecipes },
]
