import React, {Component} from 'react'

export class  Player extends Component {
    buttonStyle = () => {
        return{
            backgroundColor: this.props.active ? 'black': '#E31837',
            color: this.props.active ? 'white' : 'black',
            border: "1px solid black",
            textAlign: "center",
            width: "100%",
            fontSize: '20px',
            marginTop: '7.5px',

        }
    }

    render() {
        const {name, id} = this.props.player;
        return (
            <button style={this.buttonStyle()} onClick={this.props.activatePlayer.bind(this, id)}
            >
            {name}
            </button>
        )
    }
}


export default Player

