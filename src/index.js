import React from 'react'
import ReactDOM from 'react-dom'

import DctApp from './components/apps/DctApp'

import './index.css'

function render() {
    ReactDOM.render(<div><DctApp/></div>, document.getElementById('root'))
}

render()