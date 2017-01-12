import '../../../style/MatrixVisualisation.css'

import MatrixVisualisation from './Matrix'

class TextMatrixVisualisation extends MatrixVisualisation {
    _getContent(x, y, value) {
        return value
    }

    _getStyle(style, x, y, value) {
        return style
    }
}

export default TextMatrixVisualisation
