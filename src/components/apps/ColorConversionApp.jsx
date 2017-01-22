import React from 'react'

import MatrixBasedSubApp from '../MatrixBasedSubApp'

import ColorMatrixVisualisation from '../matrix/visualisation/ColorMatrix'

import {rgbToYCbCrMatrix, yCbCrToRgbMatrix} from '../../lib/colorConversion'
import {splitTupelMatrix} from '../../lib/splitTupelMatrix'
import {mergeTupelMatrices} from '../../lib/mergeTupelMatrices'
import {subSample, overSample} from '../../lib/sampling'
import {createColorMatrix} from '../../lib/createMatrix'

import '../style/ColorConversionApp.css'

class ColorConversionApp extends MatrixBasedSubApp {
    _getReducer() {
        return (state, action) => {
            if (!state) {
                state = updateState({baseMatrix: createColorMatrix()})
            }

            if (action.type === 'NEW_MATRIX') {
                var newMatrix = createColorMatrix()

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
}

export default ColorConversionApp