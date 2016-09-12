import { takeLatest } from 'redux-saga'

export function* setLocalStorage () {
    yield* takeLatest([
        'SUBMIT_FORM_LOCATION',
        'SUBMIT_FORM_CATEGORY',
        'DELETE_LOCATION',
        'DELETE_CATEGORY'
    ], setStorage)
}

function* setStorage (action) {
    // TODO side-effects here (ex.localstorage)
}
