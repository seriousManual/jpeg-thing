import React, { Component } from 'react';
import '../../../style/MatrixVisualisation.css'

class MatrixVisualisation extends Component {
    render () {
        var {matrix} = this.props
        var size = matrix.getSize()

        var fraction = 100 / size
        var blocks = []
        matrix.forEach((x, y, value) => {
            var style = {
                width: fraction + '%',
                height: fraction + '%',
                left: x * fraction + '%',
                top: y * fraction + '%'
            }

            style = this._getStyle(style, x, y, value)

            blocks.push(<div key={x + '_' + y} style={style}>{this._getContent(x, y, value)}</div>)
        })

        return <div className="matrixVisualisation">{blocks}</div>
    }

    _getContent(x, y, value) {
        throw new Error('_getContent missing')
    }

    _getStyle(style, x, y, value) {
        throw new Error('_getStyle missing')
    }
}

export default MatrixVisualisation