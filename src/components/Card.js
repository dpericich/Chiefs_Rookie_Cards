import React, {Component} from 'react'

export class Card extends Component{
    render() {
    return (
        <div style={cardStyle}>
            <img src={this.props.imgSrc} alt="chiefs" />
        </div>
    )
}
}

const cardStyle = {
    textAlign: 'center',
}

export default Card