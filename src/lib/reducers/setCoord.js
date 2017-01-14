import Matrix from '../Matrix'

function createSetCoordReducer(defaultValue) {
    var defaultState = {
        matrix: defaultValue
    }

    return (state = defaultState, action = {}) => {
        if (action.type === 'SET_COORD') {
            var value = !Array.isArray(action.value) ? Math.max(Math.min(action.value, 255), 0) : value

            var newMatrix = state.matrix.clone()

            newMatrix.set(action.x, action.y, value)

            return {
                ...state,
                matrix: newMatrix
            }
        }

        return state
    }
}

export default createSetCoordReducer