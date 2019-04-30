


function changeColor(color){
    var arr = ["red", "green", "blue", "orange", "pink", "yellow", "purple"]
    var random = Math.floor(Math.random()*arr.length)
    if(arr.includes(color)){
        return arr[random]
    }else{
        return "grey"
    }
}

// class LightBulb extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             random: "grey"
//         }
//     }
// toggeler = () => {
//     let {random} = this.state;
//     let bulbchange = random === "grey" ? "white" : "grey"
//     this.setState({bulbcolor: bulbchange})
// }
console.log(changeColor("red"));
console.log(changeColor("grey"));
