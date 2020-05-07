import React, {Component} from 'react'

export class  Players extends Component {
    buttonStyle = () => {
        return{
            backgroundColor: this.props.player.active ? 'black': '#E31837',
            color: this.props.player.active ? 'white' : 'black',
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
            <button style={this.buttonStyle()} onClick={this.props.updatePlayer.bind(this, id)}
            >
            {name}
            </button>
        )
    }
}


export default Players

