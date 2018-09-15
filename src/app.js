import React, { Component } from 'react';
import './app.css';

import Command from './patterns/01-command';

const files = ['01-command'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Command />
      </div>
    );
  }
}

export default App;
