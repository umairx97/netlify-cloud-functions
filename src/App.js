import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    message: ''
  }
  async componentDidMount() {
    const apiResponse = await axios.get('/.netlify/functions/app')
    console.log('FUNCTION IS RESPONDING', apiResponse)
    this.setState({ message: apiResponse.data })
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h1>The message below is from the function invocation</h1>
        <h2>message: {message ? message : "The function will not run locally"}</h2>
      </div>
    )
  }
}

export default App
