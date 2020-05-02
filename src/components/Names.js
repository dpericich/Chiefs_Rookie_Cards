import React from 'react'

export function Players(props) {
    return (
       <li style={itemStyle}>
           <button style={buttonStyle} onClick="">
           {props.number + ' ' + props.name}
           </button>
       </li>
    )
}

const itemStyle = {
    padding: "5px",
}


const buttonStyle = {
    backgroundColor: 'red',
    border: "1px solid black",
    textAlign: "center",
    width: "100%",
    fontSize: '20px',
    margin: "5px",
    textAlign: "center",

}

export default Players

