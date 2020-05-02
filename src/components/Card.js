import React from 'react'

function Card(props){
    return (
        <div style={cardStyle}>
            <img src={props.card} alt="chiefs" />
        </div>
    )
}

const cardStyle = {
    height: "100%",
    textAlign: "center",
    paddingTop: "5%",
}

export default Card
