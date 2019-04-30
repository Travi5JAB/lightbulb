import React, { Component } from 'react';


class LightBulb extends Component{
    constructor(props){
        super(props)
        this.state = {
            light: "OFF",
            backcolor: "#0000b3",
            bulbcolor: "#808080b0",
            textcolor: "white",
            imagechange: "url('light-off.jpg')",
            bodycolor: "#0000b3"

        }
    }
    toggeler = () => {
        let arr = ["red", "green", "blue", "orange", "#ff00ff", "yellow", "purple", "black"]
        let random = Math.floor(Math.random()*arr.length)
        let { light, backcolor, bulbcolor, textcolor, imagechange, bodycolor} = this.state
        let newlight = light === "OFF" ? "ON" : "OFF";
        let lightlabel = backcolor === "#0000b3" ? arr[random] :"#0000b3";
        let bulbchange = bulbcolor === "#808080b0" ? arr[random] : "#808080b0"
        let changetext = textcolor === "black" ? "white" : "black"
        let changeimg = imagechange === "url('light-off.jpg')" ? "url('light-on.jpg')" : "url('light-off.jpg')"
        let bodylight = bodycolor === "#0000b3" ? "yellow" :"#0000b3";
        this.setState({light: newlight})
        this.setState({backcolor: lightlabel})
        this.setState({bulbcolor: bulbchange})
        this.setState({textcolor: changetext})
        this.setState({imagechange: changeimg})
        this.setState({bodycolor: bodylight})

    }
    render() {
        let { light, backcolor, bulbcolor, textcolor, imagechange, bodycolor } = this.state
        return(
        <div id="buffer">
            <div style = {{backgroundColor: bodycolor}}>
                <h3 style = {{color: textcolor}}>Light: { light }</h3>
                <button style = {{backgroundImage: imagechange}} id = "button" onClick = {this.toggeler}></button>
            </div>
            <div id="backUp" style = {{backgroundColor: bodycolor}}>
                <div id="bulbandglow">
                        <div id = "outerglow" style = {{backgroundColor: backcolor}}></div>
                        <div class = "inner" id= "divCont" style = {{backgroundColor: backcolor}}></div>

                        <div id= "wholebulb">
                            <div class = "inner" id="lightbulbdiv" style = {{backgroundColor: bulbcolor}}></div>
                            <div class = "inner" id= "lightbulbbase"></div>
                        </div>


                </div>
            </div>
        </div>
        )
    }
}

export default LightBulb
