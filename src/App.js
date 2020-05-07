import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList';
import Card from './components/Card';

class App extends Component{
  constructor(props) {
    super(props);

    const img0 = require('./static/cover_card.png');
    const img1 = require('./static/edwards.png');
    const img2 = require('./static/gay.png');
    const img3 = require('./static/niang.png')
    const img4 = require('./static/sneed.png')
    const img5 = require('./static/danna.png')
    const img6 = require('./static/keyes.png')

    this.state = {
      players: [
        {
          id: 1,
          name: 'Clyde Edwards-Helaire 25',
          active: false,
        },
        {
          id: 2,
          name: 'Willie Gay Jr. 50',
          active: false,
        },
        {
          id:3,
          name: 'Lucas Niang 67',
          active: false,
        },
        {
          id:4,
          name: "L'Jarius Sneed 38",
          active: false,
        },
        {
          id: 5,
          name: 'Mike Danna 51',
          active: false,
        },
        {
          id:6,
          name: 'BoPete Keyes 29',
          active: false,
        }
      ],
        index: 0,
        imgList: [img0, img1, img2, img3, img4, img5, img6],
        active: [null, false, false, false, false, false, false]
    }
  }

  //Toggle color to show that the button is selected
  updatePlayer = (id) =>{
    this.setState({players: this.state.players.map(player => {
      if(player.id === id) {
        player.active = !player.active;
    }
      return player;
    }) }); 
    this.setState({
      index: id
    });
  }
  
  render() {
    return (
      <div style={cardApp}>
        <div className="row">
          <div className="column">
            <Card counter={this.state.index} pics={this.state.imgList}/>
          </div>
          <div className="column 2">
            <div style={listWrapperStyle}>
              <h2>2020 Kansas City Chiefs Draft Picks</h2>
              <div style={listStyle}>
               <PlayersList players={this.state.players} updatePlayer={this.updatePlayer}/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }

const cardApp = {
  background: 'grey',
}


const listWrapperStyle = {
  background: '#FFB81C',
  textAlign: 'center',
  borderRadius: '10px',
  marginTop: '25px',
}


const listStyle = {
  background: 'white',
  paddingBottom: '7.5px',
  marginBottom: '30px',
}

export default App
