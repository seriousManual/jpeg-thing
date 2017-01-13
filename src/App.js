import React, { Component } from 'react'

import ColorMatrixVisualisation from './components/matrix/visualisation/ColorMatrix'
import TextMatrixVisualisation from './components/matrix/visualisation/TextMatrix'
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
                <TextMatrixVisualisation matrix={matrix}/>
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
