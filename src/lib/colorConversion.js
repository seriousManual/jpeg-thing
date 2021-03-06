import colorClamp from './colorClamp'

export function rgbToYCbCr ([r, g, b]) {
    return [
        0.299 * r + 0.587 * g + 0.114 * b,
        -0.1687 * r - 0.3313 * g + 0.5 * b + 128,
        0.5 * r - 0.4187 * g - 0.0813 * b + 128
    ]
}

export function yCbCrToRgb ([y, cb, cr]) {
    return [
        colorClamp(y + 1.4 * (cr - 128)),
        colorClamp(y + -0.343 * (cb - 128) + -0.711 * (cr - 128)),
        colorClamp(y + 1.765 * (cb - 128))
    ]
}

export function rgbToYCbCrMatrix (rgbMatrix) {
    return rgbMatrix.map((x, y, value) => rgbToYCbCr(value))
}

export function yCbCrToRgbMatrix (yCbCrMatrix) {
    return yCbCrMatrix.map((x, y, value) => yCbCrToRgb(value))
}