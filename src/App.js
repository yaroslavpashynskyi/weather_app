import React from 'react';

import Info from './components/Info';
import Form from './components/Form';

import './App.css';

class App extends React.Component {
  state = {
    text: "hello",
    added: false,
    added_text: ''
  }

  onInputChange = (text) => {
    this.setState ({
      text: text,
      added: false
    })
  }

  onButtonClicked = () => {
    this.setState ({
      added: true,
      added_text: this.state.text
    })
  }

  render() {
    return(
      <div>
        <Info />
        <Form 
          handleOnInputChange={this.onInputChange}
          handleOnButtonClicked={this.onButtonClicked}
          value={1}
        />
        <div>{this.state.added ? this.state.text : this.state.added_text}</div>
      </div>
      );
  } 
}

export default App;
