import React from 'react'

import MatrixBasedSubApp from '../MatrixBasedSubApp'

import MatrixVisualisation from '../matrix/visualisation/Matrix'
import ColorMatrixVisualisation from '../matrix/visualisation/ColorMatrix'
import InputMatrixVisualisation from '../matrix/visualisation/InputMatrix'
import DrawingBoard from '../DrawingBoard'

import Switchable from '../matrix/Switchable'
import MatrixClick from '../matrix/Click'

import Matrix from '../../lib/Matrix'
import createSetCoordReducer from '../../lib/reducers/setCoord'

class BaseApp extends MatrixBasedSubApp {
    _getReducer() {
        return createSetCoordReducer(new Matrix(8))
    }

    _render () {
        var {matrix} = this._store.getState()

        return (
            <div className="baseApp">
                <ColorMatrixVisualisation matrix={matrix}/>
                <MatrixVisualisation matrix={matrix}/>
                <InputMatrixVisualisation matrix={matrix} onChange={(x, y, value) => this._dispatch(x, y, value)} />
                <MatrixClick size={matrix.getSize()} onSelect={(x, y, value) => this._dispatch(x, y, value)}>
                    <ColorMatrixVisualisation matrix={matrix}/>
                </MatrixClick>
                <DrawingBoard matrix={matrix} onDraw={(x, y, value) => this._dispatch(x, y, value)}/>
                <Switchable>
                    <ColorMatrixVisualisation matrix={matrix}/>
                    <MatrixVisualisation matrix={matrix}/>
                </Switchable>
            </div>
        )
    }

    _dispatch(x, y, value) {
        this._store.dispatch({type: 'SET_COORD', x: x, y: y, value: value})
    }
}

export default BaseApp