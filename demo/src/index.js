import React, { Component } from 'react'
import { render } from 'react-dom' // eslint-disable-line

import Example from '../../src'

class Demo extends Component {
  render() {
    return (<div>
      <h1>react-component-kit Demo</h1>
      <Example />
    </div>)
  }
}

render(<Demo />, document.querySelector('#demo')) // eslint-disable-line
