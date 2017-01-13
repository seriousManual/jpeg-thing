import React, { Component } from 'react'

import MatrixVisualisation from './components/matrix/visualisation/Matrix'
import ColorMatrixVisualisation from './components/matrix/visualisation/ColorMatrix'
import InputMatrixVisualisation from './components/matrix/visualisation/InputMatrix'

import MatrixClick from './components/matrix/Click'

import './App.css'

class App extends Component {
    render () {
        var {matrix} = this.props.state
        var {store} = this.context

        return (
            <div className="app">
                <ColorMatrixVisualisation matrix={matrix}/>
                <MatrixVisualisation matrix={matrix}/>
                <InputMatrixVisualisation matrix={matrix} onChange={(x, y, value) => store.dispatch({type: 'SET_COORD', x: x, y: y, value: value})}/>
                <MatrixClick size={matrix.getSize()} onSelect={(x, y, value) => store.dispatch({type: 'SET_COORD', x: x, y: y, value: value})}>
                    <ColorMatrixVisualisation matrix={matrix}/>
                </MatrixClick>
            </div>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object.isRequired
}

export default App
