import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import categories from './categories'
import locations from './locations'

export default combineReducers({
    categories,
    locations,
    routing: routerReducer
})
