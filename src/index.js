import React from 'react'
import ReactDOM from 'react-dom'

import BaseApp from './components/apps/BaseApp'
import './index.css'

function render() {
    ReactDOM.render(<div><BaseApp/></div>, document.getElementById('root'))
}

render()