import React, { Component } from 'react';

import ColorMatrixVisualisation from './visualisation/ColorMatrix'
import Matrix from './visualisation/Matrix'

import '../../style/Switchable.css'

class Switchable extends Component {
    constructor() {
        super()

        this.state = {
            color: true
        }
    }

    render () {
        var {matrix} = this.props

        var currentVisualisation = this.state.color ?
            <ColorMatrixVisualisation matrix={matrix}/> :
            <Matrix matrix={matrix}/>

        return (
            <div className="switchable">
                <div className="switch" onClick={() => this.setState({color: !this.state.color})}/>
                {currentVisualisation}
            </div>
        )
    }
}

export default Switchable