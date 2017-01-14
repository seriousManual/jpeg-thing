class Matrix {
    constructor (size, defaultValue = null) {
        this._size = size
        this._values = {}

        if (defaultValue) {
            if (typeof defaultValue === 'function') {
                this.forEach((x, y) => this.set(x, y, defaultValue()))
            } else {
                this.forEach((x, y) => this.set(x, y, defaultValue))
            }
        }
    }

    set (x, y, value) {
        this._values[this._buildKey(x, y)] = value

        return this
    }

    get (x, y) {
        return this._values[this._buildKey(x, y)] || 0
    }

    forEach (callback) {
        for (var x = 0; x < this._size; x++) {
            for (var y = 0; y < this._size; y++) {
                callback(x, y, this.get(x, y))
            }
        }
    }

    reduce (callback, initial) {
        this.forEach((x, y, value) => {
            initial = callback(x, y, value, initial)
        })

        return initial
    }

    map (callback) {
        return this.reduce((x, y, value, initial) => {
            return initial.set(x, y, callback(x, y, value))
        }, new Matrix(this.getSize()))

    }

    getSize () {
        return this._size
    }

    clone () {
        var clone = new Matrix(this._size)
        clone._values = Object.assign({}, this._values)

        return clone
    }

    _buildKey (x, y) {
        return `${x}_${y}`
    }
}

export default Matrix