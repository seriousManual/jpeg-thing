import React from 'react';
import '../../../style/MatrixVisualisation.css'

import MatrixVisualisation from './Matrix'

class InputMatrixVisualisation extends MatrixVisualisation {
    constructor() {
        super()

        this._input = null
    }

    _getContent(x, y, value) {
        var {onChange} = this.props

        return <input onChange={e => onChange(x, y, this._input.value)} type="text" value={value} ref={input => this._input = input} />
    }

    _getStyle(style, x, y, value) {
        return style
    }
}

export default InputMatrixVisualisation
