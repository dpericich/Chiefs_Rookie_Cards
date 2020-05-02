import React, { Component } from 'react';
import './App.css';
import NamesList from './components/NamesList';
import Card from './components/Card';
import Draft from './static/cover_card.png'

class App extends Component{
  constructor(props) {
    super(props);

  }
  render(){
    return (
      <div className="CardApp">
        <div className="row">
          <div className="column">
            <Card card={Draft}/>
          </div>
          <div className="column 2">
            <NamesList /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App
