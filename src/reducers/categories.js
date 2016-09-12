import { saveState } from '../utils/localStorage'
import initialState from './initialState'
import {
    SELECT_CATEGORY,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    SUBMIT_FORM_CATEGORY
} from '../constants/actionTypes'

export default (state = initialState.categories, action) => {
    let newState

    switch (action.type) {

        case SELECT_CATEGORY:
            newState = Object.assign({}, state)

            newState[action.id] = {
                ...state[action.id],
                isSelected: !state[action.id].isSelected
            }

            return newState

        case ADD_CATEGORY:
            let stateKeys = Object.keys(state)
            let maxKey = stateKeys.length !== 0 && stateKeys.reduce(function (max, key) {
                return (max === undefined || key > max) ? +key : max
            })
            let id = ++maxKey

            return {
                ...state,
                [id]: {
                    id: id,
                    name: '',
                    isSelected: false,
                    isEdited: true
                }
            }

        case DELETE_CATEGORY:
            newState = Object.assign({}, state)

            for (let key in newState) {
                newState[key].isSelected && delete newState[key]
            }

            saveState('categories', newState)

            return newState

        case EDIT_CATEGORY:
            newState = Object.assign({}, state)

            for (let key in newState) {
                if (newState[key].isSelected) {
                    newState[key] = {
                        ...state[key],
                        isEdited: true
                    }
                }
            }

            return newState

        case SUBMIT_FORM_CATEGORY:
            newState = Object.assign({}, state)

            newState[action.id] = {
                id: action.id,
                name: action.name,
                isEdited: false,
                isSelected: false
            }

            saveState('categories', newState)

            return newState

        default:
            return state
    }
}
