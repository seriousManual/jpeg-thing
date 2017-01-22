import Matrix from './Matrix'
import colorClamp from './colorClamp'

export function createColorMatrix() {
    var m = new Matrix(8)

    var r = parseInt(Math.random() * 256, 10)
    var g = parseInt(Math.random() * 256, 10)
    var b = parseInt(Math.random() * 256, 10)

    return m.map(_ => {
        r += (Math.random() < 0.5 ? -1 : 1) * (Math.random() * Math.random() * 100)
        g += (Math.random() < 0.5 ? -1 : 1) * (Math.random() * Math.random() * 100)
        b += (Math.random() < 0.5 ? -1 : 1) * (Math.random() * Math.random() * 100)

        return [colorClamp(r), colorClamp(g), colorClamp(b)]
    }, m)
}

export function createMatrix() {
    var m = new Matrix(8)

    var i = parseInt(Math.random() * 256, 10)
    m.forEach((x, y) => {
        i += (Math.random() < 0.5 ? -1 : 1) * (Math.random() * Math.random() * 50)
        m.set(x, y, colorClamp(i))
    })

    return m
}