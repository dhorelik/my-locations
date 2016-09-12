import { createStore, compose, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import { setLocalStorage } from '../sagas'

export default function configureStore (initialState) {
    const sagaMiddleware = createSagaMiddleware()
    const middewares = [
        reduxImmutableStateInvariant(),
        sagaMiddleware
    ]
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    sagaMiddleware.run(setLocalStorage)

    return store
}
