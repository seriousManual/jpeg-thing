import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

class MatrixBasedSubApp extends Component {
    constructor(props) {
        super(props)

        this._store = createStore(this._getReducer())

        this._store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <Provider store={this._store}>{this._render()}</Provider>
        )
    }
}

export default MatrixBasedSubApp