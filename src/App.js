import React, { Component } from 'react'

import MatrixVisualisation from './components/matrix/visualisation/Matrix'
import ColorMatrixVisualisation from './components/matrix/visualisation/ColorMatrix'
import InputMatrixVisualisation from './components/matrix/visualisation/InputMatrix'
import DrawingBoard from './components/DrawingBoard'

import MatrixClick from './components/matrix/Click'

import './App.css'

class App extends Component {
    render () {
        var {matrix} = this.props.state

        return (
            <div className="app">
                <ColorMatrixVisualisation matrix={matrix}/>
                <MatrixVisualisation matrix={matrix}/>
                <InputMatrixVisualisation matrix={matrix} onChange={(x, y, value) => this._dispatch(x, y, value)} />
                <MatrixClick size={matrix.getSize()} onSelect={(x, y, value) => this._dispatch(x, y, value)}>
                    <ColorMatrixVisualisation matrix={matrix}/>
                </MatrixClick>
                <DrawingBoard matrix={matrix} onDraw={(x, y, value) => this._dispatch(x, y, value)}/>
            </div>
        )
    }

    _dispatch(x, y, value) {
        this.context.store.dispatch({type: 'SET_COORD', x: x, y: y, value: value})
    }
}

App.contextTypes = {
    store: React.PropTypes.object.isRequired
}

export default App
