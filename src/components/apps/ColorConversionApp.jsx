import React from 'react'

import MatrixBasedSubApp from '../MatrixBasedSubApp'

import ColorMatrixVisualisation from '../matrix/visualisation/ColorMatrix'

import Matrix from '../../lib/Matrix'
import {rgbToYCbCrMatrix, yCbCrToRgbMatrix} from '../../lib/colorConversion'
import {splitTupelMatrix} from '../../lib/splitTupelMatrix'
import {mergeTupelMatrices} from '../../lib/mergeTupelMatrices'
import {subSample, overSample} from '../../lib/sampling'

class ColorConversionApp extends MatrixBasedSubApp {
    _getReducer() {
        return (state, action) => {
            if (!state) {
                state = updateState({baseMatrix: this._createRandomMatrix()})
            }

            if (action.type === 'NEW_MATRIX') {
                var newMatrix = this._createRandomMatrix()

                return updateState({baseMatrix: newMatrix})
            }

            return state
        }

        function updateState(state) {
            var yCbCrMatrix = rgbToYCbCrMatrix(state.baseMatrix)
            var splitted = splitTupelMatrix(yCbCrMatrix, 3)

            state.yMatrix = splitted[0]
            state.CBMatrix = splitted[1]
            state.CRMatrix = splitted[2]

            state.CBMatrixSubSampled = subSample(splitted[1], 2)
            state.CRMatrixSubSampled = subSample(splitted[2], 2)

            state.CBMatrixReSampled = overSample(state.CBMatrixSubSampled, 2)
            state.CRMatrixReSampled = overSample(state.CRMatrixSubSampled, 2)

            state.resultMatrix = yCbCrToRgbMatrix(mergeTupelMatrices(state.yMatrix, state.CBMatrixReSampled, state.CRMatrixReSampled))

            return state
        }
    }


    _render () {
        var {baseMatrix, yMatrix, CBMatrix, CRMatrix, CBMatrixSubSampled, CRMatrixSubSampled, CBMatrixReSampled, CRMatrixReSampled, resultMatrix} = this._store.getState()

        return (
            <div className="colorConversionsApp">
                <span onClick={() => this._store.dispatch({type: 'NEW_MATRIX'})}>New Matrix</span>
                <ColorMatrixVisualisation matrix={baseMatrix}/>
                <ColorMatrixVisualisation matrix={yMatrix}/>
                <ColorMatrixVisualisation matrix={CBMatrix}/>
                <ColorMatrixVisualisation matrix={CRMatrix}/>
                <ColorMatrixVisualisation matrix={CBMatrixSubSampled}/>
                <ColorMatrixVisualisation matrix={CRMatrixSubSampled}/>
                <ColorMatrixVisualisation matrix={CBMatrixReSampled}/>
                <ColorMatrixVisualisation matrix={CRMatrixReSampled}/>
                <ColorMatrixVisualisation matrix={resultMatrix}/>
            </div>
        )
    }

    _createRandomMatrix() {
        var m = new Matrix(8);

        var r = parseInt(Math.random() * 256, 10)
        var g = parseInt(Math.random() * 256, 10)
        var b = parseInt(Math.random() * 256, 10)

        m.forEach((x, y) => {
            r += (Math.random() < 0.5 ? -1 : 1) * (Math.random() * Math.random() * 100)
            g += (Math.random() < 0.5 ? -1 : 1) * (Math.random() * Math.random() * 100)
            b += (Math.random() < 0.5 ? -1 : 1) * (Math.random() * Math.random() * 100)

            m.set(x, y, [r, g, b])
        })

        return m
    }
}

export default ColorConversionApp