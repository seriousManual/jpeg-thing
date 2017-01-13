import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './App'
import './index.css'

import Matrix from './lib/Matrix'

const reducer = (state = {matrix: new Matrix(5, 50)}, action) => {
    if (action.type === 'SET_COORD') {
        var value = Math.max(Math.min(action.value, 100), 0)

        var newMatrix = state.matrix.clone()

        newMatrix.set(action.x, action.y, value)

        return {
            ...state,
            matrix: newMatrix
        }
    }

    return state
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App state={store.getState()} />
        </Provider>,
        document.getElementById('root')
    )
}

store.subscribe(render)

render()