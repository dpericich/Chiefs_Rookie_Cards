import React, {Component} from 'react'
import Players from './Players'

class PlayersList extends Component {
    render() {
            return this.props.players.map((player) => (
                <Players player={player} updatePlayer={this.props.updatePlayer}/>
            ));
    }
}


export default PlayersList