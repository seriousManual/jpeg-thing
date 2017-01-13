class Matrix {
    constructor (size, defaultValue = null) {
        this._size = size
        this._values = {}

        if (defaultValue) {
            this.forEach((x, y) => this.set(x, y, defaultValue))
        }
    }

    set (x, y, value) {
        this._values[this._buildKey(x, y)] = value
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

    getSize () {
        return this._size
    }

    clone() {
        var clone = new Matrix(this._size)
        clone._values = Object.assign({}, this._values)

        return clone
    }

    _buildKey (x, y) {
        return `${x}_${y}`
    }
}

export default Matrix