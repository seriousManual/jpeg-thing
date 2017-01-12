class Matrix {
    constructor (size) {
        this._size = size
        this._values = {}
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

    _buildKey (x, y) {
        return `${x}_${y}`
    }
}

export default Matrix