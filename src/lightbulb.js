import React, { Component } from 'react';

class LightBulb extends Component{
    constructor(props){
        super(props)
        this.state = {
            light: "OFF",
            turn: "ON",
        }
    }
    toggeler = () => {
        let { light, turn } = this.state
        let newlight = light === "OFF" ? "ON" : "OFF";
        let lightlabel = turn === "OFF" ? "ON" :"OFF";
        this.setState({light: newlight})
        this.setState({turn: lightlabel})
        if(newlight === "ON"){
            document.body.style.backgroundColor = "yellow";
            document.body.style.color = "Black";
            document.getElementById("lightbulbdiv").style.backgroundColor="white";
            document.getElementById("button").style.backgroundImage = "url('light-on.jpg')";

        }else{
            document.body.style.backgroundColor = "#0000b3";
            document.body.style.color = "White";
            document.getElementById("lightbulbdiv").style.backgroundColor="grey";
            document.getElementById("button").style.backgroundImage = "url('light-off.jpg')";
        }
    }
    render() {
        let { light, turn } = this.state
        return(
        <div>
            <h3>Light: {light}</h3>
            <button id = "button" onClick = {this.toggeler}></button>
            <div id="lightbulbdiv"></div>
            <div id= "lightbulbbase"></div>
            <div id= "lightswitch"></div>
            <div id= "buffer"></div>
        </div>
        // <a href="light-off.jpg"><img id= "imgOn" src= "light-on.jpg" ></img></a>
        // <a href="light-on.jpg"><img id = "imgOff" src= "light-off.jpg"></img></a>
        )
    }
}

export default LightBulb
