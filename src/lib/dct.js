export function dct(matrix) {
    return matrix.map((x, y, value) => dctFValue(x, y, matrix))
}

export function idct(matrix) {

}

function dctFValue(x, y, matrix) {
    var matrixSize = matrix.getSize()
    let cx = x === 0 ? (1 / Math.sqrt(2)) : 1
    let cy = y === 0 ? (1 / Math.sqrt(2)) : 1

    var sum = 0
    for (var runningX = 0; runningX < matrixSize; runningX++) {
        for (var runningY = 0; runningY < matrixSize; runningY++) {
            sum += matrix.get(runningX, runningY) * Math.cos(((2 * runningX + 1) * x * Math.PI) / (matrixSize * 2)) * Math.cos(((2 * runningY + 1) * y * Math.PI) / (matrixSize * 2))
        }
    }

    return 0.25 * cx + cy * sum
}