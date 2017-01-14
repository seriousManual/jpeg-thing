import Matrix from './Matrix'

export function splitTupelMatrix(matrix, n) {
    let result = []
    for (var i = 0; i < n; i++) {
        result.push(new Matrix(matrix.getSize()))
    }

    matrix.forEach((x, y, value) => {
        for (var i = 0; i < n; i++) {
            result[i].set(x, y, value[i])
        }
    })

    return result
}