import API from '../../middleware/api'
import navigateTo from '../navigate'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return (dispatch) => {
    console.log("Haaaaiii")
    recipes.find({
      query: {
        $limit: 25
      }
    })
    .then((response) => {
      dispatch({
        type: FETCHED_RECIPES,
        payload: response.data
      })
      dispatch(navigateTo('allRecipes'))
    })
    .catch((error) => {
      console.log("Whoopsie!", error)
    })
  }
}
