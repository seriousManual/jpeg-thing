import React, { Component } from 'react';

import ColorMatrixVisualisation from './matrix/visualisation/ColorMatrix'
import MatrixClick from './matrix/Click'

import '../style/DrawingBoard.css'

class DrawingBoard extends Component {
    constructor() {
        super()

        this.state = {
            value: 50
        }
    }

    render () {
        let {matrix} = this.props

        let style = {
            background: `rgb(${this.state.value}%,${this.state.value}%,${this.state.value}%)`
        }

        return (
            <div className="drawingBoard">
                <div className="choosenColor" style={style}/>
                <div className="pallette">{this._createPallette(8)}</div>

                <MatrixClick size={matrix.getSize()} onSelect={(x, y) => this._dispatch(x, y)}>
                    <ColorMatrixVisualisation matrix={matrix}/>
                </MatrixClick>
            </div>
        )
    }

    _dispatch(x, y) {
        this.props.onDraw(x, y, this.state.value)
    }

    _createPallette(count) {
        let colors = []

        let fraction = 100 / count
        for (let i = 0; i <= count; i++) {
            let mul = i * fraction
            let style = {
                background: `rgb(${mul}%,${mul}%,${mul}%)`
            }
            colors.push(<div key={mul} className="palletteEntry" style={style} onClick={() => this.setState({value: parseInt(mul, 10)})}/>)
        }
        return colors
    }
}

export default DrawingBoard