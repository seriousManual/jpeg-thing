import React, { Component } from 'react';

class MatrixClick extends Component {
    constructor(props) {
        super(props)
        
        this._panel = null
    }
    
    _handle(e) {
        var {onSelect, size} = this.props
        var rect = this._panel.getBoundingClientRect()
        
        var fractionSize = rect.width / size
        
        var x = Math.floor((e.clientX - rect.left) / fractionSize)
        var y = Math.floor((e.clientY - rect.top) / fractionSize)

        onSelect(x, y)
    }
    
    render () {
        var {children} = this.props

        return <div className="matrixVisualisationClickWrapper" onClick={e => this._handle(e)} ref={panel => this._panel = panel}>{children}</div>
    }
}

export default MatrixClick