import React, { Component } from 'react'
import ColorMatrixVisualisation from './components/matrix/visualisation/ColorMatrix'
import TextMatrixVisualisation from './components/matrix/visualisation/TextMatrix'
import InputMatrixVisualisation from './components/matrix/visualisation/InputMatrix'
import './App.css'

import Matrix from './lib/Matrix'

class App extends Component {
    render () {
        var matrix = new Matrix(4)
        matrix.set(0, 0, 100)
        matrix.set(0, 1, 100)
        matrix.set(1, 0, 50)
        matrix.set(2, 0, 20)
        matrix.set(2, 1, 80)

        return (
            <div className="app">
                <ColorMatrixVisualisation matrix={matrix}/>
                <TextMatrixVisualisation matrix={matrix}/>
                <InputMatrixVisualisation matrix={matrix} onChange={(x, y, value) => matrix.set(x, y, value)}/>
            </div>
        )
    }
}

export default App
