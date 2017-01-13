import React, { Component, Children } from 'react';

import '../../style/Switchable.css'

class Switchable extends Component {
    constructor() {
        super()

        this.state = {
            currentChildIndex: 0
        }
    }

    render () {
        var children = Children.toArray(this.props.children)
        var child = children[this.state.currentChildIndex]

        return (
            <div className="switchable">
                <div className="switch" onClick={() => this._switch()}/>
                {child}
            </div>
        )
    }

    _switch() {
        var children = Children.toArray(this.props.children)
        var nextIndex = (this.state.currentChildIndex + 1) % children.length
        this.setState({currentChildIndex: nextIndex})
    }
}

export default Switchable