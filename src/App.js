import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList';
import Card from './components/Card';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      players: [
        {
          id: 1,
          name: 'Clyde Edwards-Helaire 25',
          img: require('./static/edwards.png'), 
        },
        {
          id: 2,
          name: 'Willie Gay Jr. 50',
          img: require('./static/gay.png'),
        },
        {
          id:3,
          name: 'Lucas Niang 67',
          img: require('./static/niang.png'),
        },
        {
          id:4,
          name: "L'Jarius Sneed 38",
          img: require('./static/sneed.png')
        },
        {
          id: 5,
          name: 'Mike Danna 51',
          img: require('./static/danna.png'),
        },
        {
          id:6,
          name: 'BoPete Keyes 29',
          img: require('./static/keyes.png')
        }
      ],
      activePlayerID: null
    }
  }

  //Store the selected player's id
  activatePlayer(id) {
    this.setState({
      activePlayerID: id
    });    
  }

  getActivePlayer() {
    return this.state.players.filter(p => p.id===this.state.activePlayerID)[0]
  }
  
  render() {
    const activePlayer = this.getActivePlayer()
    const cardImgSrc = activePlayer?.img || require('./static/cover_card.png')
    return (
      <div style={cardApp}>
        <div className="row">
          <div className="column">
            <Card  imgSrc={cardImgSrc}/>
          </div>
          <div className="column 2">
            <div style={listWrapperStyle}>
              <h2>2020 Kansas City Chiefs Draft Picks</h2>
              <div style={listStyle}>
               <PlayersList players={this.state.players} activePlayerID={this.state.activePlayerID}
               activatePlayer={this.activatePlayer.bind(this)}/> 
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
}


const listStyle = {
  background: 'white',
  paddingBottom: '7.5px',
  marginBottom: '30px',
}

export default App
