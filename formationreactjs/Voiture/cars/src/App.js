import React, { Component } from 'react';

import MyCarts from './components/MyCarts'
import './App.css';

class App extends Component {

  state = {
    titre: 'Ma catalogue voiture',
  }

  render() { 
    return (
      <div className="App">
        <MyCarts title={this.state.titre} />
      </div>
    );
  }
}
export default App;
