import { saveState } from '../utils/localStorage'
import initialState from './initialState'
import {
    SELECT_LOCATION,
    ADD_LOCATION,
    DELETE_LOCATION,
    EDIT_LOCATION,
    VIEW_LOCATION,
    SUBMIT_FORM_LOCATION
} from '../constants/actionTypes'

export default (state = initialState.locations, action) => {
    let newState

    switch (action.type) {

        case SELECT_LOCATION:
            newState = Object.assign({}, state)

            newState[action.id] = {
                ...state[action.id],
                isSelected: !state[action.id].isSelected
            }

            return newState

        case ADD_LOCATION:
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
                    address: '',
                    coordinates: '',
                    category: '',
                    isSelected: false,
                    isEdited: true
                }
            }

        case DELETE_LOCATION:
            newState = Object.assign({}, state)

            for (let key in newState) {
                newState[key].isSelected && delete newState[key]
            }

            saveState('locations', newState)

            return newState

        case EDIT_LOCATION:
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

        case VIEW_LOCATION:
            return state

        case SUBMIT_FORM_LOCATION:
            newState = Object.assign({}, state)

            newState[action.id] = {
                id: action.id,
                name: action.state.name,
                address: action.state.address,
                coordinates: action.state.coordinates,
                category: action.state.category,
                isEdited: false,
                isSelected: false
            }

            saveState('locations', newState)

            return newState

        default:
            return state
    }
}
