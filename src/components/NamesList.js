import React from 'react'
import Names from './Names'

export default function PlayersList() {
    return (
        <div style={listBackground}>
                <h1>KC Chiefs <br />2020 Draft Picks</h1>
                <br />
                <ul style={fullList}>
                    <Names number='25' name="Clyde Edwards-Helaire" />
                    <Names number='50' name="Willie Gay" />
                    <Names number='67' name="Lucas Niang" />
                    <Names number='38' name="L'Jarius Sneed" />
                    <Names number='51' name="Mike Danna" />
                    <Names number='29' name="BoPete Keyes" />
                </ul>
        </div>
    )
}

const listBackground= {
    background:"gold",
    textAlign: 'center',
    height: '100%',
    borderRadius: "15px",
    paddingBottom: "10px",
}

const fullList = {
    listStyle: "none",
    border: "5px solid black",
    padding: "5px",
    height: "auto",
    background: "white",
}
