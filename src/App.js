import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {

  async componentDidMount() {
    const { data } = await axios.get('/.netlify/functions/app');
    console.log(data)
  }

  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default App
