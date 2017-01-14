export function rgbToYCbCr([r, g, b]) {
    return [
        0.299 * r + 0.587 * g + 0.114 * b,
        -0.1687 * r - 0.3313 * g + 0.5 * b + 128,
        0.5 * r - 0.4187 * g - 0.0813 * b + 128
    ]
}

export function yCbCrToRgb([y, cb, cr]) {
    return [

    ]
}