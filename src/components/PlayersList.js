import React, {Component} from 'react'
import Player from './Player'

class PlayersList extends Component {
    render() {
            return this.props.players.map((player) => (
                <Player key={player.id} player={player} active={player.id === this.props.activePlayerID}
                activatePlayer={this.props.activatePlayer}/>
            ));
    }
}


export default PlayersList