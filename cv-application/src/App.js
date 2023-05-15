import React, { Component } from 'react';
import Information from './Components/Information';

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Information />
        {/*<Experience />
        <Education />*/}
      </div>
    )
  }    
}

export default App;
