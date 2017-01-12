import React from 'react';
import '../../../style/MatrixVisualisation.css'

import MatrixVisualisation from './Matrix'

class InputMatrixVisualisation extends MatrixVisualisation {
    _getContent(x, y, value) {
        var {onChange} = this.props

        return <input onChange={e => onChange(x, y, 'bert')} type="text" value={value} />
    }

    _getStyle(style, x, y, value) {
        return style
    }
}

export default InputMatrixVisualisation
