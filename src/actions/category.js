import {
    SELECT_CATEGORY,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    SUBMIT_FORM_CATEGORY
} from '../constants/actionTypes'

export const selectCategory = (id) => {
    return {
        type: SELECT_CATEGORY,
        id
    }
}

export const addCategory = (name) => {
    return {
        type: ADD_CATEGORY,
        name
    }
}

export const deleteCategory = (id) => {
    return {
        type: DELETE_CATEGORY,
        id
    }
}

export const editCategory = (id) => {
    return {
        type: EDIT_CATEGORY,
        id
    }
}

export const submitFormCategory = (id, state) => {
    return {
        type: SUBMIT_FORM_CATEGORY,
        id,
        ...state
    }
}
