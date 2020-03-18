import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  async componentDidMount () {
    const apiResponse = await axios.get('/.netlify/functions/app')
    console.log('FUNCTION IS RESPONDING', apiResponse)
  }

  render () {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default App
