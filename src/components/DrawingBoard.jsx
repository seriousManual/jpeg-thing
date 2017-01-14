import React, { Component } from 'react';

import ColorMatrixVisualisation from './matrix/visualisation/ColorMatrix'
import MatrixClick from './matrix/Click'

import '../style/DrawingBoard.css'

class DrawingBoard extends Component {
    constructor() {
        super()

        this.state = {
            value: 255
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
        console.log(this.state.value);
        this.props.onDraw(x, y, this.state.value)
    }

    _createPallette(count) {
        let colors = []

        let fraction = 255 / count
        for (let i = 0; i <= count; i++) {
            let mul = i * fraction
            let mulPercent = this._toPercent(mul)
            let style = {
                background: `rgb(${mulPercent}%,${mulPercent}%,${mulPercent}%)`
            }

            colors.push(<div key={mul} className="palletteEntry" style={style} onClick={() => this.setState({value: mul})}/>)
        }
        return colors
    }

    _toPercent(value) {
        return (value / 255) * 100
    }
}

export default DrawingBoard