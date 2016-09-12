import {
    SELECT_LOCATION,
    ADD_LOCATION,
    DELETE_LOCATION,
    EDIT_LOCATION,
    VIEW_LOCATION,
    SUBMIT_FORM_LOCATION
} from '../constants/actionTypes'

export const selectLocation = (id) => {
    return {
        type: SELECT_LOCATION,
        id
    }
}

export const addLocation = (name) => {
    return {
        type: ADD_LOCATION,
        name
    }
}

export const deleteLocation = (id) => {
    return {
        type: DELETE_LOCATION,
        id
    }
}

export const editLocation = (id) => {
    return {
        type: EDIT_LOCATION,
        id
    }
}

export const viewLocation = (id) => {
    return {
        type: VIEW_LOCATION,
        id
    }
}

export const submitFormLocation = (id, state) => {
    return {
        type: SUBMIT_FORM_LOCATION,
        id,
        state

    }
}
