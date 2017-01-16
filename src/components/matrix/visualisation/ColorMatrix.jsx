import '../../../style/MatrixVisualisation.css'

import MatrixVisualisation from './Matrix'

class ColorMatrixVisualisation extends MatrixVisualisation {
    _getContent(x, y, value) {
        return ''
    }

    _getStyle(style, x, y, value) {
        var r = Array.isArray(value) ? value[0] : value
        var g = Array.isArray(value) ? value[1] : value
        var b = Array.isArray(value) ? value[2] : value

        style.backgroundColor = `rgb(${this._toPercent(r)}%, ${this._toPercent(g)}%, ${this._toPercent(b)}%)`

        return style
    }

    _toPercent(value) {
        if (value < 0) {
            console.log(value, (value / 255) * 100);
        }
        return (value / 255) * 100
    }
}

export default ColorMatrixVisualisation
