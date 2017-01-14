import React from 'react'
import ReactDOM from 'react-dom'

import ColorConversionApp from './components/apps/ColorConversionApp'
import './index.css'

function render() {
    ReactDOM.render(<div><ColorConversionApp/></div>, document.getElementById('root'))
}

render()