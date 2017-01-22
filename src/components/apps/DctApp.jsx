import React from 'react'

import Matrix from '../../lib/Matrix'
import MatrixBasedSubApp from '../MatrixBasedSubApp'
import MatrixVisualisation from '../matrix/visualisation/Matrix'
import DrawingBoard from '../DrawingBoard'
import {createMatrix} from '../../lib/createMatrix'
import {dct} from '../../lib/dct'

import '../../style/DctApp.css'

class ColorConversionApp extends MatrixBasedSubApp {
    _getReducer() {
        return (state, action) => {
            if (!state) {
                state = updateState({baseMatrix: createMatrix()})
            }

            if (action.type === 'NEW_MATRIX') {
                return updateState({baseMatrix: createMatrix()})
            }

            if (action.type === 'DRAW') {
                let newMatrix = state.baseMatrix.clone()
                newMatrix.set(action.x, action.y, action.value)

                return updateState({baseMatrix: newMatrix})
            }

            if (action.type === 'CLEAR') {
                return updateState({baseMatrix: new Matrix(8, 256)})
            }

            return state
        }

        function updateState(state) {
            //TODO
            state.dctMatrix = dct(state.baseMatrix)

            return state
        }
    }


    _render () {
        var {baseMatrix, dctMatrix} = this._store.getState()

        return (
            <div className="dctApp">
                <a onClick={() => this._store.dispatch({type: 'NEW_MATRIX'})}>New Matrix</a>
                <a onClick={() => this._store.dispatch({type: 'CLEAR'})}>Clear</a>
                <DrawingBoard matrix={baseMatrix} onDraw={(x, y, value) => this._store.dispatch({type: 'DRAW', x: x, y: y, value: value})}/>
                <MatrixVisualisation matrix={dctMatrix}/>
            </div>
        )
    }
}

export default ColorConversionApp