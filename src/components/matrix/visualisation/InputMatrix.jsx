import React from 'react';
import '../../../style/MatrixVisualisation.css'

import MatrixVisualisation from './Matrix'

class InputMatrixVisualisation extends MatrixVisualisation {
    constructor() {
        super()

        this._inputs = {}
    }

    _getContent(x, y, value) {
        var {onChange} = this.props

        return <input onChange={e => onChange(x, y, this._inputs[x + '-' + y].value)} type="text" value={value} ref={input => this._inputs[x + '-' + y] = input} />
    }
}

export default InputMatrixVisualisation
