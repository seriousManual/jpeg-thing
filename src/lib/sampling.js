import Matrix from './Matrix'

export function subSample(matrix, factor) {
    var step = matrix.getSize() / factor

    var b = new Matrix(step, () => [])
    matrix.forEach((x, y, value) => {
        var entry = b.get(Math.floor(x / factor), Math.floor(y / factor))
        entry.push(value)
    })

    return b.reduce((x, y, value, carry) => {
        var asdf = value.reduce((value, carry) => carry + value, 0) / value.length
        carry.set(x, y, asdf)

        return carry
    }, b)
}

export function overSample(matrix, factor) {
    return matrix.reduce((x, y, value, carry) => {
        for (var xFactor = 0; xFactor < factor; xFactor++) {
            for (var yFactor = 0; yFactor < factor; yFactor++) {
                carry.set(x * factor + xFactor, y * factor + yFactor, value)
            }
        }

        return carry
    }, new Matrix(matrix.getSize() * factor))
}