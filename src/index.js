import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './App'
import './index.css'

import Matrix from './lib/Matrix'

const reducer = (state = {matrix: new Matrix(5, 50)}, action) => {
    if (action.type === 'SET_COORD') {
        var newMatrix = state.matrix.clone()

        newMatrix.set(action.x, action.y, action.value)

        return {
            ...state,
            matrix: newMatrix
        }
    }

    return state
}

const store = createStore(reducer)

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