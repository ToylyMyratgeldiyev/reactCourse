import React from "react";

class App extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    timer:0,
    pause:false,
  }
 }


 componentDidUpdate(){
  localStorage.setItem('timer', this.state.timer)
 }

 componentDidMount(){
  let userCount = localStorage.getItem('timer')
  if(userCount){
    this.setState({timer: +userCount})
  }
 }

 handlerStart = () => {
  this.setState({pause:true})
  this.countredId = setInterval(()=>{
    this.setState({timer : this.state.timer + 1})
  },1000)
  console.log(this.state.pause);
 }

 handlerStop = () =>{
  this.setState({pause:false})
  clearInterval(this.countredId)
 }

 handlerReset = () =>{
  this.setState({pause:false})
  this.setState({timer: 0})
  clearInterval(this.countredId)
 }

 render(){
  return(
    <div>
      <h1>React Timer</h1>
      <h4>{this.state.timer}</h4>
      {!this.state.pause ? (
        <button onClick={this.handlerStart}>Start</button>
      ) : (
        <button onClick={this.handlerStop}>Stop</button>
      )}

      <button onClick={this.handlerReset}>Reset</button>
    </div>
  )
 }

}

export default App;
 